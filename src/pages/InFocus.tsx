import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import news3 from "@/assets/news-3.png";
import heroCampus from "@/assets/hero-campus.png";
import heroStudents from "@/assets/hero-students.png";
import heroGraduation from "@/assets/hero-graduation.png";

const news = [
  { image: news1, category: "Events", title: "International Students Welcome Week Celebrates Global Diversity", date: "Feb 24, 2026" },
  { image: news2, category: "Sports", title: "Cricket Team Clinches HEC Championship Zone F Title", date: "Feb 20, 2026" },
  { image: news3, category: "Academics", title: "Transformational Reflection Session on Character and Leadership", date: "Feb 18, 2026" },
  { image: heroCampus, category: "Campus", title: "New State-of-the-Art Research Facility Opens on Main Campus", date: "Feb 15, 2026" },
  { image: heroStudents, category: "Technology", title: "Ascend University Launches AI & Data Science Research Lab", date: "Feb 10, 2026" },
  { image: heroGraduation, category: "Achievement", title: "University Ranked Among Top 5 in Pakistan by THE", date: "Feb 5, 2026" },
];

const InFocus = () => (
  <>
    <PageHero title="In Focus" subtitle="Latest news, events, and announcements from Ascend University" />

    <section className="uni-section-padding bg-background" id="news">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Latest News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((a) => (
            <Link key={a.title} to="#" className="group block">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-card">
                <div className="overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 text-xs font-body font-semibold rounded-full bg-accent text-accent-foreground mb-3">
                    {a.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{a.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default InFocus;
