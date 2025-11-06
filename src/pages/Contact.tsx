import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-center mb-4">Contact us</h1>
            <p className="text-center text-muted-foreground mb-12">
              Use this text area to share information about your brand with your customers. Describe a
              product, share announcements, or welcome customers to your store.
            </p>

            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-serif mb-6">Contact us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>

                <Button type="submit" className="bg-gold hover:bg-gold-dark text-primary">
                  Send
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-serif mb-6">FAQ</h2>
              <p className="text-muted-foreground mb-6">Below are some of our common questions:</p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    How do I know if my order is confirmed?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You will receive an email confirmation once your order has been successfully placed.
                    Please check your spam folder if you don't see it in your inbox.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    Can I change my shipping address after my order is placed?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Please contact us immediately if you need to change your shipping address. We'll do our
                    best to update it before the order ships.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by
                    location.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    How long will it take until I receive my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Delivery times typically range from 5-10 business days for domestic orders. International
                    orders may take 10-20 business days depending on your location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
