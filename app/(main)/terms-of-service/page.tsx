export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="sm:text-3xl text-2xl font-bold text-[#063c71]">
          Terms of Service
        </h2>

        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <p>
            Welcome to <strong>SAINT</strong>. By accessing or using our
            website, you agree to comply with and be bound by these Terms of
            Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes and not to
            engage in any activity that may harm our brand or users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Products & Orders</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All products are subject to availability</li>
            <li>We reserve the right to refuse or cancel orders</li>
            <li>Prices may change without notice</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Payments</h2>
          <p>
            Payments are processed securely through third-party providers. We do
            not store your card details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Shipping & Delivery</h2>
          <p>
            Delivery timelines are estimates and may vary depending on your
            location and external factors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Returns & Refunds</h2>
          <p>
            We may accept returns under certain conditions. Please review our
            return policy or contact support for assistance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
          <p>
            All content on this website (logos, images, designs) belongs to
            SAINT and may not be used without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
          <p>
            SAINT is not liable for any indirect or incidental damages arising
            from the use of our website or products.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the site
            means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p>
            For any questions, contact:
            <br />
            <span className="font-medium">support@saint.com</span>
          </p>
        </section>
      </div>
    </main>
  );
}
