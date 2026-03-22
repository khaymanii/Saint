"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // simple validation
    if (!email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "newsletter"), {
        email,
        createdAt: serverTimestamp(),
      });

      toast.success("Welcome to the squad!");

      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center text-[#063c71]">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">
          Stay Relentless
        </h2>

        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Get exclusive drops, new gear alerts, and updates delivered straight
          to your inbox.
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-md text-gray-900 text-xs border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71]"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-[#063c71] text-white font-medium px-4 py-2 text-xs rounded-md hover:bg-[#042a50] transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Joining..." : "Join the Squad"}
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-4">
          No spam. Just relentless updates.
        </p>
      </div>
    </section>
  );
}
