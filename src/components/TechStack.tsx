import { motion } from 'motion/react';
import { Quote, Target, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechStack() {
  const stats = [
    { icon: Target, number: "100", label: "Organizations Served" },
    { icon: Users, number: "10K", label: "Leaders Developed" },
    { icon: Award, number: "15+", label: "Years of Impact" },
  ];

  const testimonials = [
    {
      quote: "Maiden delivered a powerful and thought-provoking presentation on leading with intention, clarity, and courage that resonated strongly with our mission of advancing sustainable and socially responsible leadership.",
      author: "Eugenio Coccimiglio",
      role: "President, Net Impact Edmonton",
    },
    {
      quote: "Maiden's talk on Provocateur Leadership was unanimously appreciated by the Directors — an innovative approach to leadership that inspired the whole audience.",
      author: "Laurent Amice Berranger",
      role: "Directeur MINES Paris-PSL Executive Education",
    },
    {
      quote: "Maiden has frequently been a guest speaker in my classes and the audience very much appreciated her expertise, knowledge, and skills based on her own international practice.",
      author: "Dr. Rita Klapper, PhD.",
      role: "Associate Research Professor, IDRAC Business School, Lyon, France",
    },
  ];

  // Text reveal animation
  const [visibleChars, setVisibleChars] = useState(0);
  const text = "What Leaders are Saying";

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) return prev + 1;
        return prev;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Stats Section - Diagonal Overlap Design */}
      <section className="relative overflow-hidden bg-white py-32">
        {/* Diagonal background split */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 50%, #0284c7 100%)',
          clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
        }} />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          {/* Scattered stats layout */}
          <div className="relative min-h-[400px]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 5 : -5, zIndex: 10 }}
                className="absolute cursor-pointer"
                style={{
                  top: index === 0 ? '0' : index === 1 ? '120px' : '60px',
                  left: index === 0 ? '0%' : index === 1 ? '35%' : '70%',
                  transform: `skewY(${index === 0 ? -3 : index === 1 ? 2 : -4}deg)`
                }}
              >
                {/* Background circle with blur */}
                <motion.div
                  className="absolute inset-0 bg-white/20 blur-3xl scale-150"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                  animate={{
                    scale: [1.5, 1.8, 1.5],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7
                  }}
                />
                
                <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 p-10 min-w-[280px] shadow-2xl"
                     style={{ 
                       clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                       transform: `skewY(${index === 0 ? 3 : index === 1 ? -2 : 4}deg)`
                     }}>
                  <stat.icon className="size-12 text-white mb-4 opacity-80" />
                  <div className="text-7xl font-black text-white mb-2 leading-none">
                    {stat.number}
                  </div>
                  <div className="text-lg text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Overlapping Cards */}
      <section className="bg-gray-50 py-32 lg:py-40 relative overflow-hidden">
        {/* Animated floating dots */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-teal-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Title with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="relative inline-block">
              <div className="absolute -top-20 -left-20 text-[200px] font-black text-teal-100 leading-none select-none opacity-30">
                "
              </div>
              <h2 className="relative text-6xl lg:text-8xl font-black text-[#09090b] tracking-tighter leading-[0.85]">
                {text.split('').map((char, i) => {
                  // Add line break after "are " (at position 17, before "Saying")
                  const shouldBreak = i === 17;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: visibleChars > i ? 1 : 0, y: visibleChars > i ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                      {shouldBreak && <br />}
                    </motion.span>
                  );
                })}
              </h2>
            </div>
            <motion.div 
              className="h-2 w-48 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mt-8 ml-4"
              initial={{ width: 0 }}
              whileInView={{ width: '192px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Overlapping testimonial cards */}
          <div className="relative min-h-[800px] max-w-6xl mx-auto mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotate: -10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: index === 0 ? -8 : index === 1 ? 4 : -3,
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  rotate: 0, 
                  scale: 1.05,
                  zIndex: 20,
                  transition: { duration: 0.3 }
                }}
                className="absolute cursor-pointer"
                style={{
                  top: `${index * 140}px`,
                  left: index === 0 ? '0%' : index === 1 ? '15%' : '8%',
                  zIndex: 10 - index,
                  width: '92%',
                  maxWidth: '700px',
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-[40px] blur-2xl scale-105" />
                
                {/* Card */}
                <div 
                  className="relative bg-white shadow-2xl p-12 rounded-[40px] border-2 border-teal-100"
                >
                  {/* Speech bubble tail */}
                  <div
                    className="absolute -bottom-3 w-8 h-8 bg-white border-b-2 border-r-2 border-teal-100 rotate-45 shadow-lg"
                    style={{
                      left: index === 0 ? '64px' : index === 1 ? '120px' : '88px',
                      borderBottomRightRadius: '8px',
                    }}
                  />

                  <Quote className="size-12 text-teal-600 mb-6" />
                  <p className="text-xl text-[#09090b] mb-8 leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600" />
                    <div>
                      <div className="font-bold text-[#09090b] text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#71717a]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Decorative number */}
                  <div className="absolute bottom-8 right-8 text-8xl font-black text-teal-100 leading-none select-none">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section - Asymmetric Split */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Image with overlay */}
          <div className="relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] to-transparent opacity-80" />
            </motion.div>

            {/* Floating text */}
            <div className="relative h-full flex items-center p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                  Let's
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Transform
                  </span>
                  <br />
                  Together
                </h3>
              </motion.div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative bg-gradient-to-br from-[#09090b] via-teal-700 to-cyan-700 flex items-center p-12 lg:p-20">
            {/* Abstract pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Animated gradient blobs */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Ready to develop courageous leaders and transform your impact to the next level?
              </p>

              <div className="space-y-4">
                <Link to="/contact">
                  <motion.div 
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 py-5 bg-white text-[#09090b] font-black text-lg rounded-full hover:shadow-2xl transition-all text-left flex items-center justify-between group"
                  >
                    <span>Schedule a Call</span>
                    <motion.svg 
                      className="size-6"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </Link>

                <Link to="/books#additional-resources">
                <motion.div
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all text-left flex items-center justify-between group"
                >
                  <span>Download Resources</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </motion.div>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="size-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Available for speaking engagements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
