import { Link } from "wouter";
import { MessageSquareCode, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MessageSquareCode className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg">SaaS by SSH</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              Automating Business Conversations and Bookings on WhatsApp. We build powerful automation platforms for forward-thinking companies.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@saasbyssh.example" className="hover:text-white transition-colors">
                  support@saasbyssh.example
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground font-medium bg-white/5 py-2 px-4 rounded-full border border-white/5">
            SaaS by SSH – a software platform developed by SSH Technologies
          </p>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} SSH Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
