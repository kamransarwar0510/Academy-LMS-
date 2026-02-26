import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import programUndergrad from "@/assets/program-undergrad.png";
import programPostgrad from "@/assets/program-postgrad.png";
import programAdp from "@/assets/program-adp.png";

const departments = [
  { name: "Engineering & Technology", programs: ["B.Sc Electrical Engineering", "B.Sc Mechanical Engineering", "B.Sc Civil Engineering"] },
  { name: "Business & Management", programs: ["BS Culinary Arts Management", "BS Aviation Management", "BBA (Hons.)"] },
  { name: "Medical Sciences", programs: ["MBBS", "BDS", "Bachelor of Eastern Medicine"] },
  { name: "Computer Science & IT", programs: ["BS Computer Science", "BS Software Engineering", "BS Data Science"] },
  { name: "Social Sciences", programs: ["BS Psychology", "BS Mass Communication", "BS Education"] },
  { name: "Art & Design", programs: ["BFA Fine Arts", "BS Graphic Design", "BS Interior Design"] },
];

const Academics = () => (
  <>
    <PageHero title="Academics" subtitle="World-class education programs designed for tomorrow's leaders" image={programUndergrad} />

    <section className="uni-section-padding bg-background" id="undergraduate">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { img: programUndergrad, title: "Undergraduate Programs", desc: "Comprehensive bachelor's degree programs across multiple disciplines." },
            { img: programPostgrad, title: "Postgraduate Programs", desc: "Advanced master's and doctoral programs for research and specialization." },
            { img: programAdp, title: "Associate Degree Programs", desc: "Two-year programs providing practical skills for immediate career entry." },
          ].map((p) => (
            <div key={p.title} className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-8" id="faculties">Find Programs by Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d) => (
            <div key={d.name} className="bg-uni-gray-warm rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{d.name}</h3>
              <ul className="space-y-2">
                {d.programs.map((p) => (
                  <li key={p}>
                    <Link to="#" className="font-body text-sm text-primary hover:text-uni-purple-light transition-colors">
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Academics;
