import { Link } from "react-router-dom";
import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import news3 from "@/assets/news-3.png";

const articles = [
  {
    image: news1,
    category: "Events",
    title: "International Students Welcome Week Celebrates Global Diversity",
    date: "February 24, 2026",
  },
  {
    image: news2,
    category: "Sports",
    title: "Ascend University Cricket Team Clinches Championship Title",
    date: "February 20, 2026",
  },
  {
    image: news3,
    category: "Academics",
    title: "Transformational Reflection Session on Character and Leadership",
    date: "February 18, 2026",
  },
];

const NewsSection = () => (
  <section className="uni-section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Latest News</h2>
      <p className="text-center font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
        Catch the pulse of Pakistan's leading future-ready university—from breakthrough research, student achievements, and sports excellence to academic innovations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((a) => (
          <Link key={a.title} to="/in-focus" className="group block">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-card">
              <div className="overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
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

      <div className="mt-10 text-center">
        <Link to="/in-focus" className="font-body text-sm font-semibold text-primary hover:text-uni-purple-light transition-colors">
          Browse All News →
        </Link>
      </div>
    </div>
  </section>
);

export default NewsSection;
