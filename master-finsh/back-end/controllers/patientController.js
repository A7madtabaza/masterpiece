const mongoose = require("mongoose");
const Patient = require("../models/Patient");
const QRCode = require("qrcode");

exports.addPatient = async (req, res) => {
  try {
    console.log("Received data from Frontend:", req.body);
    const { name, phone, age, gender } = req.body;

    if (!name || !phone || !age || !gender) {
      return res
        .status(400)
        .json({ message: "الاسم، رقم الهاتف، العمر، والجنس مطلوبة" });
    }

    const parsedAge = Number(age);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      return res
        .status(400)
        .json({ message: "العمر يجب أن يكون رقمًا موجبًا" });
    }

    if (!["Male", "Female"].includes(gender)) {
      return res
        .status(400)
        .json({ message: "الجنس يجب أن يكون 'ذكر' أو 'أنثى'" });
    }

    const patientId = `PT-${name.substring(0, 3).toUpperCase()}-${Date.now()
      .toString()
      .substring(7)}`;
    const patientData = { ...req.body, patientId, age: parsedAge };

    const patient = new Patient(patientData);
    await patient.save();
    res.status(201).json({ message: "تم إضافة المريض بنجاح", patient });
  } catch (error) {
    console.error("Detailed error in addPatient:", error);
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "خطأ في البيانات", errors: error.errors });
    }
    if (error.code === 11000) {
      return res.status(400).json({ message: "معرف المريض مكرر" });
    }
    res.status(500).json({ message: "خطأ في الخادم", error: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "خطأ في الخادم", error });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "المريض غير موجود" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "خطأ في الخادم", error });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) return res.status(404).json({ message: "المريض غير موجود" });
    res.status(200).json({ message: "تم تحديث المريض بنجاح", patient });
  } catch (error) {
    res.status(500).json({ message: "خطأ في الخادم", error });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: "المريض غير موجود" });
    res.status(200).json({ message: "تم حذف المريض بنجاح" });
  } catch (error) {
    res.status(500).json({ message: "خطأ في الخادم", error });
  }
};

exports.searchPatients = async (req, res) => {
  try {
    const { term } = req.query;
    const patients = await Patient.find({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { phone: { $regex: term, $options: "i" } },
        { diagnosis: { $regex: term, $options: "i" } },
      ],
    });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "خطأ في الخادم", error });
  }
};

exports.generateAIDiagnosis = async (req, res) => {
  const { symptoms } = req.body;
  if (!symptoms) {
    return res.status(400).json({ message: "الرجاء إدخال الأعراض أولاً" });
  }

  const symptomsLower = symptoms.toLowerCase();
  let diagnosisSuggestion = "";

  if (
    symptomsLower.includes("صداع") ||
    symptomsLower.includes("ألم في الرأس")
  ) {
    diagnosisSuggestion =
      "قد يكون المريض يعاني من الصداع النصفي أو التوتر العصبي. يوصى بإجراء فحص أشعة للاطمئنان.";
  } else if (symptomsLower.includes("حمى") || symptomsLower.includes("سعال")) {
    diagnosisSuggestion =
      "الأعراض تشير إلى التهاب في الجهاز التنفسي، قد يكون انفلونزا أو عدوى فيروسية. يوصى بإجراء فحص دم للتأكد.";
  } else {
    diagnosisSuggestion =
      "بناءً على الأعراض المذكورة، يصعب تحديد تشخيص دقيق. يرجى إجراء فحوصات إضافية.";
  }

  res.status(200).json({ diagnosis: diagnosisSuggestion });
};

exports.generateAITreatment = async (req, res) => {
  const { diagnosis } = req.body;
  if (!diagnosis) {
    return res.status(400).json({ message: "الرجاء إدخال التشخيص أولاً" });
  }

  const diagnosisLower = diagnosis.toLowerCase();
  let treatmentSuggestion = "";

  if (diagnosisLower.includes("صداع") || diagnosisLower.includes("توتر")) {
    treatmentSuggestion =
      "يُنصح بتناول مسكنات الألم مثل الباراسيتامول، الراحة الكافية، شرب الماء بكثرة.";
  } else if (
    diagnosisLower.includes("انفلونزا") ||
    diagnosisLower.includes("فيروس")
  ) {
    treatmentSuggestion =
      "الراحة التامة، شرب السوائل بكثرة، خافض للحرارة مثل الباراسيتامول.";
  } else {
    treatmentSuggestion = "يرجى استشارة أخصائي للحصول على خطة علاجية مفصلة.";
  }

  res.status(200).json({ treatment: treatmentSuggestion });
};

exports.generateQRCode = async (req, res) => {
  try {
    const { patientId, patientData } = req.body;

    if (!patientId || !patientData) {
      return res
        .status(400)
        .json({ message: "بيانات المريض أو المعرف مفقودة" });
    }

    const qrData = JSON.stringify({
      patientId,
      ...patientData,
    });

    const qrCodeImage = await QRCode.toDataURL(qrData);
    res.status(200).json({ qrCode: qrCodeImage, patientId });
  } catch (error) {
    console.error("Error generating QR Code:", error);
    res.status(500).json({ message: "خطأ في إنشاء رمز QR", error });
  }
};
