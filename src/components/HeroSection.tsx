import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Zap, Shield, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pattern-overlay overflow-hidden">
      {/* AI-Powered Particle System */}
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/40 rounded-full floating-animation bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-secondary/50 rounded-full floating-animation bg-gradient-to-br from-secondary/5 to-transparent backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-primary/30 rounded-full floating-animation bg-gradient-to-br from-primary/3 to-transparent" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-md floating-animation" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-20 h-20 border border-secondary/25 rounded-full floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-sm floating-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 fade-in-up">
          {/* AI-Enhanced Premium Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-primary via-primary-glow to-secondary rounded-full flex items-center justify-center floating-animation pulse-glow shadow-2xl border-2 border-primary/30 backdrop-blur-sm morph-gradient">
                <Gamepad2 className="w-14 h-14 text-primary-foreground drop-shadow-lg" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* AI-Enhanced Typography */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight gradient-text text-shadow-blue tracking-tight">
              Get Your 8 Ball Pool
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-foreground">
              <span className="gradient-text morph-gradient">Deals</span> 
              <span className="inline-block ml-4 animate-pulse">⚡</span> 
              Instantly
            </h2>
          </div>

          {/* AI-Enhanced Tagline */}
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Premium coins, cash, and exclusive items delivered to your account within minutes. 
            <span className="gradient-text font-bold morph-gradient"> 100% safe and secure.</span>
            <span className="block mt-2 text-lg md:text-xl text-primary/80">
              🚀 Powered by AI-driven delivery system
            </span>
          </p>

          {/* AI-Enhanced Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 glass-effect px-8 py-4 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 magnetic shine-effect">
              <Zap className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-foreground font-semibold text-lg">⚡ AI-Powered Delivery</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-8 py-4 rounded-full border border-secondary/30 hover:border-secondary/50 transition-all duration-300 magnetic shine-effect">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="text-foreground font-semibold text-lg">🛡️ Trusted Seller</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-8 py-4 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 magnetic shine-effect">
              <Star className="w-6 h-6 text-primary" />
              <span className="text-foreground font-semibold text-lg">🌟 24/7 AI Support</span>
            </div>
          </div>

          {/* AI-Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.link/8fsrrq"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="relative text-lg sm:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 shine-effect font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary hover:from-primary-glow hover:to-secondary text-primary-foreground shadow-2xl hover:shadow-primary/60 transform hover:scale-110 transition-all duration-500 magnetic morph-gradient border-2 border-primary/30 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  🚀 Order Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </a>

            <a 
              href="#deals"
              className="group relative rounded-2xl text-xl py-6 px-10 font-bold glass-effect border-2 border-primary/40 text-foreground hover:bg-primary/15 hover:border-primary/60 transform hover:scale-105 transition-all duration-500 magnetic shine-effect backdrop-blur-md"
            >
              <span className="flex items-center">
                🎯 View Deals
                <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </span>
            </a>
          </div>

          {/* AI-Enhanced Social Proof */}
          <div className="pt-16">
            <p className="text-muted-foreground mb-6 text-xl">
              🌍 Trusted by <span className="gradient-text font-bold">10,000+</span> players worldwide
            </p>
            <div className="flex justify-center items-center gap-3 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-7 h-7 text-primary fill-current animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              <span className="ml-4 text-foreground font-bold text-xl">4.9/5 Rating</span>
            </div>
            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="glass-effect px-6 py-3 rounded-full border border-primary/20">
                <span className="text-primary font-semibold">🏆 #1 Rated Service</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full border border-secondary/20">
                <span className="text-secondary font-semibold">⚡ 99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};