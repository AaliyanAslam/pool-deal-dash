import { DealCard } from "./DealCard";

export const DealsSection = () => {
  const deals = [
    {
      title: "100M Coins",
      price: "400",
      description: "Perfect starter pack for new players looking to dominate the tables",
      icon: "coins" as const,
    },
    {
      title: "200M Coins", 
      price: "500",
      description: "Popular choice for regular players seeking competitive edge",
      icon: "coins" as const,
    },
    {
      title: "500M Coins",
      price: "800", 
      description: "Best value pack for competitive players and tournaments",
      icon: "coins" as const,
      featured: true,
    },
    {
      title: "1 Billion Coins",
      price: "1600",
      description: "Ultimate powerhouse pack for serious gaming legends",
      icon: "trophy" as const,
    },
    {
      title: "Tool Hack",
      price: "600",
      description: "Advanced gaming tools and precision aiming assistance",
      icon: "zap" as const,
    },
    {
      title: "Pool Pass",
      price: "1250", 
      description: "Premium membership with exclusive benefits and rewards",
      icon: "shield" as const,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-gaming-light pattern-overlay" id="deals">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6 text-shadow-gold">
            Choose Your Deal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Select from our premium collection of 8 Ball Pool coins, tools, and exclusive items. 
            <span className="gradient-text font-semibold"> All deals come with instant delivery and lifetime support.</span>
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {deals.map((deal, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <DealCard {...deal} />
            </div>
          ))}
        </div>

        {/* Enhanced Custom Deal Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Deal?</h3>
            <p className="text-muted-foreground mb-6">
              Looking for bulk orders or specific packages? We've got you covered!
            </p>
           <a
  href="https://wa.link/8fsrrq"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 hover:opacity-90"
>
  Contact us for bulk orders
</a>

          </div>
        </div>
      </div>
    </section>
  );
};