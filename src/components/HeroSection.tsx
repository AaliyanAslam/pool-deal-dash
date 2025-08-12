import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Zap, Shield, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pattern-overlay overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary/40 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-primary/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/10 rounded-full blur-sm floating-animation" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 fade-in-up">
          {/* Premium Icon */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center floating-animation pulse-glow shadow-2xl">
              <Gamepad2 className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading with Premium Typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-tight gradient-text text-shadow-gold">
              Get Your 8 Ball Pool
            </h1>
            <h2 className="text-5xl md:text-7xl font-black leading-tight text-foreground">
              <span className="gradient-text">Deals</span> Instantly
            </h2>
          </div>

          {/* Enhanced Tagline */}
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Premium coins, cash, and exclusive items delivered to your account within minutes. 
            <span className="gradient-text font-bold"> 100% safe and secure.</span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-foreground font-semibold text-lg">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/20">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="text-foreground font-semibold text-lg">Trusted Seller</span>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <Star className="w-6 h-6 text-primary" />
              <span className="text-foreground font-semibold text-lg">24/7 Support</span>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
       <a
  href="https://wa.link/8fsrrq"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full sm:w-auto"
>
  <Button
    size="lg"
    className="text-lg sm:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 shine-effect font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-primary-foreground shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
  >
    Order Now
    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
  </Button>
</a>

            <a 
              href="#deals"
              className="rounded-xl text-xl py-4 px-8 font-bold glass-effect border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transform hover:scale-105 transition-all duration-300"
            >
              View Deals
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-12">
            <p className="text-muted-foreground mb-4 text-lg">Trusted by 10,000+ players worldwide</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
              <span className="ml-3 text-foreground font-semibold text-lg">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};