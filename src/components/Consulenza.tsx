import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Clock, Headphones, Users, Shield, Zap } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

const Consulenza = () => {
  return (
    <section id="consulenza" className="py-20 px-6 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-gaming bg-clip-text text-transparent">
          Contatti 24/7
        </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assistenza immediata per Bot Discord, FiveM Payroll, Ottimizzazione Gaming e Manutenzione PC. Contattaci ora!
          </p>
          <p className="text-lg font-semibold text-primary mt-4">
            💯 Soddisfatti o Rimborsati 🔄
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Supporto 24/7 */}
          <Card className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-cyber-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Disponibilità 24/7
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Assistenza tecnica sempre disponibile, ogni giorno dell'anno
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Risposta immediata
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Supporto multilingue
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Risoluzione rapida
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  🚨 <strong>Supporto Prioritario:</strong> Per richieste urgenti e problematiche complesse, utilizza il ticket "Support" per ricevere assistenza tecnica specializzata con priorità massima.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Assistenza Specializzata */}
          <Card className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Assistenza Specializzata
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Esperti qualificati per ogni tipo di problema tecnico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Troubleshooting avanzato
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Consulenza personalizzata
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Formazione tecnica
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  💬 <strong>Come richiedere assistenza:</strong> Apri un ticket nel nostro server Discord e un operatore ti risponderà immediatamente!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Community Discord */}
          <Card className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Community Discord
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Unisciti alla nostra community per supporto e condivisione
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Supporto della community
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Guide e tutorial
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  Aggiornamenti in tempo reale
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">
                  🎯 <strong>Sezioni specializzate:</strong> Trova canali dedicati per Bot Discord, FiveM Payroll, Ottimizzazione Gaming e ogni tipo di customizzazione!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-cyber-blue/10 to-accent/10 rounded-2xl p-8 border border-border/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Hai bisogno di assistenza immediata?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Unisciti al nostro server Discord per ricevere supporto tecnico immediato, 
            acquistare i nostri servizi e connetterti con la community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="mr-2" size={20} />
                Unisciti al Discord
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulenza;