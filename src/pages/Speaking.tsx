import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Sparkles, ArrowRight, Users, TrendingUp, Award, CheckCircle, Play, Star, Zap, Download, FileText, Image as ImageIcon, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ImageCarousel } from '../components/ImageCarousel';
import { useRef } from 'react';
import { Link } from 'react-router';
import speakingHero from 'figma:asset/c3ad2e610c1b884e2724c1241fae2521e5ff3089.png';
import professionalHeadshot from 'figma:asset/35264ab2aa2e621f0e2b2daf040f944ac88cd26e.png';
import speakingServiceImage from 'figma:asset/93683b03a276eff5cd6a63f0f59d39806000574d.png';
import keynoteImage from 'figma:asset/ded08c689d83474fca612ad51e427b801419bfe6.png';
import strategyImage from 'figma:asset/dcb4c466b4c07b0c509b10bd81b66f238155e56d.png';
import workshopImage from 'figma:asset/e6786f3dc30a294c8ea6ce7eacf1043ec8e6e90a.png';
import legacyImage from 'figma:asset/8f9855e207c2ed0eb4e2504ae2f454e8aa16dfc8.png';
// Client logos carousel (reuse from Home)
import prairieCollege from 'figma:asset/d0773189db453ba22cbfdba03b5a4642047939d1.png';
import unesco from 'figma:asset/26e4796f572ce4be28c25daeac7bddd0eca6ea01.png';
import netImpact from 'figma:asset/f4cbaaed2a44dbbd15f8b06cb9a77ab71be05704.png';
import manchesterMet from 'figma:asset/ec2b289bbc70807441f1c63e76aaf2cb9a474bca.png';
import minesParis from 'figma:asset/36e3077cce611e5b19709a7792932c892fdfe475.png';
import ledByCommunity from 'figma:asset/62453349edfde14c7f80017a14862fce732b3f66.png';
import crownLogo from 'figma:asset/748ab0edc8009258e4999acee3b2570f12c0181f.png';
import idrac from 'figma:asset/ff24219285982f8a5793202bf331695d02391a57.png';

