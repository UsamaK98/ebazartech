
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function getCategoryName(slug: string): string {
  const mapping: Record<string, string> = {
    "desktop-pcs": "Desktop PCs",
    "laptops": "Laptops",
    "cpus": "CPUs",
    "storage": "Storage",
    "headphones": "Headphones",
    "mice": "Mice",
    "keyboards": "Keyboards",
    "graphics-cards": "Graphics Cards",
    "ram": "RAM",
    "motherboards": "Motherboards",
    "psus": "Power Supply Units",
    "fans": "Cooling Fans",
    "pc-casings": "PC Cases",
    "components": "Components",
    "accessories": "Accessories"
  };
  
  return mapping[slug] || slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
