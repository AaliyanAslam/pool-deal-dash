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
        {/* AI-Enhanced Header */}
        <div className="text-center mb-24 fade-in-up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-8 text-shadow-gold morph-gradient tracking-tight">
            Choose Your Deal
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-primary-glow to-secondary mx-auto mb-10 rounded-full shine-effect"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Select from our premium collection of 8 Ball Pool coins, tools, and exclusive items. 
            <span className="gradient-text font-semibold morph-gradient"> All deals come with AI-powered instant delivery and lifetime support.</span>
          </p>
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold">🤖 AI-Optimized Pricing</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* AI-Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {deals.map((deal, index) => (
            <div 
              key={index} 
              className="group"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transform: `perspective(1000px) rotateX(${Math.sin(index) * 2}deg) rotateY(${Math.cos(index) * 2}deg)`
              }}
            >
              <DealCard {...deal} />
            </div>
          ))}
        </div>

        {/* AI-Enhanced Custom Deal Section */}
        <div className="text-center mt-20 fade-in-up">
          <div className="relative glass-effect rounded-3xl p-10 max-w-3xl mx-auto border-2 border-primary/20 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black gradient-text mb-6 morph-gradient">
                🤖 Need a Custom AI Deal?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Looking for bulk orders or specific packages? Our AI system can create personalized deals just for you!
              </p>
              <a
                href="https://wa.link/8fsrrq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary via-primary-glow to-secondary text-primary-foreground 
                           px-10 py-5 text-lg font-bold rounded-full
                           hover:scale-110 transition-all duration-500 magnetic shine-effect morph-gradient
                           border-2 border-primary/30 backdrop-blur-sm shadow-2xl hover:shadow-primary/50"
              >
                🚀 Contact AI Assistant for Bulk Orders
              </a>
              <div className="flex justify-center items-center gap-6 mt-6">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  AI Available 24/7
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Instant Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};