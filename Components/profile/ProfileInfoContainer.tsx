import ProfileInfoForm from "./ProfileInfoForm";

export default function ProfileInfoContainer() {
  return (
    <div>
      <h1 className="flex gap-6 text-base font-semibold mb-2">
        My Information
      </h1>

      <ProfileInfoForm />
    </div>
  );
}
