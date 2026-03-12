"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [saveInfo, setSaveInfo] = useState(true);

  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-semibold mb-8">
        Billing Details
      </h2>

      <form className="space-y-5">
        <div>
          <label className="text-sm">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Apartment, floor, etc. (optional)</label>
          <input className="w-full border px-3 py-2 rounded-md mt-1" />
        </div>

        <div>
          <label className="text-sm">
            Town/City <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            State <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={() => setSaveInfo(!saveInfo)}
            className="accent-[#063c71]"
          />

          <p className="text-sm text-gray-600">
            Save this information for faster check-out next time
          </p>
        </div>
      </form>
    </div>
  );
}
