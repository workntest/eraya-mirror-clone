import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TrackOrder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-serif text-center mb-8">Track Your Order</h1>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="order-number">Order Number</Label>
                <Input
                  id="order-number"
                  placeholder="Enter your order number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-primary">
                Track Order
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
