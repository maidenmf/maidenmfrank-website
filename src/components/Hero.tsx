import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';

export function Hero() {
  const ref = useRef(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Rotating words effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useEndOverlay, setUseEndOverlay] = useState(false);
  const rotatingWords = ['to Lead', 'to Grow', 'to Inspire', 'for Good'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // Stop at the last word "for Good"
        if (prev < rotatingWords.length - 1) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 2500);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const syncOverlayToVideo = () => {
      const currentTime = heroVideoRef.current?.currentTime ?? 0;
      setUseEndOverlay((previous) => {
        const next = currentTime >= 4.05;
        return previous === next ? previous : next;
      });
      animationFrameId = requestAnimationFrame(syncOverlayToVideo);
    };

    animationFrameId = requestAnimationFrame(syncOverlayToVideo);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#DCB69A]">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <video
          ref={heroVideoRef}
          src="/videos/hero-video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80 transition-opacity duration-700 ease-in-out ${useEndOverlay ? 'opacity-0' : 'opacity-100'}`}
        />
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ease-in-out ${useEndOverlay ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCB69A]/50 via-[#DCB69A]/20 to-[#DCB69A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#DCB69A]/70 via-transparent to-transparent" />
        
        {/* Abstract floating shapes - peaceful ocean/sky blues with creamy browns */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(220, 182, 154, 0.4) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(125, 211, 252, 0.35) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
            filter: 'blur(95px)',
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 left-1/3 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(186, 230, 253, 0.25) 0%, transparent 70%)',
            filter: 'blur(85px)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content Overlay with Parallax */}
      <motion.div 
        className="relative h-full flex items-center z-10 w-full"
        style={{ opacity }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-32">
          {/* Scattered layout instead of stacked */}
          <div className="relative min-h-[600px]">
            {/* Label - positioned absolutely top left */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 z-20"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-sky-300 fill-sky-300" />
                <div
                  className="px-4 py-2 rounded-full border border-sky-200/50 backdrop-blur-md bg-black/25 text-sky-50 text-sm font-medium"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                >
                  Author · Speaker · Changemaker
                </div>
              </div>
            </motion.div>

            {/* Main title - with rotating words */}
            <div className="absolute top-32 left-0 right-0">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight"
              >
                <div className="flex flex-col gap-4">
                  {/* Static "Provoke" */}
                  <span
                    className="text-white"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.35)' }}
                  >
                    Provoke
                  </span>
                  
                  {/* Rotating words with AnimatePresence */}
                  <div className="relative h-[1.2em] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#5eead4]"
                        style={{
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 3px 4px rgba(0, 0, 0, 0.55))',
                        }}
                      >
                        {rotatingWords[currentIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.h1>
            </div>
            
            {/* Description - positioned diagonally opposite */}
            <motion.p 
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[400px] right-0 max-w-xl text-lg lg:text-xl text-sky-50/95 leading-relaxed italic border-l-4 border-sky-300 pl-6 bg-black/25 backdrop-blur-sm p-6 rounded-2xl"
              style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.45)' }}
            >
              Challenging changemakers to lead with purpose, innovation, and excellence. Author of <em>Provocateurs Not Philanthropists</em>.
            </motion.p>

            {/* CTAs - positioned at bottom left, staggered */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute top-[540px] left-0 flex flex-col gap-4"
            >
              <Link to="/speaking">
                <motion.div 
                  whileHover={{ x: 20, rotate: 2 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] text-white font-semibold rounded-full shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-sky-300/50 transition-all flex items-center gap-2 group w-fit"
                >
                  <span>Book a Speaking Engagement</span>
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div 
                  whileHover={{ x: 40, rotate: -2 }}
                  className="px-8 py-4 bg-black/20 backdrop-blur-md text-sky-50 font-semibold rounded-full border-2 border-sky-200/60 shadow-lg shadow-black/20 hover:bg-[#e8d5b7]/30 hover:border-sky-200/70 transition-all flex items-center gap-2 w-fit ml-16"
                >
                  <Calendar className="size-5" />
                  <span>Schedule Coaching</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <div
            className="text-sky-200/90 text-sm font-medium"
            style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.45)' }}
          >
            Scroll
          </div>
          <svg
            className="w-6 h-10 text-sky-200/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
