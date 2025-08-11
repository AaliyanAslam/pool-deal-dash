import { Gamepad2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gaming-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-gaming-dark" />
              </div>
              <span className="text-2xl font-bold">Pool Deal Dash</span>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Your trusted source for premium 8 Ball Pool coins, tools, and exclusive items. 
              Fast, secure, and reliable service since 2020.
            </p>
            <div className="text-sm text-primary-foreground/50">
              © 2024 Pool Deal Dash. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#deals" className="hover:text-secondary transition-colors">View Deals</a></li>
              <li><a href="#how-it-works" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            Made with ❤️ for 8 Ball Pool players worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};