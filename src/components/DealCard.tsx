import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Zap, Shield, Trophy } from "lucide-react";

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
    <Card className={`card-hover ${featured ? 'premium-glow ring-2 ring-secondary/20' : ''} relative overflow-hidden`}>
      {featured && (
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </div>
      )}
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-16 h-16 mx-auto rounded-full ${featured ? 'bg-secondary/10' : 'bg-accent'} flex items-center justify-center floating-animation`}>
          <IconComponent className={`w-8 h-8 ${featured ? 'text-secondary' : 'text-primary'}`} />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="text-3xl font-bold text-primary mb-4">₹{price}</div>
        </div>

        <Button 
          variant={featured ? "secondary" : "default"} 
          className={`w-full shine-effect ${featured ? 'font-semibold' : ''}`}
          size="lg"
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};