"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu]     = useState<string | null>(null);
  const pathname  = usePathname();
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); setActiveMenu(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const enter = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveMenu(label);
  };
  const leave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 160);
  };

  /* whether current page has a dark (blue) hero — show white nav text */
  const onHeroPage = ["/" , "/about", "/services", "/industries", "/projects",
    "/certifications", "/careers", "/contact"].includes(pathname)
    || pathname.startsWith("/services/");

  const navTextClass  = isScrolled ? "text-slate-700" : (onHeroPage ? "text-white/90" : "text-slate-700");
  const logoTextClass = isScrolled ? "text-slate-900" : (onHeroPage ? "text-white"    : "text-slate-900");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/82 backdrop-blur-2xl shadow-[0_4px_32px_rgba(37,99,235,0.10),0_1px_0_rgba(191,219,254,0.6)] border-b border-brand-100/70"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",
                isScrolled
                  ? "bg-brand-600 group-hover:bg-brand-700"
                  : "bg-white/20 backdrop-blur-sm group-hover:bg-white/30"
              )}>
                <Zap className={cn("w-5 h-5", isScrolled ? "text-white" : "text-white")} strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className={cn("font-heading font-bold text-[17px] tracking-tight transition-colors", logoTextClass)}>
                  Current<span className={isScrolled ? "text-brand-600" : "text-brand-300"}>Electricals</span>
                </span>
                <p className={cn("text-[10px] font-medium tracking-[0.14em] uppercase mt-0.5", isScrolled ? "text-slate-400" : "text-white/60")}>
                  Abu Dhabi, UAE
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children ? enter(item.label) : undefined}
                  onMouseLeave={leave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer",
                      pathname === item.href
                        ? (isScrolled ? "text-brand-600 bg-brand-50" : "text-white bg-white/15")
                        : (isScrolled
                          ? "text-slate-600 hover:text-brand-700 hover:bg-brand-50"
                          : "text-white/80 hover:text-white hover:bg-white/15")
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMenu === item.label && "rotate-180")} />
                    )}
                  </Link>

                  {/* Mega-menu dropdown */}
                  <AnimatePresence>
                    {item.children && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => enter(item.label)}
                        onMouseLeave={leave}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] rounded-2xl overflow-hidden"
                        style={{
                          background: "rgba(255,255,255,0.98)",
                          backdropFilter: "blur(16px)",
                          border: "1px solid #DBEAFE",
                          boxShadow: "0 16px 48px rgba(37,99,235,0.14), 0 2px 8px rgba(37,99,235,0.06)",
                        }}
                      >
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-500 mb-3 px-2">
                            Our Services
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition-all duration-150 cursor-pointer text-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 transition-colors flex-shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-brand-100 px-2">
                            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800 cursor-pointer transition-colors">
                              View all services <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone[0]}`}
                className={cn("flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors",
                  isScrolled ? "text-slate-500 hover:text-brand-600" : "text-white/75 hover:text-white")}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{COMPANY.phone[0]}</span>
              </a>
              <Link href="/contact" className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                isScrolled
                  ? "bg-brand-600 text-white hover:bg-brand-700 shadow-blue-sm"
                  : "bg-white text-brand-700 hover:bg-brand-50 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              )}>
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn("lg:hidden p-2 rounded-lg cursor-pointer transition-colors",
                isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/15")}
              aria-label="Toggle navigation"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-[300px] bg-white border-l border-brand-100 shadow-[−8px_0_32px_rgba(37,99,235,0.10)] overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-heading font-bold text-slate-900">
                      Current<span className="text-brand-600">Electricals</span>
                    </span>
                  </Link>
                  <button onClick={() => setIsMobileOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer" aria-label="Close">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav */}
                <nav className="flex flex-col gap-0.5">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all",
                          pathname === item.href
                            ? "text-brand-600 bg-brand-50"
                            : "text-slate-600 hover:text-brand-700 hover:bg-brand-50"
                        )}
                      >
                        {item.label}
                        {item.children && <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-100 pl-3 mb-2">
                          {item.children.slice(0, 6).map((child) => (
                            <Link key={child.href} href={child.href} className="text-sm text-slate-500 hover:text-brand-700 py-1 cursor-pointer transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-brand-100 flex flex-col gap-3">
                  <a href={`tel:${COMPANY.phone[0]}`} className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
                    <Phone className="w-4 h-4 text-brand-500" /> {COMPANY.phone[0]}
                  </a>
                  <Link href="/contact" className="btn-primary justify-center">Get a Quote</Link>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="btn-outline justify-center text-sm cursor-pointer">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
