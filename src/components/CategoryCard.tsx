
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
      <Card className="category-card h-full hover:bg-accent/50 hover:border-primary/20">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="text-primary mb-4 text-4xl">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
          {count !== undefined && (
            <p className="text-sm text-muted-foreground mt-1">
              {count} items
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
