import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 border-b border-white/10 pb-6">
              Refund Policy
            </h1>

            <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Our Guarantee</h2>
              <p>
                At SaaS by SSH, we stand behind the quality of our WhatsApp-based bus ticket booking platform.
                If you are not completely satisfied with your subscription, we offer a <strong className="text-white">30-day money-back guarantee,
                no questions asked</strong>. Simply contact us within 30 days of your initial purchase and we will process a full refund.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Eligibility</h2>
              <p>To be eligible for a refund under this policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your refund request must be submitted within 30 calendar days from the date of purchase.</li>
                <li>The request must be made by the account holder associated with the subscription.</li>
                <li>This policy applies to initial subscription purchases. Renewals are not covered unless otherwise agreed in writing.</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. How to Request a Refund</h2>
              <p>
                To initiate a refund, please contact our support team using any of the following methods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Email:{" "}
                  <a href="mailto:support@saasbyssh.com" className="text-primary hover:underline">
                    support@saasbyssh.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+918670582856" className="text-primary hover:underline">
                    +91 8670582856
                  </a>
                </li>
              </ul>
              <p>
                Please include your registered email address and order/invoice number in your request. We will confirm
                receipt within 1 business day and process the refund within 5–7 business days.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Processing</h2>
              <p>
                Approved refunds are credited to the original payment method. Depending on your bank or payment
                provider, it may take an additional 5–10 business days for the amount to reflect in your account.
                SaaS by SSH is not responsible for delays caused by third-party payment processors.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Non-Refundable Items</h2>
              <p>The following are not covered under this refund policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Add-on services or custom integrations purchased separately.</li>
                <li>Subscription renewals beyond the initial purchase period.</li>
                <li>Accounts found to be in violation of our Terms of Service.</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Contact</h2>
              <p>
                For any questions about this Refund Policy, please reach out to us at:
              </p>
              <address className="not-italic space-y-1">
                <p className="font-medium text-white">SSH Technologies</p>
                <p>Kotbarh, Uttar Kotbarh, East Medinipur</p>
                <p>West Bengal – 721626, India</p>
                <p>
                  Email:{" "}
                  <a href="mailto:support@saasbyssh.com" className="text-primary hover:underline">
                    support@saasbyssh.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+918670582856" className="text-primary hover:underline">
                    +91 8670582856
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
