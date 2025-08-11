import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center floating-animation">
              <Gamepad2 className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Get Your 8 Ball Pool
            <span className="block text-secondary">Deals Instantly</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Premium coins, cash, and exclusive items delivered to your account within minutes. 
            <span className="text-secondary font-semibold"> 100% safe and secure.</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-secondary" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 shine-effect font-semibold"
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
            >
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};