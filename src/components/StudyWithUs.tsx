import { Link } from "react-router-dom";
import programUndergrad from "@/assets/program-undergrad.png";
import programPostgrad from "@/assets/program-postgrad.png";
import programAdp from "@/assets/program-adp.png";

const programs = [
  { image: programUndergrad, title: "Undergraduate Programs", path: "/academics#undergraduate" },
  { image: programPostgrad, title: "Postgraduate Programs", path: "/academics#postgraduate" },
  { image: programAdp, title: "Associate Degree Programs (ADP)", path: "/academics#adp" },
];

const StudyWithUs = () => (
  <section className="uni-section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Study with us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((p) => (
          <Link key={p.title} to={p.path} className="group block">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{p.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link to="/apply" className="inline-block px-8 py-3.5 font-body font-semibold text-sm rounded-full uni-gradient-purple text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
          Admissions Open Spring 2026 — Apply Now
        </Link>
      </div>
    </div>
  </section>
);

export default StudyWithUs;
