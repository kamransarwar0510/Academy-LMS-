import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Social Bar */}
      <div className="uni-gradient-purple py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-xl text-primary-foreground font-semibold">Connect with us</span>
          <div className="flex items-center gap-3">
            {[
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-uni-navy py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Information About</h3>
            <ul className="space-y-2.5">
              {["Ascend University", "Rise Beyond", "Our Research Ecosystem", "SWAT Program", "3U1M Program"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm font-body text-primary-foreground/70 hover:text-uni-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Information For</h3>
            <ul className="space-y-2.5">
              {["Prospective Undergraduates", "Prospective Postgraduates", "Alumni", "International Students", "Current Students"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm font-body text-primary-foreground/70 hover:text-uni-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {["Get in Touch", "Careers", "Convocation 2026", "Fee Structure", "Scholarships"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm font-body text-primary-foreground/70 hover:text-uni-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-uni-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body text-primary-foreground/70">1 University Avenue, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-uni-gold flex-shrink-0" />
                <span className="text-sm font-body text-primary-foreground/70">+92 42 111-272-363</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-uni-gold flex-shrink-0" />
                <span className="text-sm font-body text-primary-foreground/70">info@ascend.edu.pk</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-uni-purple-dark py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-primary-foreground/60">
            © 2026 Ascend University. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-xs font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
