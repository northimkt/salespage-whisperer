import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}

const CTAButton = ({ children, className, size = "lg" }: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
        size === "lg" && "px-8 py-6 text-lg",
        size === "xl" && "px-10 py-7 text-xl",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
