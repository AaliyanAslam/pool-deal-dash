import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import poolIgniteLogo from "@/assets/poolignite.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full glass-effect border-b border-primary/20 z-50 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
     <a href="#">
           <div className="flex items-center gap-4">
        <img src={poolIgniteLogo} alt="Pool Ignite Logo" className="h-16 w-auto rounded-md" />

            <span className="text-2xl font-black gradient-text">Pool Ignite</span>
          </div>
     </a>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#deals" className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              Deals
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://wa.link/8fsrrq" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold px-6 py-3 shine-effect hover:scale-105 transition-transform duration-300">
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
      <div className="md:hidden py-6 border-t border-primary/20 rounded-xl p-5 mb-6 glass-effect">
  <div className="flex flex-col gap-4">
    <a 
      href="#deals" 
      className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
    >
      Deals
    </a>
    <a 
      href="#how-it-works" 
      className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
    >
      How It Works
    </a>
    <a 
      href="#contact" 
      className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
    >
      Contact
    </a>
    <a 
      href="https://wa.link/8fsrrq" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground 
                 font-bold w-full text-center px-6 py-3 rounded-full
                 hover:scale-105 hover:shadow-lg transition-all duration-300 shine-effect"
    >
      Order Now
    </a>
  </div>
</div>

        )}
      </div>
    </nav>
  );
};