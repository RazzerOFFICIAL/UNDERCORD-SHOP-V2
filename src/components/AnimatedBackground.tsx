import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating dots */}
      <div className="absolute top-10 left-20 w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-40" />
      <div className="absolute top-32 right-32 w-2 h-2 bg-primary rounded-full animate-float delay-500 opacity-40" />
      <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-accent rounded-full animate-float delay-1000 opacity-40" />
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-neon-green rounded-full animate-float delay-1500 opacity-40" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-tech-orange rounded-full animate-float delay-800 opacity-40" />
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-cyber-blue rounded-full animate-float delay-300 opacity-40" />
      
      {/* Floating Emojis - smaller and more subtle */}
      <div className="absolute top-16 left-1/3 text-sm animate-float delay-400 opacity-40">⚡</div>
      <div className="absolute top-1/3 right-1/4 text-xs animate-float delay-900 opacity-40">💎</div>
      <div className="absolute bottom-1/3 left-1/5 text-sm animate-float delay-1200 opacity-40">🔥</div>
      <div className="absolute top-2/3 right-1/5 text-xs animate-float delay-600 opacity-40">⭐</div>
      <div className="absolute bottom-1/4 right-1/3 text-sm animate-float delay-1400 opacity-40">🚀</div>
      <div className="absolute top-1/4 left-1/6 text-xs animate-float delay-700 opacity-40">🎮</div>
      
      {/* Floating Text - very subtle */}
      <div className="absolute top-24 right-1/6 text-xs text-cyber-blue font-mono animate-float delay-1100 opacity-40">SHOP</div>
      <div className="absolute bottom-32 left-1/3 text-xs text-neon-green font-mono animate-float delay-200 opacity-40">UNDERCORD</div>
      <div className="absolute top-1/2 left-1/6 text-xs text-tech-orange font-mono animate-float delay-1300 opacity-40">SHOP</div>
      <div className="absolute bottom-1/5 right-1/6 text-xs text-primary font-mono animate-float delay-500 opacity-40">UNDERCORD</div>
      
      {/* Additional UNDERCORD and SHOP text */}
      <div className="absolute top-1/3 left-1/2 text-xs text-cyber-blue font-mono animate-float delay-800 opacity-40">UNDERCORD</div>
      <div className="absolute bottom-1/3 right-1/2 text-xs text-neon-green font-mono animate-float delay-1600 opacity-40">SHOP</div>
      <div className="absolute top-2/3 left-1/4 text-xs text-tech-orange font-mono animate-float delay-400 opacity-40">UNDERCORD</div>
      <div className="absolute bottom-2/3 right-1/4 text-xs text-primary font-mono animate-float delay-1200 opacity-40">SHOP</div>
      <div className="absolute top-1/4 right-1/2 text-xs text-accent font-mono animate-float delay-600 opacity-40">UNDERCORD</div>
      <div className="absolute bottom-1/4 left-1/2 text-xs text-cyber-blue font-mono animate-float delay-1400 opacity-40">SHOP</div>
      <div className="absolute top-3/4 right-1/3 text-xs text-neon-green font-mono animate-float delay-300 opacity-40">UNDERCORD</div>
      <div className="absolute bottom-3/4 left-1/3 text-xs text-tech-orange font-mono animate-float delay-1000 opacity-40">SHOP</div>
      
      {/* Additional geometric shapes - very subtle */}
      <div className="absolute top-1/6 right-1/3 w-2 h-2 border border-cyber-blue/40 rotate-45 animate-float delay-100 opacity-40" />
      <div className="absolute bottom-1/6 left-1/4 w-1 h-3 bg-gradient-to-t from-primary/40 to-accent/40 animate-float delay-1000 opacity-40" />
      <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-neon-green/40 transform rotate-12 animate-float delay-1600 opacity-40" />
      <div className="absolute top-1/5 left-1/2 w-2 h-2 border border-tech-orange/40 rounded-full animate-float delay-800 opacity-40" />
      
      {/* More scattered elements */}
      <div className="absolute top-40 left-1/5 text-xs animate-float delay-1700 opacity-40">✨</div>
      <div className="absolute bottom-40 right-1/2 text-xs animate-float delay-400 opacity-40">🌟</div>
      <div className="absolute top-3/5 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float delay-1200 opacity-40" />
      <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-primary/40 animate-float delay-900 opacity-40" />
      
      {/* Corner elements */}
      <div className="absolute top-8 left-8 text-xs text-cyber-blue/40 font-mono animate-float delay-300 opacity-40">UC</div>
      <div className="absolute top-8 right-8 text-xs text-neon-green/40 font-mono animate-float delay-1500 opacity-40">24</div>
      <div className="absolute bottom-8 left-8 text-xs text-tech-orange/40 font-mono animate-float delay-800 opacity-40">7</div>
      <div className="absolute bottom-8 right-8 text-xs text-primary/40 font-mono animate-float delay-1100 opacity-40">∞</div>
    </div>
  );
};

export default AnimatedBackground;