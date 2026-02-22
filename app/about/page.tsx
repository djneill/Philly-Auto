import Image from "next/image";
import { historyTimeline } from "@/lib/data/timeline";
import { teamMembers } from "@/lib/data/team";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateIn from "@/components/ui/AnimateIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        <Image
          src="/aboutHeroImage.jpg"
          alt="Inside the Philly Auto Repair shop"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-bg/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-eagles-gold mb-3">
              Our Story
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-tight mb-5 max-w-3xl">
              Experience the{" "}
              <span className="text-eagles-green">Gold Standard</span> in
              Automotive Repair
            </h1>
            <p className="text-eagles-silver/70 leading-relaxed mb-8 max-w-xl">
              Family owned and community trusted since 2009. We combine
              old-school Philly integrity with modern diagnostic precision to
              deliver results that keep you coming back — and recommending us to
              your neighbors.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" href="/services">
                View Our Services
              </Button>
              <Button variant="outline" href="/contact">
                Contact Us
              </Button>
            </div>
          </AnimateIn>

          {/* Stats row */}
          <AnimateIn
            delay={0.2}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-eagles-silver/10 rounded-xl overflow-hidden border border-eagles-silver/10"
          >
            {[
              { value: "15+", label: "Years in Business" },
              { value: "2,500+", label: "Happy Customers" },
              { value: "8", label: "Expert Technicians" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-dark-bg/60 backdrop-blur-sm text-center px-6 py-5"
              >
                <p className="font-display text-4xl text-eagles-gold leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-eagles-silver/60 mt-1.5 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-14">
            <SectionHeader
              eyebrow="Our Journey"
              headline="Our Journey Since 2009"
              subtext="From a single bay on Passyunk Ave to Philadelphia's most trusted auto shop — here's how we got here."
              accentWord="2009"
            />
          </AnimateIn>

          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-eagles-green/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {historyTimeline.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <AnimateIn
                    key={event.year}
                    delay={index * 0.12}
                    direction={isLeft ? "left" : "right"}
                  >
                    <div
                      className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? "" : "md:flex-row-reverse"}`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}
                      >
                        <div
                          className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 ${isLeft ? "md:ml-auto" : ""}`}
                          style={{ maxWidth: "420px" }}
                        >
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="font-display text-xl text-site-text">
                              {event.title}
                            </h3>
                            <Badge variant="gold">{event.year}</Badge>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Center dot (desktop) */}
                      <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-eagles-green items-center justify-center z-10 shadow-lg">
                        <span className="text-white text-lg">🔧</span>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-14">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <SectionHeader
                eyebrow="Meet the Team"
                headline="Meet the Master Technicians"
                subtext="Highly certified professionals dedicated to the art and science of automotive repair. We treat your vehicle like our own."
                align="left"
                accentWord="Master"
              />
              <div className="flex-shrink-0">
                <Badge variant="gold" className="text-sm px-4 py-1.5">
                  ✓ ASE Certified
                </Badge>
              </div>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimateIn key={member.id} delay={index * 0.12}>
                <div className="bg-white/5 border border-eagles-silver/10 rounded-2xl overflow-hidden group hover:border-eagles-green/30 transition-colors">
                  {/* Avatar */}
                  <div
                    className="relative h-48 flex items-center justify-center"
                    style={{ backgroundColor: member.imagePlaceholder }}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-3">
                        <span className="font-display text-3xl text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="gold">{member.role}</Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="dark">{member.yearsExp}+ Yrs Exp</Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-eagles-silver/60 mb-4 leading-relaxed">
                      {member.specialty}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <Badge key={cert} variant="green">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 bg-dark-bg border-t border-eagles-silver/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              "ASE Blue Seal",
              "BBB Accredited",
              "Best of Philly 2023",
              "Eco-Certified",
            ].map((badge) => (
              <div key={badge} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-eagles-green/10 flex items-center justify-center mb-2">
                  <span className="text-eagles-gold text-xl">✓</span>
                </div>
                <p className="text-xs text-eagles-silver/50 uppercase tracking-wide">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eagles-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-5xl text-white mb-4">
              Ready to Experience True Expertise?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join thousands of local drivers who trust Philly Auto Repair for
              their vehicle&apos;s longevity and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" href="/booking">
                Book Your Appointment
              </Button>
              <Button
                variant="ghost"
                href="/services"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                Check Our Services
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
