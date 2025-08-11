import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Zap } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose Your Deal",
      description: "Browse our collection and select the perfect package for your gaming needs.",
      step: "01"
    },
    {
      icon: CreditCard,
      title: "Send Payment",
      description: "Complete your purchase securely through our trusted payment gateway.",
      step: "02"
    },
    {
      icon: Zap,
      title: "Get Instant Delivery",
      description: "Receive your coins and items directly in your account within 2-5 minutes.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your 8 Ball Pool deals is simple and fast. Follow these three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="text-center relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 floating-animation">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};