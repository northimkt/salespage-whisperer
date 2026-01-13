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
        "inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl text-center",
        size === "lg" && "px-8 py-6 text-lg",
        size === "xl" && "px-10 py-7 text-xl",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CTAButton;
