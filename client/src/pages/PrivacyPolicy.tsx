import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "June 13, 2025";
const BUSINESS_NAME = "SaaS by SSH";
const BRAND_NAME = "SaaS by SSH";
const EMAIL = "info@saasbyssh.store";
const PHONE = "+91 8670582856";
const ADDRESS = "Kotbarh, Uttar Kotbarh, East Medinipur, West Bengal – 721626, India";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-white mt-10 mb-3">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-white/90 mt-6 mb-2">{children}</h3>;
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 border-b border-white/10 pb-6">
              Privacy Policy
            </h1>
            <div className="prose prose-invert prose-blue max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p className="text-xs text-muted-foreground/70">Last updated: {LAST_UPDATED}</p>

              <H2>1. Introduction</H2>
              <p>
                <strong className="text-white">{BRAND_NAME}</strong> ("Company", "we", "us", or "our") operates a
                WhatsApp-based Software-as-a-Service (SaaS) platform that provides automation and booking workflow
                services to transport operators. This Privacy Policy describes how we collect, use, store, and disclose
                personal data when you use our platform, visit our website at{" "}
                <span className="text-white">saasbyssh.store</span>, or interact with us in any other way.
              </p>
              <p>
                By accessing or using our services, you acknowledge that you have read and understood this Privacy
                Policy. If you are a transport operator subscribing to our platform, this policy governs both your data
                and the end-user (passenger) data that flows through your integration.
              </p>

              <H2>2. Data We Collect</H2>

              <H3>2.1 Operator Account Data</H3>
              <UL>
                <li>Full name, business name, and designation of the account holder</li>
                <li>Business email address and phone number</li>
                <li>Business address and registration details</li>
                <li>Billing and payment information (processed by our payment gateway; we do not store card data)</li>
                <li>WhatsApp Business Account (WABA) credentials and phone number IDs</li>
              </UL>

              <H3>2.2 End-User (Passenger) Data</H3>
              <UL>
                <li>WhatsApp phone number and display name</li>
                <li>Journey details: origin, destination, travel date, seat preferences</li>
                <li>Booking confirmations, ticket reference numbers, and transaction IDs</li>
                <li>Message content exchanged via the operator's WhatsApp Business number, solely for service delivery</li>
              </UL>

              <H3>2.3 Technical and Usage Data</H3>
              <UL>
                <li>IP address, browser type, operating system, and device identifiers</li>
                <li>Pages visited, session duration, and referral URLs</li>
                <li>API request logs, webhook payloads, and error logs</li>
                <li>Feature usage patterns for product analytics and improvement</li>
              </UL>

              <H3>2.4 Communications Data</H3>
              <UL>
                <li>Emails and support tickets submitted to us</li>
                <li>Responses to surveys or feedback forms</li>
              </UL>

              <H2>3. Purpose of Processing</H2>
              <p>We process personal data for the following lawful purposes:</p>
              <UL>
                <li><strong className="text-white">Service Delivery:</strong> To provision, operate, and maintain the booking automation platform for operators and their passengers.</li>
                <li><strong className="text-white">WhatsApp Automation:</strong> To send and receive messages via Meta's WhatsApp Business API strictly within the scope of the operator's configured booking workflows.</li>
                <li><strong className="text-white">Billing &amp; Subscription Management:</strong> To process subscription payments, generate invoices, and manage renewals.</li>
                <li><strong className="text-white">Support &amp; Communication:</strong> To respond to queries, resolve issues, and send service notifications.</li>
                <li><strong className="text-white">Analytics &amp; Improvement:</strong> To monitor platform performance, detect errors, and improve features using aggregated, anonymised usage data.</li>
                <li><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, and lawful requests from authorities.</li>
              </UL>

              <H2>4. WhatsApp &amp; Meta Platform Data</H2>
              <p>
                Our platform integrates with Meta's WhatsApp Business API. {BRAND_NAME} acts strictly as a
                <strong className="text-white"> technology platform provider</strong> — we do not initiate, control,
                or take responsibility for passenger communications sent by operators through the platform. Message
                content processed through our system is used exclusively for delivering booking workflows configured
                by the operator. We do not:
              </p>
              <UL>
                <li>Use message content to serve advertisements or build user profiles for third parties</li>
                <li>Share passenger WhatsApp data with any party outside the scope of service delivery</li>
                <li>Initiate outbound messages to passengers on our own account or authority</li>
                <li>Store message content beyond the period necessary for service delivery, debugging, and legal compliance</li>
              </UL>
              <p>
                All integrations comply with{" "}
                <span className="text-white">Meta's WhatsApp Business Platform Terms of Service</span>. Operators
                are solely and exclusively responsible for obtaining lawful user consent before initiating any
                outbound messages. We reserve the right to suspend platform access where Meta policy violations
                are detected or reported.
              </p>

              <H2>5. Third-Party Integrations &amp; Data Sharing</H2>
              <p>We may share data with the following categories of third parties:</p>
              <UL>
                <li><strong className="text-white">Meta / WhatsApp:</strong> For message delivery via the WhatsApp Business API.</li>
                <li><strong className="text-white">Cloud Hosting Providers:</strong> Infrastructure services (e.g., server hosting, databases) that store and process data on our behalf under data processing agreements.</li>
                <li><strong className="text-white">Payment Processors:</strong> To handle subscription billing. Payment data is governed by the processor's own PCI-DSS-compliant privacy policy.</li>
                <li><strong className="text-white">Analytics Providers:</strong> Aggregated, anonymised usage data may be processed by analytics tools to improve the platform.</li>
                <li><strong className="text-white">Legal &amp; Regulatory Authorities:</strong> When required by law, court order, or to protect our legal rights.</li>
              </UL>
              <p>We do not sell, rent, or trade personal data to any third party for marketing purposes.</p>

              <H2>6. Data Retention</H2>
              <UL>
                <li><strong className="text-white">Operator account data</strong> is retained for the duration of the subscription and for a reasonable period after account termination, after which it is permanently deleted or anonymised, subject to legal requirements.</li>
                <li><strong className="text-white">Passenger message logs</strong> are retained only as long as necessary for service delivery, debugging, and legal compliance, and are purged when no longer required for those purposes.</li>
                <li><strong className="text-white">Booking records</strong> (transaction IDs, ticket references) are retained as required for accounting, dispute resolution, and applicable legal obligations.</li>
                <li><strong className="text-white">Billing records</strong> are retained in accordance with applicable Indian tax laws and statutory requirements.</li>
              </UL>

              <H2>6A. Data Controller &amp; Processor Roles</H2>
              <p>
                For the purposes of applicable data protection law (including the Information Technology Act, 2000
                and the Digital Personal Data Protection Act, 2023):
              </p>
              <UL>
                <li><strong className="text-white">Operators are Data Controllers</strong> — as a subscribing operator, you determine the purposes and means of processing personal data of your passengers. You are responsible for ensuring a valid legal basis for all passenger data you collect and process through the platform.</li>
                <li><strong className="text-white">{BRAND_NAME} is a Data Processor</strong> — we process passenger data solely on behalf of operators, strictly within the scope of delivering the platform services, and only on documented instructions.</li>
                <li>We will not use or disclose passenger data for any purpose other than providing services to you under your subscription agreement.</li>
                <li>Where required by law or requested by competent authorities, we may be obligated to disclose data regardless of this classification.</li>
              </UL>

              <H2>7. Your Rights</H2>
              <p>Depending on applicable law, you have the right to:</p>
              <UL>
                <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong className="text-white">Deletion:</strong> Request erasure of your personal data, subject to legal retention obligations.</li>
                <li><strong className="text-white">Portability:</strong> Request transfer of your data in a machine-readable format.</li>
                <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests.</li>
                <li><strong className="text-white">Withdrawal of Consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior lawful processing.</li>
              </UL>
              <p>To exercise any right, contact us using the details in Section 10. We will respond within 30 days.</p>

              <H2>8. Security Practices</H2>
              <p>We implement industry-standard security measures including:</p>
              <UL>
                <li>TLS/HTTPS encryption for all data in transit</li>
                <li>Encryption at rest for sensitive stored data</li>
                <li>Role-based access controls and audit logging for internal systems</li>
                <li>Regular security reviews and vulnerability assessments</li>
                <li>Secure API key management for WhatsApp Business API credentials</li>
              </UL>
              <p>
                No system is completely secure. In the event of a data breach that affects your rights, we will notify
                affected parties within 72 hours as required by applicable law.
              </p>

              <H2>9. International Data Transfers</H2>
              <p>
                Our primary infrastructure is located in India. If data is transferred to or processed in a country
                outside India, we ensure appropriate safeguards are in place (such as standard contractual clauses or
                equivalent mechanisms) in accordance with applicable data protection laws.
              </p>

              <H2>10. Changes to This Policy</H2>
              <p>
                We may update this Privacy Policy periodically. Material changes will be communicated via email to
                registered operators or by a prominent notice on our website. Continued use of the platform after
                such changes constitutes acceptance of the revised policy.
              </p>

              <H2>11. Related Policies</H2>
              <UL>
                <li><Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link></li>
              </UL>

              <H2>12. Contact Us</H2>
              <p>For any privacy-related questions, requests, or complaints:</p>
              <ContactBlock />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
