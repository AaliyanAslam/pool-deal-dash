import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Zap, Shield, Trophy, Star, Crown } from "lucide-react";

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
    <Card className={`premium-card group cursor-pointer ${featured ? 'ring-2 ring-primary/50 premium-glow' : ''} relative overflow-hidden slide-in-left`}>
      {featured && (
        <>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
            <Crown className="w-4 h-4" />
            Popular
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </>
      )}
      
      <CardContent className="p-8 text-center space-y-6 relative">
        {/* Premium Icon with Enhanced Animation */}
        <div className={`w-20 h-20 mx-auto rounded-full ${
          featured 
            ? 'bg-gradient-to-br from-primary to-secondary shadow-2xl' 
            : 'bg-gradient-to-br from-accent to-muted'
        } flex items-center justify-center floating-animation group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`w-10 h-10 ${
            featured ? 'text-primary-foreground' : 'text-primary'
          }`} />
        </div>
        
        {/* Enhanced Content */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${
            featured ? 'gradient-text' : 'text-foreground'
          } mb-3`}>{title}</h3>
          
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          
          <div className="relative">
            <div className={`text-4xl font-black mb-6 ${
              featured ? 'gradient-text text-shadow-blue' : 'text-foreground'
            }`}>
              Rs {price}
            </div>
            {featured && (
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-secondary fill-current animate-pulse" />
              </div>
            )}
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
    className={`w-full text-base sm:text-lg md:text-xl py-4 sm:py-5 md:py-6 font-bold shine-effect transform transition-all duration-300 group-hover:scale-105 ${
      featured
        ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-primary-foreground shadow-xl hover:shadow-primary/50'
        : 'bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg hover:shadow-primary/30'
    }`}
  >
    Buy Now
  </Button>
</a>

        
        {/* Trust Indicator */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
          <Shield className="w-4 h-4 text-success-green" />
          <span>Instant Delivery</span>
        </div>
      </CardContent>
    </Card>
  );
};