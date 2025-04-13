
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">About eBazarTech</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 2020, eBazarTech started as a small community marketplace for tech enthusiasts 
              to buy and sell computer hardware. What began as a passion project quickly grew into a 
              trusted platform for quality tech products.
            </p>
            <p className="mb-4 text-muted-foreground">
              Today, we connect thousands of buyers and sellers, offering everything from high-end 
              gaming PCs to individual components and accessories. Our mission is to make quality 
              technology accessible to everyone through a secure and user-friendly marketplace.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the most trusted peer-to-peer marketplace for technology products, 
                where quality meets affordability, and every transaction builds community.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-3">Our Values</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Trust and transparency in every transaction</li>
                <li>Quality assurance for all listed products</li>
                <li>Community-focused growth and support</li>
                <li>Sustainability through reuse and responsible recycling</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Why Choose eBazarTech?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Verified Sellers</h3>
                <p className="text-sm text-muted-foreground">
                  All our sellers go through a verification process to ensure reliability.
                </p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Your transactions are protected with our secure payment system.
                </p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We help ensure all products meet their described condition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
