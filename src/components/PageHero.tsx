import heroCampus from "@/assets/hero-campus.png";

const PageHero = ({ title, subtitle, image }: { title: string; subtitle: string; image?: string }) => (
  <section className="relative h-[300px] md:h-[400px] overflow-hidden">
    <img src={image || heroCampus} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 uni-overlay" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{title}</h1>
        <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto">{subtitle}</p>
      </div>
    </div>
  </section>
);

export default PageHero;
