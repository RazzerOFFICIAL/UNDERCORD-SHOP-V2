import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import DiscordIcon from "@/components/DiscordIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gaming rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              UNDERCORD SHOP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
                onClick={scrollToTop}
                className="text-foreground hover:text-primary transition-colors cursor-pointer px-4 py-2 border border-border/20 rounded-md hover:border-blue-400 hover:bg-blue-100"
              >
                Home
              </button>
              <a href="#servizi" className="text-foreground hover:text-primary transition-colors px-4 py-2 border border-border/20 rounded-md hover:border-blue-400 hover:bg-blue-100">
                Servizi
              </a>
              <a href="#consulenza" className="text-foreground hover:text-primary transition-colors px-4 py-2 border border-border/20 rounded-md hover:border-blue-400 hover:bg-blue-100">
                Contatti 24/7
              </a>

          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/why-us">
                Perché Noi?
              </Link>
            </Button>
            <Button variant="discord" size="sm" asChild>
              <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="mr-2" size={16} />
                Unisciti al Discord
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer text-left"
              >
                Home
              </button>
              <a 
                href="#servizi" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servizi
              </a>
              <a 
                href="#consulenza" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti 24/7
              </a>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/why-us" onClick={() => setIsMenuOpen(false)}>
                  Perché Noi?
                </Link>
              </Button>
              
              <Button variant="discord" size="sm" className="w-full" asChild>
                <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                  <DiscordIcon className="mr-2" size={16} />
                  Unisciti al Discord
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;