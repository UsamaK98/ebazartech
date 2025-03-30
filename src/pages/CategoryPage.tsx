
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  // Format category name for display
  const formatCategoryName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const displayCategory = category ? formatCategoryName(category) : "";
  
  // Mock products data based on category
  const [products, setProducts] = useState<ProductCardProps[]>([
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
      id: "5",
      title: "Dell Alienware Aurora R13 - i9-12900K, 64GB, RTX 3090",
      price: 2299.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
      seller: {
        id: "user7",
        name: "AlienFan",
        rating: 4.6,
        verified: true,
      },
      location: "Miami, FL",
      listedDate: "2023-08-10",
      category: "desktop-pcs",
    },
    {
      id: "6",
      title: "CyberPowerPC Gamer Supreme - Ryzen 9 5900X, RTX 3080",
      price: 1899.99,
      condition: "fair",
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user8",
        name: "PCGenius",
        rating: 4.3,
        verified: false,
      },
      location: "Denver, CO",
      listedDate: "2023-08-05",
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
      id: "7",
      title: "MSI GS66 Stealth - i7-11800H, RTX 3070, 32GB RAM",
      price: 1599.99,
      condition: "like-new",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2368&q=80",
      seller: {
        id: "user9",
        name: "GamingGears",
        rating: 4.9,
        verified: true,
      },
      location: "Boston, MA",
      listedDate: "2023-08-12",
      category: "laptops",
    },
    {
      id: "8",
      title: "Lenovo Legion 5 Pro - Ryzen 7 5800H, RTX 3060, 16GB",
      price: 1099.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2107&q=80",
      seller: {
        id: "user10",
        name: "LegionFan",
        rating: 4.7,
        verified: false,
      },
      location: "Philadelphia, PA",
      listedDate: "2023-08-08",
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
      id: "9",
      title: "AMD Ryzen 9 5950X CPU - 16 Core / 32 Thread",
      price: 449.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user11",
        name: "AMDEnthusiast",
        rating: 5.0,
        verified: true,
      },
      location: "San Jose, CA",
      listedDate: "2023-08-18",
      category: "components",
    },
    {
      id: "10",
      title: "Corsair Vengeance RGB Pro 32GB DDR4 3600MHz RAM",
      price: 119.99,
      condition: "like-new",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2389&q=80",
      seller: {
        id: "user12",
        name: "RAMDealer",
        rating: 4.8,
        verified: true,
      },
      location: "Portland, OR",
      listedDate: "2023-08-22",
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
    {
      id: "11",
      title: "Logitech G Pro X Mechanical Gaming Keyboard",
      price: 89.99,
      condition: "good",
      image: "https://images.unsplash.com/photo-1595225476098-7a7438e5c0c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80",
      seller: {
        id: "user13",
        name: "LogitechPro",
        rating: 4.6,
        verified: true,
      },
      location: "Atlanta, GA",
      listedDate: "2023-08-19",
      category: "accessories",
    },
    {
      id: "12",
      title: "Razer DeathAdder V2 Pro Wireless Gaming Mouse",
      price: 69.99,
      condition: "like-new",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      seller: {
        id: "user14",
        name: "RazerFan",
        rating: 4.4,
        verified: false,
      },
      location: "Las Vegas, NV",
      listedDate: "2023-08-21",
      category: "accessories",
    },
  ]);
  
  // Filter products based on category
  const [filteredProducts, setFilteredProducts] = useState(() => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  });
  
  const [sortOption, setSortOption] = useState("newest");
  
  const handleSortChange = (value: string) => {
    setSortOption(value);
    
    let sorted = [...filteredProducts];
    
    switch (value) {
      case "newest":
        sorted = sorted.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
        break;
      case "oldest":
        sorted = sorted.sort((a, b) => new Date(a.listedDate).getTime() - new Date(b.listedDate).getTime());
        break;
      case "price_low":
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted = sorted.sort((a, b) => b.seller.rating - a.seller.rating);
        break;
      default:
        break;
    }
    
    setFilteredProducts(sorted);
  };
  
  const handleFilterChange = (filters: any) => {
    let filtered = products;
    
    // Apply category filter
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Apply price range filter
    if (filters.priceRange && filters.priceRange.length === 2) {
      filtered = filtered.filter(
        product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }
    
    // Apply condition filter
    if (filters.conditions && filters.conditions.length > 0) {
      filtered = filtered.filter(product => filters.conditions.includes(product.condition));
    }
    
    // Apply brand filter (would require brand property in products)
    
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container max-w-7xl py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {category && (
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{displayCategory}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{displayCategory || "All Products"}</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>
          
          {/* Product listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Products</h2>
              <div className="flex items-center">
                <Select value={sortOption} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
