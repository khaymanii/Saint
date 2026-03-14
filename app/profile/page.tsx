import Breadcrumb from "@/Components/profile/Breadcrumb";
import AccountSidebar from "@/Components/profile/AccountSidebar";
import WishlistList from "@/Components/profile/WishlistList";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row gap-8">
        <AccountSidebar />

        <div className="flex-1">
          <WishlistList />
        </div>
      </div>
    </div>
  );
}
