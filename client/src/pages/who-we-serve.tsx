import { Helmet } from "react-helmet-async";
import { ChevronRight, ArrowUp, MapPin, Mail, Phone, Warehouse, Palette, Factory, Hammer } from "lucide-react";
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
      data-testid="section-serve-hero"
    >
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <img
          src={heroMetalImage}
          alt="Metal fabrication workshop at ProCut and Coat Orlando FL"
          className="w-full h-full object-cover"
          data-testid="img-serve-hero"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12 pt-24 sm:pt-28">
        <h1 className="section-child section-child-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl" data-testid="text-serve-hero-title">
          Who We Work With
        </h1>
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
      data-testid="section-serve-intro"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide mb-6" data-testid="text-serve-intro-1">
            <span className="font-heading font-medium text-foreground/90">ProCut &amp; Coat</span> supports businesses throughout Orlando, Central Florida, and beyond who need reliable <a href="/metal-fabrication-orlando-fl" className="text-primary hover:underline">metal fabrication and powder coating</a> completed in one facility.
          </p>
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide" data-testid="text-serve-intro-2">
            If you value predictable scheduling, consistent quality, and clear communication, our shop is built for that.
          </p>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    icon: Warehouse,
    title: "Fabrication Shops & Contractors",
    description: "We provide overflow support and finished components for fabrication shops, builders, and contractors who need precision cutting, forming, and durable powder-coated parts without managing multiple vendors.",
    accentColor: "text-primary",
    dotColor: "bg-primary",
  },
  {
    icon: Palette,
    title: "Product Designers & Studios",
    description: "For designers developing functional metal products, fixtures, or custom pieces, we assist with prototype fabrication and production-ready components that integrate clean finishes and repeatable forming.",
    accentColor: "text-amber-500",
    dotColor: "bg-amber-500",
  },
  {
    icon: Factory,
    title: "Small Manufacturers",
    description: "We support small-batch manufacturing and repeat production runs for businesses that require accurate parts, consistent finishes, and reliable turnaround timelines.",
    accentColor: "text-primary",
    dotColor: "bg-primary",
  },
  {
    icon: Hammer,
    title: "Makers & Custom Builders",
    description: "Independent builders and custom fabricators rely on our integrated workflow to move projects from concept to finished parts efficiently \u2014 without coordination gaps between cutting, bending, and coating.",
    accentColor: "text-amber-500",
    dotColor: "bg-amber-500",
  },
];

function AudiencesSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-serve-audiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-serve-audiences-label">
          Our Clients
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-serve-audiences-title">
          Built for Builders
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-14 max-w-3xl" data-testid="text-serve-audiences-desc">
          We work with fabrication shops, contractors, designers, manufacturers, and makers across the Orlando area and beyond who need reliable metal fabrication and powder coating completed in one facility.
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative md:pl-20" data-testid={`serve-audience-${i}`}>
                  <div className={`hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-md bg-card border border-card-border items-center justify-center ${item.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`md:hidden flex w-10 h-10 rounded-md bg-card border border-card-border items-center justify-center ${item.accentColor}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-tight" data-testid={`text-serve-audience-title-${i}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 text-base leading-relaxed" data-testid={`text-serve-audience-desc-${i}`}>
                      {item.description}
                    </p>
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
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-serve-closing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide" data-testid="text-serve-closing-body">
            Whether you need a single prototype or a small production run, our <a href="/metal-fabrication-orlando-fl" className="text-primary hover:underline">in-house metal fabrication process</a> supports projects that prioritize speed, durability, and disciplined execution.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-28" data-testid="section-serve-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-serve-cta-title">
          Ready to Start Your Project?
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-2xl" data-testid="text-serve-cta-desc">
          Send us your drawings &mdash; or your idea and timeline &mdash; and we'll respond with clear next steps and scheduling details.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-foreground/60 mb-8">
          <div className="flex items-center gap-2" data-testid="text-serve-cta-address">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-serve-cta-email">
            <Mail className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </div>
          <a href="tel:+16892124722" className="flex items-center gap-2 hover:text-foreground/80 transition-colors" data-testid="link-serve-cta-phone">
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Phone:</strong> +1 (689) 212-4722</span>
          </a>
        </div>
        <a href="/contact">
          <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-serve-contact">
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

export default function WhoWeServe() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Who We Serve | Orlando Metal Fabrication &amp; Powder Coating</title>
        <meta name="description" content="ProCut & Coat works with fabrication shops, contractors, designers, manufacturers, and makers in Orlando, FL who need reliable metal fabrication, laser cutting, forming, and powder coating." />
        <meta property="og:title" content="Who We Serve | Orlando Metal Fabrication & Powder Coating" />
        <meta property="og:description" content="ProCut & Coat works with fabrication shops, contractors, designers, manufacturers, and makers in Orlando, FL who need reliable metal fabrication, laser cutting, forming, and powder coating." />
        <link rel="canonical" href="https://www.procutcoat.com/who-we-serve" />
      </Helmet>
      <Header />
      <PageHero />
      <IntroSection />
      <AudiencesSection />
      <ClosingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
