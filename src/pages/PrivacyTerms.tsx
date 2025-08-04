import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Database, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";

export default function PrivacyTerms() {
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
            Privacy Policy
            <span className="block text-4xl md:text-6xl text-cyber-blue">& Termini di Servizio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trasparenza totale sui nostri servizi, la tua privacy e i tuoi diritti
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Privacy Policy */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-8 h-8 text-primary" />
                🔒 Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Introduzione */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">1. Introduzione e Impegno alla Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  UNDERCORD SHOP si impegna a proteggere la privacy e i dati personali dei propri clienti con la massima serietà e trasparenza. 
                  Questa Privacy Policy descrive dettagliatamente come raccogliamo, utilizziamo, proteggiamo e gestiamo le tue informazioni personali 
                  quando utilizzi i nostri servizi di sviluppo bot Discord, automazioni FiveM e ottimizzazione PC.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>La tua privacy è fondamentale per noi.</strong> Non vendiamo, affittiamo o condividiamo mai i tuoi dati personali con terze parti 
                  per scopi commerciali. Tutti i dati vengono trattati esclusivamente per fornire e migliorare i nostri servizi.
                </p>
              </div>

              {/* Dati Raccolti */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">2. Dati Raccolti e Finalità</h3>
                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Database className="w-5 h-5 text-primary" />
                      Dati di Contatto e Comunicazione
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• <strong>Discord Username/ID:</strong> Per comunicazioni e supporto tecnico</li>
                      <li>• <strong>Email (se fornita):</strong> Per comunicazioni ufficiali e fatturazione</li>
                      <li>• <strong>Messaggi di supporto:</strong> Per risolvere problemi tecnici e migliorare i servizi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/10">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-blue-400" />
                      Dati Tecnici dei Bot (Solo se Necessario)
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• <strong>Token Bot Discord:</strong> Esclusivamente per sviluppo e configurazione (mai salvato in chiaro)</li>
                      <li>• <strong>ID Server Discord:</strong> Per configurazioni specifiche del server</li>
                      <li>• <strong>Logs di funzionamento:</strong> Solo per debugging e ottimizzazione (anonimi)</li>
                      <li>• <strong>Configurazioni bot:</strong> Impostazioni personalizzate richieste dal cliente</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-green-400" />
                      Dati di Utilizzo (Anonimi)
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• <strong>Statistiche bot:</strong> Comandi utilizzati, uptime, performance (anonimi)</li>
                      <li>• <strong>Errori e crash:</strong> Per migliorare stabilità e funzionalità</li>
                      <li>• <strong>Metriche di performance:</strong> Tempi di risposta, utilizzo risorse</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sicurezza */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">3. Sicurezza e Protezione Dati</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                    <h4 className="font-semibold mb-2 text-red-400">🔐 Crittografia e Sicurezza</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Token bot crittografati con AES-256</li>
                      <li>• Comunicazioni HTTPS/TLS 1.3</li>
                      <li>• Accesso limitato solo al personale autorizzato</li>
                      <li>• Backup sicuri e ridondanti</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/10">
                    <h4 className="font-semibold mb-2 text-yellow-400">🛡️ Misure di Protezione</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Autenticazione a due fattori (2FA)</li>
                      <li>• Monitoraggio accessi 24/7</li>
                      <li>• Audit di sicurezza regolari</li>
                      <li>• Politiche di accesso zero-trust</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Diritti dell'utente */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">4. I Tuoi Diritti (GDPR Compliant)</h3>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <p className="text-muted-foreground mb-4">
                    In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR), hai i seguenti diritti:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Diritto di accesso:</strong> Richiedere copia dei tuoi dati</li>
                      <li>• <strong>Diritto di rettifica:</strong> Correggere dati inesatti</li>
                      <li>• <strong>Diritto di cancellazione:</strong> "Diritto all'oblio"</li>
                      <li>• <strong>Diritto di limitazione:</strong> Limitare il trattamento</li>
                    </ul>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Diritto di portabilità:</strong> Trasferire i tuoi dati</li>
                      <li>• <strong>Diritto di opposizione:</strong> Opporti al trattamento</li>
                      <li>• <strong>Diritto di reclamo:</strong> Presso l'autorità di controllo</li>
                      <li>• <strong>Revoca consenso:</strong> In qualsiasi momento</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conservazione */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">5. Conservazione e Cancellazione Dati</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I tuoi dati vengono conservati solo per il tempo strettamente necessario a fornire i servizi richiesti:
                </p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1 ml-6">
                  <li>• <strong>Dati di contatto:</strong> Fino alla cessazione del servizio + 2 anni (per supporto post-vendita)</li>
                  <li>• <strong>Token bot:</strong> Solo durante lo sviluppo attivo, poi eliminati</li>
                  <li>• <strong>Logs tecnici:</strong> Massimo 90 giorni, poi automaticamente eliminati</li>
                  <li>• <strong>Backup di sicurezza:</strong> Massimo 1 anno, poi eliminazione sicura</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termini di Servizio */}
          <Card className="bg-card/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="w-8 h-8 text-blue-400" />
                📋 Termini di Servizio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Servizi */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">1. Descrizione Servizi</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  UNDERCORD SHOP fornisce servizi professionali di sviluppo software specializzati in:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/10">
                    <h4 className="font-semibold mb-2">🤖 Bot Discord Custom</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supporto e Ticketing</li>
                      <li>• Automod e Sicurezza</li>
                      <li>• Eventi e Giveaway</li>
                      <li>• Musica e Utility</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                    <h4 className="font-semibold mb-2">🎮 Automazioni FiveM</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Payroll Avanzato</li>
                      <li>• Gestione Server</li>
                      <li>• Monitoraggio 24/7</li>
                      <li>• Backup Automatici</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/10">
                    <h4 className="font-semibold mb-2">⚡ Ottimizzazione PC</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gaming Performance</li>
                      <li>• Pulizia Profonda</li>
                      <li>• Manutenzione Preventiva</li>
                      <li>• Configurazione Hardware</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Responsabilità */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">2. Responsabilità e Obblighi</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">🏢 Nostre Responsabilità</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Fornire servizi di qualità professionale</li>
                      <li>• Rispettare i tempi di consegna concordati</li>
                      <li>• Garantire supporto tecnico post-vendita</li>
                      <li>• Mantenere la riservatezza dei progetti</li>
                      <li>• Seguire le best practices di sicurezza</li>
                      <li>• Fornire documentazione completa</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">👤 Tue Responsabilità</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Fornire informazioni accurate e complete</li>
                      <li>• Rispettare i Termini di Servizio di Discord</li>
                      <li>• Non utilizzare i bot per attività illegali</li>
                      <li>• Effettuare pagamenti nei tempi concordati</li>
                      <li>• Comunicare tempestivamente problemi o modifiche</li>
                      <li>• Mantenere sicuri token e credenziali</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Garanzie */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">3. Garanzie e Politica di Rimborso</h3>
                <div className="bg-green-500/5 p-6 rounded-lg border border-green-500/10">
                  <h4 className="font-semibold mb-3 text-green-400">💯 Garanzia "Soddisfatti o Rimborsati"</h4>
                  <p className="text-muted-foreground mb-4">
                    Offriamo una garanzia completa di soddisfazione sui nostri servizi:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Bot Discord:</strong> 30 giorni di garanzia funzionalità</li>
                      <li>• <strong>Automazioni FiveM:</strong> 45 giorni di supporto incluso</li>
                      <li>• <strong>Ottimizzazione PC:</strong> 15 giorni soddisfatti o rimborsati</li>
                    </ul>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Bug fixing:</strong> Gratuito per 90 giorni</li>
                      <li>• <strong>Supporto tecnico:</strong> 6 mesi inclusi</li>
                      <li>• <strong>Aggiornamenti minori:</strong> Gratuiti per 1 anno</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitazioni */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4. Limitazioni e Esclusioni</h3>
                <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/10">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-yellow-400">⚠️ Limitazioni di Responsabilità</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Non siamo responsabili per ban Discord dovuti a uso improprio</li>
                        <li>• Non garantiamo compatibilità con modifiche future di Discord/FiveM</li>
                        <li>• Escludiamo responsabilità per danni indiretti o consequenziali</li>
                        <li>• La responsabilità massima è limitata all'importo pagato per il servizio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modifiche */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">5. Modifiche ai Termini</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. 
                  Le modifiche sostanziali verranno comunicate con almeno 30 giorni di preavviso tramite Discord o email. 
                  L'uso continuato dei nostri servizi dopo le modifiche costituisce accettazione dei nuovi termini.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contatti */}
          <Card className="bg-card/50 backdrop-blur-sm border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="w-8 h-8 text-green-400" />
                📞 Contatti e Supporto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-400">Per Questioni Privacy/GDPR</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Per esercitare i tuoi diritti GDPR o per questioni relative alla privacy:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Discord:</strong> Contatta @undercord_support</li>
                    <li>• <strong>Email:</strong> privacy@undercord.shop</li>
                    <li>• <strong>Tempo di risposta:</strong> Massimo 72 ore</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-400">Per Supporto Tecnico</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Per assistenza tecnica, bug report o richieste di supporto:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Discord Server:</strong> discord.gg/DWUwtW24Gu</li>
                    <li>• <strong>Ticket System:</strong> Disponibile 24/7</li>
                    <li>• <strong>Supporto prioritario:</strong> Per clienti attivi</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Impegno alla Trasparenza:</strong> Crediamo nella comunicazione aperta e onesta. 
                  Se hai domande, dubbi o suggerimenti, non esitare a contattarci. 
                  La tua fiducia è la base del nostro successo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Questi termini sono effettivi dal {new Date().toLocaleDateString('it-IT')} e sostituiscono tutte le versioni precedenti.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-gaming hover:scale-105 transition-all duration-300">
                Torna alla Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}