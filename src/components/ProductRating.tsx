
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  showNumber?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ProductRating({ rating, showNumber = true, size = "sm" }: ProductRatingProps) {
  const starCount = 5;
  
  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-3 w-3";
      case "md": return "h-4 w-4";
      case "lg": return "h-5 w-5";
      default: return "h-3 w-3";
    }
  };
  
  const starSize = getStarSize();
  
  const renderStars = () => {
    return Array.from({ length: starCount }).map((_, index) => {
      const isHalf = index + 0.5 === Math.floor(rating + 0.5);
      const isFilled = index < Math.floor(rating);
      
      return (
        <Star
          key={index}
          className={`${starSize} ${
            isFilled
              ? "text-yellow-400 fill-yellow-400"
              : isHalf
              ? "text-yellow-400 fill-gradient-horizontal"
              : "text-gray-300"
          }`}
        />
      );
    });
  };
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">{renderStars()}</div>
      {showNumber && (
        <span className={`text-muted-foreground ${size === "sm" ? "text-xs" : "text-sm"}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
