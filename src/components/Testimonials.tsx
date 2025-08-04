import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "ServerOwner_Pro",
    service: "🟢 Bot Supporto & Ticketing",
    feedback: "Il nostro server di hosting aveva bisogno di un sistema ticket professionale. Hanno creato un bot con assegnazione automatica staff e logs completi. Ora gestiamo 200+ ticket al giorno senza problemi!",
    rating: 5,
    timeResolved: "24 ore"
  },
  {
    id: 2,
    name: "GamerElite_2024",
    service: "🟩 Ottimizzazione Gaming Pro",
    feedback: "Giocavo a Valorant con input lag terribile. Hanno ottimizzato registro, GPU e disabilitato servizi inutili. Ora ho 240 FPS stabili e zero lag!",
    rating: 5,
    timeResolved: "6 ore"
  },
  {
    id: 3,
    name: "FiveMAdmin_RP",
    service: "🟥 Bot Payroll FiveM",
    feedback: "Gestire i pagamenti del server RP era un incubo. Il loro bot payroll traccia tutto automaticamente: rapine, lavori, classifiche. Dashboard web fantastica!",
    rating: 5,
    timeResolved: "48 ore"
  },
  {
    id: 4,
    name: "StreamerLife_YT",
    service: "🟦 Pulizia Profonda & Privacy",
    feedback: "Il mio laptop da creator era pieno di bloatware. Hanno rimosso tutto, disattivato telemetria Microsoft. Ora è veloce come nuovo e più privato!",
    rating: 5,
    timeResolved: "4 ore"
  },
  {
    id: 5,
    name: "EventMaster_99",
    service: "🟣 Bot Eventi e Giveaway",
    feedback: "Organizzo giveaway settimanali per 5000 membri. Il loro bot gestisce tutto: timer, estrazioni, requisiti, annunci automatici. Perfetto!",
    rating: 5,
    timeResolved: "12 ore"
  },
  {
    id: 6,
    name: "ServerTech_Admin",
    service: "🟧 Monitoraggio Server",
    feedback: "Il nostro server FiveM crashava spesso di notte. Ora riceviamo alert Discord immediati, report giornalieri e monitoring 24/7. Zero downtime!",
    rating: 5,
    timeResolved: "20 ore"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Problemi risolti in meno di 24 ore. Ecco le testimonianze di chi si è affidato a noi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-card border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Feedback */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
                
                {/* Client info */}
                <div className="border-t border-border/20 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Risolto in {testimonial.timeResolved}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-muted-foreground">Problemi risolti in &lt;24h</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-muted-foreground">Clienti soddisfatti</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Supporto disponibile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;