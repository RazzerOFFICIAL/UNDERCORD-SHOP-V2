import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Cog, HardDrive, Wrench, Headphones, Crown, Zap, Cpu, MessageCircle, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

// Servizi organizzati per categoria
const discordBotServices = [
  {
    icon: Bot,
    title: "🟢 Bot Supporto & Ticketing System",
    description: "Sistema completo per gestione supporto clienti",
    features: ["Comandi apertura/chiusura ticket", "Assegnazione automatica staff", "Logs e categorie dinamiche", "Integrazione webhook e database"],
    fullFeatures: [
      "Sistema di ticket avanzato con comandi personalizzabili per apertura e chiusura",
      "Assegnazione automatica dello staff in base a disponibilità e competenze",
      "Logging completo delle conversazioni con categorie dinamiche per organizzazione",
      "Integrazione con webhook Discord e database per archiviazione permanente",
      "Transcript automatici delle conversazioni per review e training",
      "Sistema di priorità per ticket urgenti e VIP"
    ],
    detailedDescription: "Ideale per server con community attive, aziende o team di supporto. Esempio: Un server di hosting può gestire richieste supporto con priorità automatica in base al tipo di ticket.",
    color: "cyber-blue"
  },
  {
    icon: Bot,
    title: "🟡 Bot Automod / Sicurezza",
    description: "Moderazione automatica e protezione server",
    features: ["Filtri antispam/parole vietate", "Mute/kick/ban automatici", "Logging moderazione", "Alert DM allo staff"],
    fullFeatures: [
      "Filtri avanzati per spam, link sospetti e parole vietate personalizzabili",
      "Sistema di punizioni automatiche: mute temporanei, kick e ban progressivi",
      "Logging dettagliato di tutte le azioni di moderazione con timestamp",
      "Alert immediati via DM allo staff per situazioni critiche",
      "Protezione anti-raid con blocco automatico di account sospetti",
      "Whitelist per utenti fidati e bypass per staff"
    ],
    detailedDescription: "Per server con problemi di spam, toxic behavior o bisogno di moderazione automatizzata. Esempio: Server RP pubblico che vuole tutelarsi da raid o utenti tossici.",
    color: "tech-orange"
  },
  {
    icon: Bot,
    title: "🟣 Bot Eventi e Giveaway",
    description: "Gestione eventi e giveaway automatizzati",
    features: ["Giveaway con timer e reazione", "Estrazione casuale vincitori", "Programmazione eventi", "Auto-annuncio vincitore"],
    fullFeatures: [
      "Sistema giveaway completo con timer personalizzabili e reazioni automatiche",
      "Estrazione casuale verificata con logs del vincitore per trasparenza",
      "Programmazione eventi ricorrenti con reminder automatici",
      "Annuncio automatico dei vincitori con menzioni e embed personalizzati",
      "Sistema di requisiti per partecipazione (ruoli, tempo nel server, ecc.)",
      "Statistiche dettagliate su partecipazione e engagement"
    ],
    detailedDescription: "Perfetto per community gaming, youtuber o streamer. Esempio: Un creator lancia giveaway settimanali con badge esclusivi per i vincitori.",
    color: "accent"
  },
  {
    icon: Bot,
    title: "🔵 Bot Musica / Utility",
    description: "Musica 24/7 e comandi utility avanzati",
    features: ["Comandi /play, /skip, /pause", "Canale voice dedicato 24/7", "Integrazione YouTube/SoundCloud", "Comandi utility personalizzati"],
    fullFeatures: [
      "Comandi musicali completi: play, skip, pause, queue, shuffle, repeat",
      "Canale voice dedicato con musica 24/7 senza interruzioni",
      "Integrazione con YouTube, SoundCloud e Spotify per massima compatibilità",
      "Comandi utility: traduzioni, embed personalizzati, promemoria",
      "Sistema di playlist personalizzate per utenti e server",
      "Controlli avanzati: volume, equalizzatore, filtri audio"
    ],
    detailedDescription: "Musica 24/7 o comandi extra per server chill/fun. Esempio: Server community che vuole musica di sottofondo senza plugin esterni.",
    color: "neon-green"
  }
];

