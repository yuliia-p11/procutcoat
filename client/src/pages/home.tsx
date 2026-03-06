import { useState, useRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Play, MapPin, Mail, Phone, ArrowUp, Minus, Plus, Calendar, CheckSquare, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { useScrollReveal, useLaserReveal } from "@/hooks/use-scroll-reveal";
import imagePlaceholder2 from "@assets/Image_placeholder_2_1770751942833.jpg";
import heroMetalImage from "@assets/AdobeStock_1491690900_Large_1770847813495.jpeg";
import logoImage from "@assets/logo_cropped.png";
import whyPowderCoatImage from "@assets/AdobeStock_1740866468_Large_1770847990943.jpeg";
import workshopImage from "@assets/AdobeStock_848048449_2_Large_1770848344124.jpeg";
import statsBgImage from "@assets/AdobeStock_955805865_Large-compressed_1772750478486.jpg";

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

function FullHeroSection() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.05 });
  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    if (!node) return;
    node.defaultMuted = true;
    node.muted = true;
    node.setAttribute("muted", "");
    node.setAttribute("playsinline", "");
    node.setAttribute("webkit-playsinline", "");
    const tryPlay = () => {
      node.muted = true;
      const p = node.play();
      if (p) p.catch(() => {});
    };
    tryPlay();
    node.addEventListener("loadedmetadata", tryPlay);
    node.addEventListener("canplay", tryPlay);
    node.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) tryPlay();
    });
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) tryPlay();
      },
      { threshold: 0.1 }
    );
    io.observe(node);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full flex items-end min-h-[60vh] md:h-screen"
      data-testid="section-full-hero"
    >
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          data-testid="video-hero"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12">
        <h1 className="section-child section-child-1 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl mb-6" data-testid="text-full-hero-title">
          Full-Service Metal Fabrication, Laser Cutting & Powder Coating in Orlando, FL
        </h1>
        <div className="section-child section-child-2">
          <a href="#tagline">
            <Button className="bg-primary text-white border border-primary-border" data-testid="button-learn-more">
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
      <LaserLine direction="ltr" duration={5} className="bottom-0 z-20" />
    </section>
  );
}

