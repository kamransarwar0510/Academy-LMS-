import PageHero from "@/components/PageHero";
import { Users, Eye, Target, Award, Building } from "lucide-react";
import heroCampus from "@/assets/hero-campus.png";

const values = [
  { icon: Eye, title: "Vision", desc: "To be recognized as a world-class university that leads in entrepreneurial education, research, and innovation." },
  { icon: Target, title: "Mission", desc: "To provide quality education, foster research excellence, and produce ethical leaders and entrepreneurs who contribute to society." },
  { icon: Award, title: "Core Values", desc: "Innovation, Integrity, Inclusivity, Excellence, and Social Responsibility guide everything we do." },
  { icon: Building, title: "Heritage", desc: "Founded in 1991, Ascend University has grown from a single campus to a nationally and internationally recognized institution." },
];

const About = () => (
  <>
    <PageHero title="About Us" subtitle="Discover the legacy, vision, and mission of Ascend University" />
    
    <section className="uni-section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6" id="history">Our Story</h2>
            <p className="font-body text-muted-foreground mb-4">
              Ascend University, established in 1991, is Pakistan's leading future-ready university. With a strong emphasis on innovation, research, and industry collaboration, we have consistently been ranked among the top universities in Pakistan.
            </p>
            <p className="font-body text-muted-foreground mb-4">
              Our unique 3U1M® Program guarantees employability by combining three years of university education with one year of market experience, ensuring our graduates are industry-ready from day one.
            </p>
            <p className="font-body text-muted-foreground">
              Recognized by the Times Higher Education World University Rankings among the Top 301-400 globally, we continue to push boundaries in education, research, and community impact.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={heroCampus} alt="Ascend University Campus" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="uni-section-padding bg-uni-gray-warm" id="vision">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Vision, Mission & Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
              <v.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="uni-section-padding bg-background" id="leadership">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Leadership</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
          Under the visionary leadership of our Chancellor and a dedicated team of academic leaders, Ascend University continues to achieve new heights of academic and research excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {["Chancellor", "Vice Chancellor", "Pro Vice Chancellor"].map((role) => (
            <div key={role} className="bg-uni-gray-warm rounded-xl p-6 border border-border">
              <div className="w-20 h-20 rounded-full uni-gradient-purple mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{role}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">Ascend University</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
