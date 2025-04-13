import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/CategoryCard";
import { 
  Monitor, 
  Laptop, 
  Cpu, 
  HardDrive, 
  Headphones, 
  Mouse, 
  Keyboard, 
  CreditCard,
  CircuitBoard,
  Fan,
  Power,
  Package,
  Chip
} from "lucide-react";

export default function Index() {
  // Mock featured products data
  const [featuredProducts] = useState<ProductCardProps[]>([
    {
      id: "1",
      title: "Custom Gaming PC - RTX 4070, Ryzen 7, 32GB RAM",
      price: 1499.99,
      condition: "like-new",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      seller: {
        id: "user1",
        name: "TechGuru",
        rating: 4.8,
        verified: true,
      },
      location: "Austin, TX",
      listedDate: "2023-08-15",
      category: "desktop-pcs",
    },
    {
      id: "2",
      title: "ASUS ROG Zephyrus G14 Gaming Laptop (2022)",
      price: 999.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      seller: {
        id: "user2",
        name: "LaptopDeals",
        rating: 4.5,
        verified: true,
      },
      location: "Seattle, WA",
      listedDate: "2023-08-20",
      category: "laptops",
    },
    {
      id: "3",
      title: "NVIDIA RTX 3080 Graphics Card",
      price: 599.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user3",
        name: "GPUMaster",
        rating: 4.9,
        verified: true,
      },
      location: "New York, NY",
      listedDate: "2023-08-25",
      category: "components",
    },
    {
      id: "4",
      title: "SteelSeries Arctis Pro Wireless Headset",
      price: 179.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user4",
        name: "AudioGear",
        rating: 4.7,
        verified: false,
      },
      location: "Chicago, IL",
      listedDate: "2023-08-27",
      category: "accessories",
    },
  ]);

  // Categories with icons - updated with new categories
  const categories = [
    { title: "Desktop PCs", icon: <Monitor />, slug: "desktop-pcs", count: 458 },
    { title: "Laptops", icon: <Laptop />, slug: "laptops", count: 674 },
    { title: "CPUs", icon: <Cpu />, slug: "cpus", count: 312 },
    { title: "Storage", icon: <HardDrive />, slug: "storage", count: 295 },
    { title: "Headphones", icon: <Headphones />, slug: "headphones", count: 187 },
    { title: "Mice", icon: <Mouse />, slug: "mice", count: 203 },
    { title: "Keyboards", icon: <Keyboard />, slug: "keyboards", count: 246 },
    { title: "Graphics Cards", icon: <CreditCard />, slug: "graphics-cards", count: 329 },
    { title: "RAM", icon: <Chip />, slug: "ram", count: 215 },
    { title: "Motherboards", icon: <CircuitBoard />, slug: "motherboards", count: 183 },
    { title: "PSUs", icon: <Power />, slug: "psus", count: 142 },
    { title: "Fans", icon: <Fan />, slug: "fans", count: 98 },
    { title: "PC Casings", icon: <Package />, slug: "pc-casings", count: 124 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-10 md:py-16 bg-gradient-to-b from-geek-purple/10 to-background">
          <div className="container max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Buy & Sell Gaming Gear
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The marketplace for gamers and tech enthusiasts to buy and sell used gear
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/search">Browse Items</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sell">Sell Your Gear</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="px-4 py-12 md:py-16">
          <div className="container max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Product Categories</h2>
              <Button variant="ghost" asChild>
                <Link to="/categories">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  title={category.title}
                  icon={category.icon}
                  slug={category.slug}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="px-4 py-12 md:py-16 bg-accent/50">
          <div className="container max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <Button variant="ghost" asChild>
                <Link to="/search">View More</Link>
              </Button>
            </div>
            <div className="product-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" asChild>
                <Link to="/search">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="px-4 py-12 md:py-16">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">List Your Items</h3>
                <p className="text-muted-foreground">
                  Create a listing with photos, details, and your asking price.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect with Buyers</h3>
                <p className="text-muted-foreground">
                  Receive offers and questions from interested buyers.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete the Sale</h3>
                <p className="text-muted-foreground">
                  Ship or meet locally to exchange the item and payment.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
