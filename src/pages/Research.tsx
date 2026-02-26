import PageHero from "@/components/PageHero";
import { Beaker, BookOpen, Lightbulb, DollarSign } from "lucide-react";
import programPostgrad from "@/assets/program-postgrad.png";

const centers = [
  { icon: Beaker, title: "Center for Biomedical Research", desc: "Leading breakthroughs in health sciences and medical technology." },
  { icon: Lightbulb, title: "Innovation & Entrepreneurship Hub", desc: "Supporting startups and innovative thinking across disciplines." },
  { icon: BookOpen, title: "Center for Social Sciences Research", desc: "Advancing knowledge in psychology, education, and communication." },
  { icon: DollarSign, title: "Center for Economic Policy", desc: "Research-driven policy recommendations for Pakistan's growth." },
];

const Research = () => (
  <>
    <PageHero title="Research" subtitle="Pioneering research that shapes the future" image={programPostgrad} />

    <section className="uni-section-padding bg-background" id="centers">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Research Centers</h2>
        <p className="font-body text-muted-foreground mb-10 max-w-2xl">
          Our research centers are at the forefront of innovation, driving discoveries that have real-world impact on communities and industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {centers.map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <c.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="uni-section-padding uni-gradient-purple" id="innovation">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Showcasing Innovation</h2>
        <p className="font-body text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
          Discover the forefront of innovation at Ascend University, where groundbreaking research is shaping the future through cutting-edge advancements in AI, healthcare, and sustainable development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "AI Breakthrough in Early Lung Cancer Detection",
            "Early Alzheimer's Detection with AI & Quantum Computing",
            "AI Detects Hate Speech with 96% Accuracy",
          ].map((title) => (
            <div key={title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-left border border-primary-foreground/10">
              <span className="font-body text-xs text-uni-gold font-semibold">Innovation@Superior</span>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mt-2">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Research;
