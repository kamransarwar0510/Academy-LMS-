import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const navItems = [
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "Our History", path: "/about#history" },
      { label: "Vision & Mission", path: "/about#vision" },
      { label: "Leadership", path: "/about#leadership" },
      { label: "Accreditation", path: "/about#accreditation" },
      { label: "Campus Life", path: "/about#campus" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Undergraduate Programs", path: "/academics#undergraduate" },
      { label: "Postgraduate Programs", path: "/academics#postgraduate" },
      { label: "Associate Degree Programs", path: "/academics#adp" },
      { label: "Faculties", path: "/academics#faculties" },
      { label: "Academic Calendar", path: "/academics#calendar" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    children: [
      { label: "Research Centers", path: "/research#centers" },
      { label: "Publications", path: "/research#publications" },
      { label: "Innovation Hub", path: "/research#innovation" },
      { label: "Grants & Funding", path: "/research#grants" },
    ],
  },
  {
    label: "Internationalization",
    path: "/internationalization",
    children: [
      { label: "Exchange Programs", path: "/internationalization#exchange" },
      { label: "International Students", path: "/internationalization#students" },
      { label: "Global Partnerships", path: "/internationalization#partnerships" },
      { label: "Study Abroad", path: "/internationalization#abroad" },
    ],
  },
  {
    label: "Alumni",
    path: "/alumni",
    children: [
      { label: "Alumni Network", path: "/alumni#network" },
      { label: "Success Stories", path: "/alumni#stories" },
      { label: "Alumni Events", path: "/alumni#events" },
      { label: "Give Back", path: "/alumni#give" },
    ],
  },
  {
    label: "In Focus",
    path: "/in-focus",
    children: [
      { label: "Latest News", path: "/in-focus#news" },
      { label: "Events", path: "/in-focus#events" },
      { label: "Media Gallery", path: "/in-focus#media" },
      { label: "Announcements", path: "/in-focus#announcements" },
    ],
  },
  {
    label: "Student Hub",
    path: "/student-hub",
    children: [
      { label: "Student Portal", path: "/student-hub#portal" },
      { label: "Clubs & Societies", path: "/student-hub#clubs" },
      { label: "Career Services", path: "/student-hub#careers" },
      { label: "Student Support", path: "/student-hub#support" },
      { label: "Library", path: "/student-hub#library" },
    ],
  },
];

const TopBar = () => (
  <div className="uni-gradient-purple">
    <div className="container mx-auto flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-body text-primary-foreground opacity-90">Connect with us</span>
        <div className="flex items-center gap-1.5 ml-2">
          {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Icon className="w-3.5 h-3.5 text-primary-foreground" />
            </a>
          ))}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="text-sm font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portals</a>
        <a href="#" className="text-sm font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors">Apply Online</a>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary-foreground/50" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 text-sm rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:bg-primary-foreground/15 w-48"
          />
        </div>
      </div>
    </div>
  </div>
);

const DropdownMenu = ({ items, isOpen }: { items: { label: string; path: string }[]; isOpen: boolean }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full left-0 mt-0 w-56 bg-background rounded-b-lg shadow-xl border border-border animate-fade-in z-50">
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav className="bg-background shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full uni-gradient-purple flex items-center justify-center">
               <span className="text-primary-foreground font-heading font-bold text-lg">A</span>
             </div>
             <div>
               <span className="font-heading font-bold text-lg text-foreground leading-tight block">ASCEND</span>
               <span className="font-body text-xs text-muted-foreground tracking-wider">UNIVERSITY</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-body font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/apply" className="px-5 py-2 text-sm font-body font-semibold rounded-full uni-gradient-purple text-primary-foreground hover:opacity-90 transition-opacity">
              Apply Online
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-in">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-body font-medium text-foreground"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/apply" className="block mt-4 px-5 py-2.5 text-center text-sm font-body font-semibold rounded-full uni-gradient-purple text-primary-foreground">
                Apply Online
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
