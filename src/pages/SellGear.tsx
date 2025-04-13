
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Package, CircleDollarSign, Tag, Camera, Upload, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }).max(100, {
    message: "Title must not exceed 100 characters.",
  }),
  description: z.string().min(30, {
    message: "Description must be at least 30 characters.",
  }).max(1000, {
    message: "Description must not exceed 1000 characters."
  }),
  price: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),
  condition: z.enum(["new", "like-new", "good", "fair", "poor"]),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  location: z.string().min(3, {
    message: "Please enter a valid location.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SellGear() {
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: undefined,
      condition: "good",
      category: "",
      location: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    if (images.length === 0) {
      toast({
        variant: "destructive",
        title: "Missing Images",
        description: "Please upload at least one image of your item.",
      });
      return;
    }
    
    // Submit form data to backend (to be implemented)
    toast({
      title: "Item Listed Successfully!",
      description: "Your item has been listed for sale.",
    });
    
    // Reset form
    form.reset();
    setImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Restrict to maximum 5 images
    if (images.length + files.length > 5) {
      toast({
        variant: "destructive",
        title: "Too Many Images",
        description: "You can upload a maximum of 5 images per listing.",
      });
      return;
    }

    // Convert to base64 for preview (in a real app, we'd upload to a server)
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImages(prev => [...prev, e.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Sell Your Gear</h1>
        <p className="text-muted-foreground mb-8">Create a listing to sell your gaming or tech equipment</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Item Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
                <CardDescription>
                  Provide accurate information about the item you're selling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. ASUS ROG Strix RTX 3080 Graphics Card" {...field} />
                          </FormControl>
                          <FormDescription>
                            A clear, descriptive title will attract more buyers
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your item in detail, including specs, age, warranty status, and any defects or issues" 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Be honest about the condition and include all relevant details
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price ($)</FormLabel>
                            <FormControl>
                              <Input type="number" step="0.01" min="0" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="condition"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Condition</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="like-new">Like New</SelectItem>
                                <SelectItem value="good">Good</SelectItem>
                                <SelectItem value="fair">Fair</SelectItem>
                                <SelectItem value="poor">Poor</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="desktop-pcs">Desktop PCs</SelectItem>
                                <SelectItem value="laptops">Laptops</SelectItem>
                                <SelectItem value="cpus">CPUs</SelectItem>
                                <SelectItem value="graphics-cards">Graphics Cards</SelectItem>
                                <SelectItem value="ram">RAM</SelectItem>
                                <SelectItem value="motherboards">Motherboards</SelectItem>
                                <SelectItem value="storage">Storage</SelectItem>
                                <SelectItem value="psus">Power Supply Units</SelectItem>
                                <SelectItem value="pc-casings">PC Cases</SelectItem>
                                <SelectItem value="fans">Cooling Fans</SelectItem>
                                <SelectItem value="keyboards">Keyboards</SelectItem>
                                <SelectItem value="mice">Mice</SelectItem>
                                <SelectItem value="headphones">Headphones</SelectItem>
                                <SelectItem value="accessories">Other Accessories</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. New York, NY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Image Upload */}
                    <div>
                      <Label htmlFor="images">Product Images</Label>
                      <div className="border-2 border-dashed border-border rounded-md p-6 mt-2">
                        <div className="flex flex-wrap gap-4 mb-4">
                          {images.map((img, index) => (
                            <div key={index} className="relative w-24 h-24">
                              <img
                                src={img}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-destructive text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-col items-center justify-center py-4">
                          <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            {images.length === 0
                              ? "Upload up to 5 images"
                              : `${images.length}/5 images uploaded`}
                          </p>
                          <Input
                            id="images"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                          <label htmlFor="images">
                            <Button type="button" variant="outline" size="sm" className="cursor-pointer">
                              <Upload className="h-4 w-4 mr-2" />
                              Browse Files
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      List Item for Sale
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          {/* Tips Section */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Selling Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Package className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Be Detailed</h4>
                      <p className="text-sm text-muted-foreground">
                        Include all specifications, model numbers, and age of the item.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Quality Photos</h4>
                      <p className="text-sm text-muted-foreground">
                        Take clear photos from multiple angles in good lighting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Tag className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Fair Pricing</h4>
                      <p className="text-sm text-muted-foreground">
                        Research similar items to set a competitive price.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CircleDollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Be Honest</h4>
                      <p className="text-sm text-muted-foreground">
                        Disclose any defects or issues with the item.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Stay Responsive</h4>
                      <p className="text-sm text-muted-foreground">
                        Respond quickly to buyer questions and offers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
