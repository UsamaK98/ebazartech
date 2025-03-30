
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SellerBadgeProps {
  isVerified: boolean;
  rating: number;
  totalSales?: number;
}

export function SellerBadge({ isVerified, rating, totalSales }: SellerBadgeProps) {
  const getBadgeLevel = () => {
    if (rating >= 4.8 && totalSales && totalSales >= 50) return "top";
    if (rating >= 4.5 && totalSales && totalSales >= 20) return "trusted";
    if (rating >= 4.0) return "good";
    return "new";
  };

  const badgeLevel = getBadgeLevel();

  const getBadgeColor = () => {
    switch (badgeLevel) {
      case "top": return "bg-purple-600 hover:bg-purple-700";
      case "trusted": return "bg-green-600 hover:bg-green-700";
      case "good": return "bg-blue-600 hover:bg-blue-700";
      case "new": return "bg-gray-600 hover:bg-gray-700";
      default: return "bg-gray-600 hover:bg-gray-700";
    }
  };

  const getBadgeLabel = () => {
    switch (badgeLevel) {
      case "top": return "Top Seller";
      case "trusted": return "Trusted Seller";
      case "good": return "Good Seller";
      case "new": return "New Seller";
      default: return "Seller";
    }
  };

  const getTooltipText = () => {
    if (isVerified) {
      switch (badgeLevel) {
        case "top":
          return "Top-rated seller with ID verification and 50+ successful sales";
        case "trusted":
          return "Trusted seller with ID verification and 20+ successful sales";
        case "good":
          return "Good seller with ID verification";
        case "new":
          return "New seller with ID verification";
        default:
          return "Seller with ID verification";
      }
    } else {
      return "Seller has not verified their identity";
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge className={`${getBadgeColor()} gap-1`}>
          {isVerified && <ShieldCheck className="h-3.5 w-3.5" />}
          {getBadgeLabel()}
        </Badge>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{getTooltipText()}</p>
      </TooltipContent>
    </Tooltip>
  );
}
