"use client";

import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CheckoutForm() {
  const { register, watch } = useForm();
  const [saveInfo, setSaveInfo] = useState(true);
  const setFormData = useCheckoutStore((s) => s.setFormData);

  const values = watch();

  // Sync form → Zustand
  useEffect(() => {
    setFormData(values);
  }, [values]);

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
            {...register("name")}
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded-md mt-1"
            required
          />
        </div>
        <div>
          <label className="text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            placeholder="Phone"
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
            {...register("email")}
            placeholder="Email"
            required
            type="email"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("address")}
            placeholder="Street Address"
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Town/City <span className="text-red-500">*</span>
          </label>
          <input
            {...register("city")}
            placeholder="City"
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
            {...register("state")}
            placeholder="State"
            required
            type="text"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        {/* <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            {...register("saveInfo")}
            checked={saveInfo}
            onChange={() => setSaveInfo(!saveInfo)}
            className="accent-[#063c71]"
          />

          <p className="text-sm text-gray-600">
            Save this information for faster check-out next time
          </p>
        </div>*/}
      </form>
    </div>
  );
}
