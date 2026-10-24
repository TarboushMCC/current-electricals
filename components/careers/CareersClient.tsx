"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JOB_OPENINGS } from "@/lib/constants";
import { careerSchema, type CareerFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const benefits = [
  "Competitive salary package",
  "Health insurance coverage",
  "Annual leave per UAE labour law",
  "Professional development training",
  "Career progression opportunities",
  "Friendly team environment",
];

const inputClass = (hasError: boolean) =>
  cn(
    "w-full px-4 py-2.5 rounded-lg border bg-white text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300",
    hasError ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-brand-400"
  );

export function CareersClient() {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
  });

  const onSubmit = async (data: CareerFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, position: selectedPosition || data.position }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // Silent — user sees form state
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Jobs listing */}
      <section className="py-20 bg-section-steel relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-55 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-56 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div className="section-container relative">
          <SectionHeader
            label="Open Positions"
            title="Current Job"
            titleHighlight="Openings"
            description="We are looking for talented engineers and technicians to join our growing team in Abu Dhabi."
            align="left"
            className="mb-12"
          />

          <div className="flex flex-col gap-3">
            {JOB_OPENINGS.map((job) => (
              <motion.div
                key={job.id}
                layout
                className="rounded-2xl bg-white overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <button
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-brand-50/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Briefcase className="w-3.5 h-3.5 text-brand-500" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-brand-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-brand-500" />
                        {job.experience} experience
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-brand-50 border border-brand-200 text-brand-700">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  {openJob === job.id ? (
                    <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                  )}
                </button>

                <AnimatePresence>
                  {openJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                        <p className="text-sm text-slate-500 leading-relaxed mt-4 mb-5">
                          {job.description}
                        </p>
                        <h4 className="font-semibold text-slate-900 text-sm mb-3">Requirements</h4>
                        <ul className="flex flex-col gap-2 mb-5">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => {
                            setSelectedPosition(job.title);
                            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="btn-primary text-sm px-5 py-2"
                        >
                          Apply for this Role
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-section-frost relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-55 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-chip mb-6">Why Join Us</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                Why Work at{" "}
                <span className="gradient-text">CurrentElectricals?</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                We are a growing company with a strong project pipeline and a culture
                built on technical excellence, safety, and teamwork.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl bg-white text-center"
              style={{
                border: "1px solid rgba(191,219,254,0.55)",
                boxShadow: "0 4px 12px rgba(37,99,235,0.08), 0 16px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <p className="text-5xl font-bold text-brand-700 font-heading mb-1">15+</p>
              <p className="text-slate-500 mb-6 text-sm">Years in business</p>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent mb-6" />
              <p className="text-5xl font-bold text-brand-700 font-heading mb-1">50+</p>
              <p className="text-slate-500 mb-6 text-sm">Team members</p>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent mb-6" />
              <p className="text-xs text-slate-400 italic">
                &ldquo;We value our engineers and invest in their growth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 bg-section-steel relative overflow-hidden" id="application-form">
        <div
          className="absolute inset-0 opacity-45 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              label="Apply Now"
              title="Submit Your"
              titleHighlight="Application"
              description="Fill in the form below and our HR team will review your application and respond within 5 business days."
              className="mb-10"
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-10 rounded-2xl border border-green-200 bg-green-50"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                <p className="text-slate-500">
                  Thank you for applying to CurrentElectricals. Our HR team will review
                  your application and contact you within 5 business days.
                </p>
              </motion.div>
            ) : (
              <div
                className="p-8 rounded-2xl bg-white"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.08), 0 16px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input {...register("name")} placeholder="Your full name" className={inputClass(!!errors.name)} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input {...register("email")} type="email" placeholder="your@email.com" className={inputClass(!!errors.email)} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                      <input {...register("phone")} placeholder="+971 50 000 0000" className={inputClass(!!errors.phone)} />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Position Applying For *</label>
                      <input
                        {...register("position")}
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        placeholder="Job title or department"
                        className={inputClass(!!errors.position)}
                      />
                      {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Years of Experience *</label>
                      <input {...register("experience")} placeholder="e.g. 5 years" className={inputClass(!!errors.experience)} />
                      {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Education / Qualification *</label>
                      <input {...register("education")} placeholder="e.g. B.Eng Electrical Engineering" className={inputClass(!!errors.education)} />
                      {errors.education && <p className="text-xs text-red-500 mt-1">{errors.education.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Cover Letter / Message *</label>
                    <textarea
                      {...register("coverLetter")}
                      rows={5}
                      placeholder="Tell us about your experience, skills, and why you want to join CurrentElectricals..."
                      className={cn(inputClass(!!errors.coverLetter), "resize-none")}
                    />
                    {errors.coverLetter && <p className="text-xs text-red-500 mt-1">{errors.coverLetter.message}</p>}
                  </div>

                  <p className="text-xs text-slate-400">
                    Please email your CV to{" "}
                    <a href="mailto:hr@currentelectricals.ae" className="text-brand-600 hover:underline">
                      hr@currentelectricals.ae
                    </a>{" "}
                    along with your application.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
