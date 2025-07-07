import { Zap } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-3xl",
    large: "text-4xl"
  };

  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-primary p-2 rounded-lg shadow-button">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </div>
      <span className={`font-bold text-deep-navy ${sizeClasses[size]} tracking-tight`}>
        Recap<span className="text-primary">Go</span>
      </span>
    </div>
  );
};

export default Logo;