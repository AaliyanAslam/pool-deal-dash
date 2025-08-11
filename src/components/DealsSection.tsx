import { DealCard } from "./DealCard";

export const DealsSection = () => {
  const deals = [
    {
      title: "100M Coins",
      price: "400",
      description: "Perfect starter pack for new players",
      icon: "coins" as const,
    },
    {
      title: "200M Coins", 
      price: "500",
      description: "Popular choice for regular players",
      icon: "coins" as const,
    },
    {
      title: "500M Coins",
      price: "800", 
      description: "Best value for competitive players",
      icon: "coins" as const,
      featured: true,
    },
    {
      title: "1 Billion Coins",
      price: "1600",
      description: "Ultimate pack for serious gamers",
      icon: "trophy" as const,
    },
    {
      title: "Tool Hack",
      price: "600",
      description: "Advanced gaming tools and cheats",
      icon: "zap" as const,
    },
    {
      title: "Pool Pass",
      price: "1250", 
      description: "Premium membership benefits",
      icon: "shield" as const,
    },
  ];

  return (
    <section className="py-20 bg-gaming-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Deal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our premium collection of 8 Ball Pool coins, tools, and exclusive items. 
            All deals come with instant delivery and lifetime support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {deals.map((deal, index) => (
            <DealCard key={index} {...deal} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom deal?</p>
          <button className="text-primary hover:text-primary/80 font-semibold underline">
            Contact us for bulk orders
          </button>
        </div>
      </div>
    </section>
  );
};