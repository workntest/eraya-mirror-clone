import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Clock } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-center mb-12">Support</h1>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gold" />
                <h3 className="font-serif text-xl mb-2">Email Us</h3>
                <p className="text-muted-foreground">support@erayastyle.com</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <Phone className="h-12 w-12 mx-auto mb-4 text-gold" />
                <h3 className="font-serif text-xl mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg shadow-sm">
                <Clock className="h-12 w-12 mx-auto mb-4 text-gold" />
                <h3 className="font-serif text-xl mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif">How can we help you?</h2>
              <p>
                Our dedicated support team is here to assist you with any questions or concerns you may
                have. Whether you need help with an order, have questions about our products, or need
                assistance with customization, we're here to help.
              </p>

              <h3 className="font-serif">Frequently Asked Topics:</h3>
              <ul>
                <li>Order status and tracking</li>
                <li>Custom engraving options</li>
                <li>Returns and exchanges</li>
                <li>Shipping information</li>
                <li>Product care and maintenance</li>
                <li>Payment methods</li>
              </ul>

              <p>
                For the fastest response, please email us with your order number and detailed description
                of your inquiry. We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
