import ProfileInput from "./ProfileInput";
import { USER } from "@/data/user";

export default function ProfileInfoForm() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileInput label="First Name" value={USER.firstName} />

        <ProfileInput label="Last Name" value={USER.lastName} />
      </div>

      <ProfileInput label="Email Address" value={USER.email} type="email" />

      <ProfileInput label="Phone Number" value={USER.phone} />

      <button className="bg-[#063c71] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
        Save Changes
      </button>
    </div>
  );
}
