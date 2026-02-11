import { useState } from "react";
import { ChevronRight, Play, MapPin, Mail, ArrowUp, Minus, Plus, Calendar, CheckSquare, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { useScrollReveal, useLaserReveal } from "@/hooks/use-scroll-reveal";
import imagePlaceholder2 from "@assets/Image_placeholder_2_1770751942833.jpg";
import heroMetalImage from "@assets/AdobeStock_1491690900_Large_1770847813495.jpeg";

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

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full flex items-end min-h-[60vh] md:h-screen"
      data-testid="section-full-hero"
    >
      <div className="absolute inset-0 bg-muted overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          data-testid="video-hero"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <h1 className="section-child section-child-1 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl mb-6" data-testid="text-full-hero-title">
          Full-Service Metal Fabrication & Finishing in Orlando, FL
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

function TaglineSection() {
  const ref = useScrollReveal<HTMLElement>({ exitFade: true });

  return (
    <section ref={ref} id="tagline" className="relative pt-24 sm:pt-28 pb-16 lg:pb-20" data-testid="section-tagline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/80 leading-relaxed max-w-4xl mb-12 lg:mb-16" data-testid="text-tagline">
          Powder coating, precision cutting, and sheet-metal bending — handled under one roof for faster turnaround, lower total cost, and consistent results.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "One Roof Workflow",
              desc: "Cut, bend, and finish without shipping parts between shops.",
            },
            {
              title: "Faster Turnaround",
              desc: "9 kW of power with circulation fans and Unitronix monitoring cures coats in just 10 minutes. Full cure cycles complete in about 1 hour, delivering smooth, repeatable results every time.",
            },
            {
              title: "Consistent Quality",
              desc: "Single technical team + controlled process = reliable results.",
            },
            {
              title: "Made for Pros & Makers",
              desc: "From commercial partners to one-off custom builds.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href="/contact"
              className="block bg-card/60 backdrop-blur-sm border border-card-border rounded-md p-5 hover-elevate transition-all group text-center"
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
              ProCut & Coat streamlines production by combining powder coating, precision cutting, and sheet-metal bending in one Orlando location. That means fewer delays, fewer variables, and a smoother build from start to finish.
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
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
              Designed for predictable delivery
            </h4>
            <p className="text-foreground/70 text-base leading-relaxed" data-testid="text-delivery-description">
              Clear scheduling, quick feedback, and one accountable team — so your project moves forward without surprises.
            </p>
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="mb-4">
              <span className="text-primary text-xs font-medium tracking-widest uppercase" data-testid="text-workshop-label">
                FULL-SERVICE ORLANDO SHOP FOR REAL WORK
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground mb-8 lg:mb-10" data-testid="text-workshop-title">
              Built Tough for Real Workshops
            </h2>
            <div className="relative rounded-md overflow-hidden aspect-[4/3] bg-muted flex items-center justify-center" data-testid="img-workshop-placeholder">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="text-muted-foreground text-sm font-medium z-10">IMAGE_PLACEHOLDER_1</span>
            </div>
          </div>

          <div>
            <p className="text-foreground/70 text-base leading-relaxed mb-6" data-testid="text-workshop-description">
              We support prototypes, custom builds, and small-batch manufacturing with dependable processes and durable finishes. Whether you're a fabrication shop, contractor, studio, or maker — you'll get consistent results and a timeline you can plan around.
            </p>
            <p className="text-foreground font-semibold mb-4">What we're set up for</p>
            <ul className="space-y-2 mb-8">
              {[
                "Prototypes and custom one-offs",
                "Small batches and repeat jobs",
                "Clean, durable powder-coated finishes",
                "Precision cutting + accurate forming",
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
        <div className="relative rounded-md overflow-hidden aspect-video bg-muted flex items-center justify-center mb-16" data-testid="video-placeholder">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <button
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-all"
            data-testid="button-play-video"
          >
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" />
          </button>
          <span className="absolute bottom-6 text-muted-foreground text-sm font-medium z-10">VIDEO_PLACEHOLDER_1</span>
        </div>

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
              desc: "Powder-coated results built to last and look professional.",
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

          {[
            { top: "25%", left: "20%" },
            { top: "45%", left: "55%" },
            { top: "65%", left: "35%" },
            { top: "40%", left: "75%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute z-10"
              style={{ top: pos.top, left: pos.left }}
              data-testid={`hotspot-dot-${i}`}
            >
              <span className="block w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="absolute inset-0 w-3 h-3 rounded-full bg-primary/40 animate-ping" />
            </div>
          ))}
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
            <span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block" data-testid="text-perfect-label">
              Perfect for..
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[47px] font-bold text-foreground mb-6 leading-tight" data-testid="text-perfect-title">
              Perfect for shops, builders, studios — and ambitious makers.
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-10" data-testid="text-perfect-description">
              Our integrated workflow helps you move faster and avoid coordination headaches. If you need dependable cutting, bending, and powder coating locally in Orlando, we'll make your next run smoother.
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
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 lg:py-28" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: "50K", label: "Parts coated with Pecica" },
            { value: "80%", label: "Average reduction in turnaround time" },
            { value: "50K", label: "Annual savings for typical customer" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center py-12 sm:py-16"
              data-testid={`stat-${i}`}
            >
              <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-foreground/[0.07] text-[96px] sm:text-[120px] lg:text-[144px] select-none leading-none">
                {stat.value}
              </span>
              <p className="relative z-10 text-foreground/80 text-sm sm:text-base font-medium text-center max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <LaserLine direction="ltr" duration={7} delay={1} className="bottom-0" />
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLElement>();

  const faqs = [
    {
      q: "How do I get pricing?",
      a: "Email us the part details (dimensions, quantity, material, and finish preference). We'll confirm scope and provide a quote.",
    },
    {
      q: "What's the usual turnaround time?",
      a: "It depends on job complexity and current queue — but our integrated workflow reduces delays because your parts stay in one facility.",
    },
    {
      q: "Do you take small jobs and one-offs?",
      a: "Yes. We work with both commercial partners and independent makers.",
    },
    {
      q: "What finishes do you offer?",
      a: "Durable powder-coated finishes with consistent, professional results. Share your desired look and use-case and we'll guide you.",
    },
    {
      q: "Where are you located?",
      a: "1345 Pine Ave, Orlando, FL 32824.",
    },
    {
      q: "What's the best way to contact you?",
      a: "Email: info@procutcoat.com",
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
          Ready to start a project?
        </h2>
        <p className="text-foreground/70 text-base leading-relaxed mb-8" data-testid="text-cta-description">
          Send your part details and timeline — we'll respond with next steps.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-foreground/60 mb-8">
          <div className="flex items-center gap-2" data-testid="text-cta-address">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span><strong className="text-foreground">Address:</strong> 1345 Pine Ave, Orlando, FL 32824</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-cta-email">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span><strong className="text-foreground">Email:</strong> info@procutcoat.com</span>
          </div>
        </div>
        <a href="/contact">
          <Button className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-lets-talk">
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

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <FullHeroSection />
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