const fivemServices = [
  {
    icon: Cog,
    title: "🟥 Bot Payroll Avanzato per FiveM",
    description: "Sistema automatico di calcolo stipendi e guadagni",
    features: ["Logging eventi automatico", "Calcolo guadagni dinamico", "Classifiche settimanali", "Dashboard web per staff"],
    fullFeatures: [
      "Tracking automatico di attività criminali e legali con logging dettagliato",
      "Calcolo dinamico dei guadagni in base a performance e attività svolte",
      "Classifiche settimanali e mensili per motivare la community",
      "Dashboard web completa per staff con gestione salari e statistiche",
      "Sistema di bonus e penalità personalizzabili per diverse attività",
      "Report automatici con analisi delle performance dei giocatori"
    ],
    detailedDescription: "Traccia attività e calcola stipendi automatici. Esempio: Server RP con economy in-game dove admin non gestiscono più manualmente i pagamenti.",
    color: "primary"
  },
  {
    icon: Cog,
    title: "🟧 Gestione Server & Monitoraggio",
    description: "Monitoraggio completo uptime e performance",
    features: ["Monitoraggio uptime 24/7", "Crash alert immediati", "Report giornalieri", "Integrazione webhook Discord"],
    fullFeatures: [
      "Monitoraggio continuo dell'uptime del server con check ogni minuto",
      "Alert immediati via Discord/email in caso di crash o disconnessioni",
      "Report giornalieri dettagliati su performance, giocatori e risorse",
      "Integrazione completa con webhook Discord per notifiche real-time",
      "Monitoring risorse server: CPU, RAM, storage e bandwidth",
      "Logs dettagliati di tutti gli eventi per troubleshooting"
    ],
    detailedDescription: "Mantieni il server sempre sotto controllo. Esempio: Staff riceve alert Discord se il server è giù o se un bot smette di rispondere.",
    color: "cyber-blue"
  },
  {
    icon: Cog,
    title: "🟨 Configurazioni e Backup Remoti",
    description: "Backup automatici e ripristino configurazioni",
    features: ["Backup settimanali automatici", "Salvataggio cloud sicuro", "Ripristino 1-click", "Notifiche Discord"],
    fullFeatures: [
      "Backup automatici settimanali o on-demand di tutte le configurazioni",
      "Salvataggio sicuro in cloud con crittografia e ridondanza",
      "Sistema di ripristino 1-click per recovery rapido dopo problemi",
      "Notifiche Discord per conferma backup e alert in caso di errori",
      "Versioning dei backup per ripristinare configurazioni specifiche",
      "Backup incrementali per ottimizzare spazio e velocità"
    ],
    detailedDescription: "Backup automatico configurazioni Discord/FiveM. Esempio: Server RP può ripristinare setup Discord o file .cfg dopo un problema tecnico.",
    color: "tech-orange"
  }
];

