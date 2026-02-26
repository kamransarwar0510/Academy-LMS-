import PageHero from "@/components/PageHero";
import { BookOpen, Users, Briefcase, HeadphonesIcon, Library } from "lucide-react";
import heroStudents from "@/assets/hero-students.png";

const services = [
  { icon: BookOpen, title: "Student Portal", desc: "Access your grades, timetable, assignments, and university resources all in one place." },
  { icon: Users, title: "Clubs & Societies", desc: "Join 40+ student clubs ranging from debate, drama, sports, to tech and entrepreneurship." },
  { icon: Briefcase, title: "Career Services", desc: "Career counseling, job placement, internship matching, and resume building workshops." },
  { icon: HeadphonesIcon, title: "Student Support", desc: "Counseling, wellness programs, financial aid guidance, and academic advising." },
  { icon: Library, title: "Library", desc: "State-of-the-art library with 100,000+ books, digital resources, and research databases." },
];

const StudentHub = () => (
  <>
    <PageHero title="Student Hub" subtitle="Everything you need for a successful university experience" image={heroStudents} />

    <section className="uni-section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl uni-gradient-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="uni-section-padding bg-uni-gray-warm">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need Help?</h2>
        <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
          Our student support team is here to help you with any questions or concerns. Reach out to us anytime.
        </p>
        <a href="mailto:info@ascend.edu.pk" className="inline-block px-8 py-3.5 font-body font-semibold text-sm rounded-full uni-gradient-purple text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
          Contact Student Support
        </a>
      </div>
    </section>
  </>
);

export default StudentHub;
