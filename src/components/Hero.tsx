import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Zap } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-blue rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float delay-1000 opacity-80" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-float delay-500 opacity-40" />
        
        {/* Floating Emojis */}
        <div className="absolute top-20 left-10 text-2xl animate-float delay-300 opacity-70">🚀</div>
        <div className="absolute top-32 right-20 text-xl animate-float delay-700 opacity-60">⚡</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float delay-1200 opacity-50">🎮</div>
        <div className="absolute top-40 right-40 text-lg animate-float delay-900 opacity-80">💎</div>
        <div className="absolute bottom-32 right-10 text-2xl animate-float delay-1500 opacity-65">🔥</div>
        <div className="absolute top-60 left-1/2 text-xl animate-float delay-600 opacity-70">⭐</div>
        
        {/* Floating Text */}
        <div className="absolute top-16 right-1/4 text-xs text-cyber-blue font-mono animate-float delay-800 opacity-40">DISCORD</div>
        <div className="absolute bottom-20 left-1/4 text-xs text-neon-green font-mono animate-float delay-1100 opacity-50">PREMIUM</div>
        <div className="absolute top-1/2 left-10 text-xs text-tech-orange font-mono animate-float delay-400 opacity-45">24/7</div>
        <div className="absolute bottom-1/3 right-1/3 text-xs text-primary font-mono animate-float delay-1300 opacity-40">CUSTOM</div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-4 h-4 border border-cyber-blue rotate-45 animate-float delay-200 opacity-30" />
        <div className="absolute bottom-1/5 left-1/5 w-2 h-6 bg-gradient-to-t from-primary to-accent animate-float delay-1000 opacity-40" />
        <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-neon-green transform rotate-12 animate-float delay-1400 opacity-35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            Bot Discord & FiveM
            <span className="block text-4xl md:text-6xl text-cyber-blue">
              Ottimizzazione Gaming
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Bot Discord Personalizzati • Bot FiveM Payroll • Ottimizzazione Gaming Pro • Pulizia Windows • Manutenzione PC Automatica
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="mr-2" size={20} />
                Unisciti al Discord
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#servizi">
                Scopri i Servizi
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="text-neon-green" />
              <span>200+ membri attivi</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-tech-orange" />
              <span>Supporto 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-cyber-blue" />
              <span>Soluzioni personalizzate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;