const optimizationServices = [
  {
    icon: Cpu,
    title: "🟩 Ottimizzazione Gaming Pro",
    description: "Massime performance per gaming competitivo",
    features: ["Disabilitazione servizi inutili", "Ottimizzazione registro CPU", "Tweak GPU avanzati", "Update driver automatici"],
    fullFeatures: [
      "Disabilitazione selettiva di servizi Windows non necessari per gaming",
      "Ottimizzazione registro di sistema e scheduler CPU per latenze ridotte",
      "Tweak avanzati GPU con profili energetici ottimizzati per performance",
      "Update automatico driver grafici, audio e DirectX per compatibilità",
      "Configurazione priorità processi per massimizzare FPS nei giochi",
      "Ottimizzazione memoria RAM e gestione cache per stabilità"
    ],
    detailedDescription: "Velocizza il PC per FPS stabili e latenze ridotte. Esempio: Gamer che gioca a FiveM o Valorant e vuole ridurre input lag e stuttering.",
    color: "neon-green"
  },
  {
    icon: Cpu,
    title: "🟦 Pulizia Profonda & Privacy",
    description: "Rimozione bloatware e protezione privacy",
    features: ["Rimozione bloatware completa", "Disattivazione telemetria", "Pulizia app preinstallate", "Analisi spazio SSD"],
    fullFeatures: [
      "Rimozione completa di bloatware e applicazioni preinstallate inutili",
      "Disattivazione totale della telemetria Microsoft per massima privacy",
      "Pulizia profonda di app preinstallate e servizi di tracking",
      "Analisi dettagliata spazio disco e ottimizzazione SSD per longevità",
      "Configurazione privacy avanzata con blocco raccolta dati",
      "Pulizia registro e file temporanei per liberare spazio"
    ],
    detailedDescription: "Ideale per chi usa il PC per lavoro o studio. Esempio: Creator o youtuber con laptop invaso da servizi inutili che rallentano il sistema.",
    color: "accent"
  },
  {
    icon: Cpu,
    title: "🟪 Manutenzione Preventiva Programmata",
    description: "Mantenimento automatico performance sistema",
    features: ["Script cleanup schedulati", "Avvisi automatici email/Telegram", "Backup configurazioni", "Report salute sistema"],
    fullFeatures: [
      "Script di cleanup automatici schedulati per manutenzione continua",
      "Sistema di avvisi automatici via email o Telegram per problemi rilevati",
      "Backup automatico delle configurazioni ottimizzate per sicurezza",
      "Report dettagliati sulla salute del sistema con metriche performance",
      "Monitoraggio proattivo di temperatura, storage e memoria",
      "Aggiornamenti automatici di sicurezza e driver critici"
    ],
    detailedDescription: "Mantieni il sistema efficiente senza interventi manuali. Esempio: Gamer che vuole il PC sempre in forma per streaming o lavoro video.",
    color: "primary"
  }
];

// Combina tutti i servizi per compatibilità
const services = [...discordBotServices, ...fivemServices, ...optimizationServices];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="servizi" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluzioni complete per Discord, FiveM e Ottimizzazione PC
          </p>
        </div>

        {/* Sezione Bot Discord Personalizzati */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-primary bg-clip-text text-transparent">
              🔧 Bot Discord Personalizzati - Pacchetti su misura
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bot completamente personalizzati per automatizzare e migliorare la gestione del tuo server Discord
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discordBotServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer transform-gpu backdrop-blur-sm bg-opacity-90 shadow-lg"
                  onClick={() => openModal(service)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <Zap className="w-3 h-3 text-neon-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center text-xs font-medium text-blue-600 bg-blue-50 py-2 px-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                      Clicca per dettagli completi
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sezione Bot FiveM */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              💰 Bot FiveM Payroll e Automazione Server
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluzioni avanzate per server FiveM che automatizzano payroll, monitoraggio e backup
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fivemServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer transform-gpu backdrop-blur-sm bg-opacity-90 shadow-lg"
                  onClick={() => openModal(service)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center text-sm font-medium text-blue-600 bg-blue-50 py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                      Clicca per maggiori dettagli
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sezione Ottimizzazione PC */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-green to-tech-orange bg-clip-text text-transparent">
              🧼 Ottimizzazione PC e Windows - Per gamer, streamer, creator
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Servizi professionali di ottimizzazione per velocizzare il PC e mantenere performance stabili
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer transform-gpu backdrop-blur-sm bg-opacity-90 shadow-lg"
                  onClick={() => openModal(service)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center text-sm font-medium text-blue-600 bg-blue-50 py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                      Clicca per maggiori dettagli
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" />
              Richiedi Preventivo Gratuito
            </a>
          </Button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            {/* Header with Back Button */}
            <div className="flex justify-center p-4 border-b border-border">
              <Button 
                onClick={closeModal}
                variant="outline" 
                size="sm" 
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 border-blue-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna Indietro
              </Button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-lg bg-${selectedService.color}/10 flex items-center justify-center mx-auto mb-4`}>
                  <selectedService.icon className={`w-8 h-8 text-${selectedService.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {selectedService.detailedDescription}
                </p>
              </div>
              
              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Caratteristiche principali:</h4>
                <ul className="space-y-3">
                  {selectedService.fullFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <Zap className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="text-center mt-8">
                 <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                   <a href="https://discord.gg/DWUwtW24Gu" target="_blank" rel="noopener noreferrer">
                     <MessageCircle className="mr-2" />
                     Contattaci per questo servizio
                   </a>
                 </Button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;