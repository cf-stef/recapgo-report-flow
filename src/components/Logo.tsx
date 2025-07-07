import { Zap } from "lucide-react";

const Logo = ({ size = "default", variant = "default" }: { 
  size?: "small" | "default" | "large";
  variant?: "default" | "light";
}) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-3xl",
    large: "text-4xl"
  };

  const textClasses = variant === "light" ? "text-white" : "text-deep-navy";
  const accentClasses = variant === "light" ? "text-sky-tint" : "text-primary";

  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-primary p-2 rounded-lg shadow-button">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </div>
      <span className={`font-bold ${textClasses} ${sizeClasses[size]} tracking-tight`}>
        Recap<span className={accentClasses}>Go</span>
      </span>
    </div>
  );
};

export default Logo;