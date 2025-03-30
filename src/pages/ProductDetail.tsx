
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SellerBadge } from "@/components/SellerBadge";
import { ProductRating } from "@/components/ProductRating";
import { CommentSection } from "@/components/CommentSection";
import { OfferForm } from "@/components/OfferForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatPrice } from "@/lib/utils";
import { Calendar, MapPin, Shield, Heart, Tag, User, MessageCircle } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the product data based on the ID
  // For now, we'll use mock data
  const [product] = useState({
    id: id || "1",
    title: "Custom Gaming PC - RTX 4070, Ryzen 7, 32GB RAM",
    price: 1499.99,
    condition: "like-new" as const,
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      "https://images.unsplash.com/photo-1598651552337-a85c7593a889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1583574954379-ef3c883841ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    ],
    description: "This custom-built gaming PC is in excellent condition, used for only 6 months. Features a powerful RTX 4070 GPU, Ryzen 7 7700X CPU, 32GB DDR5 RAM, 1TB NVMe SSD, and a 750W Gold power supply. Comes with Windows 11 Pro pre-installed. No issues, selling because I'm upgrading to a new system.",
    specs: {
      "CPU": "AMD Ryzen 7 7700X",
      "GPU": "NVIDIA RTX 4070 12GB",
      "RAM": "32GB DDR5 5200MHz",
      "Storage": "1TB NVMe SSD",
      "Motherboard": "ASUS ROG Strix B650E-F",
      "Case": "Corsair 4000D Airflow",
      "Power Supply": "Corsair RM750x Gold",
      "Cooling": "NZXT Kraken X63 AIO",
      "Operating System": "Windows 11 Pro",
    },
    seller: {
      id: "user1",
      name: "TechGuru",
      rating: 4.8,
      verified: true,
      avatar: "https://i.pravatar.cc/150?u=user1",
      joinDate: "2021-05-15",
      totalSales: 78,
    },
    location: "Austin, TX",
    listedDate: "2023-08-15",
    category: "Desktop PCs",
    tags: ["Gaming PC", "RTX 4070", "AMD Ryzen", "Custom PC"],
  });
  
  // Mock comments data
  const [comments] = useState([
    {
      id: "comment1",
      user: {
        id: "user5",
        name: "GamerX123",
        avatar: "https://i.pravatar.cc/150?u=user5",
        rating: 4.2,
        verified: false,
      },
      content: "Does this come with any warranty? Also, would you be willing to ship to California?",
      createdAt: "2023-08-16T15:30:00Z",
    },
    {
      id: "comment2",
      user: {
        id: "user6",
        name: "PCBuilder",
        avatar: "https://i.pravatar.cc/150?u=user6",
        rating: 4.9,
        verified: true,
      },
      content: "That's a great price for these specs! Can you share some benchmarks?",
      createdAt: "2023-08-18T09:45:00Z",
    },
  ]);
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  // Helper function to determine the badge class based on condition
  const getConditionClass = (condition: string): string => {
    switch (condition) {
      case "new":
        return "bg-green-500";
      case "like-new":
        return "bg-teal-500";
      case "good":
        return "bg-blue-500";
      case "fair":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container max-w-7xl py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {product.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>
              {product.title.length > 30 
                ? product.title.substring(0, 30) + '...' 
                : product.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Product Images */}
          <div className="md:col-span-7 space-y-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden border bg-background">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-24 h-24 rounded-md overflow-hidden border-2 flex-shrink-0 ${
                    selectedImage === image ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isWishlisted ? "text-red-500" : "text-muted-foreground"}
                  onClick={toggleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                  <span className="sr-only">
                    {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  </span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Badge className={`${getConditionClass(product.condition)} text-white`}>
                  {product.condition.replace('-', ' ')}
                </Badge>
                <span className="text-muted-foreground text-sm">
                  Listed {new Date(product.listedDate).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Listed on {new Date(product.listedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <div key={index} className="flex items-center text-xs px-2 py-1 bg-muted rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <OfferForm 
                  productId={product.id} 
                  productTitle={product.title} 
                  askingPrice={product.price} 
                />
                <Button variant="secondary" className="w-full flex gap-2 items-center">
                  <MessageCircle className="h-4 w-4" />
                  Ask a Question
                </Button>
              </div>
            </div>
            
            {/* Seller Information */}
            <div className="border rounded-lg p-4 bg-background">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                  <AvatarFallback>
                    {product.seller.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{product.seller.name}</h3>
                    {product.seller.verified && (
                      <Shield className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <ProductRating rating={product.seller.rating} />
                    <span className="text-xs text-muted-foreground">
                      ({product.seller.totalSales} sales)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <SellerBadge 
                  isVerified={product.seller.verified}
                  rating={product.seller.rating}
                  totalSales={product.seller.totalSales}
                />
              </div>
              
              <div className="flex items-center gap-2 text-sm mb-4">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Member since {new Date(product.seller.joinDate).toLocaleDateString('en-US', { 
                  month: 'long', year: 'numeric' 
                })}</span>
              </div>
              
              <Button variant="outline" className="w-full" asChild>
                <a href={`/seller/${product.seller.id}`}>View Seller Profile</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="comments">Comments ({comments.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-2">
                    <div className="font-medium w-1/3">{key}</div>
                    <div className="text-muted-foreground w-2/3">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="comments" className="mt-6">
              <CommentSection productId={product.id} comments={comments} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
