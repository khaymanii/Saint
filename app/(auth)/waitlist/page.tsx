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
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleJoin = async () => {
    const { email, phone } = form;

    if (!email || !phone) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    const formattedPhone = formatNigerianPhone(phone);

    try {
      setLoading(true);

      await addDoc(collection(db, "waitlist"), {
        email,
        phone: formattedPhone, // 🔥 store formatted number
        createdAt: serverTimestamp(),
      });

      toast.success("You're on the waitlist! 🎉");

      setForm({ email: "", phone: "" });
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
        <h1 className="text-3xl sm:text-4xl font-bold">Join the Waitlist 🚀</h1>

        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          Be the first to access limited drops, early releases, and members-only
          gear before anyone else.{" "}
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-5 py-3 rounded-md text-gray-900 text-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71]"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-5 py-3 rounded-md text-gray-900 text-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71]"
          />

          <button
            onClick={handleJoin}
            disabled={loading}
            className="bg-[#063c71] text-white font-medium px-6 py-3 text-sm rounded-md hover:bg-[#042a50] transition disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-4">
          No spam. Only exclusive access.
        </p>
      </div>
    </section>
  );
}
