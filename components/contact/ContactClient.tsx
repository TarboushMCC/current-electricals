"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import { contactSchema, quoteSchema, type ContactFormValues, type QuoteFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const tabs = ["General Inquiry", "Request a Quote"];

export function ContactClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const quoteForm = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [] },
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const onContactSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const onQuoteSubmit = async (data: QuoteFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: selectedServices }),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full px-4 py-2.5 rounded-lg border bg-white text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-200",
      hasError ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-brand-400"
    );

  return (
    <section className="py-20 bg-section-steel relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top center glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      {/* Bottom-right glow */}
      <div
        className="absolute -bottom-24 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
      />
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact sidebar */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-xl mb-5">
                Contact Information
              </h2>

              <div className="flex flex-col gap-4">
                {COMPANY.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                      <p className="text-sm text-slate-700 group-hover:text-brand-600 transition-colors">
                        {phone}
                      </p>
                    </div>
                  </a>
                ))}

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email</p>
                    <p className="text-sm text-slate-700 group-hover:text-brand-600 transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Address</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-green-200 bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800">WhatsApp Us</p>
                <p className="text-xs text-green-600">Quick response guaranteed</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div
              className="rounded-xl overflow-hidden border border-brand-100 h-48 relative"
              style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-sm font-semibold text-slate-700">Musafah Industrial Area</p>
                <p className="text-xs text-slate-500">Abu Dhabi, UAE</p>
                <a
                  href="https://maps.google.com/?q=Musafah+Industrial+Area+Abu+Dhabi+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs text-brand-600 hover:text-brand-700 font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div
              className="p-5 rounded-xl bg-white"
              style={{
                border: "1px solid rgba(191,219,254,0.55)",
                boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <h3 className="font-semibold text-slate-900 text-sm mb-3">Business Hours</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monday – Friday</span>
                  <span className="text-slate-700 font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Saturday</span>
                  <span className="text-slate-700 font-medium">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 rounded-2xl border border-green-200 bg-green-50 h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Received!</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm">
                  Thank you for reaching out to CurrentElectricals. Our team will review
                  your inquiry and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div
                className="p-7 rounded-2xl bg-white"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.08), 0 16px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Tab switcher */}
                <div className="flex gap-1 mb-7 bg-slate-100 rounded-xl p-1">
                  {tabs.map((tab, i) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(i)}
                      className={cn(
                        "flex-1 py-2 rounded-lg text-sm font-medium transition-all",
                        activeTab === i
                          ? "bg-white text-brand-700 shadow-sm border border-brand-100"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* General inquiry form */}
                {activeTab === 0 && (
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input {...contactForm.register("name")} placeholder="Your name" className={inputClass(!!contactForm.formState.errors.name)} />
                        {contactForm.formState.errors.name && <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input {...contactForm.register("email")} type="email" placeholder="your@email.com" className={inputClass(!!contactForm.formState.errors.email)} />
                        {contactForm.formState.errors.email && <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                        <input {...contactForm.register("phone")} placeholder="+971 50 000 0000" className={inputClass(!!contactForm.formState.errors.phone)} />
                        {contactForm.formState.errors.phone && <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                        <input {...contactForm.register("company")} placeholder="Your company name" className={inputClass(false)} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                      <input {...contactForm.register("subject")} placeholder="How can we help?" className={inputClass(!!contactForm.formState.errors.subject)} />
                      {contactForm.formState.errors.subject && <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                      <textarea {...contactForm.register("message")} rows={5} placeholder="Tell us about your inquiry..." className={cn(inputClass(!!contactForm.formState.errors.message), "resize-none")} />
                      {contactForm.formState.errors.message && <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>
                  </form>
                )}

                {/* Quote request form */}
                {activeTab === 1 && (
                  <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input {...quoteForm.register("name")} placeholder="Your name" className={inputClass(!!quoteForm.formState.errors.name)} />
                        {quoteForm.formState.errors.name && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input {...quoteForm.register("email")} type="email" placeholder="your@email.com" className={inputClass(!!quoteForm.formState.errors.email)} />
                        {quoteForm.formState.errors.email && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                        <input {...quoteForm.register("phone")} placeholder="+971 50 000 0000" className={inputClass(!!quoteForm.formState.errors.phone)} />
                        {quoteForm.formState.errors.phone && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
                        <input {...quoteForm.register("company")} placeholder="Your company" className={inputClass(!!quoteForm.formState.errors.company)} />
                        {quoteForm.formState.errors.company && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.company.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Type *</label>
                        <input {...quoteForm.register("projectType")} placeholder="e.g. Commercial Tower" className={inputClass(!!quoteForm.formState.errors.projectType)} />
                        {quoteForm.formState.errors.projectType && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.projectType.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Location *</label>
                        <input {...quoteForm.register("location")} placeholder="Abu Dhabi / Dubai / UAE" className={inputClass(!!quoteForm.formState.errors.location)} />
                        {quoteForm.formState.errors.location && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.location.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Services Required *</label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.shortTitle)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                              selectedServices.includes(s.shortTitle)
                                ? "bg-brand-600 border-brand-600 text-white"
                                : "border-slate-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700"
                            )}
                          >
                            {s.shortTitle}
                          </button>
                        ))}
                      </div>
                      {quoteForm.formState.errors.services && <p className="text-xs text-red-500 mt-1">Please select at least one service</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Required Timeline *</label>
                        <input {...quoteForm.register("timeline")} placeholder="e.g. 3 months" className={inputClass(!!quoteForm.formState.errors.timeline)} />
                        {quoteForm.formState.errors.timeline && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.timeline.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Budget</label>
                        <input {...quoteForm.register("budget")} placeholder="Optional" className={inputClass(false)} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Description *</label>
                      <textarea {...quoteForm.register("description")} rows={4} placeholder="Describe your project requirements in detail..." className={cn(inputClass(!!quoteForm.formState.errors.description), "resize-none")} />
                      {quoteForm.formState.errors.description && <p className="text-xs text-red-500 mt-1">{quoteForm.formState.errors.description.message}</p>}
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? "Submitting..." : <><Send className="w-4 h-4" /> Submit Quote Request</>}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
