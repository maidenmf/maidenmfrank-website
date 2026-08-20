import React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Star, Award, Globe, Users, ExternalLink, FileText, Sparkles, Quote, ShoppingCart, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import bookCover from 'figma:asset/e6b9490ca762ff0fc27b68a70f0166a32d5dfa0e.png';
import portraitImage from 'figma:asset/23fc90c98c532984255573344134df44fc62b5af.png';


const RESOURCES_URL = 'https://www.maidenmfrank.com/resources.html';

const strategyChangeArticles = [
  { title: 'Strategies for the Post-Pandemic Emergence', url: 'https://csae.com/blogs/strategies-post-pandemic-emergence/' },
  { title: 'Throw your Strategy Plans away: 3 Lessons from the Failure Playbook', url: 'https://csae.com/blogs/throw-your-strategy-plans-away-three-lessons-from-the-failure-playbook/' },
  { title: 'Why Strategy Plans fail even before it starts?', url: 'https://www.maidenmfrank.com/uploads/5/1/6/8/51685601/why_strategy_plans_fail_and_how_to_avoid_them.pdf' },
  { title: '4 Contextual factors in Strategy creation', url: 'https://www.maidenmfrank.com/uploads/5/1/6/8/51685601/4_contextual_factors_in_strategy_creation.pdf' },
  { title: 'Change Management begins with you', url: 'https://www.maidenmfrank.com/uploads/5/1/6/8/51685601/change_begins_with_you.pdf' },
  { title: 'Whose results? What results', url: 'https://www.maidenmfrank.com/uploads/5/1/6/8/51685601/what_results.pdf' },
];

const impactLeadershipArticles = [
  { title: 'How to Go Beyond Your Comfort Zone to Grow Personally and Professionally', url: 'https://www.maidenmfrank.com/resources.html' },
  { title: 'Being an Effective Leader in Turbulent Times', url: 'https://medium.com/authority-magazine/maiden-manzanal-frank-of-globalstakes-consulting-five-things-you-need-to-be-a-highly-effective-2b4dc5402883' },
  { title: 'Dealing with Ambiguity During the Pandemic', url: 'https://www.fcc-fac.ca/en/knowledge/ambiguity-during-a-global-pandemic.html' },
  { title: 'Seeing Light at the End of the Tunnel: 5 Reasons to be hopeful during the corona crisis', url: 'https://medium.com/authority-magazine/maiden-manzanal-frank-seeing-light-at-the-end-of-the-tunnel-5-reasons-to-be-hopeful-during-this-cf4b35296c7e' },
  { title: 'Using your platform to create impact', url: 'https://medium.com/authority-magazine/maiden-manzanal-frank-promote-the-causes-that-you-are-personally-and-professionally-aligned-with-6a9434ff22b1' },
];

const frankInsightsExamples = ['Circularity', 'Laugh at Rejections', 'Help Yourself'];

const mediaFeatures: { title: string; url: string }[] = [
  { title: 'On Provocateurs with Above the Bar Podcast', url: 'https://theabovethebarpodcast.com/the-above-the-bar-youtube-channel/' },
  { title: 'On Provocateurs with IDEAS Podcast', url: 'https://davidpasqualone.com/MaidenFrank' },
  { title: 'On Provocateurs and more (Business as UNusual)', url: 'https://podcasts.apple.com/us/podcast/business-as-unusual/id1610022224' },
  { title: 'On Provocateurs with Rainforest Alberta (LIBI)', url: 'https://www.podbean.com/site/EpisodeDownload/PB142866E6ADZA' },
  { title: 'On Provocateurs with the World Fair Trade Organization', url: 'https://wfto.com/podcast/provocateurs-not-philanthropists' },
  { title: 'On Provocateurs (YouTube)', url: 'https://www.youtube.com/watch?v=FzDfWZBTqtc' },
  { title: 'Juris North 2022 Roundtables on Sustainability', url: 'https://www.facebook.com/share/v/1HKZAbW1fb/' },
  { title: 'CDLI Mini-Summit: Community Renewal & Strengthening', url: 'https://youtu.be/CegzIbyYdlk' },
  { title: 'Businesses Thriving in Post-COVID (Ticker TV Australia)', url: 'https://youtu.be/M7gE8iSNtow' },
  { title: 'On Provocateurs (Additional YouTube)', url: 'https://www.youtube.com/watch?v=r-XhYs-xvBE' }
];

