"use client";

import { useAuthStore } from "@/store/useAuthStore";
import ProfileInput from "./ProfileInput";
import { USER } from "@/data/user";

export default function ProfileInfoForm() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileInput
          label="Full Name"
          value={user?.displayName || USER.fullName}
        />

        <ProfileInput
          label="Email Address"
          value={user?.email || USER.email}
          type="email"
        />
      </div>

      <ProfileInput
        label="Phone Number"
        value={user?.phoneNumber || USER.phone}
      />

      <button className="bg-[#063c71] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
        Save Changes
      </button>
    </div>
  );
}
