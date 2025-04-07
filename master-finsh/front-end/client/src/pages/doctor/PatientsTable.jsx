import React, { useState, useEffect } from "react";
import { SearchIcon, Edit2Icon, Trash2Icon, EyeIcon } from "lucide-react";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingPatient, setEditingPatient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    diagnosis: "",
    treatment: "",
  });
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/patients");
      const data = await response.json();
      if (response.ok) {
        setPatients(data);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      fetchPatients();
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/api/patients/search?term=${term}`
        );
        const data = await response.json();
        if (response.ok) {
          setPatients(data);
        }
      } catch (error) {
        console.error("Error searching patients:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/patients/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setPatients(patients.filter((patient) => patient._id !== id));
          alert(data.message);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error deleting patient:", error);
        alert("An error occurred while deleting");
      }
    }
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient._id);
    setFormData({ ...patient });
    setShowDetails(null);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/patients/${editingPatient}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPatients(
          patients.map((p) => (p._id === editingPatient ? data.patient : p))
        );
        setEditingPatient(null);
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("An error occurred while saving");
    }
  };

  const handleCancel = () => {
    setEditingPatient(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowDetails = (patientId) => {
    if (showDetails === patientId) {
      setShowDetails(null);
    } else {
      setShowDetails(patientId);
      setEditingPatient(null);
    }
  };

  return (
    <div className="p-6 ml-64 min-h-screen bg-gray-100">
      {" "}
      {/* Adjusted for left sidebar */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0A4C6A]">Patients List</h1>
        <p className="text-gray-600">Manage patient records</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a patient..."
            className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients.map((patient) => (
                <React.Fragment key={patient._id}>
                  <tr>
                    {editingPatient === patient._id ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="name"
                            className="border rounded p-1 w-full"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="number"
                            name="age"
                            className="border rounded p-1 w-full"
                            value={formData.age}
                            onChange={handleChange}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            name="gender"
                            className="border rounded p-1 w-full"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="phone"
                            className="border rounded p-1 w-full"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="diagnosis"
                            className="border rounded p-1 w-full"
                            value={formData.diagnosis}
                            onChange={handleChange}
                          />
                          <textarea
                            name="treatment"
                            className="border rounded p-1 w-full mt-2"
                            value={formData.treatment || ""}
                            onChange={handleChange}
                            placeholder="Enter treatment"
                            rows="2"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                          <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-900 mr-3"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.age}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {patient.diagnosis || "Not specified"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                          <button
                            onClick={() => handleEdit(patient)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            <Edit2Icon size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(patient._id)}
                            className="text-red-600 hover:text-red-900 mr-3"
                          >
                            <Trash2Icon size={18} />
                          </button>
                          <button
                            onClick={() => handleShowDetails(patient._id)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <EyeIcon size={18} />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                  {showDetails === patient._id && (
                    <tr>
                      <td colSpan="6" className="px-6 py-4">
                        <div className="bg-gray-100 p-4 rounded-md">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Case Details
                          </h3>
                          <p>
                            <strong>Diagnosis:</strong>{" "}
                            {patient.diagnosis || "Not specified"}
                          </p>
                          <p>
                            <strong>Treatment:</strong>{" "}
                            {patient.treatment || "Not specified"}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsTable;
