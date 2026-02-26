import { Link } from "react-router-dom";

const faculties = [
  "Faculty of Business and Management Sciences",
  "Faculty of Economics and Commerce",
  "Faculty of Computer Science and IT",
  "Faculty of Social Sciences",
  "Faculty of Allied Health Sciences",
  "Faculty of Art and Design",
  "Faculty of Pharmacy",
  "Faculty of Medical Sciences",
  "Faculty of Engineering and Technology",
  "Faculty of Law",
];

const FacultiesSection = () => (
  <section className="uni-section-padding bg-uni-gray-warm">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Explore our Faculties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {faculties.map((f) => (
          <Link
            key={f}
            to="/academics"
            className="group p-5 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 rounded-full uni-gradient-purple group-hover:h-10 transition-all" />
              <span className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {f}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FacultiesSection;
