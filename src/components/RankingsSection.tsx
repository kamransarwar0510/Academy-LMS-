import { Award, Globe, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "TOP 301-400", label: "Times Higher Education World Ranking", sub: "Among TOP-5 Universities of Pakistan" },
  { icon: Globe, value: "130+", label: "Countries Represented", sub: "2526 Universities Evaluated" },
  { icon: BookOpen, value: "TOP 101-200", label: "Quality of Education Globally", sub: "Times Higher Education Impact" },
  { icon: TrendingUp, value: "1st", label: "Partner of Babson College (USA)", sub: "From Pakistan" },
];

const RankingsSection = () => (
  <section className="uni-section-padding uni-gradient-purple relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-uni-gold/10 blur-3xl" />
    </div>
    <div className="container mx-auto relative z-10">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-4">
        Ascend University Among Top Global Institutions
      </h2>
      <p className="text-center font-body text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
        Our community of academics, students and industry partners are building a world that's fairer, healthier and more sustainable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <s.icon className="w-10 h-10 text-uni-gold mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-primary-foreground mb-1">{s.value}</div>
            <div className="font-body text-sm text-primary-foreground/80 mb-1">{s.label}</div>
            <div className="font-body text-xs text-primary-foreground/60">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RankingsSection;
