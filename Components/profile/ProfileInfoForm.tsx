"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import ProfileInput from "./ProfileInput";
import { toast } from "sonner";

export default function ProfileInfoForm() {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.updateProfile);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [initialData, setInitialData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      const data = {
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
      };

      setFormData(data);
      setInitialData(data);
    }
  }, [user]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isChanged =
    formData.fullName !== initialData.fullName ||
    formData.email !== initialData.email ||
    formData.phone !== initialData.phone;

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateProfile(formData);

      setInitialData(formData); // 👈 reset change tracking

      toast.success("Profile updated successfully ✅");
    } catch (error) {
      toast.error("Failed to update profile ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileInput
          label="Full Name"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <ProfileInput
          label="Email Address"
          value={formData.email}
          type="email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <ProfileInput
        label="Phone Number"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <button
        onClick={handleSave}
        disabled={!isChanged || loading}
        className={`px-6 py-2 rounded-md text-sm transition ${
          !isChanged || loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#063c71] text-white hover:opacity-90"
        }`}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
