import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      {/* Scroll track */}
      <div className="w-1 h-32 bg-muted-foreground/20 rounded-full relative overflow-hidden">
        {/* Top half - expands upward from center with gradient */}
        <div 
          className="w-1 transition-all duration-300 ease-out absolute"
          style={{
            height: `${scrollProgress * 50}%`,
            top: '50%',
            transform: 'translateY(-100%)',
            borderTopLeftRadius: '9999px',
            borderTopRightRadius: '9999px',
            background: 'linear-gradient(to top, hsl(200 100% 70%), hsl(200 100% 70% / 0.3))'
          }}
        />
        {/* Bottom half - expands downward from center with gradient */}
        <div 
          className="w-1 transition-all duration-300 ease-out absolute"
          style={{
            height: `${scrollProgress * 50}%`,
            top: '50%',
            borderBottomLeftRadius: '9999px',
            borderBottomRightRadius: '9999px',
            background: 'linear-gradient(to bottom, hsl(200 100% 70%), hsl(200 100% 70% / 0.3))'
          }}
        />
      </div>
      
      {/* Section indicators */}
      <div className="mt-4 space-y-2">
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30 relative">
          {scrollProgress < 0.2 && (
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
          )}
        </div>
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30 relative">
          {scrollProgress >= 0.2 && scrollProgress < 0.4 && (
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
          )}
        </div>
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30 relative">
          {scrollProgress >= 0.4 && scrollProgress < 0.6 && (
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
          )}
        </div>
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30 relative">
          {scrollProgress >= 0.6 && scrollProgress < 0.8 && (
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
          )}
        </div>
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30 relative">
          {scrollProgress >= 0.8 && (
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;