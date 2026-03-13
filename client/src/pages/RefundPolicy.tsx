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

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 border-b border-white/10 pb-6">
              Refund Policy
            </h1>
            <div className="prose prose-invert prose-blue max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p className="text-xs text-muted-foreground/70">Last updated: {LAST_UPDATED}</p>

              <H2>1. Our Commitment</H2>
              <p>
                At <strong className="text-white">{BRAND_NAME}</strong>, we are committed to
                delivering a high-quality WhatsApp-based booking automation platform for transport operators. If you
                are not satisfied with the platform, we offer a{" "}
                <strong className="text-white">30-day money-back guarantee</strong> on your initial subscription
                purchase, with no questions asked.
              </p>
              <p>
                This Refund Policy applies to SaaS subscription fees only. It does not apply to passenger tickets
                or transport fares—those are managed directly by the operator. Please read our{" "}
                <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link> for
                the broader contractual framework.
              </p>

              <H2>2. Refund Eligibility</H2>
              <p>You are eligible for a full refund if <em>all</em> of the following conditions are met:</p>
              <UL>
                <li>Your refund request is submitted within <strong className="text-white">30 calendar days</strong> of the initial subscription purchase date.</li>
                <li>The request is made by the registered account holder using the email address associated with the account.</li>
                <li>Your account has not been suspended or terminated due to a violation of our Terms of Service or Meta's WhatsApp Business Platform policies.</li>
                <li>This is your first refund request — the 30-day guarantee applies once per business entity.</li>
              </UL>

              <H2>3. Subscription Cancellation</H2>
              <UL>
                <li>You may cancel your subscription at any time via your account dashboard or by contacting support.</li>
                <li>Cancellation stops future billing. Your access continues until the end of the current paid billing period.</li>
                <li><strong className="text-white">Cancellations do not automatically trigger a refund</strong> unless the cancellation is made within the 30-day eligibility window and a refund is explicitly requested.</li>
                <li>Annual plans cancelled after the 30-day window are not eligible for a pro-rated refund for unused months.</li>
              </UL>

              <H2>4. Non-Refundable Cases</H2>
              <p>The following are explicitly excluded from this Refund Policy:</p>
              <UL>
                <li>Subscription renewals (monthly or annual) beyond the initial purchase</li>
                <li>Add-on services, custom integrations, or professional services purchased separately</li>
                <li>Accounts terminated due to violations of our Terms of Service or Meta's policies</li>
                <li>Platform fees already applied toward WhatsApp API usage charges billed by Meta</li>
                <li>Refund requests submitted after the 30-day eligibility window</li>
                <li>Cases where a chargeback has already been initiated through the payment provider</li>
              </UL>

              <H2>5. How to Request a Refund</H2>
              <p>To initiate a refund request, contact us through any of the following:</p>
              <UL>
                <li>
                  Email:{" "}
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
                  {" "}(preferred — include your registered email, business name, and invoice number)
                </li>
                <li>
                  Phone:{" "}
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline">{PHONE}</a>
                  {" "}(Mon–Fri, 10:00 AM – 6:00 PM IST)
                </li>
              </UL>
              <p>Please include the following in your request:</p>
              <UL>
                <li>Registered account email address</li>
                <li>Business name on the account</li>
                <li>Invoice or order reference number</li>
                <li>Reason for requesting a refund (optional but appreciated)</li>
              </UL>

              <H2>6. Refund Processing Timeline</H2>
              <UL>
                <li>We will acknowledge your request within <strong className="text-white">1 business day</strong>.</li>
                <li>Approved refunds are processed within <strong className="text-white">5–7 business days</strong> of approval.</li>
                <li>Refunds are credited to the original payment method used at purchase.</li>
                <li>Depending on your bank or payment provider, the amount may take an additional <strong className="text-white">5–10 business days</strong> to appear in your account. We are not responsible for delays by third-party payment processors.</li>
              </UL>

              <H2>7. Disputes &amp; Chargebacks</H2>
              <p>
                We strongly encourage you to contact us before initiating a chargeback with your bank or payment
                provider. Filing a chargeback without first contacting us may result in the immediate suspension of
                your account and could affect your eligibility for future services. We are committed to resolving
                any payment concern promptly and fairly.
              </p>

              <H2>8. Related Policies</H2>
              <UL>
                <li><Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
              </UL>

              <H2>9. Contact</H2>
              <p>For any questions about this Refund Policy:</p>
              <ContactBlock />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
