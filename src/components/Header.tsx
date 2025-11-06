import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Trust Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>Trusted by 100,000+ Happy Customers ⭐ ⭐ ⭐ ⭐ ⭐</p>
      </div>

      {/* Main Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif tracking-tight">Eraya Style</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-gold transition-smooth">
                Home
              </Link>
              <Link to="/collection" className="text-foreground hover:text-gold transition-smooth">
                Collection
              </Link>
              <Link to="/about" className="text-foreground hover:text-gold transition-smooth">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground hover:text-gold transition-smooth">
                Contact
              </Link>
              <Link to="/track-order" className="text-foreground hover:text-gold transition-smooth">
                Track Your Order
              </Link>
              <Link to="/support" className="text-foreground hover:text-gold transition-smooth">
                Support
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
