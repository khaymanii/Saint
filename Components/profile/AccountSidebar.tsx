export default function AccountSidebar() {
  return (
    <aside className="w-full lg:w-64 lg:border-r lg:pr-6">
      <div className="mb-6 hidden lg:block">
        <h2 className="font-semibold text-lg">Hello Jhanvi</h2>
        <p className="text-sm text-gray-500">Welcome to your account</p>
      </div>

      <nav className="flex lg:flex-col gap-2 overflow-x-auto">
        <button className="whitespace-nowrap px-3 py-2 rounded hover:bg-gray-100 text-sm">
          My orders
        </button>

        <button className="whitespace-nowrap px-3 py-2 rounded bg-gray-100 text-sm">
          Wishlist
        </button>

        <button className="whitespace-nowrap px-3 py-2 rounded hover:bg-gray-100 text-sm">
          My info
        </button>

        <button className="whitespace-nowrap px-3 py-2 rounded hover:bg-gray-100 text-sm">
          Sign out
        </button>
      </nav>
    </aside>
  );
}
