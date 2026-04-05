"use client";

import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NaijaStates from "naija-state-local-government";

export default function CheckoutForm() {
  const { register, watch, setValue } = useForm();
  const [saveInfo, setSaveInfo] = useState(true);
  const setFormData = useCheckoutStore((s) => s.setFormData);
  const [states] = useState(NaijaStates.states());
  const [lgas, setLgas] = useState<string[]>([]);

  const selectedState = watch("state");
  const formValues = watch();

  useEffect(() => {
    setFormData(formValues);
  }, [formValues]);

  useEffect(() => {
    if (selectedState) {
      let stateLgas: string | string[] | Record<string, string> | undefined =
        NaijaStates.lgas(selectedState);

      let lgaArray: string[] = [];

      if (Array.isArray(stateLgas)) {
        lgaArray = stateLgas;
      } else if (typeof stateLgas === "string") {
        lgaArray = (stateLgas as string).match(/[A-Z][a-z]*/g) || [];
      } else if (typeof stateLgas === "object" && stateLgas !== null) {
        lgaArray = Object.values(stateLgas as Record<string, string>).flat();
      }

      lgaArray = Array.from(new Set(lgaArray));

      setLgas(lgaArray);
      setValue("city", "");
    }
  }, [selectedState, setValue]);

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
            Receiver's Name (if different from buyer)
          </label>
          <input
            {...register("receiverName")}
            placeholder="Receiver's Name (if different from buyer)"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>
        <div>
          <label className="text-sm">Receiver's Phone</label>
          <input
            {...register("receiverPhone")}
            placeholder="Receiver's Phone (optional)"
            className="w-full border px-3 py-2 rounded-md mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            State <span className="text-red-500">*</span>
          </label>

          <select
            {...register("state")}
            required
            className="w-full border px-3 py-2 rounded-md mt-1"
          >
            <option value="">Select State</option>
            {states.map((state: string) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm">
            Town/City <span className="text-red-500">*</span>
          </label>

          <select
            {...register("city")}
            className="w-full border px-3 py-2 rounded-md mt-1"
            required
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {lgas.length > 0 &&
              lgas.map((lga: string) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
          </select>
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
