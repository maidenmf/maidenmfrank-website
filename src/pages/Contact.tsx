import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Clock, CheckCircle, Mic, BookOpen, Users, MessageCircle, Calendar, Sparkles, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import professionalHeadshot from 'figma:asset/35264ab2aa2e621f0e2b2daf040f944ac88cd26e.png';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();
    formData.forEach((value, key) => encodedData.append(key, String(value)));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error('Unable to submit contact form:', error);
      setSubmitError('Your message could not be sent. Please try again or email maiden@globalstakesconsulting.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maiden@globalstakesconsulting.com',
      href: 'mailto:maiden@globalstakesconsulting.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Central Alberta, Canada with remote global capability',
      href: null
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/MaidenManzanalFrank' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mai_denfrank/' },
    { icon: ExternalLink, label: 'Substack', href: 'https://beaprovocateur.substack.com' },
  ];

  // Calendar scheduling link (Calendly)
  const calendarUrl = 'https://calendly.com/globalstakesconsulting/15min';

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-32 relative overflow-hidden">
      {/* Background graphic - soft orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-300/35 via-teal-300/25 to-cyan-300/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-300/15 to-amber-500/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 border-2 border-teal-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 border-2 border-amber-400/25 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-[120px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 text-center">
                  <span className="block">Provoke</span>
                  <span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"
                    style={{ transform: 'skewY(-4deg)' }}
                  >
                    <span className="block text-center">to</span>
                    <span className="block text-center">Connect</span>
                  </span>
                </h1>
                <div className="h-2 w-32 lg:w-40 mb-6 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-[0_0_30px_rgba(251,191,36,0.6)]" />
                <p className="text-xl lg:text-2xl text-slate-700 max-w-2xl">
                  Let&apos;s connect — whether it&apos;s a speaking engagement, a strategic partnership, coaching, or a free book sample. I&apos;d love to explore how we can work together.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="contact-hero-image-card relative w-72 sm:w-80 rounded-3xl overflow-hidden shadow-2xl border border-amber-100 bg-amber-50">
                  <img
                    src={professionalHeadshot}
                    alt="Maiden Manzanal-Frank"
                    className="w-full h-auto object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-sm font-semibold text-amber-200">Community Builder</div>
                    <div className="text-xs text-amber-100/80">Rotary Peace Fellow · GlobalStakes Consulting</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spacer below hero */}
          <div className="h-4" />
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="relative py-16 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Connect - Left Side - coloured card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                <h2 className="text-3xl font-black text-slate-900 mb-2">
                  Connect
                </h2>
                <p className="text-sm text-slate-600">
                  Choose the way that works best for you — email, location, or social. I&apos;ll respond personally.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white border border-slate-200 p-6 rounded-2xl min-w-0 shadow-sm hover:shadow-md hover:border-teal-300 transition-all"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="size-12 bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0 rounded-xl shadow-sm">
                          <Icon className="size-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-800 font-semibold hover:text-teal-700 transition-colors whitespace-normal md:whitespace-nowrap"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-slate-800 font-semibold break-words">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social media */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 mt-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-3">Connect on social</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Follow along for quick insights, announcements, and behind-the-scenes reflections.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:text-teal-700 hover:border-teal-300 hover:bg-white transition-all text-sm font-semibold"
                      >
                        <Icon className="size-4" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl bg-white border border-slate-200 p-8 lg:p-12 shadow-md">
                <h2 className="text-3xl font-black text-slate-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-slate-600 mb-8">
                  Share a bit about what you&apos;re working on and how you&apos;d like to collaborate.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="size-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-400/40">
                      <CheckCircle className="size-10 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form name="contact-inquiry" method="POST" onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="form-name" value="contact-inquiry" />
                    <div className="absolute h-px w-px overflow-hidden whitespace-nowrap" aria-hidden="true">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:
                        <input name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Reason to connect *
                        </label>
                        <select
                          name="reason"
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all rounded-lg"
                        >
                          <option value="" className="bg-[#09090b]">Select a reason to connect</option>
                          <option value="speaking" className="bg-[#09090b]">Speaking & Keynote</option>
                          <option value="coaching" className="bg-[#09090b]">Coaching & Advisory</option>
                          <option value="book-sample" className="bg-[#09090b]">Book Sample / Free Chapter</option>
                          <option value="strategy" className="bg-[#09090b]">Strategy & Change Support</option>
                          <option value="partnership" className="bg-[#09090b]">Partnerships & Collaborations</option>
                          <option value="workshop" className="bg-[#09090b]">Workshop & Facilitation</option>
                          <option value="podcast" className="bg-[#09090b]">Podcast / Media</option>
                          <option value="discovery-call" className="bg-[#09090b]">Schedule a Discovery Call</option>
                          <option value="other" className="bg-[#09090b]">General Questions / Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your needs and how I can help..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all resize-none rounded-lg"
                      />
                    </div>

                    {submitError && (
                      <p role="alert" className="text-sm text-red-700 text-center">
                        {submitError}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-black text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-teal-500/40 transition-all rounded-xl"
                    >
                      <Send className="size-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    <p className="text-sm text-slate-500 text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section id="free-resources" className="relative py-20 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-black mb-12 text-center"
          >
            Free Resources
          </motion.h2>

          {/* The Frank Insights Blog sign-up - Free Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-slate-800/80 to-cyan-900/30 p-10 lg:p-14 border-2 border-cyan-400/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-200 text-sm font-semibold mb-6">
                  <BookOpen className="size-4" />
                  The Frank Insights
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Get the weekly blog in your inbox
                </h3>
                <p className="text-cyan-100/90 text-lg mb-2">
                  A weekly dose of pithy insights, reflections, and meditations on the business of doing good.
                </p>
                <p className="text-cyan-200/80 text-sm">
                  No spam. Just one weekly dose of clarity.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5" aria-label="Frank Insights subscription coming soon">
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">Email *</label>
                    <input
                      type="email"
                      disabled
                      aria-disabled="true"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 text-white placeholder:text-white/50 rounded-lg"
                      style={{ opacity: 0.6, cursor: 'not-allowed' }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled
                    aria-disabled="true"
                    className="w-full py-4 bg-cyan-500 text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg"
                    style={{ opacity: 0.6, cursor: 'not-allowed' }}
                  >
                    <Mail className="size-5" />
                    Subscribe to weekly blog
                  </motion.button>
                  <p className="text-center text-sm font-semibold text-cyan-100/90">Coming soon</p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Section - amber/gold CTA */}
      <section className="relative py-20 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 backdrop-blur-sm border-2 border-amber-400/40 p-12 text-center shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Prefer to Schedule a Call?
              </h3>
              <p className="text-amber-100/90 mb-8 max-w-2xl mx-auto">
                Book a complimentary 30-minute discovery call to discuss how we can work together
              </p>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-amber-900 font-black text-lg hover:shadow-xl transition-all inline-flex items-center gap-3 shadow-lg rounded-xl"
                >
                  <Clock className="size-5" />
                  Schedule Discovery Call
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
