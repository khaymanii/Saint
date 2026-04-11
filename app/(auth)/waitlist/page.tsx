"use client";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast } from "sonner";
import { formatNigerianPhone } from "@/lib/formatPhone";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const images = [
  "/images/football2.jpg",
  "/catalogue/Sakura1.jpeg",
  "/images/basketball1.jpg",
  "/images/boot.jpg",
  "/images/boxing2.jpg",
];

export default function WaitlistPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    isExistingCustomer: null as boolean | null,
  });

  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleJoin = async () => {
    const { email, phone, isExistingCustomer } = form;

    if (!phone) {
      toast.error("Phone number is required");
      return;
    }

    if (email && !email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    if (isExistingCustomer === null) {
      toast.error("Please select Yes or No");
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

      toast.success("Access unlocked soon 🔥");

      setForm({
        email: "",
        phone: "",
        isExistingCustomer: null,
      });
    } catch (error) {
      toast.error("Something went wrong, Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    toast.message("Join the waitlist to unlock access 🔒", {
      description: "Complete the form below to continue.",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-10">
      <div className="max-w-md w-full">
        {/* HEADER */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#063c71]">
          Unlock early access to SAINT
        </h1>

        <p className="text-center text-sm text-gray-600 mt-2">
          You’re previewing upcoming gears
        </p>

        {/* SHOP CARD STYLE PRODUCT (ONLY ONE) */}
        <div className="mt-6 border rounded-xl overflow-hidden shadow-sm bg-white">
          <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="product"
                fill
                className={`
        object-cover absolute transition-opacity duration-700
        ${index === currentImage ? "opacity-100" : "opacity-0"}
      `}
              />
            ))}

            {/* WISHLIST ICON (inactive for now) */}
            <button
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
              onClick={handleClick}
            >
              <Heart size={18} className="text-[#063c71]" />
            </button>
          </div>

          {/* PRODUCT INFO */}
          <div className="p-3 flex flex-col gap-2">
            <div>
              <p className="text-sm font-bold text text-[#063c71]">SAINT</p>
              <p className="text-xs text-gray-500">
                Sportswear and gears for the relentless
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <button
                onClick={handleClick}
                className="bg-[#063c71] text-white text-xs px-3 py-1.5 rounded-full"
              >
                ₦ Unlock price{" "}
              </button>
              <button
                className="flex items-center gap-1 bg-[#063c71] text-white p-2 rounded-full"
                onClick={handleClick}
              >
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#063c71]"
          />

          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#063c71]"
          />

          <div>
            <p className="text-sm mb-2 font-semibold">
              Have you ever bought from SAINT's Store on WhatsApp?
            </p>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={form.isExistingCustomer === true}
                  onChange={() =>
                    setForm({ ...form, isExistingCustomer: true })
                  }
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={form.isExistingCustomer === false}
                  onChange={() =>
                    setForm({ ...form, isExistingCustomer: false })
                  }
                />
                No
              </label>
            </div>
          </div>

          <button
            onClick={handleJoin}
            disabled={loading}
            className="bg-[#063c71] text-white py-3 rounded-md hover:bg-[#042a50] transition disabled:opacity-50"
          >
            {loading ? "Unlocking..." : "Get Early Access"}
          </button>
        </div>

        <div className="flex justify-center gap-5 mt-6">
          <Link
            href="https://www.linkedin.com/company/saint-sportx"
            target="_blank"
          >
            <FaLinkedin className="h-5 w-5 text-gray-600 hover:text-[#063c71]" />
          </Link>

          <Link href="https://x.com/@saint_sportx" target="_blank">
            <FaXTwitter className="h-5 w-5 text-gray-600 hover:text-[#063c71]" />
          </Link>

          <Link href="https://instagram.com/saint_sportx" target="_blank">
            <FaInstagram className="h-5 w-5 text-gray-600 hover:text-[#063c71]" />
          </Link>

          <Link href="https://www.tiktok.com/@saint_sportx" target="_blank">
            <FaTiktok className="h-5 w-5 text-gray-600 hover:text-[#063c71]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
