import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Zap, Shield, Trophy, Star, Crown } from "lucide-react";
import coinsImage from "@/assets/coins.png";

interface DealCardProps {
  title: string;
  price: string;
  description: string;
  icon?: "coins" | "zap" | "shield" | "trophy";
  featured?: boolean;
}

const iconMap = {
  coins: Coins,
  zap: Zap,
  shield: Shield,
  trophy: Trophy,
};

export const DealCard = ({ title, price, description, icon = "coins", featured = false }: DealCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className={`premium-card group cursor-pointer ${featured ? 'ring-2 ring-primary/50 premium-glow featured-card' : ''} relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl`}>
      {featured && (
        <>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-pulse">
            <Crown className="w-4 h-4" />
            Most Popular
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
        </>
      )}
      
      <CardContent className="p-8 text-center space-y-6 relative z-10">
        {/* Enhanced Professional Coin/Icon Display */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto group-hover:scale-110 transition-all duration-500 drop-shadow-2xl">
          {icon === "coins" ? (
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <img
                src={coinsImage}
                alt={`${title} coins`}
                className="w-full h-full object-contain rounded-full relative z-10 group-hover:rotate-12 transition-transform duration-500"
              />
              <div className={`absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br ${
                featured
                  ? 'from-primary/40 to-secondary/40 animate-pulse'
                  : 'from-accent/20 to-muted/20'
              }`}></div>
              {featured && (
                <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              )}
            </div>
          ) : (
            <div className={`w-full h-full rounded-full ${
              featured
                ? 'bg-gradient-to-br from-primary to-secondary shadow-2xl animate-pulse'
                : 'bg-gradient-to-br from-accent to-muted shadow-xl'
            } flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <IconComponent className={`w-14 h-14 relative z-10 ${
                featured ? 'text-primary-foreground' : 'text-primary'
              } group-hover:scale-110 transition-transform duration-300`} />
            </div>
          )}
          
          {/* Floating particles effect for featured cards */}
          {featured && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-2 w-2 h-2 bg-primary/60 rounded-full animate-ping delay-100"></div>
              <div className="absolute bottom-4 right-2 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-6 right-4 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-500"></div>
            </div>
          )}
        </div>
        
        {/* Enhanced Content */}
        <div className="space-y-4">
          <h3 className={`text-2xl sm:text-3xl font-bold ${
            featured ? 'gradient-text animate-pulse' : 'text-foreground'
          } mb-3 group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-2">{description}</p>
          
          <div className="relative">
            <div className={`text-3xl sm:text-4xl font-black mb-6 ${
              featured ? 'gradient-text text-shadow-blue' : 'text-foreground'
            } group-hover:scale-110 transition-transform duration-300`}>
              Rs {price}
            </div>
            {featured && (
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-secondary fill-current animate-bounce" />
              </div>
            )}
            {/* Value indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30">
                Best Value
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Button */}
        <a
          href="https://wa.link/8fsrrq"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            className={`w-full text-base sm:text-lg py-4 sm:py-5 font-bold shine-effect transform transition-all duration-500 group-hover:scale-105 relative overflow-hidden ${
              featured
                ? 'bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary-glow hover:via-secondary-glow hover:to-primary-glow text-primary-foreground shadow-2xl hover:shadow-primary/60 animate-gradient-x'
                : 'bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground shadow-lg hover:shadow-primary/40'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Buy Now
              {featured && <Crown className="w-4 h-4" />}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 group-hover:animate-slide-right"></div>
          </Button>
        </a>
        
        {/* Enhanced Trust Indicators */}
        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Instant Delivery</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>24/7 Support</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};