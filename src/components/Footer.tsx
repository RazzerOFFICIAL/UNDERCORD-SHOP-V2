import { MessageCircle, Mail, Clock, Home, Settings, Briefcase, Headphones, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DiscordIcon from "@/components/DiscordIcon";
import NavigationIcon from "@/components/NavigationIcon";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gaming rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                UNDERCORD SHOP
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              UNDERCORD SHOP - La tua destinazione per servizi Discord professionali, automazioni avanzate 
              e ottimizzazioni Windows. Oltre 200 membri si fidano già di noi.
            </p>
            <Button variant="discord" size="sm" asChild>
              <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" />
                Unisciti ora
              </a>
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <NavigationIcon className="text-primary" size={20} />
              Navigazione
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Servizi
                </a>
              </li>
              <li>
                <a href="#consulenza" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                Contatti 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Discord */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <DiscordIcon className="text-[#5865F2]" size={20} />
              Discord
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="text-sm font-medium text-foreground">🛒 UNDERCORD SHOP 🛒</span>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <LifeBuoy className="w-4 h-4" />
                  Supporto 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Partnership</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="text-sm opacity-60">Prossimamente...</li>
              {/* Qui potrai aggiungere manualmente i partnership */}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 UNDERCORD SHOP. Tutti i diritti riservati.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">
                🚀 Innovazione e Qualità
              </span>
              <span className="text-muted-foreground text-sm">
                ⚡ Supporto 24/7 Garantito
              </span>
              <span className="text-muted-foreground text-sm">
                💎 Soddisfazione al 100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;