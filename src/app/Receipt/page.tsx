"use client";

import React from "react";

export default function ReceiptPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-3xl w-full border border-gray-300 text-black">
        
        {/* Header */}
        <div className="text-center border-b pb-4 mb-4">
          <div className="flex justify-center mb-2">
            <img
              src="/school-logo.png"
              alt="School Logo"
              className="h-14"
            />
          </div>
          <h1 className="text-2xl font-bold">DISNEY WORLD PUBLIC SCHOOL</h1>
          <p className="text-sm">
            Gali No-11, Subhash Colony, Ballabgarh, Faridabad 121004
          </p>
          <p className="text-sm">
            Email: dwpsballabgarh@gmail.com | Phone: 9899638676
          </p>
          <h2 className="text-lg font-semibold mt-2 underline">Receipt</h2>
        </div>

        {/* Session */}
        <div className="text-center mb-4">
          <h3 className="font-bold text-lg">Session 2025-26</h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div>
            <p><span className="font-semibold">Form No:</span> 1036</p>
            <p><span className="font-semibold">Wards Name:</span> Vansh</p>
            <p><span className="font-semibold">Class:</span> L.K.G</p>
            <p><span className="font-semibold">Mobile No:</span> 919555293372</p>
            <p><span className="font-semibold">Father Name:</span> Umesh Chand</p>
            <p><span className="font-semibold">Payment Mode:</span> Cash</p>
            <p><span className="font-semibold">Admission No:</span> 2025010</p>
          </div>
          <div>
            <p><span className="font-semibold">Month:</span> Aug</p>
            <p><span className="font-semibold">Clear Up To:</span> -</p>
            <div className="mt-6 p-2 border text-center rounded bg-gray-50">
              <p className="font-semibold">Welcome to</p>
              <p className="font-bold">DISNEY WORLD PUBLIC SCHOOL</p>
            </div>
          </div>
        </div>

        {/* Fee Table */}
        <table className="w-full text-sm border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Particulars</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Adm. Fee</td><td className="border p-2 text-right">0</td></tr>
            <tr><td className="border p-2">Tuition Fee</td><td className="border p-2 text-right">800</td></tr>
            <tr><td className="border p-2">Annual Fee</td><td className="border p-2 text-right">0</td></tr>
            <tr><td className="border p-2">Other</td><td className="border p-2 text-right">0</td></tr>
            <tr><td className="border p-2">Pendings</td><td className="border p-2 text-right">4000</td></tr>
            <tr className="font-bold"><td className="border p-2">Total</td><td className="border p-2 text-right">4800</td></tr>
            <tr><td className="border p-2">Deposited</td><td className="border p-2 text-right">150</td></tr>
            <tr><td className="border p-2">Bal. Pending</td><td className="border p-2 text-right">4650</td></tr>
            <tr><td className="border p-2">Concession</td><td className="border p-2 text-right">0</td></tr>
            <tr className="font-bold bg-gray-100">
              <td className="border p-2">Net Pending</td>
              <td className="border p-2 text-right">4650</td>
            </tr>
          </tbody>
        </table>

        {/* Footer Notes */}
        <div className="text-xs mb-6">
          * Last date for fee deposit is 12th of every month.
        </div>

        {/* Date & Time */}
        <div className="text-right text-sm font-semibold">
          Date & Time: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
}