export function Books() {
  const location = useLocation();
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null);

  useEffect(() => {
    if (location.hash === '#additional-resources') {
      document.getElementById('additional-resources')?.scrollIntoView();
    }
  }, [location.hash]);

  const keyTakeaways = [
    {
      icon: Star,
      title: "Passion",
      description: "Channel your drive into purposeful action. Provocateurs lead with conviction that ignites change in others."
    },
    {
      icon: Globe,
      title: "Purpose",
      description: "Clarify why you do what you do. Purpose aligns actions with measurable impact beyond good intentions."
    },
    {
      icon: Award,
      title: "Provision",
      description: "Leverage resources strategically. Turn what you have into catalytic support for systemic change."
    },
    {
      icon: BookOpen,
      title: "Practice",
      description: "Put principles into action daily. The 5Ps become transformative when practiced consistently."
    },
    {
      icon: Users,
      title: "Paradigm",
      description: "Shift mindsets from charity to provocation. New paradigms account for messy realities and drive competence."
    }
  ];

  const principles = ["Doing Better than Doing No Harm", "Playing the Long Game", "Learning from Mistakes", "Accessing Your Ignorance", "One Person, Many Impacts", "Envision the End You Intend", "Daring the Impossible", "Bringing Innovation to the Margins", "Cultivating a Whole-of-System Approach", "Leaving a Legacy Now"];

  const testimonials = [
    {
      quote: "The ultimate guide to understanding impact, backed with research and first-hand experience. No matter where you are in your life or career, this book will change your life!",
      author: "Dr. Marshall Goldsmith",
      title: "Thinkers50 #1 Executive Coach and New York Times bestselling author"
    },
    {
      quote: "A book that focuses on 'Impact' vs tick in the box good works. Now you can have measurable impact in all you want to do.",
      author: "Dr. Ravi A Fernando",
      title: "Chairman/CEO Global Strategic Corporate Sustainability & Executive in Residence INSEAD"
    },
    {
      quote: "We need leaders who urge for radical change, out of the box. This easy reading book will wake up the audience and let them recognize how to become an impact leader towards urgently needed system change.",
      author: "Leida Rijnhout",
      title: "Chief Executive, World Fair Trade Organization (WFTO)"
    },
    {
      quote: "As the founder of a health non-profit in Sierra Leone, I was delighted to be included in this wonderful book. It is empowering to know that others are working to create new models of change, and that a Rotary Peace Fellow has recognized our collective efforts.",
      author: "Risa Gold, MD DLFAPA",
      title: "Founder, Miracle of Help"
    },
    {
      quote: "Provocateurs, Not Philanthropists offers a grounded critique of traditional development practices. The book challenges conventional thinking about the nonprofit world, proposing a framework for how people can meaningfully engage in development work and embrace the role of provocateurs who catalyze change.",
      author: "Christoph Schultz",
      title: "Former Executive Director, Fig Tree Foundation, Canada"
    },
    {
      quote: "Insightful and practical. Maiden brings her wealth of experience to the space and helps to look forward to a better future for NGO practice. The book uses the 10 principles as its framework making it easy to follow with practical ideas. A must read for those in the development space.",
      author: "Lauren Donnison",
      title: "Founder and Director, Hear my Voice Women's Network"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-600/20 to-blue-600/20 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-700/20 to-stone-600/20 blur-3xl"
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
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow effect behind book */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/50 to-blue-600/50 blur-3xl scale-110" />

                {/* Book Cover */}
                <motion.img
                  src={bookCover}
                  alt="Provocateurs Not Philanthropists book cover"
                  className="relative w-full max-w-md mx-auto shadow-2xl"
                  style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                  whileHover={{ boxShadow: '0 0 80px rgba(20, 184, 166, 0.6)' }}
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-6 -right-6 size-32 bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center shadow-2xl"
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-center">
                    <Award className="size-10 text-white mx-auto mb-1" />
                    <div className="text-xs text-white font-black">BEST<br />SELLER</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Book Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-3 bg-teal-600/20 backdrop-blur-xl border border-teal-400/30 mb-8 rounded-full sm:rounded-3xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-5 text-amber-400 fill-amber-400" />
                  <span className="text-white font-semibold">Provoke to Lead</span>
                </div>
                <span className="text-teal-100/80 text-xs sm:text-sm">
                  Proven frameworks and resources for impact‑driven leaders.
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Proven
                </span>
                <br />
                Frameworks
              </h1>

              <p className="text-2xl text-teal-400 font-bold mb-8">
                Turning Good Intentions Into Global Impact
              </p>

              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Challenge the status quo and transform good intentions into measurable global impact. This groundbreaking book reveals why being a provocateur—not a philanthropist—is the key to creating lasting change in our world.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <motion.a
                  href="https://www.amazon.ca/Provocateurs-Not-Philanthropists-Turning-Intentions/dp/1789048362/ref=sr_1_1?crid=2DWB9KAI9KVN0&dib=eyJ2IjoiMSJ9.ANhPfXKrCSqf6OB_mNBpWw.rDnoqeiihUFF-QyoL_3srUNbNp75GgkyAQyBR7xmbOk&dib_tag=se&keywords=provocateurs+not+philanthropists&qid=1771453312&sprefix=provocateurs%2Caps%2C170&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="size-6" />
                  Order Now
                </motion.a>
                <Link to="/contact">
                  <motion.div
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                    style={{ clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="size-6" />
                    Read Sample
                  </motion.div>
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework Visualization - Concentric Circles */}
      <section className="py-40 bg-[#DCB69A] relative overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl lg:text-8xl font-black text-stone-800 mb-6 tracking-tighter">
              The Framework
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              5 Core Principles at the heart, 10 Chapters forming the complete framework. Hover to explore.
            </p>
          </motion.div>

          {/* Portrait Image and Concentric Circles Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-amber-500/30 blur-3xl scale-110" />
                
                {/* Image */}
                <motion.img
                  src={portraitImage}
                  alt="Maiden R. Manzanal-Frank with Provocateurs book"
                  className="relative w-full max-w-lg mx-auto shadow-2xl rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Right - Concentric Circles */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <svg className="w-full max-w-2xl mx-auto" viewBox="0 0 800 800">
                  <defs>
                    {/* Gradients for circles */}
                    <linearGradient id="inner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="outer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* Outer Circle - 10 Chapters */}
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="320"
                    fill="none"
                    stroke="url(#outer-gradient)"
                    strokeWidth="60"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* 10 Chapter markers on outer circle */}
                  {principles.map((principle, index) => {
                    const angle = (index * 360 / 10) - 90;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 320;
                    const x = 400 + radius * Math.cos(rad);
                    const y = 400 + radius * Math.sin(rad);
                    
                    return (
                      <g key={index}>
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="20"
                          fill="white"
                          stroke="#d97706"
                          strokeWidth="3"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => setHoveredChapter(index)}
                          onMouseLeave={() => setHoveredChapter(null)}
                          whileHover={{ scale: 1.3 }}
                        />
                        <text
                          x={x}
                          y={y}
                          fill="#78350f"
                          fontSize="20"
                          fontWeight="900"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{ pointerEvents: 'none' }}
                        >
                          {index + 1}
                        </text>
                      </g>
                    );
                  })}

                  {/* Inner Circle - 5Ps */}
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="180"
                    fill="none"
                    stroke="url(#inner-gradient)"
                    strokeWidth="60"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />

                  {/* 5P markers on inner circle */}
                  {keyTakeaways.map((takeaway, index) => {
                    const angle = (index * 360 / 5) - 90;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 180;
                    const x = 400 + radius * Math.cos(rad);
                    const y = 400 + radius * Math.sin(rad);
                    
                    return (
                      <g key={index}>
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="25"
                          fill="white"
                          stroke="#0d9488"
                          strokeWidth="4"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => setHoveredPrinciple(index)}
                          onMouseLeave={() => setHoveredPrinciple(null)}
                          whileHover={{ scale: 1.3 }}
                        />
                        <text
                          x={x}
                          y={y}
                          fill="#14b8a6"
                          fontSize="22"
                          fontWeight="900"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{ pointerEvents: 'none' }}
                        >
                          {takeaway.title.charAt(0)}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center text */}
                  <text
                    x="400"
                    y="385"
                    fill="#0f172a"
                    fontSize="28"
                    fontWeight="900"
                    textAnchor="middle"
                  >
                    FRAMEWORK
                  </text>
                  <text
                    x="400"
                    y="420"
                    fill="#475569"
                    fontSize="18"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    5Ps + 10 Principles
                  </text>
                </svg>

                {/* Hover Tooltip for 5Ps */}
                <AnimatePresence>
                  {hoveredPrinciple !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-96 pointer-events-none z-50"
                    >
                      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-6 rounded-2xl shadow-2xl border-4 border-white">
                        <h4 className="text-2xl font-black mb-2">{keyTakeaways[hoveredPrinciple].title}</h4>
                        <p className="text-sm text-teal-50 leading-relaxed">
                          {keyTakeaways[hoveredPrinciple].description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Tooltip for Chapters */}
                <AnimatePresence>
                  {hoveredChapter !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-96 pointer-events-none z-50"
                    >
                      <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-2xl shadow-2xl border-4 border-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="size-10 rounded-full bg-white/20 flex items-center justify-center font-black text-lg">
                            {hoveredChapter + 1}
                          </div>
                          <h4 className="text-xl font-black">Chapter {hoveredChapter + 1}</h4>
                        </div>
                        <p className="text-amber-50 leading-relaxed font-semibold">
                          {principles[hoveredChapter]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Legend */}
              <div className="mt-20 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 }}
                  className="flex items-center gap-4"
                >
                  <div className="size-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-stone-800">5 Core Principles (5Ps)</h4>
                    <p className="text-stone-600 text-sm">Passion • Purpose • Provision • Practice • Paradigm</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="size-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">10</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-stone-800">10 Chapters</h4>
                    <p className="text-stone-600 text-sm">Global Impact Leadership Framework principles</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-gradient-to-br from-[#09090b] to-teal-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black text-white mb-20 text-center tracking-tighter"
          >
            Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-stone-100 to-amber-50 border-4 border-teal-600 p-8 shadow-2xl hover:shadow-teal-500/50 transition-all"
                  style={{
                    clipPath: index === 1
                      ? 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
                      : 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)',
                  }}
                >
                  <div className="size-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
                    <Quote className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#09090b] mb-4">
                    {testimonial.quote}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {testimonial.author}
                    <br />
                    <span className="text-sm text-stone-500">{testimonial.title}</span>
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Features - poster-style design, no image; clickable boxes at bottom */}
      <section className="py-32 bg-gradient-to-b from-stone-50 via-amber-50/70 to-sky-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-[#09090b] mb-16 text-center tracking-tighter"
          >
            Media Features
          </motion.h2>

          <p className="max-w-3xl mx-auto text-center text-stone-700 mb-14 text-lg">
            Featured guest on top podcasts, seminars, and TV — sharing global insights on{" "}
            <span className="font-semibold text-amber-700">Provocateurs, Not Philanthropists</span>.
          </p>

          {/* Poster-style card (design only, no image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="media-features-container max-w-5xl mx-auto rounded-3xl shadow-2xl border border-stone-200 bg-white overflow-hidden"
          >
            {/* Top: curved teal accent + section title for whole design */}
            <div className="h-32 bg-gradient-to-br from-teal-400/90 via-teal-300/80 to-cyan-300/70 relative flex items-center justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2" />
              <h3 className="relative z-10 text-2xl lg:text-3xl font-black text-black drop-shadow-md">Featured episodes</h3>
            </div>

            {/* Podcast player visual: bar + waveform, vinyl overlapping right edge */}
            <div className="px-8 lg:px-12 -mt-6 relative py-8">
              <div className="relative rounded-2xl border border-stone-200 bg-stone-50 p-6 pr-44 lg:pr-52">
                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    height: 18,
                    backgroundColor: '#d6d3d1',
                    borderRadius: 9999,
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '28%',
                      backgroundColor: '#f59e0b',
                      borderRadius: 9999,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      left: '28%',
                      width: 12,
                      height: 20,
                      backgroundColor: '#292524',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      zIndex: 10,
                    }}
                  />
                </div>
                {/* Sound waves — many bars so length matches duration bar, centered waveform, black, with occasional near-silence drops */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    height: 64,
                    width: '100%',
                    marginTop: 24,
                  }}
                >
                  {(() => {
                    // Generate more amplitude values so waveform spans full width (wave-like pattern)
                    const base = [35, 58, 42, 72, 48, 65, 38, 78, 52, 68, 45, 82, 55, 70, 40, 75, 50, 88, 60, 72, 44, 80, 54];
                    const count = 110;
                    const amplitudes = Array.from({ length: count }, (_, i) => {
                      const t = i / (count - 1);
                      const idx = Math.floor(t * (base.length - 1));
                      const a = base[idx];
                      const next = base[Math.min(idx + 1, base.length - 1)];
                      const blend = (t * (base.length - 1)) % 1;
                      let value = Math.round(a + (next - a) * blend);

                      // Create stretches of very low \"background\" dB and stretches of normal speaking dB
                      // Example pattern: quiet 0–14, normal 15–39, quiet 40–54, normal 55–84, quiet 85–99
                      const quiet =
                        i < 15 ||
                        (i >= 40 && i < 55) ||
                        i >= 85;

                      if (quiet) {
                        // Drop to ~5 dB equivalent (very small bars)
                        value = 5;
                      }

                      return value;
                    });
                    return amplitudes.map((h, i) => {
                      const amplitude = (h / 100) * 28;
                      const barHeight = Math.max(2, amplitude * 2);
                      return (
                        <div
                          key={i}
                          style={{
                            width: 4,
                            height: barHeight,
                            minHeight: 2,
                            backgroundColor: '#1c1917',
                            borderRadius: 2,
                            flexShrink: 0,
                          }}
                        />
                      );
                    });
                  })()}
                </div>

                {/* Vinyl — absolute right edge, center aligned with progress bar (slightly up) */}
                <div className="absolute right-4 top-0 -translate-y-1/2 z-20">
                  <motion.div
                    className="relative rounded-full shadow-2xl"
                    style={{
                      width: 160,
                      height: 160,
                      background: 'radial-gradient(circle at 30% 30%, #44403c, #1c1917 40%, #0c0a09)',
                      boxShadow: 'inset 0 0 0 2px #292524, 0 8px 24px rgba(0,0,0,0.3)',
                    }}
                    whileInView={{ rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div style={{ position: 'absolute', inset: '28%', borderRadius: '50%', background: '#fffbeb', border: '2px solid #fde68a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#292524' }} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom: clickable featured boxes */}
            <div className="px-6 lg:px-8 pt-4 lg:pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4 text-center">
                Watch or listen — click to open
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mediaFeatures.map((item, index) => (
                  <motion.a
                    key={item.title + item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 py-3 px-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-teal-400 hover:bg-teal-50/50 shadow-sm hover:shadow transition-all group text-left"
                  >
                    <ExternalLink className="size-4 shrink-0 text-stone-400 group-hover:text-teal-600 transition-colors" />
                    <span className="text-sm font-medium text-stone-700 group-hover:text-teal-800 transition-colors line-clamp-2">
                      {item.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section
        id="additional-resources"
        className="py-40 bg-[#DCB69A] relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black text-[#09090b] mb-20 text-center tracking-tighter"
          >
            Additional Resources
          </motion.h2>

          {/* Articles & White Papers - two cards like testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-full bg-gradient-to-br from-stone-100 to-amber-50 border-4 border-teal-600 p-8 shadow-2xl hover:shadow-teal-500/50 transition-all"
            >
              <div className="size-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
                <FileText className="size-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#09090b] mb-2">Articles & White Papers</h3>
              <p className="text-stone-600 text-sm mb-6">Strategy, Change, Impact & Leadership — curated for you.</p>
              <h4 className="text-lg font-bold text-teal-700 mb-3">Strategy & Change</h4>
              <ul className="space-y-2 mb-6">
                {strategyChangeArticles.map((item, i) => (
                  <li key={i} className="min-h-9 flex items-start">
                    {item.url.includes('maidenmfrank.com') ? (
                      <div className="text-stone-700 text-sm flex items-start gap-2 py-1">
                        <ExternalLink aria-hidden="true" className="size-3.5 mt-0.5 shrink-0 invisible" />
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-700 hover:text-teal-600 transition-colors flex items-start gap-2 group text-sm py-1"
                      >
                        <ExternalLink className="size-3.5 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-teal-600" />
                        <span className="group-hover:underline">{item.title}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-bold text-teal-700 mb-3">Impact & Leadership</h4>
              <ul className="space-y-2">
                {impactLeadershipArticles.map((item, i) => (
                  <li key={i} className="min-h-9 flex items-start">
                    {item.url.includes('maidenmfrank.com') ? (
                      <div className="text-stone-700 text-sm flex items-start gap-2 py-1">
                        <ExternalLink aria-hidden="true" className="size-3.5 mt-0.5 shrink-0 invisible" />
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-700 hover:text-teal-600 transition-colors flex items-start gap-2 group text-sm py-1"
                      >
                        <ExternalLink className="size-3.5 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-teal-600" />
                        <span className="group-hover:underline">{item.title}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Frank Insights Blog - same card style */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full bg-gradient-to-br from-stone-100 to-amber-50 border-4 border-teal-600 p-8 shadow-2xl hover:shadow-teal-500/50 transition-all"
            >
              <div className="size-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="size-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#09090b] mb-2">The Frank Insights Blog</h3>
              <p className="text-stone-600 mb-2">
                A weekly dose of pithy insights, reflections, and meditations on the business of doing good.
              </p>
              <p className="text-stone-500 text-sm mb-4">
                Recent examples from Maiden Frank&apos;s Impact Insights blog include:
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {frankInsightsExamples.map((name, i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 bg-amber-100 border border-amber-300 text-stone-700 text-sm font-medium"
                    style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div className="space-y-4 mb-6 text-sm text-stone-700">
                <div>
                  <h4 className="font-semibold text-[#09090b] mb-1">Circularity</h4>
                  <p>
                    A short reflection on how ideas, resources, and relationships move in cycles — and how leaders can
                    design impact work that returns value to communities instead of extracting from them.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#09090b] mb-1">Laugh at Rejections</h4>
                  <p>
                    A story-driven piece about reframing &quot;no&quot; as information, not a verdict — and using humor
                    and curiosity to stay in motion when doors close.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#09090b] mb-1">Help Yourself</h4>
                  <p>
                    A meditation on boundaries, self-trust, and why provocateurs must first design sustainable practices
                    for themselves if they want to sustain impact for others.
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-teal-600 text-teal-800 hover:bg-teal-50 transition-colors"
                >
                  <BookOpen className="size-4" />
                  Read sample Frank Insights posts
                </Link>
              </div>
              <h4 className="text-lg font-bold text-[#09090b] mb-3">Get the weekly blog in your inbox</h4>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3" aria-label="Frank Insights subscription coming soon">
                <input
                  type="email"
                  placeholder="Your email"
                  disabled
                  aria-disabled="true"
                  className="w-full px-4 py-3 bg-white border-2 border-stone-200 text-[#09090b] placeholder:text-stone-400"
                  style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)', opacity: 0.6, cursor: 'not-allowed' }}
                />
                <motion.button
                  type="submit"
                  disabled
                  aria-disabled="true"
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black shadow-lg"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)', opacity: 0.6, cursor: 'not-allowed' }}
                >
                  Subscribe
                </motion.button>
                <p className="text-center text-sm font-semibold text-teal-800">Coming soon</p>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-stone-800 via-amber-800 to-stone-900 relative overflow-hidden">
        {/* Earthy texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="size-12 text-amber-400 fill-amber-400 mx-auto mb-6" />
            
            <h3 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6 tracking-tighter leading-[0.9]">
              Start Your Journey
            </h3>
            
            <p className="text-2xl text-amber-100/80 mb-12 max-w-2xl mx-auto">
              Download the first chapter free and discover why provocateurs, not philanthropists, create lasting global impact
            </p>
            
            <Link to="/contact">
              <motion.div 
                className="px-12 py-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black text-xl hover:scale-110 transition-all shadow-2xl inline-block"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Free Chapter
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
