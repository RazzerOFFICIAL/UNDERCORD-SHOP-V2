import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra il pulsante quando l'utente scrolla verso il basso
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Funzione per tornare in cima alla pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-gaming hover:bg-gradient-gaming/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="icon"
          aria-label="Torna in cima"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;