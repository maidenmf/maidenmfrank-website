import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Sparkles, TrendingUp, Users, Rocket, CheckCircle, ArrowRight, Zap, Award, MessageCircle, Globe, Lightbulb, Mail, FileText, Newspaper, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { YouTubeBackground } from '../components/YouTubeBackground';
import { useRef } from 'react';
import { Link } from 'react-router';
import challengeImage from 'figma:asset/a1b3eedfcf78d0129d1f2a0b502f7ae9655a5d5a.png';
import offeringsBg from 'figma:asset/c9917fe1e302fc960a32612e7d8181549673525d.png';
import provocateursNexusBg from 'figma:asset/0e04bfd2134a7243f6a2cef96460d5fc5c19a25d.png';

export function Coaching() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  // Overlay mask: light at top (video visible but text readable), then fades further so video becomes more prominent as you scroll
  const maskOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.15]);

  const packages = [
    { 
      name: "5-Day Challenge", 
      subtitle: "One-on-One Coaching",
      price: "Free", 
      color: "from-teal-600 to-cyan-600",
      description: "Risk-free opportunity to experience Maiden's coaching approach. Perfect for leaders who want to explore working with a trusted thinking partner on strategy, change, and legacy.",
      features: ["Risk-free with refundable deposit", "One-on-one coaching format", "Focus on clarity and courageous action"],
      buttonText: "Get Started",
      buttonLink: "https://5day-challenge-mmf.replit.app",
      image: challengeImage,
      icon: Target,
      emoji: "🎯"
    },
    { 
      name: "Executive Coaching", 
      subtitle: "Coaching Program",
      price: "Custom", 
      color: "from-amber-700 to-amber-900",
      description: "Coaching for leaders who want a trusted thinking partner on strategy, change, and legacy. One-to-one or small group formats focused on clarity, resilience, and courageous action in complex environments.",
      features: ["One-to-one or small group formats", "Focus on strategy, change, and legacy", "Build clarity, resilience, and courageous action", "Includes cohorts and retreats"],
      buttonText: "Learn More",
      buttonLink: null,
      image: "/coaching-executive-coaching.png",
      icon: Globe,
      emoji: "💼"
    },
    { 
      name: "The Provocateur's Nexus", 
      subtitle: "Exclusive Invite-Only Community",
      price: "Invite Only", 
      color: "from-stone-700 to-amber-800",
      description: "For high net-worth individuals ready to take the challenge of highly customized support and delightful educational experiences. Together, you prioritize where you can truly move the needle, and design a portfolio of actions that match your intentions.",
      features: ["Invite-only community", "Monthly coaching sessions", "Delightful educational experiences", "Exclusive retreats and events", "Highly customized support"],
      buttonText: "Request Invitation",
      buttonLink: null,
      image: provocateursNexusBg,
      icon: Rocket,
      emoji: "👑"
    },
  ];

  const benefits = [
    { title: "Strategic Clarity", description: "Move from scattered good intentions to focused impact strategy", icon: Target },
    { title: "Provocateur Mindset", description: "Build the courage to challenge systems and drive real change", icon: Zap },
    { title: "Measurable Impact", description: "Develop frameworks to quantify and communicate your global outcomes", icon: TrendingUp },
    { title: "Lasting Legacy", description: "Create sustainable change that outlives your direct involvement", icon: Award }
  ];

  const stats = [
    { number: "200", label: "Leaders Coached", icon: Users },
    { number: "1000", label: "Social Venture Founders Trained", icon: Rocket },
    { number: "200", label: "Speaking Engagements Since 2001", icon: Globe }
  ];

  const testimonials = [
    {
      quote:
        "Maiden’s book and ingeniously adaptive style of personalized coaching was a masterful experience on my journey through collaborative chaos. I am still implementing the 5-P process. Thank you so much for sharing your sparks of inspiration and thought-provoking inquiry.",
      author: "Ashok Patel, M.D.",
      role: "Physician",
      company: "Mayo Clinic"
    },
    {
      quote:
        "Maiden was our Leadership and Change-Making Instructor and Leadership Coach at the Rotary International Studies on Peace, Conflict Transformation, and Development at Chulalongkorn University in Bangkok, Thailand. For two consecutive cohorts, she led successful leadership development strategy and coaching sessions with close to 40 Rotary Peace Fellows from more than 15 countries, helping them navigate and lead in their personal and professional lives during dynamic times.",
      author: "Martine Miller",
      role: "Former Deputy Director, Rotary Peace Center",
      company: "Chulalongkorn University, Thailand"
    }
  ];

  return (
    <div className="min-h-screen bg-[#DCB69A] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-200/30 to-amber-300/30 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200/30 to-sky-300/30 blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            y: [0, -80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-200/30 to-teal-300/30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#DCB69A] via-[#E8D4C0] to-[#DCB69A]">
        {/* YouTube Background Video (softly blurred so text is focal) */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ y }}
        >
          <div className="w-full h-full" style={{ filter: 'blur(4px) scale(1.05)' }}>
            <YouTubeBackground 
              videoId="XEc0oXYzQsc"
              className="w-full h-full"
            />
          </div>
          {/* Overlay mask: softens video further and keeps focus on hero copy */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#DCB69A]/85 z-10"
            style={{ opacity: maskOpacity }}
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-32"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-black/55 md:bg-black/60 backdrop-blur-xl rounded-3xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 text-center border border-white/15">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-white/60 rounded-full px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="size-5 text-amber-400" />
                <span className="text-stone-900 font-semibold">Transform Your Leadership Journey</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-[120px] font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
                Provoke
                <br />
                <span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400"
                  style={{ transform: 'skewY(-4deg)' }}
                >
                  to Grow
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/95 drop-shadow-xl mb-10 leading-relaxed max-w-3xl mx-auto">
                Transformational coaching for changemakers who refuse to settle for good intentions — growing their capacity, courage, and clarity to create measurable impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <motion.button 
                    className="px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black text-lg shadow-xl rounded-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="size-6" />
                    <span>Book Discovery Call</span>
                    <ArrowRight className="size-6" />
                  </motion.button>
                </Link>

                <motion.button 
                  className="px-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-sky-300 text-stone-800 font-black text-lg hover:bg-white transition-all rounded-lg flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Programs
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-stone-600/50 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-stone-600 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Packages - Dynamic Layout */}
      <section className="relative py-32 overflow-hidden bg-[#DCB69A]">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl lg:text-9xl font-black text-stone-800 mb-6 tracking-tighter leading-[0.85]">
              Strategic Opportunities
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              If you're navigating turbulence, misalignment, or stalled impact, you don't have to figure it out alone. Let's explore what's possible when your strategy, leadership, and systems pull in the same direction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer flex flex-col rounded-3xl bg-white"
                >
                  {/* Image Header */}
                  <div className="relative h-72 overflow-hidden flex-shrink-0 rounded-t-3xl">
                    <ImageWithFallback 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-40 mix-blend-multiply`} />

                    {/* Number Badge */}
                    <motion.div 
                      className={`absolute top-6 right-6 bg-gradient-to-br ${pkg.color} px-6 py-4 shadow-xl rounded-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="text-4xl font-black text-white leading-none">
                        0{index + 1}
                      </div>
                    </motion.div>

                    {/* Icon Badge */}
                    <motion.div 
                      className={`absolute bottom-6 left-6 size-16 bg-white rounded-xl flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="size-8 text-teal-600" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative bg-white p-8 flex-grow flex flex-col rounded-b-3xl">
                    <h3 className="text-4xl font-black text-stone-800 mb-3 tracking-tight">{pkg.name}</h3>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-stone-700"
                        >
                          <CheckCircle className="size-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">
                          {pkg.price}
                        </div>
                      </div>

                      {pkg.buttonLink ? (
                        <motion.a
                          href={pkg.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-4 bg-gradient-to-r ${pkg.color} text-white font-black text-lg shadow-lg rounded-xl flex items-center justify-center gap-2`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {pkg.buttonText}
                          <ArrowRight className="size-5" />
                        </motion.a>
                      ) : (
                        <motion.button 
                          className={`w-full py-4 bg-gradient-to-r ${pkg.color} text-white font-black text-lg shadow-lg rounded-xl flex items-center justify-center gap-2`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {pkg.buttonText}
                          <ArrowRight className="size-5" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Abstract Grid */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black text-stone-800 mb-16 tracking-tighter leading-[0.85] relative"
          >
            What You'll Gain
            <motion.div 
              className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '25%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white/80 backdrop-blur-sm p-8 shadow-xl border-2 border-sky-200 hover:border-sky-400 transition-all rounded-2xl"
                >
                  <div className="relative">
                    <div className="size-16 bg-gradient-to-br from-teal-500 to-sky-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="size-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-stone-800 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black text-stone-800 mb-16 tracking-tighter leading-[0.85] text-center"
          >
            Impactful Numbers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white/80 backdrop-blur-sm p-8 shadow-xl border-2 border-sky-200 hover:border-sky-400 transition-all rounded-2xl text-center"
                >
                  <div className="relative">
                    <div className="size-16 bg-gradient-to-br from-teal-500 to-sky-500 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                      <Icon className="size-8 text-white" />
                    </div>
                    <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600 mb-3">
                      {stat.number}
                    </h3>
                    <p className="text-stone-700 text-lg font-semibold leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How is my coaching unique? */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-900 via-teal-800 to-sky-900/90 text-white p-10 lg:p-14 rounded-3xl shadow-2xl border border-emerald-300/50 overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gradient-to-br from-emerald-300/35 to-transparent blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-gradient-to-br from-amber-300/35 to-transparent blur-3xl" />

            <div className="relative">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                How is my coaching unique?
              </h3>
              <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-8">
                Bridging where you are today and your future state takes imagination, creativity, and an out-of-the-box
                perspective. That's what I bring: strategic clarity, real-world practice, and tools your leaders can use immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
                  <div className="font-black text-white text-xl mb-2">From ambiguity to clarity</div>
                  <div className="text-white/70">Frameworks and questions that move leaders from point A → B → C.</div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
                  <div className="font-black text-white text-xl mb-2">From resistance to alignment</div>
                  <div className="text-white/70">Practical change strategies that build coherence and momentum.</div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
                  <div className="font-black text-white text-xl mb-2">From good intentions to systems impact</div>
                  <div className="text-white/70">A provocateur's lens that helps leaders move beyond charity.</div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
                  <div className="font-black text-white text-xl mb-2">From "busy" to strategic</div>
                  <div className="text-white/70">Capacity-building that strengthens mission, influence, and impact.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coaching Testimonials */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-stone-900 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-teal-500/40 to-cyan-400/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/40 to-rose-400/40 blur-3xl" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-white mb-12 tracking-tighter leading-[0.9] text-center"
          >
            Coaching in Their Words
          </motion.h2>
          <p className="text-slate-200/80 text-lg max-w-3xl mx-auto text-center mb-16">
            A glimpse into how leaders and peacebuilders experience working with Maiden as their coach and instructor.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-md shadow-2xl"
              >
                <div className="absolute -top-6 left-6 size-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Quote className="size-6 text-white" />
                </div>
                <div className="mt-4">
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <div className="text-sm font-semibold text-teal-200">
                    {t.author}
                  </div>
                  <div className="text-xs text-teal-100/80">
                    {t.role}
                  </div>
                  <div className="text-xs text-slate-300/80 mt-1">
                    {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden bg-[#DCB69A]">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm p-16 lg:p-20 text-center overflow-hidden shadow-2xl border-2 border-sky-200 rounded-3xl"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Target className="size-20 mx-auto mb-8 text-teal-600" />
              </motion.div>

              <h3 className="text-6xl lg:text-8xl font-black text-stone-800 mb-8 tracking-tighter leading-[0.85]">
                Ready to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">
                  Level Up?
                </span>
              </h3>

              <p className="text-2xl text-stone-700 mb-12 max-w-2xl mx-auto">
                Schedule a complimentary discovery call to explore how coaching can accelerate your leadership journey
              </p>

              <Link to="/contact">
                <motion.button 
                  className="px-16 py-7 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black text-2xl shadow-xl rounded-xl flex items-center justify-center gap-4 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="size-8" />
                  Book Discovery Call
                  <ArrowRight className="size-8" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
