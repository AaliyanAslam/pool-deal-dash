import { Gamepad2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-deep-black to-gaming-dark pattern-overlay py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl pulse-glow">
                <Gamepad2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-3xl font-black gradient-text">Pool Deal Dash</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg text-lg leading-relaxed">
              Your trusted source for premium 8 Ball Pool coins, tools, and exclusive items. 
              <span className="gradient-text font-semibold"> Fast, secure, and reliable service since 2020.</span>
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success-green rounded-full pulse-glow"></div>
                <span className="text-foreground font-semibold">10,000+ Happy Customers</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Pool Deal Dash. All rights reserved.
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="font-bold text-xl gradient-text mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#deals" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  View Deals
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Support */}
          <div>
            <h4 className="font-bold text-xl gradient-text mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium group flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  24/7 Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-lg">
              Made with <span className="gradient-text font-semibold">❤️</span> for 8 Ball Pool players worldwide
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                <span className="text-foreground font-semibold">Service Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};