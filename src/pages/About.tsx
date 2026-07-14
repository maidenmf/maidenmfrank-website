import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Globe, MapPin, Quote, Sparkles, Target, Users } from 'lucide-react';
import { Link } from 'react-router';

// Photos (replace any of these with your own assets as needed)
import professionalHeadshot from 'figma:asset/35264ab2aa2e621f0e2b2daf040f944ac88cd26e.png';
import aboutHeroImage from 'figma:asset/3dbae3d3c7af5a24a5ce3b8ab6fad7dbf5f95cd6.png';
import speakingHero from 'figma:asset/c3ad2e610c1b884e2724c1241fae2521e5ff3089.png';
import workshopImage from 'figma:asset/e6786f3dc30a294c8ea6ce7eacf1043ec8e6e90a.png';
import awardCeremonyImage from 'figma:asset/96aa51d201480effeed10193187b23a1fca7ab54.png';

// Client / org logos (already used on Home)
import prairieCollege from 'figma:asset/d0773189db453ba22cbfdba03b5a4642047939d1.png';
import unesco from 'figma:asset/26e4796f572ce4be28c25daeac7bddd0eca6ea01.png';
import netImpact from 'figma:asset/f4cbaaed2a44dbbd15f8b06cb9a77ab71be05704.png';
import manchesterMet from 'figma:asset/ec2b289bbc70807441f1c63e76aaf2cb9a474bca.png';
import minesParis from 'figma:asset/36e3077cce611e5b19709a7792932c892fdfe475.png';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  org: string;
  isSample?: boolean;
};

