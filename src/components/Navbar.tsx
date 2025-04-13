
import { Link } from "react-router-dom";
import { Search, GridIcon, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
      <li className="flex items-center">
        <Link to="/search" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search
        </Link>
      </li>
      {!isMobile && (
        <li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <span className="flex items-center gap-2">
                    <GridIcon className="h-4 w-4" />
                    Browse Categories
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/desktop-pcs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Desktop PCs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pre-built desktop computers for work and gaming
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/laptops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Laptops</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Portable computers for work and entertainment
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/components" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Components</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Computer parts and hardware for upgrades and builds
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/accessories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Accessories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Peripherals and add-ons to enhance your setup
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
      )}
      <li className="flex items-center">
        <Link to="/contact" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-ebazar-green">eBazar<span className="text-ebazar-dark">Tech</span></span>
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
                    <span className="font-bold text-xl text-ebazar-green">eBazar<span className="text-ebazar-dark">Tech</span></span>
                  </Link>
                  <nav>
                    <ul className="space-y-4">
                      <NavItems />
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/search">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
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
          </>
        )}
      </div>
    </header>
  );
}
