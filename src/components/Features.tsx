import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Users, Mic } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';
import { Link } from 'react-router';
import professionalHeadshot from 'figma:asset/35264ab2aa2e621f0e2b2daf040f944ac88cd26e.png';
import prairieCollege from 'figma:asset/d0773189db453ba22cbfdba03b5a4642047939d1.png';
import unesco from 'figma:asset/26e4796f572ce4be28c25daeac7bddd0eca6ea01.png';
import netImpact from 'figma:asset/f4cbaaed2a44dbbd15f8b06cb9a77ab71be05704.png';
import manchesterMet from 'figma:asset/ec2b289bbc70807441f1c63e76aaf2cb9a474bca.png';
import minesParis from 'figma:asset/36e3077cce611e5b19709a7792932c892fdfe475.png';
import ledByCommunity from 'figma:asset/62453349edfde14c7f80017a14862fce732b3f66.png';
import crownLogo from 'figma:asset/748ab0edc8009258e4999acee3b2570f12c0181f.png';
import idrac from 'figma:asset/ff24219285982f8a5793202bf331695d02391a57.png';

const communityCompanies = [
  { name: 'Prairie College', logo: prairieCollege },
  { name: 'UNESCO', logo: unesco },
  { name: 'Net Impact Edmonton', logo: netImpact },
  { name: 'Manchester Metropolitan University', logo: manchesterMet },
  { name: 'Mines Paris Executive Education PSL', logo: minesParis },
  { name: 'Led by Community', logo: ledByCommunity },
  { name: 'Leadership Organization', logo: crownLogo },
  { name: 'IDRAC Business School', logo: idrac },
];

export function Features() {
  const services = [
    {
      icon: Users,
      title: "Executive Coaching",
      subtitle: "Coaching & Advisory",
      description: "Whole-person leadership growth for founders, executives, and changemakers. Transform ambiguity to clarity, confusion to strategy, and perfection to mindset excellence.",
      color: "from-blue-600 to-sky-600",
      path: "/coaching",
    },
    {
      icon: Mic,
      title: "Keynote Speaking",
      subtitle: "Speaking Engagements",
      description: "Dynamic presentations that challenge, provoke, and inspire action. From global innovation competitions to social enterprise forums — sparking transformation worldwide.",
      color: "from-amber-700 to-yellow-700",
      path: "/speaking",
    },
    {
      icon: BookOpen,
      title: "Proven Frameworks",
      subtitle: "Books & Resources",
      description: "Author of \"Provocateurs Not Philanthropists\" — challenging conventional wisdom and offering provocative frameworks that turn good intentions into measurable global impact.",
      color: "from-teal-600 to-cyan-600",
      path: "/books",
    },
  ];

  return (
    <>
      {/* Services Section - PURE TEAL BACKGROUND */}
      <section className="relative bg-teal-600 py-20 lg:py-28 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Three Column Grid Layout - More compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.path}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 h-full"
                  >
                    {/* Content */}
                    <div className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                        <service.icon className="size-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#09090b] mb-2">
                        {service.title}
                      </h3>
                      <div className="text-sm font-semibold text-teal-600 mb-4">
                        {service.subtitle}
                      </div>
                      <p className="text-[#71717a] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Video Section - creamy brown background */}
      <section id="speaking" className="relative bg-[#DCB69A] py-32 lg:py-40 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-[#18181b] mb-6 leading-tight">
              Speaking in Action
            </h2>
            <div className="h-1 w-24 bg-[#b3743b] rounded-full mx-auto mb-6" />
            <p className="text-xl text-[#3f2a1c] max-w-3xl mx-auto leading-relaxed">
              Watch highlights from recent keynote presentations and discover how transformative leadership principles come to life on stage
            </p>
          </motion.div>

          {/* Video Player with Abstract Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Abstract decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c58c5b] to-[#f2d0a7] rounded-3xl blur-xl opacity-40" />
            
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e0b384]">
              <div className="relative pt-[56.25%] overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/nL2Los_QlO0?rel=0&playsinline=1"
                  title="On Strategy, Change and Leadership – Speaker Reel – Maiden Manzanal-Frank"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Quote Section with Background Image */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2OTM4MzU5OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#09090b]/75" />
        </div>

        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-teal-600 text-white mb-6">
                <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              "Permission is not required. The world needs provocateurs who challenge the status quo and turn good intentions into real, measurable global impact."
            </blockquote>
            <div className="h-1 w-20 bg-teal-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="relative bg-gradient-to-br from-amber-50/70 via-white to-amber-100/50 py-24 lg:py-32 overflow-hidden">
        {/* Amber background orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-[350px] h-[350px] bg-amber-100/50 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-teal-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={professionalHeadshot}
                    alt="Professional leadership speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#09090b]">
                Rooted in Community, Global in Vision
              </h2>
              <div className="space-y-4 text-lg text-[#71717a] leading-relaxed">
                <p>
                  As a strategist with deep roots in community and global Asia experience, I bring a unique perspective to leadership that challenges conventional philanthropic and community development models. My work is grounded in excellence, innovation, and a passionate belief that real impact requires provocateurs, not philanthropists at every level of impact ecosystem.
                </p>
                <p>
                  I work with purpose-driven leaders—founders, executives, and changemakers tackling global challenges through innovation projects, competitions, social enterprises, governments, companies, and academic institutions.
                </p>
                <p>
                  Through my book "Provocateurs Not Philanthropists" and coaching work with social enterprise founders, CSR leaders, and high-net worth changemakers, I help transform ambiguity into clarity, confusion into strategy, and the pursuit of perfection into mindset excellence with actionable blueprints.
                </p>
                <p>
                  Together, we build whole-person leadership that creates lasting change.
                </p>
              </div>
              {/* Logos intentionally omitted here to keep this section focused on story and copy. */}
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#09090b] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all hover:scale-105 shadow-lg mt-6">
                  Connect & Collaborate
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
