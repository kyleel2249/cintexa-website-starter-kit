// ============================================================
// CINTEXA UI Components
// ============================================================

"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 ease-out-expo disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-gradient-to-r from-cx-primary to-cx-primary-dark text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 hover:scale-[1.02]",
      secondary: "bg-cx-surface-glass text-white border border-cx-border backdrop-blur-glass hover:border-cx-border-glow hover:-translate-y-0.5",
      ghost: "text-cx-text-secondary hover:text-white hover:bg-cx-surface",
      outline: "text-cx-primary border border-cx-primary hover:bg-cx-primary hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all duration-400 ease-out-expo",
          glass && "bg-cx-surface-glass border border-cx-border backdrop-blur-glass",
          hover && "hover:border-cx-border-glow hover:shadow-glass hover:-translate-y-2 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "glow" | "outline";
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-cx-surface text-cx-text-secondary border border-cx-border",
      glow: "bg-cx-surface-glass text-cx-accent-light border border-cx-border backdrop-blur-glass",
      outline: "text-cx-primary border border-cx-primary bg-transparent",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

// Glass Panel Component
interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    const intensities = {
      low: "bg-cx-surface-glass/30 border-cx-border/50",
      medium: "bg-cx-surface-glass border-cx-border",
      high: "bg-cx-surface border-cx-border-glow",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl backdrop-blur-glass",
          intensities[intensity],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassPanel.displayName = "GlassPanel";

// Section Header Component
interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-16", alignments[align], className)}>
      {label && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cx-accent mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-display-lg font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-cx-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-cx-text-secondary mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-cx-surface-glass border border-cx-border rounded-xl",
            "text-white placeholder:text-cx-text-muted",
            "focus:outline-none focus:border-cx-primary focus:ring-1 focus:ring-cx-primary/50",
            "transition-all duration-200",
            error && "border-cx-error focus:border-cx-error focus:ring-cx-error/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-cx-error">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// Loading Spinner
export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="w-8 h-8 border-2 border-cx-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
