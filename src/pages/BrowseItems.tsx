
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function BrowseItems() {
  // Mock products data
  const [products] = useState<ProductCardProps[]>([
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
      category: "graphics-cards",
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
      category: "headphones",
    },
    {
      id: "5",
      title: "Corsair 32GB DDR4 RAM (3200MHz)",
      price: 129.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1592664356120-9e0e7f47e768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
      seller: {
        id: "user5",
        name: "RAMGuru",
        rating: 4.9,
        verified: true,
      },
      location: "Denver, CO",
      listedDate: "2023-09-05",
      category: "ram",
    },
    {
      id: "6",
      title: "ASUS ROG Strix B550-F Gaming Motherboard",
      price: 179.99,
      condition: "like-new",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user6",
        name: "PCBuilder",
        rating: 4.8,
        verified: true,
      },
      location: "Miami, FL",
      listedDate: "2023-09-10",
      category: "motherboards",
    },
    {
      id: "7",
      title: "Corsair RM850x Power Supply (80+ Gold)",
      price: 129.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1625465810424-3873a6a223f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user7",
        name: "PowerMaster",
        rating: 4.6,
        verified: true,
      },
      location: "Phoenix, AZ",
      listedDate: "2023-09-15",
      category: "psus",
    },
    {
      id: "8",
      title: "Noctua NF-A12x25 PWM Premium Cooling Fan",
      price: 29.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user8",
        name: "CoolingPro",
        rating: 4.9,
        verified: true,
      },
      location: "Boston, MA",
      listedDate: "2023-09-20",
      category: "fans",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
    } else if (sortOrder === "price-low") {
      return a.price - b.price;
    } else if (sortOrder === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Items</h1>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="desktop-pcs">Desktop PCs</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="graphics-cards">Graphics Cards</SelectItem>
                <SelectItem value="cpus">CPUs</SelectItem>
                <SelectItem value="ram">RAM</SelectItem>
                <SelectItem value="motherboards">Motherboards</SelectItem>
                <SelectItem value="psus">Power Supplies</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
                <SelectItem value="pc-casings">PC Cases</SelectItem>
                <SelectItem value="fans">Fans</SelectItem>
                <SelectItem value="keyboards">Keyboards</SelectItem>
                <SelectItem value="mice">Mice</SelectItem>
                <SelectItem value="headphones">Headphones</SelectItem>
                <SelectItem value="accessories">Other Accessories</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Product Results */}
        {sortedProducts.length > 0 ? (
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}>
              Clear filters
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