export function Speaking() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const topics = [
    {
      title: "Provocateur: Systemic Change Leadership",
      description: "How provocateur leaders address the world's biggest problems by moving beyond charity to real systems change. Based on the 5Ps framework (Passion, Purpose, Provision, Practice,[...]",
      image: keynoteImage,
      color: "from-sky-400 to-sky-300",
      icon: TrendingUp
    },
    {
      title: "The Strategic Mindset of 21st Century Leaders",
      description: "Equip leaders to weave disruptions like AI, demographic shifts, and social change into resilient strategies. Learn how to build strategic capacity that grows your mission, infl[...]",
      image: strategyImage,
      color: "from-sky-300 to-sky-200",
      icon: Users
    },
    {
      title: "Change You Can Believe",
      description: "Five powerful strategies to move teams from resistance and polarization to alignment and coherence. Reframe change as travelling together and learn where to leverage for cataly[...]",
      image: workshopImage,
      color: "from-amber-600 to-amber-500",
      icon: Zap,
      imagePosition: "top" as const
    },
    {
      title: "Build Your Legacy as a Changemaker Now",
      description: "Legacy isn't what you leave behind one day—it's how you live and lead now. Inspire every generation to reclaim the driver's seat of their life and design a legacy of meaningf[...]",
      image: legacyImage,
      color: "from-sky-400 to-teal-300",
      icon: Award
    },
  ];

  const testimonials = [
    {
      quote:
        "Thank you, Maiden, for hosting a session at CDLI's Mini Summit on Leadership Conversations. The grounding reflections throughout provided a great space for participants to share their p[...]",
      author: "Bolade Afolabi",
      role: "Communications Officer",
      company: "Community Development Learning Initiative",
      rating: 5
    },
    {
      quote:
        "Maiden spoke to my BUSI367 Social Entrepreneurship class at King's about her insightful book Provocateurs Not Philanthropists. She offered my students a unique perspective on how to turn [...]",
      author: "Michael Ferber",
      role: "Dean",
      company: "King's University, Edmonton",
      rating: 5
    },
    {
      quote:
        "At the first annual Global Hope Conference, Mrs. Manzanal-Frank spoke eloquently on the topic of the business model reset during the time of COVID. The presentation was excellent, highlig[...]",
      author: "Dr. Christopher W. Smithmyer",
      role: "Vice President of International Affairs",
      company: "Brāv Online Conflict Management",
      rating: 5
    },
    {
      quote:
        "Maiden gave a great presentation to our community of changemakers which includes students, faculty, social entrepreneurs, board members, and members of not-for-profit organizations. She b[...]",
      author: "Sally Njoroge",
      role: "Program Lead",
      company: "Trico Changemakers Studio Calgary",
      rating: 5
    },
    {
      quote:
        "It was my pleasure to join the members of the YEG Passport club for a session facilitated by Maiden. The club members were engaged in a process of developing the values that would guide [...]",
      author: "Donna Barrett",
      role: "District Governor 2021–2022",
      company: "Rotary District 5370",
      rating: 5
    },
    {
      quote:
        "Maiden was instrumental in leading the first strategy exercise of the Community Reconciliation Committee as a Founding Member. We are grateful for her contribution and her continued supp[...]",
      author: "Glen Graham, PhD",
      role: "Assistant Professor; Director, Centre for Peace and Justice",
      company: "Burman University",
      rating: 5
    }
  ];

  const stats = [
    { number: "100K", label: "Leaders Developed", icon: Users },
    { number: "20+", label: "Years of Impact", icon: TrendingUp },
    { number: "15+", label: "Countries Reached", icon: Award }
  ];

  const clientLogos = [
    { name: "Prairie College", logo: prairieCollege },
    { name: "UNESCO", logo: unesco },
    { name: "Net Impact Edmonton", logo: netImpact },
    { name: "Manchester Metropolitan University", logo: manchesterMet },
    { name: "Mines Paris Executive Education PSL", logo: minesParis },
    { name: "Led by Community", logo: ledByCommunity },
    { name: "Leadership Organization", logo: crownLogo },
    { name: "IDRAC Business School", logo: idrac },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const professionalPhotos = [
    { src: '/meeting-pro-maiden-1.png', label: 'Photo 1 (Filipiniana)' },
    { src: '/meeting-pro-maiden-2.png', label: 'Photo 2 (Professional portrait)' },
    { src: '/meeting-pro-maiden-3.png', label: 'Photo 3 (Speaking)' },
    { src: '/meeting-pro-maiden-4.png', label: 'Photo 4 (Presenting)' },
    { src: '/meeting-pro-maiden-5.png', label: 'Photo 5 (Provocateurs presentation)' },
  ];

  return (
    <div className="min-h-screen bg-[#DCB69A] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sky-300/25 to-sky-200/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#DCB69A]/30 to-amber-200/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Abstract geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/3 w-96 h-96 border-4 border-sky-200/10"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero with Parallax Background Image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#DCB69A] via-[#c9a888] to-[#DCB69A]">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <ImageWithFallback
            src={speakingHero}
            alt="Maiden Manzanal-Frank speaking on stage"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
        </motion.div>

        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#DCB69A]/30 to-transparent"
          style={{ opacity }}
        />

        {/* Removed abstract shapes over hero background for a cleaner photo */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-sky-200/30 mb-8">
                <Calendar className="size-5 text-sky-300" />
                <span className="text-white font-semibold">Available for 2026 Events</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              Provoke to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-200">
                Inspire
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed"
            >
              Deliver keynote presentations that ignite change, build leadership capacity, and create lasting organizational impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-sky-400 to-sky-300 text-white font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="size-6" />
                  Book a Speaking Engagement
                </motion.button>
              </Link>
              <motion.a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#e8d5b7]/10 backdrop-blur-sm border-2 border-[#e8d5b7]/30 text-white font-black text-lg hover:bg-[#e8d5b7]/20 transition-all flex items-center justify-center gap-3"
                style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="size-6" />
                Watch Speaker Reel
              </motion.a>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Carousel (same as Home) */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#71717a] mb-2">Trusted By Event Partners</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full mx-auto" />
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-100 overflow-hidden">
              <div className="relative">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: [0, -1920] }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {duplicatedLogos.map((client, index) => (
                    <div key={index} className="flex-shrink-0 w-48">
                      <div className="flex items-center justify-center h-20 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className={`max-w-full object-contain ${
                            client.name === "Mines Paris Executive Education PSL" ? "max-h-20" : "max-h-16"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Trapezoid Cards */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Abstract background pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(125, 211, 252, 0.08) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Floating abstract shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-transparent"
          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-br from-[#DCB69A]/20 to-transparent"
          style={{ clipPath: 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 80%)' }}
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                  className="relative bg-gradient-to-br from-[#DCB69A]/60 via-amber-100/40 to-[#DCB69A]/50 backdrop-blur-xl p-8 shadow-2xl hover:shadow-sky-300/30 transition-all border border-sky-200/30"
                  style={{ 
                    clipPath: index % 2 === 0 
                      ? 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)'
                      : 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)'
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300/10 to-[#DCB69A]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex flex-col items-center">
                    <div className="size-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center mb-4 shadow-lg shadow-sky-300/50">
                      <Icon className="size-8 text-white" />
                    </div>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 text-center font-semibold">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-300/30 to-transparent"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keynote Topics Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#DCB69A] to-[#c9a888]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 relative"
          >
            {/* Abstract title decoration */}
            <div className="absolute -top-10 left-0 w-full h-40 bg-gradient-to-r from-sky-300/20 via-[#e8d5b7]/20 to-transparent blur-3xl" />
            
            <h2 className="text-6xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.85] relative">
              Keynote Topics
              <motion.div 
                className="absolute -bottom-4 left-0 h-3 bg-gradient-to-r from-sky-400 to-sky-300"
                initial={{ width: 0 }}
                whileInView={{ width: '30%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, rotate: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden shadow-2xl hover:shadow-sky-300/40 transition-all"
                  style={{ 
                    clipPath: index % 2 === 0 
                      ? 'polygon(0% 3%, 97% 0%, 100% 97%, 3% 100%)'
                      : 'polygon(3% 0%, 100% 3%, 97% 100%, 0% 97%)'
                  }}
                >
                  {/* Content with gradient background - text on top */}
                  <div className="relative bg-gradient-to-br from-[#3d2817]/90 via-[#2C1810] to-amber-900/80 p-8 backdrop-blur-sm">
                    {/* Abstract corner decoration */}
                    <div 
                      className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-sky-300/20 to-transparent"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
                    />
                    
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight relative z-10">
                      {topic.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed relative z-10">
                      {topic.description}
                    </p>
                    <div className="relative z-10">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all"
                      >
                        <span className={`bg-gradient-to-r ${topic.color} text-transparent bg-clip-text`}>Learn More</span>
                        <ArrowRight className="size-5 text-sky-300 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image with overlay - image below text */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={topic.image}
                        alt={topic.title}
                        className={`w-full h-full object-cover ${'imagePosition' in topic && topic.imagePosition === 'top' ? 'object-top' : ''}`}
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/80 to-transparent" />
                    
                    {/* Floating icon */}
                    <motion.div 
                      className={`absolute top-6 right-6 size-16 bg-gradient-to-br ${topic.color} flex items-center justify-center shadow-2xl`}
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="size-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Topic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="relative bg-gradient-to-r from-[#3d2817]/50 via-amber-900/40 to-[#3d2817]/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-sky-200/30 overflow-hidden">
              {/* Animated background pattern */}
              <motion.div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(125, 211, 252, 0.5) 10px, rgba(125, 211, 252, 0.5) 20px)',
                }}
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10 text-center">
                <h3 className="text-4xl font-black text-white mb-4">
                  Need a Custom Topic?
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  Every keynote is tailored to your specific challenges, industry, and <span className="whitespace-nowrap">organizational goals</span>.
                </p>
                <Link to="/contact">
                  <motion.span
                    className="inline-block px-10 py-5 bg-gradient-to-r from-sky-400 to-sky-300 text-white font-black text-lg shadow-2xl shadow-sky-300/50"
                    style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discuss Your Event
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rotating shapes in background */}
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 border-2 border-sky-200/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 border-2 border-amber-500/20"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* Bio / Why Maiden Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(125, 211, 252, 0.25) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image + My Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-md mx-auto mb-8 lg:mb-0">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#DCB69A]/80 bg-[#F5E6D4]">
                  <img 
                    src={speakingServiceImage}
                    alt="Maiden Manzanal-Frank speaking with microphone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-6 bg-[#2C1810] text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold">
                  Global impact strategist &amp; provocateur for change
                </div>
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#2C1810] tracking-tight mb-3">
                  At Your Service
                </h2>
                <p className="text-lg lg:text-xl text-[#3b2619] leading-relaxed max-w-xl">
                  I'm fully convinced that speaking is not about me — it's about you, your audience, and the change you're trying to create. 
                  Every keynote draws from more than two decades in the trenches of strategy, systems change, and leadership development, 
                  translated into actionable insights that increase your leadership impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Reasons to Choose Maiden Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(125, 211, 252, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left: Click-through Image Display */}
            <ImageCarousel />

            {/* Right: 4 Reasons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#2C1810] via-[#3d2817] to-sky-900/85 text-white p-8 lg:p-10 relative overflow-hidden rounded-3xl border border-sky-200/40 flex flex-col"
            >
              <div className="absolute -top-16 -right-10 w-40 h-40 bg-gradient-to-br from-sky-300/40 to-amber-300/25 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/35 to-transparent rounded-tr-[80px]" />

              <div className="relative space-y-6 flex-1 flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-black mb-8">
                  4 Reasons to Choose Maiden
                </h3>
                
                <div className="flex-1 flex flex-col justify-evenly space-y-6">
                  {/* Reason 1 */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-sky-300 flex-shrink-0" />
                      <p className="text-sm lg:text-base">
                        <span className="font-semibold">Real-life, grounded experience.</span> 
                        &nbsp;More than 20 years working with purpose-driven organizations, social enterprises, 
                        governments, and academic institutions — not just theories, but field-tested practice.
                      </p>
                    </div>
                  </div>

                  {/* Reason 2 */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-sky-300 flex-shrink-0" />
                      <p className="text-sm lg:text-base">
                        <span className="font-semibold">Customised, relevant content.</span> 
                        &nbsp;Every keynote is tailored to your strategy, culture, and context so the message 
                        lands where your leaders actually are.
                      </p>
                    </div>
                  </div>

                  {/* Reason 3 */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-sky-300 flex-shrink-0" />
                      <p className="text-sm lg:text-base">
                        <span className="font-semibold">Audience participation &amp; engagement.</span> 
                        &nbsp;Interactive, story-rich, and reflective — designed to keep leaders engaged and move them to action.
                      </p>
                    </div>
                  </div>

                  {/* Reason 4 */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-sky-300 flex-shrink-0" />
                      <p className="text-sm lg:text-base">
                        <span className="font-semibold">Packed with value up front.</span> 
                        &nbsp;From focused 15-minute talks to 2.5–3 hour workshops, every session is built to deliver 
                        practical tools, frameworks, and next steps your leaders can use immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-sky-50 to-sky-100">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(125, 211, 252, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl lg:text-8xl font-black text-gray-900 mb-16 relative inline-block"
          >
              What Meeting Organizers Say
              <motion.div 
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-sky-300 to-sky-200 rounded-full blur-3xl opacity-40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative backdrop-blur-xl p-8 shadow-2xl border border-sky-200 hover:border-sky-400 transition-all overflow-hidden bg-white/90 rounded-3xl"
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-sky-300/10 via-transparent to-[#DCB69A]/10"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Quote mark decoration */}
                <div 
                  className="absolute -top-4 -left-4 size-16 bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center shadow-2xl shadow-sky-300/50 border-2 border-white/20"
                  style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
                >
                  <span className="text-3xl text-white font-black">"</span>
                </div>

                {/* Stars */}
                <div className="relative flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="relative text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="relative">
                <div className="relative flex items-start gap-3 pt-4 border-t border-sky-300/30">
                  <div className="size-14 bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center text-white font-black text-xl shadow-lg"
                       style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-sky-600">{testimonial.company}</div>
                  </div>
                </div>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-sky-300/30 to-transparent"
                  style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Meeting Professionals Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-900/90 via-[#2C1810] to-[#3d2817]">
        {/* Diagonal striped pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(125, 211, 252, 0.8) 0px, transparent 2px, transparent 12px, rgba(125, 211, 252, 0.8) 14px)',
        }} />

        {/* Animated glow orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-sky-300/30 to-amber-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-400/25 to-sky-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-400/20 backdrop-blur-xl border-2 border-sky-300/40 mb-8 shadow-lg shadow-sky-300/30">
              <Briefcase className="size-6 text-sky-300" />
              <span className="text-white font-black text-lg">For Meeting Professionals</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
              Everything You Need
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-amber-300 to-sky-300">
                To Book With Confidence
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-16">
              For meeting organizers, links to downloadable photographs, biographies, and marketing materials are available here to help you work with me. I look forward to hearing from you shortly.
            </p>
          </motion.div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Professional Photos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border-2 border-sky-300/30 hover:border-sky-300/60 transition-all shadow-2xl overflow-hidden"
                   style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative size-20 bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center mb-6 shadow-2xl shadow-sky-300/50 mx-auto"
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <ImageIcon className="size-10 text-white" />
                </div>

                <h3 className="relative text-2xl font-black text-white mb-4 text-center">
                  Professional Photos
                </h3>
                <p className="relative text-white/70 text-center mb-6 leading-relaxed">
                  High-resolution images for event promotion, websites, and marketing materials.
                </p>

                <div className="relative space-y-3">
                  {professionalPhotos.map((img) => (
                    <div key={img.src} className="bg-white/5 rounded-lg overflow-hidden border border-sky-300/30 hover:border-sky-300/60 transition-all">
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-auto max-h-48 object-cover"
                      />
                      <a
                        href={img.src}
                        download
                        className="block w-full px-4 py-2 bg-white/10 hover:bg-sky-400/30 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
                      >
                        <Download className="size-3" />
                        {img.label}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-300/30 to-transparent"
                     style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 0%)' }} />
              </div>
            </motion.div>

            {/* Biographies */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border-2 border-amber-300/30 hover:border-amber-300/60 transition-all shadow-2xl overflow-hidden"
                   style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative size-20 bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mb-6 shadow-2xl shadow-amber-400/50 mx-auto"
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <FileText className="size-10 text-white" />
                </div>

                <h3 className="relative text-2xl font-black text-white mb-4 text-center">
                  Speaker Biographies
                </h3>
                <p className="relative text-white/70 text-center mb-6 leading-relaxed">
                  Multiple bio lengths (50, 100, 200 words) tailored for different formats.
                </p>

                <div className="relative">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl"
                          style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}>
                    <Download className="size-5" />
                    Download Bios
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/30 to-transparent"
                     style={{ clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)' }} />
              </div>
            </motion.div>

            {/* Marketing Materials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border-2 border-sky-300/30 hover:border-sky-300/60 transition-all shadow-2xl overflow-hidden"
                   style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative size-20 bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center mb-6 shadow-2xl shadow-sky-300/50 mx-auto"
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <Sparkles className="size-10 text-white fill-white" />
                </div>

                <h3 className="relative text-2xl font-black text-white mb-4 text-center">
                  Marketing Materials
                </h3>
                <p className="relative text-white/70 text-center mb-6 leading-relaxed">
                  One-sheets, topic descriptions, and promotional content ready to use.
                </p>

                <div className="relative">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-sky-400 to-sky-300 text-white font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl"
                          style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                    <Download className="size-5" />
                    Download Materials
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-300/30 to-transparent"
                     style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 0%)' }} />
              </div>
            </motion.div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-r from-sky-400/20 via-amber-400/15 to-sky-400/20 backdrop-blur-xl border-4 border-white/20 p-10 lg:p-16 shadow-2xl overflow-hidden"
            style={{ clipPath: 'polygon(2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%, 0% 50%)' }}
          >
            {/* Animated background */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0px, transparent 2px, transparent 20px, rgba(255, 255, 255, 0.3) 22px)',
              }}
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative text-center">
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-4">
                Questions About Booking?
              </h3>
              <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                I'm here to make the process smooth and easy. Let's discuss your event and create an unforgettable experience together.
              </p>
              <Link to="/contact">
                <motion.button 
                  className="px-12 py-6 bg-white text-[#2C1810] font-black text-xl shadow-2xl flex items-center justify-center gap-4 mx-auto"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255, 255, 255, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="size-6" />
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#DCB69A] via-[#c9a888] to-[#DCB69A]">
          {/* Abstract overlay patterns */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(125, 211, 252, 0.5) 0px, transparent 1px, transparent 50px, rgba(125, 211, 252, 0.5) 51px)',
          }} />

        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-sky-300/30 to-transparent blur-3xl"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#e8d5b7]/30 to-transparent blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-sky-200/30 mb-8">
              <Sparkles className="size-5 text-sky-300 fill-sky-300" />
              <span className="text-white font-semibold">Limited Availability for 2026</span>
            </div>

            <h3 className="text-6xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-sky-300">
                Ready to Transform
              </span>
              <br />
              Your Next Event?
            </h3>

            <p className="text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create an unforgettable experience that inspires your team and drives meaningful change.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button 
                  className="px-14 py-7 bg-gradient-to-r from-sky-400 to-sky-300 text-white font-black text-2xl shadow-2xl shadow-sky-300/50 flex items-center justify-center gap-4 border-4 border-sky-300/30"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(125, 211, 252, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="size-8" />
                  Check Availability
                </motion.button>
              </Link>
              <motion.a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-14 py-7 bg-[#e8d5b7]/10 backdrop-blur-sm border-4 border-[#e8d5b7]/30 text-white font-black text-2xl hover:bg-[#e8d5b7]/20 transition-all flex items-center justify-center gap-4"
                style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="size-8" />
                View Speaker Kit
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
