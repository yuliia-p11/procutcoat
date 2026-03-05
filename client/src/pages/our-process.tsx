import { Helmet } from "react-helmet-async";
import { ChevronRight, ArrowUp, MapPin, Mail, Phone, ClipboardCheck, Crosshair, Wrench, Paintbrush, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { useScrollReveal, useLaserReveal } from "@/hooks/use-scroll-reveal";
import heroMetalImage from "@assets/AdobeStock_1491690900_Large_1770847813495.jpeg";
import logoImage from "@assets/ChatGPT_Image_Mar_5,_2026,_05_42_40_PM_1772751680095.png";

function LaserLine({ direction = "ltr", duration = 5, delay = 0, className = "" }: {
  direction?: "ltr" | "rtl";
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const animName = direction === "ltr" ? "laser-trace" : "laser-trace-reverse";
  return (
    <div className={`laser-line absolute left-0 right-0 h-px ${className}`}>
      <div
        className="absolute inset-0 h-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.6) 40%, hsl(var(--primary)) 50%, hsl(var(--primary) / 0.6) 60%, transparent 100%)",
          animation: `${animName} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
        }}
      />
      <div
        className="absolute inset-0 h-[3px] -top-px blur-sm"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.3) 40%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.3) 60%, transparent 100%)",
          animation: `${animName} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
        }}
      />
    </div>
  );
}

function ScrollLaserLine({ direction = "ltr", className = "" }: {
  direction?: "ltr" | "rtl";
  className?: string;
}) {
  const ref = useLaserReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`relative h-px ${className}`}>
      <LaserLine direction={direction} duration={6} />
    </div>
  );
}

function PageHero() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="relative w-full flex items-end min-h-[40vh] md:min-h-[50vh]"
      data-testid="section-process-hero"
    >
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <img
          src={heroMetalImage}
          alt="Metal fabrication process at ProCut and Coat Orlando FL"
          className="w-full h-full object-cover"
          data-testid="img-process-hero"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12 pt-24 sm:pt-28">
        <h1 className="section-child section-child-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl" data-testid="text-process-hero-title">
          Our Metal Fabrication Process
        </h1>
        <p className="section-child section-child-2 text-white/70 text-base sm:text-lg mt-3 max-w-2xl" data-testid="text-process-hero-subtitle">
          Orlando, FL
        </p>
      </div>
      <LaserLine direction="ltr" duration={5} className="bottom-0 z-20" />
    </section>
  );
}

function IntroSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-28"
      style={{
        background: "linear-gradient(170deg, hsl(var(--background)) 0%, hsl(var(--muted) / 0.3) 40%, hsl(var(--muted) / 0.15) 70%, hsl(var(--background)) 100%)",
      }}
      data-testid="section-process-intro"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide mb-6" data-testid="text-process-intro-1">
            At <span className="font-heading font-medium text-foreground/90">ProCut &amp; Coat</span>, we follow a <a href="/our-process" className="text-primary hover:underline">streamlined in-house workflow</a> that moves projects from raw sheet metal to finished, powder-coated parts &mdash; all within our Orlando facility. By keeping laser cutting, forming, and finishing under one roof, we reduce delays and maintain full control over quality and scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Project Intake & Technical Review",
    description: "Every project begins with a clear review of drawings, quantities, material specifications, and finish requirements. One technical team evaluates the scope to confirm manufacturability, timeline, and production flow before work begins.",
    detail: "For early-stage projects, we can assist with design refinement or CAD file preparation to ensure parts are production-ready.",
    accentColor: "text-primary",
    dotColor: "bg-primary",
  },
  {
    number: "2",
    icon: Crosshair,
    title: "Precision Laser Cutting",
    description: "Approved parts move to precision laser cutting. We cut steel, aluminum, and other common fabrication metals accurately to specification, preparing components for forming or finishing.",
    detail: "Because cutting is completed in-house, parts transition directly to the next stage without outside handoffs.",
    accentColor: "text-primary",
    dotColor: "bg-primary",
  },
  {
    number: "3",
    icon: Wrench,
    title: "Sheet-Metal Bending & Forming",
    description: "After cutting, components are formed to required angles and dimensions using consistent, repeatable processes. This step ensures structural integrity and proper fit for brackets, panels, enclosures, and other fabricated parts.",
    detail: null,
    accentColor: "text-amber-500",
    dotColor: "bg-amber-500",
  },
  {
    number: "4",
    icon: Paintbrush,
    title: "Powder Coating & Controlled Curing",
    description: "When finishing is required, parts move to our in-house powder coating system. Coatings are applied and cured under controlled conditions to create durable, professional-grade finishes suitable for functional and aesthetic applications.",
    detail: null,
    accentColor: "text-amber-500",
    dotColor: "bg-amber-500",
  },
  {
    number: "5",
    icon: ShieldCheck,
    title: "Quality Check & Scheduled Delivery",
    description: "Before completion, parts undergo a final inspection to verify accuracy, finish quality, and order consistency. Clear scheduling and communication ensure predictable turnaround and delivery timelines.",
    detail: null,
    accentColor: "text-primary",
    dotColor: "bg-primary",
  },
];

function ProcessStepsSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-process-steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-process-steps-label">
          Step by Step
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-process-steps-title">
          From Raw Metal to Finished Parts
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-14 max-w-3xl" data-testid="text-process-steps-desc">
          Every project follows the same disciplined production flow, ensuring consistent quality and predictable delivery.
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative md:pl-20" data-testid={`process-step-${i}`}>
                  <div className={`hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-md bg-card border border-card-border items-center justify-center ${step.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`md:hidden flex w-10 h-10 rounded-md bg-card border border-card-border items-center justify-center ${step.accentColor}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <div>
                        <span className={`text-xs font-medium tracking-widest uppercase ${step.accentColor}`}>
                          Step {step.number}
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-tight" data-testid={`text-process-step-title-${i}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-base leading-relaxed" data-testid={`text-process-step-desc-${i}`}>
                      {step.description}
                    </p>
                    {step.detail && (
                      <p className="text-foreground/60 text-sm leading-relaxed mt-4 border-l-2 border-border pl-4" data-testid={`text-process-step-detail-${i}`}>
                        {step.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollLaserLine direction="rtl" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function ClosingSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-process-closing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-amber-500 text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-process-closing-label">
            One Facility, Complete Control
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-process-closing-title">
            Why It Works
          </h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-process-closing-desc">
            Because every stage &mdash; laser cutting, sheet-metal forming, and powder coating &mdash; happens in one Orlando facility, we minimize production gaps, reduce scheduling friction, and maintain consistent quality from raw metal to finished parts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Fewer Delays", desc: "No waiting on outside vendors or shipping between facilities." },
              { title: "Full Quality Control", desc: "One team oversees every stage of production." },
              { title: "Predictable Timelines", desc: "Clear scheduling from intake to delivery." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-5 hover-elevate transition-all text-center"
                data-testid={`card-process-closing-${i}`}
              >
                <h4 className="font-heading text-sm font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-foreground/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-28" data-testid="section-process-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-process-cta-title">
          Ready to Start Your Project?
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-2xl" data-testid="text-process-cta-desc">
          Send us your drawings &mdash; or your idea and timeline &mdash; and we'll respond with clear next steps and scheduling details.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-foreground/60 mb-8">
          <div className="flex items-center gap-2" data-testid="text-process-cta-address">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-process-cta-email">
            <Mail className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </div>
          <a href="tel:+16892124722" className="flex items-center gap-2 hover:text-foreground/80 transition-colors" data-testid="link-process-cta-phone">
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Phone:</strong> +1 (689) 212-4722</span>
          </a>
        </div>
        <a href="/contact">
          <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-process-contact">
            Contact Us
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </a>
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

export default function OurProcess() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Our Metal Fabrication Process | ProCut &amp; Coat Orlando, FL</title>
        <meta name="description" content="ProCut & Coat follows a streamlined, in-house metal fabrication process in Orlando, FL — from project intake and laser cutting to forming, powder coating, and final inspection." />
        <meta property="og:title" content="Our Metal Fabrication Process | ProCut & Coat Orlando, FL" />
        <meta property="og:description" content="ProCut & Coat follows a streamlined, in-house metal fabrication process in Orlando, FL — from project intake and laser cutting to forming, powder coating, and final inspection." />
        <link rel="canonical" href="https://www.procutcoat.com/our-process" />
      </Helmet>
      <Header />
      <PageHero />
      <IntroSection />
      <ProcessStepsSection />
      <ClosingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
