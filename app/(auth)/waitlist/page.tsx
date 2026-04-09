"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast } from "sonner";
import { formatNigerianPhone } from "@/lib/formatPhone";

export default function WaitlistPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    isExistingCustomer: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleJoin = async () => {
    const { email, phone, isExistingCustomer } = form;

    // ✅ Phone required
    if (!phone) {
      toast.error("Phone number is required");
      return;
    }

    // ✅ Email optional
    if (email && !email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    const formattedPhone = formatNigerianPhone(phone);

    try {
      setLoading(true);

      await addDoc(collection(db, "waitlist"), {
        email: email || null,
        phone: formattedPhone,
        isExistingCustomer,
        segment: isExistingCustomer ? "existing" : "new",
        createdAt: serverTimestamp(),
      });

      toast.success("You're on the waitlist! 🎉");

      setForm({
        email: "",
        phone: "",
        isExistingCustomer: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl w-full text-center text-[#063c71]">
        <h1 className="text-3xl sm:text-4xl font-bold">
          We Started on WhatsApp. Now We’re Leveling Up 🚀
        </h1>

        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          You’ve trusted us on WhatsApp — now we’re building something bigger.
          Join the waitlist to get early access to our website, exclusive drops,
          and limited gear before anyone else.
        </p>

        <p className="mt-3 text-gray-600 text-xs sm:text-sm">
          Get notified instantly via SMS when we launch and when new drops go
          live.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <div className="text-left">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-5 py-3 rounded-md text-gray-900 text-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71]"
            />
            <p className="text-xs text-gray-500 mt-1">
              We’ll only send important updates. No spam.
            </p>
          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-md text-gray-900 text-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71]"
          />

          <div className="flex items-start gap-3 text-left">
            <input
              type="checkbox"
              name="isExistingCustomer"
              checked={form.isExistingCustomer}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-[#063c71] border-gray-300 rounded focus:ring-[#063c71]"
            />
            <p className="text-xs sm:text-sm">
              Have you ever bought from SAINT'S SPORTX STORE on WhatsApp before?
            </p>
          </div>

          <button
            onClick={handleJoin}
            disabled={loading}
            className="bg-[#063c71] text-white font-medium px-6 py-3 text-sm rounded-md hover:bg-[#042a50] transition disabled:opacity-50"
          >
            {loading ? "Joining..." : "Get Early Access"}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          No spam. Just early access, exclusive drops, and important updates.
        </p>
      </div>
    </section>
  );
}
