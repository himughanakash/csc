"use client";

import React, { useState } from "react";
import AdmissionForm from "./admissionform";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false); // state to toggle form

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {!showForm ? (
        <>
          {/* Glass Effect Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-12 max-w-3xl text-center">
            {/* School Title */}
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              Disney World Play School
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              ✨ A magical journey of learning, joy, and creativity begins here.  
              Shaping bright little stars for tomorrow.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setShowForm(true)} // show form instead of routing
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all"
              >
                🎓 Admission Form
              </button>

              <button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all"
              >
                💰 Student Fees
              </button>

              <button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all"
              >
                📊 Teacher’s Salary
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-gray-500 text-sm">
            © {new Date().getFullYear()} Disney World Play School. All Rights Reserved.
          </footer>
        </>
      ) : (
        // Show Admission Form component
        <AdmissionForm />
      )}
    </main>
  );
}
