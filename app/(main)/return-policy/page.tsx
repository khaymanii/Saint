export default function ReturnsPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="sm:text-3xl text-2xl font-bold text-[#063c71]">
          Return & Refund Policy
        </h2>

        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <section className="space-y-4">
          <p>
            At <strong>SAINT</strong>, we are committed to delivering
            high-quality sportswear and gear. If you are not completely
            satisfied with your purchase, we’re here to help.
          </p>
        </section>

        {/* Returns */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Returns</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Items can be returned within <strong>7 days</strong> of delivery
            </li>
            <li>
              Products must be unused, unwashed, and in original packaging
            </li>
            <li>All tags must still be attached</li>
            <li>Proof of purchase is required</li>
          </ul>
        </section>

        {/* Non-returnable */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Non-Returnable Items</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Items that have been worn or damaged after delivery</li>
            <li>Discounted or sale items (unless defective)</li>
            <li>Custom or personalized products</li>
          </ul>
        </section>

        {/* Refunds */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Refunds</h2>
          <p>
            Once we receive and inspect your returned item, we will notify you
            of the status of your refund.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Approved refunds are processed within{" "}
              <strong>5–10 business days</strong>
            </li>
            <li>Refunds are issued via your original payment method</li>
            <li>Processing time may vary depending on your bank/provider</li>
          </ul>
        </section>

        {/* Exchanges */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need
            to exchange an item for the same product, please contact us.
          </p>
        </section>

        {/* Shipping */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Return Shipping</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Customers are responsible for return shipping costs</li>
            <li>Shipping fees are non-refundable</li>
            <li>
              We recommend using a trackable shipping service to avoid lost
              items
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions about returns or refunds, contact us at:
            <br />
            <span className="font-medium">support@saint.com</span>
          </p>
        </section>
      </div>
    </main>
  );
}
