import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // ── Brand Blues ──────────────────────────────────────────
        brand: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",   // primary
          700: "#1D4ED8",   // dark
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        // ── Ice Blue Neutrals ────────────────────────────────────
        ice: {
          50:  "#F8FBFF",
          100: "#EFF6FF",
          200: "#E0EFFE",
          300: "#C8DFFE",
        },
        // ── Hero section (keep deep blue for hero) ───────────────
        hero: {
          from: "#0D2882",
          to:   "#1A4FCC",
          mid:  "#1741B8",
        },
        // ── Semantic ─────────────────────────────────────────────
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // ── Fonts ──────────────────────────────────────────────────
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono:    ["JetBrains Mono", "Consolas", "monospace"],
      },

      // ── Background images ─────────────────────────────────────
      backgroundImage: {
        // Hero gradient
        "hero-gradient":
          "linear-gradient(135deg, #0D2882 0%, #1741B8 50%, #1A4FCC 100%)",
        // Radial blue glow
        "blue-glow":
          "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        // Subtle dot grid
        "dot-grid":
          "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        // Light section stripe
        "ice-gradient":
          "linear-gradient(180deg, #F8FBFF 0%, #EFF6FF 100%)",
        // Blue gradient (for CTA, cards)
        "brand-gradient":
          "linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #3B82F6 100%)",
        // Card hover gradient
        "card-hover-gradient":
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(239,246,255,0.6) 100%)",
      },

      backgroundSize: {
        "dot-20": "20px 20px",
        "dot-32": "32px 32px",
      },

      // ── Shadows ───────────────────────────────────────────────
      boxShadow: {
        "card":        "0 1px 4px rgba(37,99,235,0.05), 0 4px 16px rgba(37,99,235,0.06)",
        "card-hover":  "0 4px 24px rgba(37,99,235,0.14), 0 1px 4px rgba(37,99,235,0.06)",
        "card-active": "0 8px 40px rgba(37,99,235,0.18), 0 2px 8px rgba(37,99,235,0.08)",
        "blue":        "0 4px 20px rgba(37,99,235,0.35)",
        "blue-sm":     "0 2px 12px rgba(37,99,235,0.25)",
        "blue-lg":     "0 8px 40px rgba(37,99,235,0.40)",
        "glass":       "0 8px 32px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        "inner-glow":  "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(37,99,235,0.08)",
        "hero-float":  "0 20px 60px rgba(13,40,130,0.35), 0 4px 16px rgba(13,40,130,0.2)",
      },

      // ── Animations ────────────────────────────────────────────
      animation: {
        "float-slow":   "floatSlow 8s ease-in-out infinite",
        "float-fast":   "floatFast 5s ease-in-out infinite",
        "pulse-blue":   "pulseBlue 3s ease-in-out infinite",
        "spin-slow":    "spin 20s linear infinite",
        "gradient":     "gradientShift 6s ease-in-out infinite",
        "shimmer":      "shimmer 2s linear infinite",
        "bounce-soft":  "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-14px) rotate(1deg)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        pulseBlue: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(37,99,235,0.15)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },

      // ── Border radius ─────────────────────────────────────────
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
