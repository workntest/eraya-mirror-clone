import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">Eraya Style</h3>
            <p className="text-sm opacity-90 mb-4">
              Explore unique personalized gift ideas, from custom jewelry to thoughtful keepsakes. 
              Perfect for anniversaries, couples, and special occasions.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/search" className="hover:text-gold transition-smooth">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-gold transition-smooth">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-gold transition-smooth">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-smooth">
                  Contact Information
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-gold transition-smooth">
                  Collection All
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-gold transition-smooth">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-4">Newsletter</h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-gold hover:bg-gold-dark text-primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Eraya Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
