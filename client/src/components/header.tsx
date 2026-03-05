import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import logoImage from "@assets/Logo_1772749444787.jpeg";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const isServices = location === "/metal-fabrication-orlando-fl";
  const isProcess = location === "/our-process";
  const isWhoWeServe = location === "/who-we-serve";
  const isContact = location === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img src={logoImage} alt="ProCut & Coat logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" data-testid="img-header-logo" />
            <span className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              <span className="text-primary">Pro</span>Cut & Coat
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            <a
              href="/"
              className={`text-sm font-medium transition-colors ${isHome ? "text-primary" : "text-foreground/80"}`}
              data-testid="link-home"
            >
              Home
            </a>
            <a
              href="/metal-fabrication-orlando-fl"
              className={`text-sm font-medium transition-colors ${isServices ? "text-primary" : "text-foreground/80"}`}
              data-testid="link-services"
            >
              Our Services
            </a>
            <a
              href="/our-process"
              className={`text-sm font-medium transition-colors ${isProcess ? "text-primary" : "text-foreground/80"}`}
              data-testid="link-process"
            >
              Our Process
            </a>
            <a
              href="/who-we-serve"
              className={`text-sm font-medium transition-colors ${isWhoWeServe ? "text-primary" : "text-foreground/80"}`}
              data-testid="link-who-we-serve"
            >
              Who We Serve
            </a>
            <a
              href="/contact"
              className={`text-sm font-medium transition-colors ${isContact ? "text-primary" : "text-foreground/80"}`}
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-hamburger"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
            data-testid="nav-mobile"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a
                href="/"
                className={`text-sm font-medium transition-colors py-2 ${isHome ? "text-primary" : "text-foreground/80"}`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-home-mobile"
              >
                Home
              </a>
              <a
                href="/metal-fabrication-orlando-fl"
                className={`text-sm font-medium transition-colors py-2 ${isServices ? "text-primary" : "text-foreground/80"}`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-services-mobile"
              >
                Our Services
              </a>
              <a
                href="/our-process"
                className={`text-sm font-medium transition-colors py-2 ${isProcess ? "text-primary" : "text-foreground/80"}`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-process-mobile"
              >
                Our Process
              </a>
              <a
                href="/who-we-serve"
                className={`text-sm font-medium transition-colors py-2 ${isWhoWeServe ? "text-primary" : "text-foreground/80"}`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-who-we-serve-mobile"
              >
                Who We Serve
              </a>
              <a
                href="/contact"
                className={`text-sm font-medium transition-colors py-2 ${isContact ? "text-primary" : "text-foreground/80"}`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-contact-mobile"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
