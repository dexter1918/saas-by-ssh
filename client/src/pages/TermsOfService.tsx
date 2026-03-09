import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 border-b border-white/10 pb-6">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing this site.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily use the materials (information or software) on SaaS by SSH's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Service Description</h2>
              <p>
                SaaS by SSH provides software tools for automating WhatsApp messaging, chatbot building, and 
                booking management. We reserve the right to modify, suspend, or discontinue any part of the 
                service at any time without notice.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Meta / WhatsApp Terms</h2>
              <p>
                Users of our platform must comply with all Meta and WhatsApp Business Platform terms of service. 
                Any violation of their policies (e.g., spamming, unauthorized broadcast messages) may result in 
                immediate termination of your SaaS by SSH account.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Limitations</h2>
              <p>
                In no event shall SaaS by SSH or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on our website or platform.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
