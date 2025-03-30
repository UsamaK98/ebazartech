
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  slug: string;
  count?: number;
}

export function CategoryCard({ title, icon, slug, count }: CategoryCardProps) {
  return (
    <Link to={`/category/${slug}`}>
      <Card className="category-card h-full hover:bg-accent/50 transition-all duration-300 border-transparent hover:border-primary/20 rounded-xl overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center p-7 text-center">
          <div className="text-primary mb-5 text-4xl">
            {icon}
          </div>
          <h3 className="font-medium text-lg">{title}</h3>
          {count !== undefined && (
            <p className="text-sm text-muted-foreground mt-2">
              {count} items
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
