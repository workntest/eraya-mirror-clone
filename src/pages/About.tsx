import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif text-center mb-8">About Us</h1>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-serif mb-4 text-center">About Us</h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                Welcome to Eraya Style – Elevating Your Elegance Since 2022!
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to Eraya Style – your go-to destination for curated fashion jewelry that transcends
                trends and celebrates individuality. Established in 2021, we are a brand committed to
                redefining the art of accessorizing, providing you with a carefully curated collection of
                timeless pieces that reflect your unique style.
              </p>

              <h3 className="text-2xl font-serif mt-8 mb-4">Our Journey:</h3>
              <p>
                Founded in 2021, Eraya Style has embarked on a mission to create a space where fashion
                meets artistry, and every accessory is a masterpiece. Our journey began with a passion for
                empowering individuals to express themselves through distinctive jewelry, and since then, we
                have been dedicated to offering an unparalleled shopping experience.
              </p>

              <h3 className="text-2xl font-serif mt-8 mb-4">Elegance Redefined:</h3>
              <p>
                At Eraya Style, we believe that jewelry is more than just an accessory; it's a statement, a
                reflection of personality, and a celebration of individuality. Our collection is thoughtfully
                curated to bring you a blend of contemporary designs and timeless classics, ensuring that each
                piece resonates with your personal style.
              </p>

              <h3 className="text-2xl font-serif mt-8 mb-4">Quality Craftsmanship:</h3>
              <p>
                We take pride in our commitment to quality craftsmanship. Each piece in our collection is
                meticulously crafted by skilled artisans who understand the importance of precision and
                attention to detail. From the selection of materials to the final finishing touches, we ensure
                that every item meets the highest standards of excellence.
              </p>

              <h3 className="text-2xl font-serif mt-8 mb-4">Customer-Centric Approach:</h3>
              <p>
                Your satisfaction is our priority. We strive to provide a seamless shopping experience,
                offering not just jewelry but a journey of self-expression. Our customer-centric approach
                extends from browsing our website to receiving your carefully packaged order, ensuring that
                your experience with Eraya Style is nothing short of exceptional.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
