/** @type {import('nativewind').Config} */
module.exports = {
  content: [
    "./App.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./screens/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb", // Default from HSL var(--border)
        input: "#d1d5db", // Default from HSL var(--input)
        ring: "#3b82f6", // Default from HSL var(--ring)
        background: "#ffffff", // Default from HSL var(--background)
        foreground: "#1f2937", // Default from HSL var(--foreground)
        primary: {
          DEFAULT: "#3b82f6", // Default from HSL var(--primary)
          foreground: "#ffffff", // Default from HSL var(--primary-foreground)
        },
        secondary: {
          DEFAULT: "#6b7280", // Default from HSL var(--secondary)
          foreground: "#ffffff", // Default from HSL var(--secondary-foreground)
        },
        destructive: {
          DEFAULT: "#ef4444", // Default from HSL var(--destructive)
          foreground: "#ffffff", // Default from HSL var(--destructive-foreground)
        },
        muted: {
          DEFAULT: "#f3f4f6", // Default from HSL var(--muted)
          foreground: "#6b7280", // Default from HSL var(--muted-foreground)
        },
        accent: {
          DEFAULT: "#10b981", // Default from HSL var(--accent)
          foreground: "#ffffff", // Default from HSL var(--accent-foreground)
        },
        popover: {
          DEFAULT: "#ffffff", // Default from HSL var(--popover)
          foreground: "#1f2937", // Default from HSL var(--popover-foreground)
        },
        card: {
          DEFAULT: "#ffffff", // Default from HSL var(--card)
          foreground: "#1f2937", // Default from HSL var(--card-foreground)
        },
      },
      spacing: {
        safe: "env(safe-area-inset-bottom, 1rem)",
        "safe-top": "env(safe-area-inset-top, 1rem)",
      },
      padding: {
        safe: "env(safe-area-inset-bottom, 1rem)",
        "safe-top": "env(safe-area-inset-top, 1rem)",
      },
      margin: {
        safe: "env(safe-area-inset-bottom, 1rem)",
        "safe-top": "env(safe-area-inset-top, 1rem)",
      },
      borderRadius: {
        lg: 8, // Approx var(--radius) as 8px
        md: 6, // Approx calc(var(--radius) - 2px)
        sm: 4, // Approx calc(var(--radius) - 4px)
      },
    },
  },
  plugins: [],
};
