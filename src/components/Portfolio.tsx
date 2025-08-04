import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Cog, Cpu, Crown, Users, TrendingUp, Shield, Zap, Lightbulb, MessageCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    service: "Bot Discord Custom",
    icon: Bot,
    cliente: "xShadowGamer",
    sfida: "Gestire 500+ ticket di supporto manualmente",
    soluzione: "Bot ticket AI con categorizzazione automatica",
    risultati: "-80% ticket manuali, +50% soddisfazione",
    screenshot: "Bot ticket con interfaccia moderna",
    color: "cyber-blue"
  },
  {
    id: 2,
    service: "Bot Discord Custom",
    icon: Bot,
    cliente: "NightWolf99",
    sfida: "Bot completo per community gaming",
    soluzione: "Bot multifunzione con dashboard web",
    risultati: "+100% soddisfazione, organizzazione perfetta",
    screenshot: "Dashboard personalizzata con pulsanti",
    color: "cyber-blue"
  },
  {
    id: 3,
    service: "Bot Discord Custom",
    icon: Bot,
    cliente: "CyberDragon",
    sfida: "Sistema payroll per server FiveM",
    soluzione: "Bot payroll integrato con database",
    risultati: "Automazione completa, -90% errori",
    screenshot: "Sistema payroll automatizzato",
    color: "cyber-blue"
  },
  {
    id: 4,
    service: "Bot Discord Custom",
    icon: Bot,
    cliente: "PixelMaster",
    sfida: "Bot musica con playlist personalizzate",
    soluzione: "Bot musica avanzato con comandi custom",
    risultati: "+200% utilizzo, qualità HD",
    screenshot: "Player musicale con interfaccia moderna",
    color: "cyber-blue"
  },
  {
    id: 5,
    service: "Automazioni / Server",
    icon: Cog,
    cliente: "DevStorm",
    sfida: "Deploy manuali di 4 ore",
    soluzione: "Pipeline CI/CD automatizzata",
    risultati: "Deploy in 5 min, 99.9% uptime",
    screenshot: "Dashboard CI/CD con metriche",
    color: "primary"
  },
  {
    id: 6,
    service: "Automazioni / Server",
    icon: Cog,
    cliente: "ServerKing",
    sfida: "Gestione 50+ server di gioco",
    soluzione: "Automazione completa server",
    risultati: "+200% efficienza, backup sicuri",
    screenshot: "Panel controllo server automatizzato",
    color: "primary"
  },
  {
    id: 7,
    service: "Automazioni / Server",
    icon: Cog,
    cliente: "CloudNinja",
    sfida: "Monitoraggio manuale infrastruttura",
    soluzione: "Sistema monitoring 24/7 con alerting",
    risultati: "-95% downtime, alerting real-time",
    screenshot: "Dashboard monitoraggio avanzato",
    color: "primary"
  },
  {
    id: 8,
    service: "Debloat Windows 11",
    icon: Cpu,
    cliente: "GamerPro2024",
    sfida: "PC gaming lento, FPS bassi",
    soluzione: "Debloat completo + tweaks gaming",
    risultati: "+40% FPS, -50% tempo avvio",
    screenshot: "Benchmark before/after performance",
    color: "tech-orange"
  },
  {
    id: 9,
    service: "Debloat Windows 11",
    icon: Cpu,
    cliente: "TechSavvy",
    sfida: "Telemetria e privacy Windows",
    soluzione: "Disabilitazione telemetria completa",
    risultati: "Privacy totale, +30% velocità",
    screenshot: "Sistema ottimizzato senza telemetria",
    color: "tech-orange"
  },
  {
    id: 10,
    service: "Ottimizzazione PC e Windows",
    icon: Cpu,
    cliente: "VideoEditor",
    sfida: "Crash frequenti durante rendering",
    soluzione: "Ottimizzazione hardware completa",
    risultati: "-70% crash, +80% velocità rendering",
    screenshot: "Workstation ottimizzata per editing",
    color: "neon-green"
  },
  {
    id: 11,
    service: "Ottimizzazione PC e Windows",
    icon: Cpu,
    cliente: "StreamerPro",
    sfida: "Lag durante streaming e gaming",
    soluzione: "Configurazione power management",
    risultati: "Streaming fluido, zero lag",
    screenshot: "Setup streaming ottimizzato",
    color: "neon-green"
  },
  {
    id: 12,
    service: "Prodotti Discord",
    icon: Crown,
    cliente: "CommunityLeader",
    sfida: "Limitazioni server Discord",
    soluzione: "Upgrade Nitro + Server Boost Lv3",
    risultati: "Qualità HD, +300% engagement",
    screenshot: "Server premium con tutte le funzioni",
    color: "accent"
  },
  {
    id: 13,
    service: "Prodotti Discord",
    icon: Crown,
    cliente: "EventMaster",
    sfida: "Upload limitati per eventi",
    soluzione: "Discord Nitro per upload 500MB",
    risultati: "Upload illimitati, eventi migliori",
    screenshot: "Upload file di grandi dimensioni",
    color: "accent"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esempi reali di come i nostri servizi hanno trasformato le esigenze dei clienti in soluzioni di successo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                {/* Thought Bubble */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                </div>
                

                
                <CardHeader className="pb-2 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-md bg-${study.color}/10`}>
                      <IconComponent className={`w-4 h-4 text-${study.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {study.service}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Esempio - Soluzioni alle tue esigenze !
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3 p-4 pt-0">
                  {/* Sfida */}
                  <div className="space-y-1 relative">
                    {/* Problem cloud */}
                    <div className="absolute -top-1 -right-1 w-6 h-4 bg-red-100 rounded-full opacity-50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3 h-3 text-red-500" />
                      <h4 className="font-medium text-foreground text-sm">Sfida</h4>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed pl-4">
                      {study.sfida}
                    </p>
                  </div>

                  {/* Soluzione */}
                  <div className="space-y-1 relative">
                    {/* Solution thought bubble */}
                    <div className="absolute -top-2 -right-2 flex items-center">
                      <div className="w-3 h-3 bg-blue-200 rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full opacity-70 ml-1"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full opacity-80 ml-1"></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-blue-500" />
                      <h4 className="font-medium text-foreground text-sm">Soluzione</h4>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed pl-4">
                      {study.soluzione}
                    </p>
                  </div>

                  {/* Risultati */}
                  <div className="space-y-1 relative">
                    {/* Success sparkles */}
                    <div className="absolute -top-1 -right-1 flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <h4 className="font-medium text-foreground text-sm">Risultati</h4>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed pl-4 font-medium">
                      {study.risultati}
                    </p>
                  </div>

                  {/* Screenshot */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-purple-500" />
                      <h4 className="font-medium text-foreground text-sm">Demo</h4>
                    </div>
                    <div className="pl-4">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-2 rounded-md border border-primary/20">
                        <p className="text-xs text-muted-foreground italic">
                          📸 {study.screenshot}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;