function IdentitySection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section
      ref={ref}
      id="identity"
      className="relative py-24 sm:py-28 lg:py-32"
      style={{
        background: "linear-gradient(170deg, hsl(var(--background)) 0%, hsl(var(--muted) / 0.3) 40%, hsl(var(--muted) / 0.15) 70%, hsl(var(--background)) 100%)",
      }}
      data-testid="section-identity"
    >
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 10%, hsl(var(--primary) / 0.25) 50%, transparent 90%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          <div className="md:w-48 shrink-0">
            <span
              className="font-heading text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-primary"
              style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.3)" }}
              data-testid="text-identity-label"
            >
              About<br className="hidden md:block" /> ProCut &amp; Coat
            </span>
          </div>
          <div className="hidden md:block w-px self-stretch" style={{ background: "linear-gradient(180deg, hsl(var(--foreground) / 0.08), hsl(var(--foreground) / 0.15), hsl(var(--foreground) / 0.08))" }} />
          <div className="max-w-[640px] space-y-5 text-left md:text-right md:ml-auto" data-testid="text-identity-blurb">
            <p
              className="text-foreground/65 text-base sm:text-lg font-light leading-[2] tracking-wide"
              style={{ textShadow: "0 1px 2px hsl(var(--background) / 0.5)" }}
            >
              <span className="font-heading font-medium text-foreground/90">ProCut &amp; Coat</span> is a <span className="font-medium text-foreground/90">locally owned and operated</span> job shop located at 1345 Pine Ave, Orlando — specializing in high-quality metal finishing and fabrication for <span className="font-medium text-foreground/90">clients across the state and beyond</span>.
            </p>
            <p
              className="text-foreground/65 text-base sm:text-lg font-light leading-[2] tracking-wide"
              style={{ textShadow: "0 1px 2px hsl(var(--background) / 0.5)" }}
            >
              Our <a href="/our-process" className="font-medium text-foreground/90 hover:text-primary transition-colors">&ldquo;cut-to-coat&rdquo; workflow</a> keeps every step under one roof, saving our clients time and shipping costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TaglineSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} id="tagline" className="relative pt-24 sm:pt-28 pb-16 lg:pb-20" data-testid="section-tagline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/80 leading-relaxed max-w-4xl mb-12 lg:mb-16" data-testid="text-tagline">
          We provide professional sheet-metal bending, precision cutting, and durable powder coating under one roof.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "In-House \"Cut, Bend & Coat\" Workflow",
              desc: "Cut, bend, and finish your parts in one facility without the delays of shipping between shops.",
            },
            {
              title: "Professional-Grade, In-House Results",
              desc: "A single technical team manages every step — from raw metal to final finish. This controlled workflow ensures reliable, industrial-quality results run after run.",
            },
            {
              title: "Faster Turnaround",
              desc: "Our high-efficiency system uses 9 kW of power, circulation fans, and Unitronix monitoring to cure coats in just 10 minutes. Full cure cycles complete in about 1 hour, delivering smooth, repeatable results every time.",
            },
            {
              title: "Built for Professionals and Independent Makers",
              desc: "From industrial partners to one-off custom builds, we bring the same level of discipline, durability, and process control to every project.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href="/contact"
              className="flex flex-col items-center justify-center bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-5 hover-elevate transition-all group text-center"
              data-testid={`card-feature-${i}`}
            >
              <h4 className="font-heading text-sm font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-foreground/60 text-xs leading-relaxed mb-3">{item.desc}</p>
              <span className="inline-flex items-center justify-center text-foreground/60 text-xs font-medium gap-1 transition-all w-full">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="section-child section-child-1 inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4" data-testid="text-hero-label">
              New Technology
            </span>
            <h1 className="section-child section-child-2 font-heading text-4xl sm:text-5xl lg:text-[57px] font-bold text-foreground leading-tight mb-6" data-testid="text-hero-title">
              From Raw Metal to Finished Product{" "}
              <span className="text-primary">In One Facility</span>
            </h1>
            <p className="section-child section-child-3 text-foreground/70 text-lg leading-relaxed mb-8" data-testid="text-hero-description">
              ProCut & Coat streamlines production by combining precision laser cutting, sheet-metal bending, and professional powder coating under one roof. This means fewer delays, fewer variables, and a smoother build from start to finish.
            </p>
            <div className="section-child section-child-3 mb-8 lg:mb-0">
              <a href="/contact">
                <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-hero-contact">
                  Contact us
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
            <div className="section-child section-child-4 lg:hidden mt-8">
              <img
                src={heroMetalImage}
                alt="Precision laser cutting metal with sparks"
                className="w-full h-auto rounded-md object-cover"
                data-testid="img-hero-metal-mobile"
              />
            </div>
          </div>
          <div className="hidden lg:block section-child section-child-4">
            <img
              src={heroMetalImage}
              alt="Precision laser cutting metal with sparks"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-hero-metal"
            />
          </div>
        </div>
      </div>
      <ScrollLaserLine direction="rtl" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function WhySection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="hidden lg:block">
            <img
              src={whyPowderCoatImage}
              alt="Powder coating metal profiles"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-why-powder"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="font-heading text-lg font-semibold text-accent mb-4" data-testid="text-why-title">
                Why ProCut & Coat
              </h4>
              <p className="text-foreground/70 text-base leading-relaxed" data-testid="text-why-description">
                We've spent years delivering for long-term industrial partners. Now we're bringing that same standard of planning, communication, and quality control to businesses and independent makers.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-accent mb-4" data-testid="text-delivery-title">
                Predictable Metal Fabrication Delivery
              </h4>
              <p className="text-foreground/70 text-base leading-relaxed" data-testid="text-delivery-description">
                Clear scheduling, quick feedback, and one accountable team — so your project moves forward without surprises.
              </p>
            </div>
            <div className="lg:hidden -mx-4 sm:-mx-6">
              <div className="relative overflow-hidden rounded-md mx-4 sm:mx-6">
                <img
                  src={whyPowderCoatImage}
                  alt="Powder coating metal profiles"
                  className="w-full h-48 object-cover"
                  data-testid="img-why-powder-mobile"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkshopSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-workshop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-primary text-xs font-medium tracking-widest uppercase" data-testid="text-workshop-label">
            FULL-SERVICE ORLANDO SHOP FOR REAL WORK
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground mb-8 lg:mb-10" data-testid="text-workshop-title">
          Built Tough for Real Workshops
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="relative rounded-md overflow-hidden aspect-[4/3]" data-testid="img-workshop">
              <img
                src={workshopImage}
                alt="Worker in protective gear spray coating in workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-workshop-description">
              We support prototypes, custom builds, and small-batch manufacturing with precision laser cutting, accurate forming, and clean, durable powder-coated finishes. Whether you're a fabrication shop, contractor, studio, or independent maker in the Orlando area, you'll get consistent results and timelines you can plan around.
            </p>
            <p className="text-foreground font-semibold mb-4">What we're set up for</p>
            <ul className="space-y-2 mb-8">
              {[
                "Prototypes and custom one-offs metal components",
                "Small batches and repeat fabrication runs",
                "Clean, durable powder-coated finishes",
                "Precision laser cutting + accurate sheet-metal forming",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm" data-testid={`text-setup-item-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-workshop-contact">
                Contact us
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
        <p className="text-foreground/70 text-base leading-relaxed mt-10" data-testid="text-workshop-cad">
          Have an idea but not a finalized design? Our team can assist with CAD preparation, design refinement, and prototype development to help you move from concept to production-ready parts.
        </p>
      </div>
      <ScrollLaserLine direction="ltr" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function VideoSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card/30" data-testid="section-video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fast Scheduling",
              desc: "Simple intake, quick confirmation, reliable timelines.",
              icon: Calendar,
            },
            {
              title: "Quality Control",
              desc: "Fewer handoffs and tighter checks throughout the workflow.",
              icon: CheckSquare,
            },
            {
              title: "Durable Finishes",
              desc: "Powder-coated results built to last, with professional-quality finishes every time.",
              icon: Route,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-6 hover-elevate transition-all text-center"
              data-testid={`card-benefit-${i}`}
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HotspotSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-28" data-testid="section-hotspot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden aspect-[16/9] bg-muted flex items-center justify-center" data-testid="img-hotspot-placeholder">
          <img src={imagePlaceholder2} alt="Pecica equipment hotspot" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        </div>
      </div>
    </section>
  );
}

function PerfectForSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-card/30" data-testid="section-perfect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div>
            <span className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-4 block" data-testid="text-perfect-label">
              Perfect for..
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground mb-6 leading-tight" data-testid="text-perfect-title">
              Perfect for Orlando-Area Shops, Builders, Studios & Makers
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-10" data-testid="text-perfect-description">
              Our integrated laser cutting, bending, and powder coating workflow helps Central Florida businesses move faster and avoid coordination headaches. If you're looking for dependable local metal fabrication and powder coating in Orlando, ProCut & Coat keeps your projects moving smoothly.
            </p>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-perfect-contacts">
                Contacts
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <ScrollLaserLine direction="rtl" className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  const stats = [
    { value: "50K", label: "Parts coated" },
    { value: "80%", label: "Average reduction in turnaround time" },
  ];

  const statsBgImg = statsBgImage;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const scrollableHeight = rect.height - window.innerHeight;
          if (scrollableHeight <= 0) {
            setProgress(0);
            ticking = false;
            return;
          }
          const rawProgress = -rect.top / scrollableHeight;
          setProgress(Math.max(0, Math.min(1, rawProgress)));
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stat1Opacity = progress < 0.3 ? 1 : Math.max(0, 1 - (progress - 0.3) / 0.2);
  const stat1Y = progress < 0.3 ? 0 : -((progress - 0.3) / 0.2) * 60;
  const stat1Scale = progress < 0.3 ? 1 : 1 - ((progress - 0.3) / 0.2) * 0.05;
  const stat2Opacity = progress < 0.4 ? 0 : progress < 0.6 ? (progress - 0.4) / 0.2 : 1;
  const stat2Y = progress < 0.4 ? 60 : progress < 0.6 ? 60 - ((progress - 0.4) / 0.2) * 60 : 0;
  const stat2Scale = progress < 0.4 ? 0.95 : progress < 0.6 ? 0.95 + ((progress - 0.4) / 0.2) * 0.05 : 1;

  return (
    <>
      <section ref={ref} className="hidden lg:block relative overflow-hidden" data-testid="section-stats-desktop">
        <div className="relative min-h-[400px]">
          <div className="absolute inset-y-0 left-0 w-[65%]" aria-hidden="true">
            <img
              src={statsBgImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.3 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 35%, hsl(var(--background) / 0.4) 55%, hsl(var(--background) / 0.75) 70%, hsl(var(--background)) 90%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to left, transparent 80%, hsl(var(--background)) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 20%, transparent 80%, hsl(var(--background)) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto flex items-center justify-end py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-center gap-20 w-2/3">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center" data-testid={`stat-desktop-${i}`}>
                  <span className="font-heading font-bold text-foreground text-[96px] lg:text-[120px] leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <p className="mt-4 text-foreground/60 text-lg sm:text-xl font-medium max-w-[320px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={containerRef} className="relative lg:hidden" style={{ height: "250vh" }} data-testid="section-stats">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <img
                src={statsBgImg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: 0.18,
                  filter: "blur(3px) brightness(0.4)",
                  objectPosition: "70% center",
                }}
              />
            </div>
            {stats.map((stat, i) => {
              const opacity = i === 0 ? stat1Opacity : stat2Opacity;
              const translateY = i === 0 ? stat1Y : stat2Y;
              const scale = i === 0 ? stat1Scale : stat2Scale;
              return (
                <div
                  key={i}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    pointerEvents: opacity > 0.5 ? "auto" : "none",
                    willChange: "opacity, transform",
                  }}
                  data-testid={`stat-${i}`}
                >
                  <span className="font-heading font-bold text-foreground text-[72px] sm:text-[96px] leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <p className="mt-4 text-foreground/60 text-lg sm:text-xl font-medium text-center max-w-[320px]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          <LaserLine direction="ltr" duration={7} delay={1} className="bottom-0" />
        </div>
      </div>
    </>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLElement>();

  const faqs = [
    {
      q: "How do I get pricing?",
      a: "To receive a quote, email us your part details including dimensions, material, quantity, and desired finish. Our team will review the scope and respond with pricing and next steps.",
    },
    {
      q: "What's the usual turnaround time?",
      a: "Most Orlando laser cutting and powder coating projects are quoted within 24 hours. Because we eliminate the 'transit time' between a machine shop and a coat shop, we typically shave 3\u20135 days off standard industry lead times.",
    },
    {
      q: "Do you take small jobs and one-off projects?",
      a: "Yes. We support one-off custom builds, prototypes, and small-batch production, as well as repeat jobs for commercial partners and fabrication shops.",
    },
    {
      q: "What finishes do you offer?",
      a: "We offer durable, professional powder-coated finishes suitable for functional and aesthetic applications. If you have a specific look or use case in mind, we'll help guide finish selection.",
    },
    {
      q: "What materials can you work with?",
      a: "We commonly work with steel, aluminum, and other sheet metals suitable for laser cutting, forming, and powder coating. Share your material details with your request so we can confirm compatibility.",
    },
    {
      q: "Where are you located?",
      a: "Our facility is located at 1345 Pine Ave, Orlando, FL 32824, serving Orlando and the surrounding Central Florida area.",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-10" data-testid="text-faq-title">
          FAQ
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border" data-testid={`faq-item-${i}`}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                data-testid={`button-faq-${i}`}
              >
                <span className="font-medium text-foreground text-sm sm:text-base pr-4">{faq.q}</span>
                <span className="shrink-0 text-foreground/50">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-foreground/60 text-sm leading-relaxed pb-5" data-testid={`text-faq-answer-${i}`}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-28 bg-card/30" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-cta-title">
          Ready to start your project?
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-cta-description">
          Submit your part details and timeline. We'll respond promptly with next steps and availability.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-foreground/60 mb-8">
          <div className="flex items-center gap-2" data-testid="text-cta-address">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-cta-email">
            <Mail className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </div>
          <a href="tel:+16892124722" className="flex items-center gap-2 hover:text-foreground/80 transition-colors" data-testid="link-cta-phone">
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-foreground">Phone:</strong> +1 (689) 212-4722</span>
          </a>
        </div>
        <a href="/contact">
          <Button className="bg-primary text-primary-foreground border border-primary-border" data-testid="button-lets-talk">
            Let's Talk!
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
          <img src={logoImage} alt="ProCut & Coat logo" className="h-8 w-auto object-contain" data-testid="img-footer-logo" />
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

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Powder Coating & Precision Metal Services in Orlando, FL — Pro Cut & Coat</title>
        <meta name="description" content="Expert powder coating, precision cutting, and sheet metal bending in Orlando, FL. Fast turnaround, quality finishes, and local service." />
        <meta property="og:title" content="Powder Coating & Precision Metal Services in Orlando, FL — Pro Cut & Coat" />
        <meta property="og:description" content="Expert powder coating, precision cutting, and sheet metal bending in Orlando, FL. Fast turnaround, quality finishes, and local service." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pro Cut & Coat",
            "description": "Expert powder coating, precision laser cutting, and sheet metal bending services in Orlando, FL. Fast turnaround, quality finishes, and local service.",
            "url": "https://www.procutcoat.com",
            "email": "info@procutcoat.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1345 Pine Ave",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "postalCode": "32824",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.3888,
              "longitude": -81.3445
            },
            "areaServed": {
              "@type": "State",
              "name": "Florida"
            },
            "additionalType": "http://www.productontology.org/id/Powder_coating",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Metal Fabrication Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Powder Coating",
                    "description": "Durable, professional-grade powder coating finishes for metal parts and components."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Precision Laser Cutting",
                    "description": "High-precision laser cutting for custom metal parts and prototypes."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sheet Metal Bending",
                    "description": "Accurate sheet metal bending and forming for industrial and commercial applications."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Metal Design & Engineering",
                    "description": "Professional design assistance to turn sketches and ideas into technical CAD drawings and manufacture-ready blueprints."
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Header />
      <FullHeroSection />
      <IdentitySection />
      <TaglineSection />
      <HeroSection />
      <WhySection />
      <WorkshopSection />
      <VideoSection />
      <HotspotSection />
      <PerfectForSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
