
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log("Searching for:", searchQuery);
  };

  const NavItems = () => (
    <>
      <li>
        <Link to="/category/desktop-pcs" className="text-foreground hover:text-primary transition-colors">
          Desktop PCs
        </Link>
      </li>
      <li>
        <Link to="/category/laptops" className="text-foreground hover:text-primary transition-colors">
          Laptops
        </Link>
      </li>
      <li>
        <Link to="/category/components" className="text-foreground hover:text-primary transition-colors">
          Components
        </Link>
      </li>
      <li>
        <Link to="/category/accessories" className="text-foreground hover:text-primary transition-colors">
          Accessories
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-geek-purple">GeekGear<span className="text-geek-purple-dark">Hub</span></span>
          </Link>
        </div>

        {isMobile ? (
          <div className="flex flex-1 items-center justify-between space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="px-2 py-6">
                  <Link to="/" className="flex items-center gap-2 mb-6">
                    <span className="font-bold text-xl text-geek-purple">GeekGear<span className="text-geek-purple-dark">Hub</span></span>
                  </Link>
                  <nav>
                    <ul className="space-y-4">
                      <NavItems />
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/search">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User</span>
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <nav className="hidden md:flex flex-1 items-center justify-start ml-6">
              <ul className="flex space-x-6">
                <NavItems />
              </ul>
            </nav>

            <div className="flex-1 px-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="pl-8 bg-background w-full md:w-2/3 lg:w-1/2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/notifications">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
              <Button asChild>
                <Link to="/sell">
                  Sell Item
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
