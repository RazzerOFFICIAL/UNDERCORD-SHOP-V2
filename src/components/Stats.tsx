import { Users, Award, Zap, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Membri Attivi",
    color: "cyber-blue"
  },
  {
    icon: Award,
    number: "75+",
    label: "Progetti Completati",
    color: "neon-green"
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Supporto Disponibile",
    color: "tech-orange"
  },
  {
    icon: Clock,
    number: "99%",
    label: "Uptime Garantito",
    color: "primary"
  }
];

const Stats = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat.color}/10 flex items-center justify-center group-hover:bg-${stat.color}/20 transition-colors duration-300`}>
                  <IconComponent className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;