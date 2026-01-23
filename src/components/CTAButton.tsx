import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
  href?: string;
}

const CHECKOUT_URL = "https://pay.kiwify.com.br/IotdkTQ";

const CTAButton = ({ children, className, size = "lg", href = CHECKOUT_URL }: CTAButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl text-center min-h-[44px] flex items-center justify-center",
        size === "lg" && "px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg",
        size === "xl" && "px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg md:px-10 md:py-7 md:text-xl",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CTAButton;
