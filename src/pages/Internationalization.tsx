import PageHero from "@/components/PageHero";
import { Globe, Users, Handshake, Plane } from "lucide-react";
import news1 from "@/assets/news-1.png";

const features = [
  { icon: Globe, title: "Exchange Programs", desc: "Semester and full-year exchange programs with partner universities across 30+ countries." },
  { icon: Users, title: "International Students", desc: "A diverse community of students from over 20 countries enriching our campus." },
  { icon: Handshake, title: "Global Partnerships", desc: "Strategic collaborations with leading universities including Babson College, USA." },
  { icon: Plane, title: "Study Abroad", desc: "Opportunities for our students to gain global exposure through international placements." },
];

const Internationalization = () => (
  <>
    <PageHero title="Internationalization" subtitle="Building global bridges for a connected future" image={news1} />

    <section className="uni-section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow" id={f.title.toLowerCase().replace(/\s+/g, "-")}>
              <div className="w-16 h-16 rounded-full uni-gradient-purple mx-auto mb-4 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="uni-section-padding bg-uni-gray-warm">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Join Our Global Community</h2>
        <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're an international student looking to study in Pakistan or a local student seeking global exposure, Ascend University offers pathways for everyone.
        </p>
        <a href="#" className="inline-block px-8 py-3.5 font-body font-semibold text-sm rounded-full uni-gradient-gold text-foreground hover:opacity-90 transition-opacity shadow-lg">
          Apply as International Student
        </a>
      </div>
    </section>
  </>
);

export default Internationalization;
