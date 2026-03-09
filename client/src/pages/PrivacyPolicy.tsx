import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 border-b border-white/10 pb-6">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to SaaS by SSH. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data: First name, last name, username.</li>
                <li>Contact Data: Email address, telephone numbers.</li>
                <li>Technical Data: IP address, browser type and version, time zone setting.</li>
                <li>Usage Data: Information about how you use our website and services.</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service.</li>
                <li>To notify you about changes to our Service.</li>
                <li>To provide customer support.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. WhatsApp Integration Data</h2>
              <p>
                As a WhatsApp automation platform, we process messages passing through our systems strictly for the 
                purpose of delivering the automation services you request. We adhere to WhatsApp Business Platform 
                terms and do not use message content for external advertising or unauthorized profiling.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <br />
                <a href="mailto:support@saasbyssh.com" className="text-primary hover:underline mt-2 inline-block">
                  support@saasbyssh.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
