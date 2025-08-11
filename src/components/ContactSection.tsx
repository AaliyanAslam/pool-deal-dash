import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need support? We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your inquiry..." 
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  WhatsApp Support
                </h3>
                <p className="text-green-700 mb-6">
                  Get instant help and place orders directly through WhatsApp
                </p>
                <a 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl duration-200"
                  href="https://wa.link/8fsrrq" target="_blank" rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Support</h4>
                  <p className="text-muted-foreground">aaliyanaslam22@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone Support</h4>
                  <p className="text-muted-foreground">+92 3248876520</p>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Support Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>24/7</span>
                  </div>
                  <div className="text-xs text-success-green mt-2">
                    ✓ Instant response on WhatsApp
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};