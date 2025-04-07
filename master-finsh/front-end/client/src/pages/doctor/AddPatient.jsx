import React, { useState, useRef } from "react";
import { SaveIcon, RefreshCwIcon, DownloadIcon } from "lucide-react";

const AddPatient = () => {
  const [patientForm, setPatientForm] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    address: "",
    bloodType: "",
    allergies: "",
    chronicDiseases: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
  });

  const [aiDiagnosisLoading, setAiDiagnosisLoading] = useState(false);
  const [aiDiagnosisSuggestion, setAiDiagnosisSuggestion] = useState("");
  const [aiTreatmentLoading, setAiTreatmentLoading] = useState(false);
  const [aiTreatmentSuggestion, setAiTreatmentSuggestion] = useState("");
  const [patientId, setPatientId] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState("");
  const qrCodeRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientForm({ ...patientForm, [name]: value });
  };

  const generateAIDiagnosis = async () => {
    if (!patientForm.symptoms) {
      alert("Please enter symptoms first");
      return;
    }
    setAiDiagnosisLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/patients/ai/diagnosis",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ symptoms: patientForm.symptoms }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setAiDiagnosisSuggestion(data.diagnosis);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching the diagnosis");
    } finally {
      setAiDiagnosisLoading(false);
    }
  };

  const generateAITreatment = async () => {
    if (!patientForm.diagnosis) {
      alert("Please enter the diagnosis first");
      return;
    }
    setAiTreatmentLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/patients/ai/treatment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ diagnosis: patientForm.diagnosis }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setAiTreatmentSuggestion(data.treatment);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching the treatment");
    } finally {
      setAiTreatmentLoading(false);
    }
  };

  const generatePatientQRCode = async () => {
    if (!patientForm.name || !patientForm.phone) {
      alert("Please enter at least the patient's name and phone number");
      return;
    }
    try {
      const patientId = `${patientForm.name
        .substring(0, 3)
        .toUpperCase()}-${Date.now().toString().substring(7)}`;
      const response = await fetch("http://localhost:5000/api/patients/qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId,
          patientData: patientForm,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setPatientId(patientId);
        setQrCodeImage(data.qrCode);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while generating the QR code");
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeImage) return;
    const link = document.createElement("a");
    link.href = qrCodeImage;
    link.download = `patient-qr-${patientId}.png`;
    link.click();
  };

  const useAIDiagnosisSuggestion = () => {
    setPatientForm({ ...patientForm, diagnosis: aiDiagnosisSuggestion });
  };

  const useAITreatmentSuggestion = () => {
    setPatientForm({ ...patientForm, treatment: aiTreatmentSuggestion });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/patients/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientForm),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Patient data saved successfully!");
        setPatientForm({
          name: "",
          age: "",
          gender: "Male",
          phone: "",
          email: "",
          address: "",
          bloodType: "",
          allergies: "",
          青海省chronicDiseases: "",
          symptoms: "",
          diagnosis: "",
          treatment: "",
        });
        setAiDiagnosisSuggestion("");
        setAiTreatmentSuggestion("");
        setQrCodeImage("");
        setPatientId("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving");
    }
  };

  return (
    <div className="p-6 ml-64 min-h-screen bg-gray-100">
      {" "}
      {/* Margin-left to account for sidebar */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0A4C6A]">Add New Patient</h1>
        <p className="text-gray-600">
          Enter patient details and diagnose their condition
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-600 pl-3 text-[#0A4C6A]">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                name="name"
                value={patientForm.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={patientForm.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={patientForm.gender}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={patientForm.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={patientForm.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={patientForm.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Type
              </label>
              <select
                name="bloodType"
                value={patientForm.bloodType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Allergies
              </label>
              <textarea
                name="allergies"
                value={patientForm.allergies}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="2"
                placeholder="Enter any allergies the patient has"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chronic Diseases
              </label>
              <textarea
                name="chronicDiseases"
                value={patientForm.chronicDiseases}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="2"
                placeholder="Enter any chronic diseases the patient has"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-3 text-[#0A4C6A]">
            Medical Diagnosis
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Symptoms
              </label>
              <textarea
                name="symptoms"
                value={patientForm.symptoms}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Describe the patient's symptoms in detail"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={generateAIDiagnosis}
                className="inline-flex items-center px-4 py-2 ml-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={aiDiagnosisLoading}
              >
                {aiDiagnosisLoading ? (
                  <>
                    <RefreshCwIcon className="animate-spin -mr-1 ml-2 h-4 w-4" />
                    Analyzing...
                  </>
                ) : (
                  "Use AI for Diagnosis"
                )}
              </button>
            </div>
            {aiDiagnosisSuggestion && (
              <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">
                  AI Suggestion:
                </h3>
                <p className="text-blue-700">{aiDiagnosisSuggestion}</p>
                <button
                  type="button"
                  onClick={useAIDiagnosisSuggestion}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Use This Suggestion
                </button>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Final Diagnosis
              </label>
              <textarea
                name="diagnosis"
                value={patientForm.diagnosis}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Enter the final diagnosis"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-purple-600 pl-3 text-[#0A4C6A]">
            Prescribed Treatment
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <button
                type="button"
                onClick={generateAITreatment}
                className="inline-flex items-center px-4 py-2 ml-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={aiTreatmentLoading}
              >
                {aiTreatmentLoading ? (
                  <>
                    <RefreshCwIcon className="animate-spin -mr-1 ml-2 h-4 w-4" />
                    Analyzing...
                  </>
                ) : (
                  "Suggest Treatment Using AI"
                )}
              </button>
            </div>
            {aiTreatmentSuggestion && (
              <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Treatment Suggestion:
                </h3>
                <p className="text-purple-700">{aiTreatmentSuggestion}</p>
                <button
                  type="button"
                  onClick={useAITreatmentSuggestion}
                  className="mt-2 text-sm text-purple-600 hover:text-purple-800"
                >
                  Use This Suggestion
                </button>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Final Treatment
              </label>
              <textarea
                name="treatment"
                value={patientForm.treatment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Enter the final treatment"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-yellow-600 pl-3 text-[#0A4C6A]">
            Patient QR Code
          </h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <button
              type="button"
              onClick={generatePatientQRCode}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mb-4 md:mb-0"
            >
              Generate Patient QR Code
            </button>
            {qrCodeImage && (
              <div
                className="md:ml-8 flex flex-col items-center"
                ref={qrCodeRef}
              >
                <img
                  src={qrCodeImage}
                  alt="QR Code"
                  className="bg-white p-3 rounded-md border"
                  style={{ width: 160, height: 160 }}
                />
                <p className="mt-2 text-sm text-gray-600">
                  Patient ID: {patientId}
                </p>
                <button
                  type="button"
                  onClick={downloadQRCode}
                  className="mt-2 inline-flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <DownloadIcon className="ml-1 h-4 w-4" />
                  Download QR Code
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <SaveIcon className="mr-2 h-5 w-5" />
            Save Patient Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
