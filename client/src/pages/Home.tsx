import { motion } from "framer-motion";
import { 
  Bot, 
  MessageSquare, 
  CalendarDays, 
  ArrowRight,
  Zap,
  BellRing,
  TrendingUp,
  Workflow,
  CheckCircle2,
  Send,
  Loader2
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCreateContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

type ContactFormData = z.infer<typeof api.contact.create.input>;

export default function Home() {
  const { mutate: submitContact, isPending } = useCreateContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContact(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-grid-pattern z-0 opacity-[0.15]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-white">SaaS by SSH</span>
              <span className="block text-gradient-primary mt-2">Bus Ticket Booking via WhatsApp</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Book your bus tickets seamlessly through WhatsApp. No app downloads needed. Simple, fast, and secure reservations at your fingertips.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PRODUCT DESCRIPTION SECTION */}
      <section id="about" className="pt-12 pb-24 bg-card/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* About intro */}
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center space-y-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full">
                B2B SaaS Platform for Transport Operators
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">About SaaS by SSH</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SaaS by SSH is a WhatsApp-native booking automation platform built exclusively for bus operators,
                fleet owners, and travel agencies. We give you the software infrastructure to let your passengers
                search routes, reserve seats, pay, and receive e-tickets—all through WhatsApp, with no app
                development required on your end.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                We are a software provider only. SaaS by SSH does not operate any transport service, sell passenger
                tickets on its own behalf, or act as a travel agent. All bookings made through your WhatsApp
                number are a direct transaction between you and your passengers.
              </p>
            </motion.div>

            {/* Product description cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Who It's For",
                  items: [
                    "Bus operators managing intercity or local routes",
                    "Fleet owners looking to digitise bookings",
                    "Travel agencies offering multi-operator packages",
                    "Any transport business that wants to engage passengers on WhatsApp"
                  ]
                },
                {
                  label: "What It Does",
                  items: [
                    "Connects your bus inventory to a WhatsApp chatbot",
                    "Handles seat selection, payment, and e-ticket delivery in chat",
                    "Sends automated trip reminders and boarding alerts",
                    "Manages cancellations and rebooking workflows automatically"
                  ]
                },
                {
                  label: "Key Features",
                  items: [
                    "Real-time seat availability via WhatsApp",
                    "Payment gateway integration (UPI, cards, wallets)",
                    "24/7 AI support chatbot for passenger queries",
                    "Operator dashboard for bookings, analytics & notifications"
                  ]
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-card/60 border border-white/10 rounded-2xl p-7 space-y-4"
                >
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">{card.label}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Value proposition banner */}
            <motion.div
              variants={fadeInUp}
              className="bg-primary/10 border border-primary/20 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
            >
              <div className="space-y-1">
                <p className="font-bold text-white text-lg">Ready to automate your bus bookings?</p>
                <p className="text-sm text-muted-foreground">
                  Reduce manual coordination, eliminate booking errors, and delight passengers—all through the app they already use.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-7 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 transition-all duration-300 whitespace-nowrap"
              >
                Request a Demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Complete bus ticket booking solutions powered by WhatsApp.</p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <CalendarDays className="w-8 h-8 text-purple-400" />,
                title: "Instant Seat Selection",
                desc: "Browse routes, check availability, and select your preferred seats—all through WhatsApp."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
                title: "Smart Confirmations",
                desc: "Receive instant booking confirmations, ticket details, and fare breakdowns via WhatsApp."
              },
              {
                icon: <Bot className="w-8 h-8 text-accent" />,
                title: "24/7 Support Chatbot",
                desc: "AI-powered assistant answers queries, handles rebooking, and provides real-time trip updates."
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-card/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Booking in 4 Steps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From message to ticket—fast, simple, and secure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Send Details", desc: "Tell us your journey—origin, destination, and date.", icon: <MessageSquare /> },
              { step: "02", title: "Get Options", desc: "See available routes, fares, and real-time seat inventory.", icon: <CalendarDays /> },
              { step: "03", title: "Book & Pay", desc: "Select seats and complete payment securely in WhatsApp.", icon: <CheckCircle2 /> },
              { step: "04", title: "Get Ticket", desc: "Receive your e-ticket and boarding details instantly.", icon: <Bot /> }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                key={i} 
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(37,99,235,0.2)] mb-6 relative">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-xs font-bold flex items-center justify-center text-white">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The easiest way to book bus tickets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Instant Booking", text: "Complete your reservation in minutes without apps." },
              { icon: <BellRing />, title: "Real-time Updates", text: "Get alerts for booking confirmations, travel tips, and delays." },
              { icon: <CalendarDays />, title: "Easy Management", text: "Modify, reschedule, or cancel bookings anytime via chat." },
              { icon: <TrendingUp />, title: "Best Fares", text: "Access competitive pricing and exclusive WhatsApp-only deals." },
              { icon: <Workflow />, title: "Seamless Integration", text: "Works with major payment gateways and bus operators." }
            ].map((feat, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                key={i} 
                className="bg-card/40 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:bg-card/60 transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{feat.title}</h4>
                  <p className="text-sm text-muted-foreground">{feat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-card/80 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Ready to Book?</h2>
            <p className="text-muted-foreground text-lg">Get started with WhatsApp bus ticket booking today. Contact us to learn more or request a demo.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-400">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <input 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@company.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="How can we help you?"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-400">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
