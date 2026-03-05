import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logoImage from "@assets/Logo_1772749444787.jpeg";

function ContactHero() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={ref} className="pt-24 sm:pt-28 pb-12 lg:pb-16" data-testid="section-contact-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-child section-child-1 font-heading text-4xl sm:text-5xl lg:text-[57px] font-bold text-foreground leading-tight mb-4" data-testid="text-contact-title">
          Contact Us
        </h1>
        <p className="section-child section-child-2 text-foreground/70 text-lg leading-relaxed max-w-2xl" data-testid="text-contact-subtitle">
          Have a project in mind? Fill out the form below and our team will get back to you with next steps, pricing, and timelines.
        </p>
        <div className="section-child section-child-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-4 text-sm text-foreground/60">
          <a
            href="tel:+16892124722"
            className="inline-flex items-center gap-2 hover:text-foreground/80 transition-colors"
            data-testid="link-phone-number"
          >
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span><strong className="text-foreground">Phone:</strong> +1 (689) 212-4722</span>
          </a>
          <a
            href="mailto:info@procutcoat.com"
            className="inline-flex items-center gap-2 hover:text-foreground/80 transition-colors"
            data-testid="link-contact-email"
          >
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </a>
          <div className="inline-flex items-center gap-2" data-testid="text-contact-address">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function JotFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.id = "JotFormIFrame-260416986417061";
    iframe.title = "Contact & Service Inquiry Form";
    iframe.src = "https://form.jotform.com/260416986417061";
    iframe.style.minWidth = "100%";
    iframe.style.maxWidth = "100%";
    iframe.style.height = "800px";
    iframe.style.border = "none";
    iframe.setAttribute("allow", "geolocation; microphone; camera; fullscreen");
    iframe.setAttribute("allowFullScreen", "true");
    iframe.setAttribute("scrolling", "no");

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(iframe);
    }

    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === "object") return;
      const args = e.data?.split?.(":");
      if (!args) return;
      if (args[0] === "setHeight" && iframe) {
        iframe.style.height = args[1] + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section ref={sectionRef} className="pb-20 lg:pb-28" data-testid="section-contact-form">
      <div className="max-w-3xl mx-auto px-1 sm:px-2">
        <div ref={containerRef} className="rounded-md overflow-hidden" data-testid="jotform-container" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        <span className="flex items-center gap-2">
          <img src={logoImage} alt="ProCut & Coat logo" className="w-8 h-8 rounded-full object-cover" data-testid="img-footer-logo" />
          <span className="font-heading text-sm font-semibold text-foreground/50">
            <span className="text-primary">Pro</span>Cut & Coat
          </span>
        </span>
        <button
          className="text-foreground/40 text-xs flex items-center gap-1 transition-opacity opacity-70 hover:opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="button-scroll-top"
        >
          <ArrowUp className="w-3 h-3" />
          Scroll to top
        </button>
      </div>
    </footer>
  );
}

export default function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Contact Pro Cut & Coat | Powder Coating & Metal Services in Orlando, FL</title>
        <meta name="description" content="Contact Pro Cut & Coat for professional powder coating, precision cutting, and sheet metal bending in Orlando, FL. Request a quote or speak with our team today." />
        <meta property="og:title" content="Contact Pro Cut & Coat | Powder Coating & Metal Services in Orlando, FL" />
        <meta property="og:description" content="Contact Pro Cut & Coat for professional powder coating, precision cutting, and sheet metal bending in Orlando, FL. Request a quote or speak with our team today." />
      </Helmet>
      <Header />
      <ContactHero />
      <JotFormEmbed />
      <Footer />
    </div>
  );
}
