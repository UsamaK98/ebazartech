
import { Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SellerBadge } from "@/components/SellerBadge";
import { ProductRating } from "@/components/ProductRating";
import { formatPrice } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  condition: "new" | "like-new" | "good" | "fair" | "poor";
  image: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    verified: boolean;
  };
  location: string;
  listedDate: string;
  category: string;
}

export function ProductCard({ 
  id, 
  title, 
  price, 
  condition, 
  image, 
  seller, 
  location, 
  listedDate, 
  category 
}: ProductCardProps) {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "new": return "bg-green-500";
      case "like-new": return "bg-teal-500";
      case "good": return "bg-blue-500";
      case "fair": return "bg-yellow-500";
      case "poor": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const formattedDate = new Date(listedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105" 
          />
          <Badge 
            className={`absolute top-2 left-2 ${getConditionColor(condition)} text-white`}
          >
            {condition.replace('-', ' ')}
          </Badge>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium line-clamp-2 hover:text-primary">
              <Link to={`/product/${id}`}>{title}</Link>
            </h3>
            <p className="text-lg font-semibold text-primary">{formatPrice(price)}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{location}</span>
          <span>{formattedDate}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 bg-muted/50 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Link to={`/seller/${seller.id}`} className="text-sm font-medium hover:text-primary">
            {seller.name}
          </Link>
          {seller.verified && (
            <ShieldCheck className="h-4 w-4 text-primary" />
          )}
        </div>
        <ProductRating rating={seller.rating} />
      </CardFooter>
    </Card>
  );
}
