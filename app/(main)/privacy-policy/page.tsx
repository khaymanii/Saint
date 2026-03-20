export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-[#063c71]">Privacy Policy</h1>

        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <p>
            At <strong>SAINT</strong>, we respect your privacy and are committed
            to protecting your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your data when you use
            our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and contact details (email, phone number)</li>
            <li>Shipping and billing address</li>
            <li>
              Payment details (processed securely via third-party providers)
            </li>
            <li>Browsing behavior on our site</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process and deliver your orders</li>
            <li>To improve our website and user experience</li>
            <li>To communicate updates, promotions, or support</li>
            <li>To prevent fraud and enhance security</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share information with
            trusted third-party services (e.g., payment processors, delivery
            partners) strictly to fulfill your orders.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            Contact us if you would like to exercise any of these rights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
          <p>
            We may update this policy occasionally. Updates will be posted on
            this page with a revised date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions, contact us at:
            <br />
            <span className="font-medium">support@saint.com</span>
          </p>
        </section>
      </div>
    </main>
  );
}
