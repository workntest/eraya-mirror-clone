import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import productPhotoNecklace from "@/assets/product-photo-necklace.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";
import categoryRings from "@/assets/category-rings.jpg";

const Collection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif text-center mb-12">Collections</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: productPhotoNecklace, name: "Addons", link: "/collection" },
              { img: productBracelet, name: "Best Sellers", link: "/collection" },
              { img: categoryBracelets, name: "Bracelets", link: "/collection" },
              { img: categoryNecklaces, name: "Necklaces", link: "/collection" },
              { img: categoryRings, name: "Rings", link: "/collection" },
            ].map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group relative h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth"
              >
                <img
                  src={collection.img}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif text-primary-foreground mb-2">
                    {collection.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gold">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;
