import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "June 13, 2025";
const BUSINESS_NAME = "SaaS by SSH";
const BRAND_NAME = "SaaS by SSH";
const EMAIL = "support@saasbyssh.com";
const PHONE = "+91 8670582856";
const ADDRESS = "Kotbarh, Uttar Kotbarh, East Medinipur, West Bengal – 721626, India";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-white mt-10 mb-3">{children}</h2>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-1.5">{children}</ul>;
}
function ContactBlock() {
  return (
    <address className="not-italic space-y-1 mt-3 text-sm">
      <p className="font-semibold text-white">{BUSINESS_NAME}</p>
      <p>{ADDRESS}</p>
      <p>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></p>
      <p>Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline">{PHONE}</a></p>
    </address>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 border-b border-white/10 pb-6">
              Terms of Service
            </h1>
            <div className="prose prose-invert prose-blue max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p className="text-xs text-muted-foreground/70">Last updated: {LAST_UPDATED}</p>

              <H2>1. Agreement to Terms</H2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Operator",
                "you", or "your") and <strong className="text-white">{BRAND_NAME}</strong> ("Company", "we", "us", or "our"), governing
                your access to and use of the SaaS by SSH platform and related services.
              </p>
              <p>
                By registering an account, subscribing to a plan, or using any part of the platform, you confirm that
                you have read, understood, and agree to be bound by these Terms and our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. If you
                do not agree, you must not use the platform.
              </p>

              <H2>2. Nature of Service</H2>
              <p>
                {BRAND_NAME} is a <strong className="text-white">Software-as-a-Service (SaaS) platform</strong> that
                provides WhatsApp automation, booking workflow management, and passenger notification tools to
                transport operators. Specifically:
              </p>
              <UL>
                <li>We provide software infrastructure and automation tools — we are not a transport operator, ticket reseller, or travel agent.</li>
                <li>We do not own, operate, manage, or take responsibility for any bus service, route, fare, or vehicle.</li>
                <li>All transport services offered through our platform are solely operated by the subscribing Operator.</li>
                <li>Passengers transacting through your WhatsApp number are contracting with you, the Operator, not with {BRAND_NAME}.</li>
              </UL>

              <H2>3. Operator Eligibility &amp; Account</H2>
              <UL>
                <li>You must be a legally registered business or individual with the authority to enter into binding contracts.</li>
                <li>You must provide accurate, complete, and up-to-date registration information.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must notify us immediately at <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> of any unauthorised use of your account.</li>
                <li>One legal entity may not maintain multiple accounts without prior written consent.</li>
              </UL>

              <H2>4. Operator Responsibilities &amp; Lawful Use</H2>
              <p>By using the platform, you agree that you will:</p>
              <UL>
                <li>Obtain valid, documented consent from all passengers before sending them any WhatsApp messages via our platform.</li>
                <li>Comply fully with Meta's WhatsApp Business Platform policies, including prohibited content and messaging restrictions.</li>
                <li>Not use the platform to send spam, unsolicited bulk messages, or messages that violate any applicable law.</li>
                <li>Not use the platform for any unlawful, fraudulent, defamatory, or abusive purpose.</li>
                <li>Ensure your WhatsApp Business Account (WABA) remains in good standing with Meta at all times.</li>
                <li>Not attempt to reverse-engineer, decompile, or extract the source code of any part of our platform.</li>
                <li>Not resell, sublicense, or provide the platform as a service to third parties without our written consent.</li>
              </UL>

              <H2>5. Service Availability &amp; Support</H2>
              <p>
                We target a high level of platform availability but do not guarantee uninterrupted, error-free service.
                Scheduled maintenance windows will be communicated with reasonable advance notice. We shall not be
                liable for service interruptions caused by:
              </p>
              <UL>
                <li>Meta / WhatsApp API outages or policy changes</li>
                <li>Third-party infrastructure or payment gateway downtime</li>
                <li>Force majeure events (natural disasters, government actions, etc.)</li>
                <li>Your own network or device issues</li>
              </UL>

              <H2>6. Payment &amp; Subscription Terms</H2>
              <UL>
                <li>Subscriptions are billed on the cycle agreed at the time of purchase (monthly or annually).</li>
                <li>All fees are exclusive of applicable taxes (e.g., GST), which will be added at checkout where required.</li>
                <li>Payments are processed by our payment gateway partner. We do not store card or UPI credentials.</li>
                <li>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.</li>
                <li>Failure to pay will result in suspension of service after a 7-day grace period and termination after 30 days of non-payment.</li>
                <li>Price changes will be communicated with at least 30 days' notice before affecting active subscriptions.</li>
              </UL>
              <p>
                Please refer to our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> for
                details on refunds and cancellations.
              </p>

              <H2>7. Intellectual Property</H2>
              <p>
                All software, designs, algorithms, trademarks, logos, and content comprising the {BRAND_NAME} platform
                are the exclusive intellectual property of {BUSINESS_NAME} and are protected under applicable
                intellectual property laws.
              </p>
              <UL>
                <li>We grant you a limited, non-exclusive, non-transferable licence to access and use the platform solely for your internal business operations during your subscription term.</li>
                <li>Your data (booking records, business information) remains your property. We claim no ownership over it.</li>
                <li>You grant us a limited licence to process your data solely to deliver the services described herein.</li>
              </UL>

              <H2>8. Limitation of Liability</H2>
              <p>
                To the maximum extent permitted by applicable law:
              </p>
              <UL>
                <li>{BUSINESS_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of revenue, loss of data, or business interruption.</li>
                <li>Our total cumulative liability to you for any claim arising under these Terms shall not exceed the total subscription fees paid by you in the 3 months immediately preceding the claim.</li>
                <li>We are not liable for any delays, failures, or losses arising from Meta/WhatsApp API disruptions, payment gateway failures, or third-party service outages.</li>
              </UL>

              <H2>9. Indemnification</H2>
              <p>
                You agree to indemnify, defend, and hold harmless {BUSINESS_NAME} and its officers, employees, and
                partners from and against any claims, losses, damages, liabilities, and expenses (including reasonable
                legal fees) arising from: (a) your use of the platform in violation of these Terms; (b) your violation
                of any third-party right, including intellectual property or privacy rights; or (c) any claim by a
                passenger arising from your transport services or your messaging practices.
              </p>

              <H2>10. Termination</H2>
              <UL>
                <li>You may cancel your subscription at any time through your account dashboard or by contacting support.</li>
                <li>We may suspend or terminate your account immediately and without notice if you breach these Terms, violate Meta's policies, engage in fraudulent activity, or fail to make payment.</li>
                <li>Upon termination, your access to the platform will cease. We will retain your data for 90 days, after which it will be permanently deleted unless required by law.</li>
                <li>Provisions relating to intellectual property, limitation of liability, indemnification, and governing law survive termination.</li>
              </UL>

              <H2>11. Amendments</H2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be notified via email
                to your registered address at least 15 days before taking effect. Continued use of the platform after
                the effective date constitutes acceptance of the revised Terms.
              </p>

              <H2>12. Governing Law &amp; Dispute Resolution</H2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any dispute arising
                out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the
                competent courts located in West Bengal, India. Before initiating legal proceedings, both parties
                agree to attempt good-faith resolution through direct negotiation for at least 30 days.
              </p>

              <H2>13. Related Policies</H2>
              <UL>
                <li><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link></li>
              </UL>

              <H2>14. Contact</H2>
              <p>For any queries regarding these Terms of Service:</p>
              <ContactBlock />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
