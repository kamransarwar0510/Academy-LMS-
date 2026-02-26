import PageHero from "@/components/PageHero";
import { Users, Heart, Calendar, Star } from "lucide-react";
import heroGraduation from "@/assets/hero-graduation.png";

const Alumni = () => (
  <>
    <PageHero title="Alumni" subtitle="Stay connected with the Ascend University family" image={heroGraduation} />

    <section className="uni-section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: "Alumni Network", desc: "Join 50,000+ alumni worldwide and expand your professional network." },
            { icon: Star, title: "Success Stories", desc: "Discover how our graduates are making an impact across industries." },
            { icon: Calendar, title: "Alumni Events", desc: "Reunions, networking events, and homecoming celebrations." },
            { icon: Heart, title: "Give Back", desc: "Support the next generation through mentorship and donations." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="uni-gradient-purple rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Join the Alumni Association</h2>
          <p className="font-body text-primary-foreground/70 mb-6 max-w-xl mx-auto">
            Stay updated with university news, access exclusive benefits, and reconnect with your batchmates.
          </p>
          <a href="#" className="inline-block px-8 py-3.5 font-body font-semibold text-sm rounded-full uni-gradient-gold text-foreground hover:opacity-90 transition-opacity shadow-lg">
            Register Now
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Alumni;
