"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    placeOfBirth: "",
    nationality: "Indian",
    aadhar: "",
    firstLanguage: "",
    otherLanguage: "English",
    address: "",
    city: "Faridabad",
    state: "Haryana",
    pin: "121004",
    fatherName: "",
    fatherEdu: "",
    fatherAadhar: "",
    fatherProfession: "",
    fatherMobile: "",
    motherName: "",
    motherEdu: "",
    motherAadhar: "",
    motherProfession: "",
    motherMobile: "",
    guardianName: "",
    guardianEdu: "",
    guardianAadhar: "",
    guardianMobile: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 mt-6">
      {/* Header */}
      <div className="text-center border-b pb-6 mb-6">
        <h1 className="text-2xl font-bold text-red-600">Disney World Public School</h1>
        <p className="text-gray-800">Gali no 11 Subhash Colony Ballabgarh Faridabad</p>
        <p className="text-sm text-gray-700">English Medium (Affiliated by HBSE Board)</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 text-black">
        {/* Student Personal Details */}
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Student’s Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Student’s Name</label>
              <input name="studentName" value={formData.studentName} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded w-full text-black">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Place of Birth</label>
              <input name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Aadhar Card</label>
              <input name="aadhar" value={formData.aadhar} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">First Language</label>
              <input name="firstLanguage" value={formData.firstLanguage} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Other Language Known</label>
              <input name="otherLanguage" value={formData.otherLanguage} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
          </div>
        </section>

        {/* Address */}
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Residential Address & Family Information</h2>
          <div>
            <label className="font-semibold">Full Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full text-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="font-semibold">City</label>
              <input name="city" value={formData.city} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">State</label>
              <input name="state" value={formData.state} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Pin Code</label>
              <input name="pin" value={formData.pin} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
          </div>
        </section>

        {/* Father’s Details */}
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Father’s Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Name</label>
              <input name="fatherName" value={formData.fatherName} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Education Qualification</label>
              <input name="fatherEdu" value={formData.fatherEdu} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Aadhar Card</label>
              <input name="fatherAadhar" value={formData.fatherAadhar} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Profession</label>
              <input name="fatherProfession" value={formData.fatherProfession} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Mobile No / WhatsApp</label>
              <input name="fatherMobile" value={formData.fatherMobile} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
          </div>
        </section>

        {/* Mother’s Details */}
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Mother’s Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Name</label>
              <input name="motherName" value={formData.motherName} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Education Qualification</label>
              <input name="motherEdu" value={formData.motherEdu} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Aadhar Card</label>
              <input name="motherAadhar" value={formData.motherAadhar} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Profession</label>
              <input name="motherProfession" value={formData.motherProfession} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Mobile No / WhatsApp</label>
              <input name="motherMobile" value={formData.motherMobile} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
          </div>
        </section>

        {/* Guardian’s Details */}
        <section>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Guardian’s Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Name</label>
              <input name="guardianName" value={formData.guardianName} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Education Qualification</label>
              <input name="guardianEdu" value={formData.guardianEdu} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Aadhar Card</label>
              <input name="guardianAadhar" value={formData.guardianAadhar} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
            <div>
              <label className="font-semibold">Mobile No / WhatsApp</label>
              <input name="guardianMobile" value={formData.guardianMobile} onChange={handleChange} className="border p-2 rounded w-full text-black" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t">
          <p className="font-semibold">Parent’s Sign: ___________</p>
          <p className="font-semibold">Principal’s Sign: ___________</p>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
