import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroNecklace from "@/assets/hero-necklace.jpg";
import heroRing from "@/assets/hero-ring.jpg";
import heroSnake from "@/assets/hero-snake.jpg";
import productPhotoNecklace from "@/assets/product-photo-necklace.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";
import productBarNecklace from "@/assets/product-bar-necklace.jpg";
import productRectangle from "@/assets/product-rectangle-pendant.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";
import categoryRings from "@/assets/category-rings.jpg";
import categoryKeychains from "@/assets/category-keychains.jpg";

const heroSlides = [heroNecklace, heroRing, heroSnake];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Carousel */}
        <section className="relative h-[600px] bg-primary overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Designed for memories, worn worldwide.
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Celebrate love, friendship & family bonds with personalized pieces that tell your story.
              <br />
              Rings, bracelets, necklaces & keychains - engraved to create lasting connections.
            </p>
          </div>
        </section>

        {/* Just Launched */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif">Just Launched</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: productPhotoNecklace, name: "Personalized Photo Necklace", price: "₹999" },
                { img: productBracelet, name: "Photo Engraved Bracelet", price: "₹1,099" },
                { img: productBarNecklace, name: "Cuboid Locket for Men", price: "₹899" },
                { img: productRectangle, name: "Rectangle Pendant", price: "₹899" },
              ].map((product, index) => (
                <Link
                  key={index}
                  to="/collection"
                  className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-smooth"
                >
                  <div className="relative">
                    <Badge className="absolute top-2 left-2 bg-destructive">SALE</Badge>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <p className="text-gold font-semibold">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: categoryNecklaces, name: "Necklaces", subtitle: "Everyday Essentials" },
                { img: categoryBracelets, name: "Bracelets", subtitle: "Versatile & Bold" },
                { img: categoryRings, name: "Rings", subtitle: "Simple & Stunning" },
                { img: categoryKeychains, name: "Keychains", subtitle: "Perfect for Everyone" },
              ].map((category, index) => (
                <Link
                  key={index}
                  to="/collection"
                  className="group relative h-80 rounded-lg overflow-hidden"
                >
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-primary-foreground">
                    <h3 className="text-2xl font-serif mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{category.subtitle}</p>
                    <div className="flex items-center gap-2 text-gold">
                      <span className="text-sm border-b border-gold">Shop now</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Engraving Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={productBarNecklace}
                  alt="Engraved jewelry"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif mb-6">
                  Engrave Your Identity – The Cuboid Men's Necklace
                </h2>
                <p className="text-muted-foreground mb-6">
                  Personalize it with names, initials, or a special message.
                </p>
                <Button className="bg-gold hover:bg-gold-dark text-primary">
                  Shop Now
                </Button>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-serif mb-4">
                Nobody knows the story engraved within.
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                On the outside, it's elegant and timeless. But it's what's inside that truly matters.
              </p>
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                Customize Yours
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
