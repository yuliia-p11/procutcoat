import { Helmet } from "react-helmet-async";
import { ChevronRight, ArrowUp, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { useScrollReveal, useLaserReveal } from "@/hooks/use-scroll-reveal";
import heroMetalImage from "@assets/AdobeStock_1491690900_Large_1770847813495.jpeg";
import whyPowderCoatImage from "@assets/AdobeStock_1740866468_Large_1770847990943.jpeg";
import workshopImage from "@assets/AdobeStock_848048449_2_Large_1770848344124.jpeg";

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
      data-testid="section-fab-hero"
    >
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <img
          src={heroMetalImage}
          alt="Precision laser cutting metal fabrication in Orlando FL"
          className="w-full h-full object-cover"
          data-testid="img-fab-hero"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12 pt-24 sm:pt-28">
        <h1 className="section-child section-child-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl" data-testid="text-fab-hero-title">
          Metal Fabrication Services in Orlando, FL
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
      data-testid="section-fab-intro"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide mb-6" data-testid="text-fab-intro-1">
            <span className="font-heading font-medium text-foreground/90">ProCut &amp; Coat</span> is a full-service metal fabrication shop in Orlando, Florida, providing in-house laser cutting, sheet-metal bending, custom metal design support, and professional powder coating. Through <a href="/our-process" className="text-primary hover:underline">our metal fabrication process</a>, we help businesses, contractors, and independent makers reduce turnaround time, simplify coordination, and keep projects on schedule.
          </p>
          <p className="text-foreground/70 text-base sm:text-lg leading-[2] tracking-wide" data-testid="text-fab-intro-2">
            Whether you need a single prototype, small-batch production, or repeat fabrication runs, our Orlando facility is built for efficient, predictable delivery. While our facility is located in Orlando, we support clients throughout Florida and beyond who need reliable metal fabrication and finishing.
          </p>
        </div>
      </div>
    </section>
  );
}

function PowderCoatingSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-fab-powder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-powder-label">
              Finishing Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-powder-title">
              Powder Coating Services in Orlando
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-powder-desc">
              Looking for dependable powder coating in Orlando? ProCut &amp; Coat delivers clean, durable finishes for fabricated metal parts, custom builds, and industrial components.
            </p>
            <p className="text-foreground font-semibold mb-4">Our in-house powder coating system is designed for:</p>
            <ul className="space-y-3 mb-8">
              {[
                "Long-lasting, professional-grade finishes",
                "Industrial parts and fabricated components",
                "Custom builds and small production batches",
                "Smooth, repeatable coating results",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-powder-item-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4" data-testid="text-powder-workflow">
              Because powder coating is completed in the same facility as cutting and forming, your parts move through production without unnecessary delays or outside vendors. This <a href="/our-process" className="text-primary hover:underline">streamlined in-house workflow</a> improves quality control and reduces scheduling variables.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed" data-testid="text-powder-cta">
              If you need local powder coating in Orlando for fabricated metal parts, we provide consistent results you can plan around.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src={whyPowderCoatImage}
              alt="Professional powder coating services in Orlando"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-powder-coat"
            />
          </div>
          <div className="lg:hidden">
            <img
              src={whyPowderCoatImage}
              alt="Professional powder coating services in Orlando"
              className="w-full h-48 rounded-md object-cover"
              data-testid="img-powder-coat-mobile"
            />
          </div>
        </div>
      </div>
      <ScrollLaserLine direction="rtl" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function LaserCuttingSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-fab-laser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="hidden lg:block">
            <img
              src={heroMetalImage}
              alt="Precision laser cutting services in Orlando FL"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-laser-cutting"
            />
          </div>
          <div>
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-laser-label">
              Cutting Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-laser-title">
              Laser Cutting Services in Orlando, FL
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-laser-desc">
              Our precision laser cutting services in Orlando support both prototypes and repeat production runs. We cut steel, aluminum, and other common fabrication metals with accuracy and efficiency.
            </p>
            <p className="text-foreground font-semibold mb-4">Laser cutting services include:</p>
            <ul className="space-y-3 mb-8">
              {[
                "Precision cutting for sheet metal components",
                "Prototype parts and concept validation",
                "Small-batch and repeat production runs",
                "Integrated fabrication workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-laser-item-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4" data-testid="text-laser-workflow">
              Because laser cutting is directly connected to our bending and powder coating operations, your parts move seamlessly from raw sheet metal to finished product without leaving our Orlando shop.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed" data-testid="text-laser-cta">
              For businesses searching for laser cutting in Orlando FL, ProCut &amp; Coat provides reliable scheduling and production-ready results.
            </p>
          </div>
          <div className="lg:hidden">
            <img
              src={heroMetalImage}
              alt="Precision laser cutting services in Orlando FL"
              className="w-full h-48 rounded-md object-cover"
              data-testid="img-laser-cutting-mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BendingSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-fab-bending">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-bending-label">
              Forming Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-bending-title">
              Sheet-Metal Bending &amp; Forming
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-bending-desc">
              Accurate sheet-metal bending and forming are essential for functional, professional-grade components. Our forming services support:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Brackets, enclosures, panels, and structural parts",
                "One-off custom components",
                "Small-batch manufacturing",
                "Parts that require tight tolerances and consistent repeatability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-bending-item-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/70 text-sm leading-relaxed" data-testid="text-bending-integration">
              Our team ensures formed components integrate smoothly with laser-cut features and powder-coated finishes for a cohesive final product.
            </p>
          </div>
          <div>
            <img
              src={workshopImage}
              alt="Sheet metal bending and forming services"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-bending"
            />
          </div>
        </div>
      </div>
      <ScrollLaserLine direction="ltr" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function DesignSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-fab-design">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-amber-500 text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-design-label">
            Design Support
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-design-title">
            Custom Metal Design &amp; Prototyping Support
          </h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-design-desc">
            Have an idea but not finalized drawings? In addition to fabrication, we assist with design refinement and prototype development to help move projects from concept to production-ready parts.
          </p>
          <p className="text-foreground font-semibold mb-4">Our team can support:</p>
          <ul className="space-y-3 mb-8">
            {[
              "CAD file preparation and refinement",
              "Concept-to-prototype metal components",
              "Design adjustments for manufacturability",
              "Transitioning prototypes into repeat production",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-design-item-${i}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground/70 text-sm leading-relaxed" data-testid="text-design-cta">
            This added layer of support makes ProCut &amp; Coat more than a typical metal fabrication shop in Orlando &mdash; we help clients move from idea to finished product efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}

function FullServiceSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-fab-fullservice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-fullservice-label">
          All Under One Roof
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground leading-tight mb-6" data-testid="text-fullservice-title">
          A Full-Service Orlando Metal Fabrication Shop
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-10 max-w-3xl" data-testid="text-fullservice-desc">
          All services &mdash; laser cutting, sheet-metal bending, powder coating, and prototype support &mdash; are completed in our Orlando facility. Keeping production in one location allows for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              title: "Faster Scheduling",
              desc: "Shorter lead times and streamlined production scheduling.",
            },
            {
              title: "Fewer Handoffs",
              desc: "No coordination between multiple vendors or facilities.",
            },
            {
              title: "Clear Communication",
              desc: "One accountable team managing your project from start to finish.",
            },
            {
              title: "Consistent Quality",
              desc: "Quality control from raw metal to final finish, all in one location.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-5 hover-elevate transition-all text-center"
              data-testid={`card-fullservice-${i}`}
            >
              <h4 className="font-heading text-sm font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-foreground/60 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground/70 text-base leading-relaxed max-w-3xl" data-testid="text-fullservice-closing">
          If you're searching for a dependable metal fabrication shop in Orlando, ProCut &amp; Coat delivers integrated fabrication and finishing services designed for predictable results.
        </p>
      </div>
      <ScrollLaserLine direction="rtl" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function PerfectForSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-fab-perfect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground mb-6 leading-tight" data-testid="text-fab-perfect-title">
            Perfect For
          </h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-fab-perfect-desc">
            Our Orlando metal fabrication services are ideal for:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Fabrication shops needing overflow capacity",
              "Contractors and builders requiring finished metal components",
              "Manufacturers seeking small-batch production",
              "Studios and independent makers developing custom projects",
              "Businesses looking for local powder coating and laser cutting in Orlando",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-fab-perfect-item-${i}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground/70 text-base leading-relaxed" data-testid="text-fab-perfect-closing">
            From prototypes to repeat production runs, we help Central Florida businesses keep projects moving without coordination headaches.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-28" data-testid="section-fab-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-fab-cta-title">
          Ready to Start Your Project?
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-2xl" data-testid="text-fab-cta-desc">
          Send us your drawings &mdash; or your idea and timeline &mdash; and we'll respond with clear next steps and scheduling details.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-foreground/60 mb-8">
          <div className="flex items-center gap-2" data-testid="text-fab-cta-address">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-fab-cta-email">
            <Mail className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </div>
        </div>
        <a href="/contact">
          <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-fab-contact">
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
        <span className="font-heading text-sm font-semibold text-foreground/50">
          <span className="text-primary">Pro</span>Cut & Coat
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

export default function MetalFabricationOrlando() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Metal Fabrication, Laser Cutting &amp; Powder Coating | Orlando FL</title>
        <meta name="description" content="ProCut & Coat is a full-service metal fabrication shop in Orlando, FL offering precision laser cutting, sheet-metal bending, and professional powder coating — all completed in-house for faster turnaround and consistent quality." />
        <meta property="og:title" content="Metal Fabrication, Laser Cutting & Powder Coating | Orlando FL" />
        <meta property="og:description" content="ProCut & Coat is a full-service metal fabrication shop in Orlando, FL offering precision laser cutting, sheet-metal bending, and professional powder coating — all completed in-house for faster turnaround and consistent quality." />
        <link rel="canonical" href="https://www.procutcoat.com/metal-fabrication-orlando-fl" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Metal Fabrication Services in Orlando, FL",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ProCut & Coat",
              "url": "https://www.procutcoat.com",
              "email": "info@procutcoat.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1345 Pine Ave",
                "addressLocality": "Orlando",
                "addressRegion": "FL",
                "postalCode": "32824",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Orlando",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceType": ["Metal Fabrication", "Laser Cutting", "Powder Coating", "Sheet Metal Bending", "Custom Metal Design"],
            "description": "Full-service metal fabrication shop in Orlando, FL offering precision laser cutting, sheet-metal bending, and professional powder coating — all completed in-house."
          })}
        </script>
      </Helmet>
      <Header />
      <PageHero />
      <IntroSection />
      <PowderCoatingSection />
      <LaserCuttingSection />
      <BendingSection />
      <DesignSection />
      <FullServiceSection />
      <PerfectForSection />
      <CTASection />
      <Footer />
    </div>
  );
}
