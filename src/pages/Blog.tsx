import React from 'react';
import { motion } from 'motion/react';
import { Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const feb2026Posts = [
  {
    slug: 'disconnect',
    title: 'Disconnect',
    date: 'February 17, 2026',
    body:
      "I have this rule that I keep to myself: if people are not honest with themselves, they're also not honest with others. You can't fake honesty. You can't fake the courage to be self‑aware — either you have it or you don't.\n\nThe courage to address the issues that are eating away at one's effectiveness is rare. Word salad and long lists of accomplishments don't reveal the real person. They can be façades that cover deep insecurities and fears.\n\nA grown man can have the self‑esteem of an amoeba. A kid can have the self‑confidence to kill giants, à la David. It's never in the exterior; it's always from within. Real power and self‑worth come from the core of the person.\n\nIf you don't have the self‑esteem necessary to enjoy your success, you'll keep undermining that success and shrinking your power to the point of disrespect. Then you don't really have success, at least not in the full sense of the word.\n\nAgain: you can't fake courage if you don't have it. Decide now to be self‑aware, confront your issues, and grow up quickly. Fortunately, the world is not waiting for anyone.",
  },
  {
    slug: 'circularity',
    title: 'Circularity',
    date: 'February 10, 2026',
    body:
      "I hate people who keep on talking in circles, using a lot of word salad but conveying nothing of substance.\n\nThey evade answering questions, gaslight, and hurl accusations indirectly. Recently I had an encounter with someone who speaks well but has no depth. The fact that he's still talking to me is mainly a matter of curiosity — or wanting to get a freebie. I'm not sure which.\n\nWhat I'm certain of is that I don't have the patience for it.",
  },
  {
    slug: 'dreamland',
    title: 'Dreamland',
    date: 'February 2, 2026',
    body:
      "I attended an AGM of a local non‑profit organization a few weeks ago. Just hearing what the leaders said about their plans — compared to their current capacity and willingness to execute — was contradictory.\n\nWithin a few minutes I understood that they don't want to stretch themselves enough to achieve their aims. Things like:\n\n\"That's business. I just want to run programs.\"\n\"I was asking the Mayor to just give us a building and we can revitalize the whole neighborhood.\"\n\nAnother round of wishful thinking.\n\nAsked what they can do to mitigate the risks of competing for funds with other organizations, the answer was: \"We are above board. That was why we rushed to get a charity status.\"\n\nIf I were the funder or the government, I would think twice before investing in this organization. Their head is in the clouds. It's time to either do what you promise your community or abandon the dreams for a lesser but more realistic progress.\n\nJust my two‑cents perspective. You can't promise for five years and not deliver.",
  },
];

const jan2026Posts = [
  {
    slug: 'no-savior',
    title: 'No Savior',
    date: 'January 20, 2026',
    body:
      "Over the past few years, I've realized that I can help a lot of organizations — but it always comes back to ethics and integrity.\n\nWhy am I helping?\n- Am I helping because I just want to prove that I can?\n- Am I helping because I want something back?\n- Am I helping because I'm being pressured to help?\n- Am I helping because I want them to like or need me?\n\nThese are not the right reasons to help an organization or an individual.\n\nI will not be pressured to help just because I was asked, or because I think they need saving. The savior mentality is never good and often creates greater harm. And if they don't want to be helped, I get out of the way.\n\nUltimately, if my inner wisdom tells me I shouldn't be involved at all, I listen. That's wisdom in helping.\n\nDid this help you? Time to brew my coffee and write…",
  },
  {
    slug: 'laugh-at-rejections',
    title: 'Laugh at Rejections',
    date: 'January 13, 2026',
    body:
      "My first book was rejected 60 times by publishers and agents. Guess what — it's been selling consistently for the past few years.\n\nI've been rejected in previous job searches more than 25 times. Guess what — I landed the best job a new immigrant in Canada, two months shy, could ever dream of.\n\nMy consulting proposals were rejected a few times. Guess what — I'm still here, giving value and offering my best insights.\n\nI've been rejected with my speaking proposals. Guess what — I get asked and paid to speak all over the world.\n\nI'm a key person of influence, and I self‑authorized myself to be. Case closed.\n\nYou can't rely on one rejection as a barometer that you're no good. Some work is accepted or rejected on very subjective grounds — how much sleep the evaluator had that day, or how much you look like their best friend.\n\nBeauty is in the eye of the beholder. Find the person who will appreciate that beauty in you, your work, and your ideas.\n\nOkay, now it's really case closed.",
  },
  {
    slug: 'the-broken-mirror',
    title: 'The Broken Mirror',
    date: 'January 8, 2026',
    body:
      "When was the last time you saw yourself in a broken mirror?\n\nWe have a broken mirror at home. Instinctively, I would just drop it in the landfill. But my husband thought there was still a use for it.\n\nI later realized that even broken mirrors can be useful.\n\nWe are all broken people. We live in a broken world. Only God can redeem us from our brokenness.\n\nBeyond the broken pieces lies a new purpose and new usefulness that we haven’t explored before. If we look closely, we'll see that all the broken people and things shouldn't be given up on so easily.\n\nWe give up easily. As a society, that's our bane.\n\nI'm not a handy person, but I can tell that this mirror will hold more stories, more elegantly, than the other mirrors in our house once it’s repurposed. I'm up to the challenge of recreating it for something else. I bet the “artist” in my family will find it interesting.\n\nAren't we all interesting with our ugliness, mistakes, failures, and repeated falls? Look at the mirror and you'll know what I mean.",
  },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-emerald-50 to-amber-50 text-slate-900">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-teal-300/25 to-cyan-300/15 blur-3xl"
            animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-amber-300/25 to-rose-300/20 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Hero / intro with logo */}
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm"
            >
              <img
                src="/frank-insights-logo.png"
                alt="Frank Insights logo"
                className="w-full max-w-xs lg:max-w-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 max-w-2xl"
            >
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-4">
                Frank Insights Blog
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-6 text-slate-900">
                Meditations on the business of doing good.
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 mb-8">
                Short, practical reflections for provocateurs who want to turn good intentions into measurable impact —
                without losing their humanity, joy, or sense of humor along the way.
              </p>
            </motion.div>
          </div>

          {/* Subscribe strip (James Clear–style top signup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 mb-16 rounded-2xl border border-emerald-500/30 bg-white/90 px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-4 shadow-lg"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Mail className="size-4 text-emerald-600" />
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                  Get Frank Insights in your inbox
                </p>
              </div>
              <p className="text-sm text-slate-700">
                A weekly dose of pithy insights, reflections, and meditations on the business of doing good.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3" aria-label="Frank Insights subscription coming soon">
                <input
                  type="email"
                  disabled
                  aria-disabled="true"
                  placeholder="you@example.com"
                  className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 flex-1 min-w-0"
                  style={{ opacity: 0.6, cursor: 'not-allowed' }}
                />
                <button
                  type="submit"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-emerald-500 text-white text-sm font-bold whitespace-nowrap"
                  style={{ opacity: 0.6, cursor: 'not-allowed' }}
                >
                  Subscribe
                </button>
                <span className="self-center text-sm font-semibold text-emerald-700 whitespace-nowrap">Coming soon</span>
              </form>
            </div>
          </motion.div>

          {/* February 2026 posts */}
          <div className="mb-10 mt-4">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">February 2026</h2>
            <div className="space-y-4">
              {feb2026Posts.map((post) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-slate-200 rounded-xl px-5 py-4 bg-white/95 hover:border-emerald-400/60 transition-colors shadow-sm"
                >
                  <header className="mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{post.title}</h3>
                    <p className="text-xs text-slate-500">{post.date}</p>
                  </header>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{post.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* January 2026 posts */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">January 2026</h2>
            <div className="space-y-4">
              {jan2026Posts.map((post) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-slate-200 rounded-xl px-5 py-4 bg-white/95 hover:border-emerald-400/60 transition-colors shadow-sm"
                >
                  <header className="mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{post.title}</h3>
                    <p className="text-xs text-slate-500">{post.date}</p>
                  </header>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{post.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 text-sm text-slate-600">
            <p>
              These posts are a preview of the tone and topics of the Frank Insights newsletter. For now, new essays will
              be sent first by email. You can also discover how the ideas connect to the book on the{' '}
              <Link to="/books" className="underline text-emerald-700 hover:text-emerald-500">
                Proven Frameworks
              </Link>{' '}
              page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

