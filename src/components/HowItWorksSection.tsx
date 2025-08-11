import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Zap } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose Your Deal",
      description: "Browse our premium collection and select the perfect package tailored for your gaming excellence.",
      step: "01"
    },
    {
      icon: CreditCard,
      title: "Send Payment",
      description: "Complete your purchase securely through our encrypted and trusted payment gateway.",
      step: "02"
    },
    {
      icon: Zap,
      title: "Get Instant Delivery",
      description: "Receive your coins and exclusive items directly in your account within 2-5 minutes guaranteed.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gaming-dark to-background pattern-overlay" id="how-it-works">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6 text-shadow-gold">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Getting your 8 Ball Pool deals is simple and lightning fast. 
            <span className="gradient-text font-semibold"> Follow these three elegant steps.</span>
          </p>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="premium-card text-center relative overflow-hidden group slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-10 relative">
                {/* Enhanced Step Number */}
                <div className="absolute top-6 right-6 text-8xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.step}
                </div>
                
                {/* Premium Icon */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-8 floating-animation shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Enhanced Content */}
                <h3 className="text-2xl font-bold gradient-text mb-6">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                
                {/* Connection Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-success-green rounded-full mx-auto mb-3 pulse-glow"></div>
              <span className="text-foreground font-semibold">100% Secure</span>
            </div>
            <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-success-green rounded-full mx-auto mb-3 pulse-glow"></div>
              <span className="text-foreground font-semibold">Instant Delivery</span>
            </div>
            <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-success-green rounded-full mx-auto mb-3 pulse-glow"></div>
              <span className="text-foreground font-semibold">24/7 Support</span>
            </div>
            <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-success-green rounded-full mx-auto mb-3 pulse-glow"></div>
              <span className="text-foreground font-semibold">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};