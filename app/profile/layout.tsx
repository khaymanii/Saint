import AccountSidebar from "@/Components/profile/AccountSidebar";
import Breadcrumb from "@/Components/profile/Breadcrumb";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <AccountSidebar />

        {/* Page Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
