"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Features } from "@/Components/layout/Features";
import { db } from "@/firebaseConfig/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "contact_messages"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-gray-500 mb-3">Home • Contact</p>

        <h1 className="text-2xl sm:text-3xl font-semibold max-w-2xl">
          We support every athlete and sports enthusiast.
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl text-sm">
          Questions about your order, products, or sizing? Our team is here to
          help.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14">
        <h2 className="text-center sm:text-3xl text-2xl text-[#063c71] font-bold mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-md text-center border">
            <MapPin className="mx-auto mb-3 text-[#063c71]" />
            <h3 className="text-sm font-semibold">LOCATION</h3>
            <p className="text-xs text-gray-600 mt-2">
              Online Store
              <br />
              Nationwide Delivery
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center border">
            <Phone className="mx-auto mb-3 text-[#063c71]" />
            <h3 className="text-sm font-semibold">PHONE</h3>
            <p className="text-xs text-gray-600 mt-2">
              +2348166588402 or +2349032894161
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center border">
            <Mail className="mx-auto mb-3 text-[#063c71]" />
            <h3 className="text-sm font-semibold">EMAIL</h3>
            <p className="text-xs text-gray-600 mt-2">support@saintstore.com</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#063c71]"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#063c71]"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="text"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#063c71]"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#063c71]"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#063c71] text-white px-6 py-3 rounded-md text-sm hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="bg-gray-100 rounded-md p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>

          <p className="text-sm text-gray-600 mb-4">
            Our team is ready to help with orders, sizing, and product
            questions.
          </p>

          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Email:</strong> support@saintstore.com
            </p>
            <p>
              <strong>Phone:</strong> +2348166588402 or +2349032894161
            </p>
            <p>
              <strong>Hours:</strong> Mon – Fri, 9am – 5pm
            </p>
          </div>
        </div>
      </section>

      <Features />
    </main>
  );
}