export function About() {
  const highlights = [
    { icon: Target, label: 'Strategy + Change + Impact', value: 'Intersection' },
    { icon: Users, label: 'Managers & leaders trained', value: 'Thousands' },
    { icon: Globe, label: 'Countries reached', value: '16' },
    { icon: MapPin, label: 'Countries traveled', value: '30+' },
  ];

  const featuredLogos = [
    { name: 'Prairie College', logo: prairieCollege },
    { name: 'UNESCO', logo: unesco },
    { name: 'Net Impact Edmonton', logo: netImpact },
    { name: 'Manchester Metropolitan University', logo: manchesterMet },
    { name: 'Mines Paris Executive Education PSL', logo: minesParis },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "Maiden Manzanal-Frank played a critical leadership role and brought her expertise and strategic thinking to the Canadian Women’s Foundation’s Investment Readiness Program work by advising on capacity-building, learning and evaluation activities with grantee organizations, as needed.",
      author: 'Sagal Dualeh',
      role: 'Director, Investment Readiness Program',
      org: 'Canadian Women’s Foundation',
    },
    {
      quote:
        'If it was not for Maiden and her efforts in organizing the Rotary Peace Fellows\' Reunion at the 2025 Calgary Convention Peace Park and informing me of the expertise of the RPF Alumni, I never would have thought of the possibilities of collaboration and partnership. Thanks to her leadership and initiative.',
      author: 'Ray Matsumiya',
      role: 'Director of Rotary International Initiatives',
      org: 'Jubitz Family Foundation',
    },
    {
      quote:
        'We had the privilege of collaborating with Maiden during several mentor sessions as part of the Western Union Foundation Fellowship. She contributed as a panelist and skillfully facilitated a breakout room. Her support, valuable insights, and coaching were deeply appreciated by both the team and the Western Union Foundation Fellows.',
      author: 'Tyler Tornaben Guiliano, MA',
      role: 'VP of People',
      org: 'Watson Institute',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-sky-950 to-[#3d2817] relative overflow-hidden">
      {/* Soft tropical background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[720px] h-[720px] rounded-[60%] bg-gradient-to-br from-emerald-500/35 via-teal-400/25 to-sky-300/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[680px] h-[680px] rounded-[55%] bg-gradient-to-tr from-[#DCB69A]/30 via-emerald-400/20 to-[#FDE68A]/20 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2], rotate: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Subtle palm-leaf pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(16,185,129,0.12) 0px, transparent 2px, transparent 16px, rgba(59,130,246,0.18) 18px)',
          }}
        />
      </div>

      {/* Hero - text on left with a more naturally scaled portrait on desktop */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Maiden Manzanal-Frank in traditional Filipino attire"
            className="h-full w-full object-cover object-[68%_center] lg:ml-auto lg:w-[62%] lg:object-contain lg:object-right-bottom lg:[mask-image:linear-gradient(to_right,transparent_0%,black_22%)] xl:w-[58%]"
          />
          {/* Stronger gradient on left so text is readable; lighter on right so face shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 from-0% via-black/40 via-45% to-black/20 to-100%" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-28">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-900/40 backdrop-blur-xl border border-emerald-300/40 mb-8 rounded-full">
              <Sparkles className="size-5 text-sky-300 fill-sky-300" />
              <span className="text-white font-semibold">
                Leadership Speaker • Author • Consultant
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Strategy.
              <br />
              Change.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-200 to-[#DCB69A]">
                Impact.
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mb-12">
              My name is <span className="font-bold text-white">Maiden Manzanal-Frank</span>. I have more than twenty years of experience in the business of social good. I work at the intersection of{' '}
              <span className="font-semibold">strategy, change, and impact</span> to help leaders build on-purpose organizations and deliver outcomes that truly matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-300 text-white font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="size-6" />
                  Book Maiden
                  <ArrowRight className="size-6" />
                </motion.button>
              </Link>

              <Link to="/speaking">
                <motion.button
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-emerald-200/60 text-white font-black text-lg hover:bg-white/15 transition-all flex items-center justify-center gap-3"
                  style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Keynotes
                  <ArrowRight className="size-6" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-16 bg-[#F7E7D5]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.18) 1px, transparent 0)`,
            backgroundSize: '44px 44px',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white/90 backdrop-blur-sm border border-sky-200/40 rounded-2xl p-6 shadow-lg"
                >
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-400 to-sky-400 flex items-center justify-center shadow-md mb-4">
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-[#09090b]">{h.value}</div>
                  <div className="text-sm text-[#09090b]/65 font-semibold mt-1">{h.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bio + Photos */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-[#F7E7D5]">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-[#1F2933] tracking-tighter leading-[0.9]">
                About Maiden
              </h2>
              <div className="h-1 w-28 bg-gradient-to-r from-emerald-500 via-teal-400 to-[#DCB69A] rounded-full" />

              <p className="text-lg lg:text-xl text-[#1F2933]/80 leading-relaxed">
                For most of my career, I worked in the social development sector. Then I hit a crossroads: along the
                way, I met countless organizations facing real organizational crisis. I decided that the best way to
                bring impact into the world is to develop on-purpose organizations—and the leaders who guide them.
              </p>
              <p className="text-lg lg:text-xl text-[#1F2933]/80 leading-relaxed">
                In the past five years, I’ve advised and mentored executives on business and professional development
                strategies that helped them reach stronger outcomes in leadership, sustainability, and societal impact.
                Since 2001, I’ve trained thousands of managers, executives, and leaders across 16 countries.
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-emerald-200/60 rounded-3xl p-10 lg:p-14 shadow-xl">
                <h3 className="text-2xl font-black text-[#064E3B] mb-10">
                  Interesting things about me (and why they matter)
                </h3>
                <ul className="space-y-12 text-[#065F46]/80">
                  <li className="flex gap-4">
                    <span className="mt-2 size-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      I grew up in the{' '}
                      <span className="font-semibold text-[#064E3B]">Philippines</span>, surrounded by disadvantaged yet resilient communities
                      and empowered leaders, and have traveled to{' '}
                      <span className="font-semibold text-[#064E3B]">30+ countries</span>—which is why my keynotes bridge
                      culture, context, and real-world complexity.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-2 size-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      I’ve worked in <span className="font-semibold text-[#09090b]">15 countries</span>, in settings that range from
                      the most depressed areas in the world to boardrooms—so I translate big ideas into grounded, practical actions.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-2 size-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      I’m a <span className="font-semibold text-[#09090b]">Rotary Peace Fellow</span> and a diversity awardee, which
                      shapes how I speak about leadership in polarized and fast-changing environments.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/coaching" className="inline-flex">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-[#DCB69A] text-white font-black shadow-lg flex items-center justify-center gap-3"
                    style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Coaching
                    <ArrowRight className="size-5" />
                  </motion.button>
                </Link>
                <Link to="/books" className="inline-flex">
                  <motion.button
                    className="px-8 py-4 bg-white/80 border-2 border-emerald-300 text-emerald-900 font-black shadow-lg flex items-center justify-center gap-3"
                    style={{ clipPath: 'polygon(0% 6%, 96% 0%, 100% 94%, 4% 100%)' }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Books
                    <ArrowRight className="size-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-emerald-50 bg-emerald-900/5">
                  <img src={professionalHeadshot} alt="Maiden Manzanal-Frank headshot" className="w-full h-full object-contain" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white font-black text-2xl">Leadership speaker</div>
                    <div className="text-white/70 text-lg font-semibold">Strategy • Change • Impact</div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-emerald-50 bg-emerald-900/5">
                  <img src={workshopImage} alt="Maiden facilitating a workshop" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white font-black text-2xl">Facilitator</div>
                    <div className="text-white/70 text-lg font-semibold">Interactive, reflective sessions</div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-emerald-50 bg-emerald-900/5">
                  <img src={awardCeremonyImage} alt="Maiden receiving an award" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white font-black text-2xl">Trusted Advisor and Subject Matter Expert</div>
                    <div className="text-white/70 text-lg font-semibold">Strategic guidance for impact leaders</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured / logos */}
      <section className="relative py-18 bg-[#FEFCE8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1F2933]">Featured at</h2>
              <p className="text-[#1F2933]/65 font-semibold mt-1">
                Academic institutions, associations, and purpose-driven networks.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-emerald-700 font-black hover:text-emerald-900 transition-colors inline-flex items-center gap-2"
            >
              Invite Maiden <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {featuredLogos.map((c) => (
              <div key={c.name} className="flex items-center justify-center">
                <img src={c.logo} alt={`${c.name} logo`} className="max-h-14 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-[#F7E7D5]">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.18) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 border border-emerald-200/60 rounded-full">
              <Quote className="size-5 text-emerald-600" />
              <span className="font-black text-[#064E3B]">Community Builder • Connector</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-[#1F2933] tracking-tighter leading-[0.9] mt-6">
              What the industry experts say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={`${t.author}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative bg-white/85 backdrop-blur-xl border border-emerald-200/60 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gradient-to-br from-emerald-300/30 to-transparent blur-2xl" />
                <div className="relative">
                  {t.isSample && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E7D5] text-[#3d2817] text-xs font-black mb-4">
                      Replace me
                    </div>
                  )}
                  <p className="text-[#1F2933]/75 leading-relaxed text-lg italic">“{t.quote}”</p>
                  <div className="mt-6 pt-5 border-t border-emerald-200/60">
                    <div className="font-black text-[#022C22]">{t.author}</div>
                    <div className="text-sm text-[#065F46]/80 font-semibold">{t.role}</div>
                    <div className="text-sm text-emerald-700 font-black">{t.org}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-[#3d2817]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 lg:p-14 shadow-2xl overflow-hidden relative"
          >
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgba(16,185,129,0.7) 0px, transparent 1px, transparent 22px, rgba(245,158,11,0.7) 23px)',
              }}
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                Let’s build an on-purpose organization.
              </h3>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10">
                If you’re ready to move beyond “good is good enough,” let’s design the strategy and change journey your leaders can believe in.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/contact">
                  <motion.button
                    className="px-12 py-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-300 text-white font-black text-xl shadow-2xl flex items-center justify-center gap-4"
                    style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Conversation
                    <ArrowRight className="size-6" />
                  </motion.button>
                </Link>
                <Link to="/speaking">
                  <motion.button
                    className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-emerald-200/60 text-white font-black text-xl shadow-2xl flex items-center justify-center gap-4"
                    style={{ clipPath: 'polygon(0% 6%, 96% 0%, 100% 94%, 4% 100%)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Keynotes
                    <ArrowRight className="size-6" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
