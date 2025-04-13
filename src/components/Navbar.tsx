
import { Link } from "react-router-dom";
import { ShoppingCart, User, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isMobile = useIsMobile();

  const NavItems = () => (
    <>
      <li>
        <Link to="/search" className="text-foreground hover:text-primary transition-colors">
          Search
        </Link>
      </li>
      <li>
        <Link to="/category/browse" className="text-foreground hover:text-primary transition-colors">
          Browse Categories
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-foreground hover:text-primary transition-colors">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
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

            <div className="flex items-center gap-2">
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
            </div>
          </>
        )}
      </div>
    </header>
  );
}
