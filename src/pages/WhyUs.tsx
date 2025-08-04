import { ArrowLeft, Shield, Settings, Key, CheckCircle, Users, Code, BarChart3, FileSearch, RefreshCw, Zap, Gamepad2, PieChart, HardDrive, Palette, Phone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla Home
          </Button>
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            Perché Scegliere
            <span className="block text-4xl md:text-6xl text-cyber-blue">UNDERCORD SHOP?</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trasparenza totale, sicurezza garantita e controllo completo sui tuoi progetti
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Security Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🔐 Massima Trasparenza e Controllo
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprendiamo perfettamente che sicurezza e trasparenza sono <strong>fondamentali</strong> quando si tratta di automazione e gestione server. 
                Per questo motivo, offriamo due modalità di configurazione completamente personalizzabili in base alle tue esigenze specifiche.
              </p>
            </CardContent>
          </Card>

          {/* Option 1 */}
          <Card className="bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Settings className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400">
                  🛠️ Opzione 1: Creazione Bot Autonoma
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mantieni il <strong>controllo totale</strong> creando il bot direttamente dal Developer Portal di Discord. 
                Ti basterà fornirci solo il token, e ci occuperemo di sviluppo, funzionalità, deploy e dashboard professionale.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">✅ Vantaggi Esclusivi:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Nessun link esterno da cliccare</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Bot registrato sotto il <strong>tuo account</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Controllo e trasparenza al 100%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Key className="w-6 h-6 text-primary" />
                    <h5 className="font-semibold text-primary">Sicurezza Token</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Il token è l'<strong>unico dato necessario</strong>. Non accediamo mai al tuo account 
                    e il token non viene mai salvato in chiaro sui nostri sistemi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="bg-card/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">
                  📩 Opzione 2: Bot Fornito da Noi
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Preferisci una configurazione <strong>plug-and-play</strong>? Ti forniamo il link di invito del bot già configurato. 
                Potrai verificare personalmente tutti i permessi prima dell'autorizzazione.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">🛡️ Garanzie di Sicurezza:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Nessun permesso amministrativo richiesto</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Zero raccolta dati nascosta</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Nessun tracker esterno o server terzi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Solo permessi <strong>strettamente necessari</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h5 className="font-semibold text-blue-400 mb-3">📋 Processo Trasparente</h5>
                  <p className="text-sm text-muted-foreground">
                    Ogni richiesta di permesso viene <strong>valutata insieme al cliente</strong> in base 
                    alle funzionalità specifiche: moderazione, ticket, log, eventi, etc.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Security Check Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <FileSearch className="w-8 h-8 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🔍 Controllo Generico Dei File Prima Dell'Installazione
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Per garantire la <strong>massima trasparenza e sicurezza</strong>, offriamo la possibilità di far analizzare 
                i file del bot da <strong>agenti AI specializzati</strong> prima di qualsiasi installazione.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">🛡️ Analisi di Sicurezza Avanzata:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Scansione automatica di vulnerabilità</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Verifica <strong>pattern di sicurezza</strong> standard</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Controllo dipendenze e librerie</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Analisi comportamentale del codice</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <h5 className="font-semibold text-orange-400">Processo Trasparente</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Su richiesta, potete <strong>visionare personalmente</strong> tutti i file del bot tramite 
                    analisi AI prima dell'installazione. Il codice principale rimane protetto, 
                    ma ogni componente può essere verificato per la sicurezza.
                  </p>
                  <div className="text-xs text-orange-400/80 font-mono">
                    ✓ Report dettagliato di sicurezza<br/>
                    ✓ Certificazione AI di conformità<br/>
                    ✓ Zero rischi nascosti
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates and Maintenance Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <RefreshCw className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🔄 Aggiornamenti e Manutenzione Continua
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Il tuo bot rimane sempre <strong>aggiornato e sicuro</strong> grazie al nostro sistema di manutenzione automatica e supporto continuo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">🚀 Aggiornamenti Automatici:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Patch di sicurezza immediate</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Nuove funzionalità <strong>senza interruzioni</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Compatibilità Discord sempre aggiornata</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h5 className="font-semibold text-green-400 mb-3">📈 Crescita Continua</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Il tuo bot evolve con le tue esigenze. Aggiungiamo regolarmente nuove funzionalità basate sui feedback della community.
                  </p>
                  <div className="text-xs text-green-400/80 font-mono">
                    ✓ Zero downtime durante aggiornamenti<br/>
                    ✓ Rollback automatico in caso di problemi<br/>
                    ✓ Notifiche preventive per modifiche importanti
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  ⚡ Performance e Ottimizzazione
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hosting di <strong>livello enterprise</strong> con infrastruttura ottimizzata per garantire velocità e affidabilità massime.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-yellow-500/5 rounded-lg border border-yellow-500/10">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <h4 className="font-semibold mb-2">Uptime Garantito</h4>
                  <p className="text-sm text-muted-foreground">Disponibilità quasi totale</p>
                </div>
                <div className="text-center p-6 bg-yellow-500/5 rounded-lg border border-yellow-500/10">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">&lt;50ms</div>
                  <h4 className="font-semibold mb-2">Tempo Risposta</h4>
                  <p className="text-sm text-muted-foreground">Velocità fulminea</p>
                </div>
                <div className="text-center p-6 bg-yellow-500/5 rounded-lg border border-yellow-500/10">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <h4 className="font-semibold mb-2">Monitoraggio</h4>
                  <p className="text-sm text-muted-foreground">Controllo continuo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gaming Specialization Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Gamepad2 className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🎮 Specializzazione Gaming
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Expertise dedicata per <strong>community gaming</strong> con soluzioni specifiche per server FiveM, Minecraft e altri giochi.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">🏆 Funzionalità Gaming:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Bot FiveM con sistema payroll</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Integrazione <strong>server gaming</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Sistemi di ranking e statistiche</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Eventi automatici e tornei</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h5 className="font-semibold text-purple-400 mb-3">🎯 Expertise Specializzata</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Anni di esperienza nel settore gaming ci permettono di creare soluzioni perfette per ogni tipo di community.
                  </p>
                  <div className="text-xs text-purple-400/80 font-mono">
                    ✓ Supporto multi-piattaforma<br/>
                    ✓ API gaming integrate<br/>
                    ✓ Sistemi anti-cheat avanzati
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-blue-800/20 hover:border-blue-800/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-800/20 rounded-lg">
                  <PieChart className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  📊 Analytics e Reportistica
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dashboard professionale con <strong>analytics avanzate</strong> per monitorare crescita, engagement e performance della community.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-800/5 rounded-lg border border-blue-800/10">
                  <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Report Dettagliati</h4>
                  <p className="text-sm text-muted-foreground">Statistiche complete su membri e attività</p>
                </div>
                <div className="text-center p-6 bg-blue-800/5 rounded-lg border border-blue-800/10">
                  <PieChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Crescita Community</h4>
                  <p className="text-sm text-muted-foreground">Analisi trend e previsioni</p>
                </div>
                <div className="text-center p-6 bg-blue-800/5 rounded-lg border border-blue-800/10">
                  <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">API Integrate</h4>
                  <p className="text-sm text-muted-foreground">Esportazione dati personalizzata</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backup Security Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-red-800/20 hover:border-red-800/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-800/20 rounded-lg">
                  <HardDrive className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🛡️ Backup e Sicurezza Dati
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Protezione <strong>militare</strong> dei tuoi dati con backup automatici, crittografia avanzata e disaster recovery.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">🔒 Sicurezza Avanzata:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Backup automatici ogni 6 ore</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Crittografia <strong>AES-256</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Disaster recovery in 15 minuti</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-800/10 p-6 rounded-lg border border-red-800/20">
                  <h5 className="font-semibold text-red-400 mb-3">🏰 Protezione Totale</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    I tuoi dati sono protetti con standard bancari. Backup ridondanti su server geograficamente distribuiti.
                  </p>
                  <div className="text-xs text-red-400/80 font-mono">
                    ✓ Conformità GDPR completa<br/>
                    ✓ Audit di sicurezza mensili<br/>
                    ✓ Certificazioni ISO 27001
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customization Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Palette className="w-8 h-8 text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🤖 Personalizzazione Avanzata
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ogni bot è <strong>unico come la tua community</strong>. Personalizzazione completa di funzionalità, design e branding.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-pink-500/5 rounded-lg border border-pink-500/10">
                  <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Design Personalizzato</h4>
                  <p className="text-sm text-muted-foreground">Colori, loghi e interfacce su misura</p>
                </div>
                <div className="text-center p-6 bg-pink-500/5 rounded-lg border border-pink-500/10">
                  <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Comandi Custom</h4>
                  <p className="text-sm text-muted-foreground">Funzionalità create appositamente</p>
                </div>
                <div className="text-center p-6 bg-pink-500/5 rounded-lg border border-pink-500/10">
                  <Settings className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Integrazione API</h4>
                  <p className="text-sm text-muted-foreground">Connessioni con servizi esterni</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority Support Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  📞 Supporto Prioritario 24/7
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Assistenza <strong>immediata e dedicata</strong> con team di esperti sempre disponibili per ogni tua esigenza.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">⚡ Supporto Immediato:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Risposta entro 5 minuti</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Canale Discord <strong>privato dedicato</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Consulenza strategica inclusa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Accesso diretto agli sviluppatori</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h5 className="font-semibold text-cyan-400 mb-3">🎯 Team Dedicato</h5>
                  <p className="text-sm text-muted-foreground mb-4">
                    Un team di esperti assegnato esclusivamente al tuo progetto per garantire il massimo supporto.
                  </p>
                  <div className="text-xs text-cyan-400/80 font-mono">
                    ✓ Supporto multilingue<br/>
                    ✓ Sessioni di training incluse<br/>
                    ✓ Documentazione personalizzata
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money Back Guarantee Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <DollarSign className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  💰 Garanzia Soddisfatti o Rimborsati
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong>Zero rischi</strong> per te. Se non sei completamente soddisfatto, rimborso completo entro 30 giorni.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                   <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
                   <h4 className="font-semibold mb-2">Supporto Illimitato</h4>
                   <p className="text-sm text-muted-foreground">Assistenza senza scadenza temporale</p>
                 </div>
                <div className="text-center p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <h4 className="font-semibold mb-2">Rimborso Garantito</h4>
                  <p className="text-sm text-muted-foreground">Nessuna domanda, nessun problema</p>
                </div>
                <div className="text-center p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">0</div>
                  <h4 className="font-semibold mb-2">Rischi per Te</h4>
                  <p className="text-sm text-muted-foreground">Investimento completamente protetto</p>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
                <h5 className="font-semibold text-emerald-400 mb-3">🤝 La Nostra Promessa</h5>
                <p className="text-sm text-muted-foreground">
                  Siamo così sicuri della qualità dei nostri servizi che ti offriamo una garanzia totale. 
                  La tua soddisfazione è la nostra priorità assoluta.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  🤝 Affidabilità, Chiarezza e Fiducia
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Indipendentemente dalla modalità scelta, avrai <strong>sempre accesso completo</strong> a:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Codice Trasparente</h4>
                  <p className="text-sm text-muted-foreground">
                    Accesso completo al codice del bot su richiesta
                  </p>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Dashboard Professionale</h4>
                  <p className="text-sm text-muted-foreground">
                    Pannello web con statistiche dettagliate e logs in tempo reale
                  </p>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Supporto Continuo</h4>
                  <p className="text-sm text-muted-foreground">
                    Assistenza per modifiche, estensioni e aggiornamenti
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              La nostra priorità: strumenti potenti ma sicuri
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nel pieno rispetto della tua privacy e della tua community. 
              Con UNDERCORD SHOP, <strong>non ci sono sorprese o rischi nascosti</strong>.
            </p>
            
            <Link to="/#consulenza">
              <Button size="lg" className="bg-gradient-gaming hover:scale-105 transition-all duration-300">
                Inizia il Tuo Progetto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}