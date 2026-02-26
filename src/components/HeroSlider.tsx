import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.png";
import heroStudents from "@/assets/hero-students.png";
import heroGraduation from "@/assets/hero-graduation.png";

const slides = [
  {
    image: heroCampus,
    title: "Admissions Open Spring 2026",
    subtitle: "Pakistan's Leading Future-Ready University — Rise Beyond",
    cta: "Apply Now",
    ctaLink: "/apply",
  },
  {
    image: heroStudents,
    title: "Guarantees Your Employability",
    subtitle: "Through 3U1M® Program — Three Years in the University, One Year in the Market",
    cta: "Explore Programs",
    ctaLink: "/academics",
  },
  {
    image: heroGraduation,
    title: "Convocation 2026",
    subtitle: "Celebrating Excellence and Achievement",
    cta: "Learn More",
    ctaLink: "/in-focus",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 uni-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4 animate-fade-up">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="font-body text-base md:text-xl text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink}
                className="inline-block px-8 py-3.5 font-body font-semibold text-sm rounded-full uni-gradient-gold text-foreground hover:opacity-90 transition-opacity shadow-lg"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-uni-gold w-8" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
