import React, { useEffect, useState, type ReactNode } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  BellAlertIcon,
  BookmarkIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  PlayCircleIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Tos from "./pages/Tos";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpStaggerParent = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
  initial: { opacity: 0 },
};

const fadeUpStaggerChild = {
  initial: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

type IconKind =
  | "scripture"
  | "video"
  | "rhythm"
  | "bookmark"
  | "clock"
  | "palette"
  | "bell"
  | "quote"
  | "person";

type Feature = {
  title: string;
  body: string;
  icon: IconKind;
};

type Highlight = {
  title: string;
  body: string;
  icon: IconKind;
};

type Character = {
  name: string;
  role: string;
  verseHint: string;
  image: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Scripture at the center",
    body: "Each encounter begins with a single passage from the KJV—presented clearly, without clutter or competing elements.",
    icon: "scripture",
  },
  {
    title: "A short, guided video",
    body: "A calm, under‑one‑minute reflection from an avatar that keeps your attention on the verse, not the interface.",
    icon: "video",
  },
  {
    title: "A daily, gentle rhythm",
    body: "One encounter each day. No feed to refresh, no infinite queue—just a quiet moment to return to.",
    icon: "rhythm",
  },
  {
    title: "Save what lingers",
    body: "Mark verses and encounters that stay with you so you can revisit them in unhurried moments.",
    icon: "bookmark",
  },
];

const secondaryHighlights: Highlight[] = [
  {
    title: "Morning-first design",
    body: "Built around the start of the day, when attention is fresh and you need something steady, not stimulating.",
    icon: "clock",
  },
  {
    title: "Reverent, modern aesthetic",
    body: "A black‑and‑white palette, quiet typography, and gentle motion that never pulls focus away from Scripture.",
    icon: "palette",
  },
  {
    title: "Thoughtful notifications",
    body: "A single reminder at your chosen time—nothing more. Epistle is here to serve your rhythm, not interrupt it.",
    icon: "bell",
  },
];

const characters: Character[] = [
  {
    name: "Daniel",
    role: "Exiled prophet",
    verseHint:
      "Faithfulness in Babylon, visions in the night, and steadfast prayer toward Jerusalem.",
    image: "/characters/Daniel.png",
  },
  {
    name: "David",
    role: "Shepherd king",
    verseHint: "Psalms of trust, confession, and praise in the night watches.",
    image: "/characters/David.png",
  },
  {
    name: "Isaiah",
    role: "Prophet",
    verseHint: "Visions of holiness and comfort for weary people.",
    image: "/characters/Isaiah.png",
  },
  {
    name: "Jeremiah",
    role: "Weeping prophet",
    verseHint:
      "Words for the brokenhearted and the remnant learning to hope again.",
    image: "/characters/Jeremiah.png",
  },
  {
    name: "John",
    role: "Beloved disciple",
    verseHint: "Witness of the Word made flesh and the One who is love.",
    image: "/characters/John.png",
  },
  {
    name: "Moses",
    role: "Servant of the Lord",
    verseHint:
      "Stories of deliverance, wilderness faithfulness, and the God who goes before.",
    image: "/characters/Moses.png",
  },
  {
    name: "Paul",
    role: "Apostle",
    verseHint:
      "Letters of encouragement, correction, and life hidden with Christ in God.",
    image: "/characters/Paul.png",
  },
  {
    name: "Peter",
    role: "Apostle",
    verseHint:
      "From denial to restoration, strengthened to strengthen his brothers.",
    image: "/characters/Peter.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Elena",
    role: "Evening commuter",
    quote:
      "I used to close my day with endless scrolling. Epistle gives me one still moment with the Word instead.",
    initials: "E",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Thomas",
    role: "New parent",
    quote:
      "Most days I only have a few quiet minutes. The fact that Epistle is designed for that small window matters.",
    initials: "T",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Grace",
    role: "Longtime KJV reader",
    quote:
      "I appreciate that the app keeps the KJV text untouched and lets the reflection sit beside it, never above it.",
    initials: "G",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Joel",
    role: "Pastor",
    quote:
      "It feels like a call back to devotion, not another content stream. My congregants can step into it easily.",
    initials: "J",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces",
  },
];

function ShellSection({
  id,
  tone = "plain",
  children,
}: {
  id?: string;
  tone?: "plain" | "soft" | "raised";
  children: ReactNode;
}) {
  const base =
    "relative border-t border-white/10 transition-colors duration-200";
  const toneClass =
    tone === "raised"
      ? "bg-gradient-to-b from-black via-neutral-950 to-black"
      : tone === "soft"
      ? "bg-neutral-950/80"
      : "bg-black";

  return (
    <section id={id} className={`${base} ${toneClass}`}>
      {tone !== "plain" ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_65%)]" />
      ) : null}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 text-[11px] text-neutral-100">
      {children}
    </div>
  );
}

function FeatureIcon({ kind }: { kind: IconKind }) {
  let IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | null =
    null;

  if (kind === "scripture") IconComponent = BookOpenIcon;
  if (kind === "video") IconComponent = PlayCircleIcon;
  if (kind === "rhythm") IconComponent = Squares2X2Icon;
  if (kind === "bookmark") IconComponent = BookmarkIcon;
  if (kind === "clock") IconComponent = ClockIcon;
  if (kind === "palette") IconComponent = SparklesIcon;
  if (kind === "bell") IconComponent = BellAlertIcon;
  if (kind === "quote") IconComponent = ChatBubbleLeftRightIcon;
  if (kind === "person") IconComponent = UserIcon;

  if (!IconComponent) {
    return null;
  }

  return (
    <IconCircle>
      <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
    </IconCircle>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <a
      href="#cta"
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium tracking-wide !text-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {label}
    </a>
  );
}

function GhostButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium tracking-wide text-neutral-100 transition hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {label}
    </a>
  );
}

function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" as const };
  const viewTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" as const };

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveTestimonial((current) =>
        current + 1 >= testimonials.length ? 0 : current + 1,
      );
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
        {/* Hero */}
        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12)_0,_transparent_60%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-24">
            <motion.div
              className="max-w-xl space-y-6"
              variants={fadeUpStaggerParent}
              initial="initial"
              animate="visible"
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400"
                variants={fadeUpStaggerChild}
                transition={transition}
              >
                A quiet, daily liturgy
              </motion.p>
              <motion.h1
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
                variants={fadeUpStaggerChild}
                transition={transition}
              >
                A daily encounter with the Word.
              </motion.h1>
              <motion.p
                className="text-base leading-relaxed text-neutral-300"
                variants={fadeUpStaggerChild}
                transition={transition}
              >
                Epistle gives you one KJV passage and one short video encounter
                each day—delivered by a calm avatar, designed to help you end
                the day with Scripture, not with a feed.
              </motion.p>
              <motion.div
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
                variants={fadeUpStaggerChild}
                transition={transition}
              >
                <PrimaryButton label="Join Epistle" />
                <GhostButton label="See the rhythm" href="#rhythm" />
              </motion.div>
              <motion.p
                className="text-sm text-neutral-500"
                variants={fadeUpStaggerChild}
                transition={transition}
              >
                Built to encourage reflection, and meditation. No distractions.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex w-full justify-center lg:w-auto lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            >
              <div className="relative h-[546px] w-[338px] sm:w-[364px] overflow-visible">
                <motion.img
                  src="/simulator-1.png"
                  alt="Epistle app encounter screen"
                  className="absolute bottom-0 left-1/2 h-full w-auto max-h-[546px] max-w-[338px] -translate-x-1/2 scale-110 object-contain object-bottom drop-shadow-2xl"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { y: [0, -6, 0] }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                  }
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <ShellSection id="features" tone="raised">
          <motion.div
            className="space-y-4"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
              The product
            </p>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A small app with a clear center.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
                Epistle is designed around a single daily encounter: verse,
                reflection, and a quiet place to return to what has spoken to
                you.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={fadeUpStaggerParent}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...viewTransition, staggerChildren: 0.07, delayChildren: 0.1 }}
          >
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUpStaggerChild}
                transition={viewTransition}
                className="flex flex-col gap-3 rounded-2xl border border-white/12 bg-neutral-950/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.9)] hover:border-white/20"
              >
                <FeatureIcon kind={feature.icon} />
                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {feature.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </ShellSection>

        {/* Rhythm / How it works */}
        <ShellSection id="rhythm" tone="soft">
          <motion.div
            className="grid gap-10 lg:grid-cols-2 lg:items-start"
            variants={fadeUpStaggerParent}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...viewTransition, staggerChildren: 0.08, delayChildren: 0 }}
          >
            <motion.div className="space-y-4" variants={fadeUpStaggerChild} transition={viewTransition}>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
                How it works
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Three steps, once a day.
              </h2>
              <p className="text-base leading-relaxed text-neutral-300">
                Epistle is intentionally small. You open the app, receive the
                encounter, and then you are done. No looping, no infinite scroll.
              </p>
              <ul className="mt-4 space-y-4 text-base text-neutral-200">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-medium text-black">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-white">Open Epistle.</p>
                    <p className="text-base text-neutral-300">
                      At your chosen time—a quiet trigger to turn toward the
                      Word instead of the feed.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-medium text-black">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      Receive today&apos;s verse and encounter.
                    </p>
                    <p className="text-base text-neutral-300">
                      A KJV passage appears with a brief, avatar‑led reflection
                      that stays under a minute.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-medium text-black">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      Reflect, save, and share if you wish.
                    </p>
                    <p className="text-base text-neutral-300">
                      Sit with the verse, mark it as a favorite, or quietly send
                      it to someone who might need it.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="pt-2 text-base text-neutral-500">
                Optimized for morning devotions and starting the day with Scripture.
              </p>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeUpStaggerChild} transition={viewTransition}>
              <h3 className="text-base font-semibold text-white">
                A rhythm that fits ordinary days.
              </h3>
              <div className="grid gap-4">
                {secondaryHighlights.map((item) => (
                  <motion.article
                    key={item.title}
                    variants={fadeUpStaggerChild}
                    transition={viewTransition}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-950/90 p-4"
                  >
                    <FeatureIcon kind={item.icon} />
                    <div>
                      <p className="text-base font-medium text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-neutral-300">
                        {item.body}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </ShellSection>

        {/* Encounter preview */}
        <ShellSection id="preview" tone="raised">
          <motion.div
            className="space-y-4"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
              Preview
            </p>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Watch a sample encounter.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
                This short preview shows how an Epistle encounter pairs a KJV
                passage with a calm, guided reflection from one of the
                witnesses—in this case, Paul on Romans 8:28.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-4 flex justify-center"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={viewTransition}
          >
            <div className="w-full max-w-3xl rounded-3xl border border-white/15 bg-neutral-950/90 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black">
                <video
                  className="h-full w-full object-cover"
                  src="/video/Paul%20Ro%208_28_1080p.mp4"
                  controls
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3 text-[11px] text-neutral-200">
                  Romans 8:28 (KJV) · Encounter preview featuring Paul
                </div>
              </div>
            </div>
          </motion.div>
        </ShellSection>

        {/* Characters / Witnesses */}
        <ShellSection id="witnesses" tone="raised">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
                The witnesses
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Encounters framed by those who walked before you.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-neutral-300">
                Epistle introduces you to a small gallery of Scriptural
                witnesses—Daniel, David, Isaiah, John, and others—each
                accompanying you into a passage while keeping Christ and His
                Word at the center.
              </p>
            </div>
            <div className="hidden text-sm text-neutral-500 lg:block">
              Prophets. Apostles. Witnesses
            </div>
          </motion.div>
          <motion.div
            className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={fadeUpStaggerParent}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ ...viewTransition, staggerChildren: 0.07, delayChildren: 0.1 }}
          >
            {characters.map((character) => (
              <motion.article
                key={character.name}
                variants={fadeUpStaggerChild}
                transition={viewTransition}
                className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-neutral-950/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_22px_60px_rgba(0,0,0,0.9)]"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full bg-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.85)]">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {character.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      {character.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {character.verseHint}
                </p>
              </motion.article>
            ))}
            <motion.article
              variants={fadeUpStaggerChild}
              transition={viewTransition}
              className="flex flex-col justify-center rounded-2xl border border-dashed border-white/20 bg-neutral-950/50 p-5"
            >
              <p className="text-sm font-medium text-neutral-400">
                And more to come
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Additional witnesses from Scripture will join over time.
              </p>
            </motion.article>
          </motion.div>
        </ShellSection>

        {/* Testimonials – vertical auto cycle */}
        <ShellSection id="testimonials" tone="soft">
          <motion.div
            className="space-y-3"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
              Early voices
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              For those who want Scripture close at hand.
            </h2>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <FeatureIcon kind="quote" />
              <span>
                Testimonials rotate automatically. You can tap a name to jump.
              </span>
            </div>
          </motion.div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-neutral-950/90 p-8">
              {testimonials[activeTestimonial] && (
                <motion.blockquote
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
                  className="text-center text-lg leading-relaxed text-neutral-100 sm:text-xl"
                >
                  “{testimonials[activeTestimonial].quote}”
                </motion.blockquote>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-neutral-400">
                Voices from different walks of life describing how a single
                daily encounter has fit into their ordinary days.
              </p>
              <ul className="space-y-1 text-sm text-neutral-300">
                {testimonials.map((t, index) => (
                  <li
                    key={t.name + "-label"}
                    className={`flex cursor-pointer items-center justify-between rounded-full border px-3 py-1.5 transition ${
                      activeTestimonial === index
                        ? "border-white bg-neutral-50/5 text-neutral-100"
                        : "border-white/10 bg-neutral-900/60 text-neutral-300 hover:border-white/40 hover:text-neutral-100"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/30 bg-neutral-800">
                        <img
                          src={t.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span className="font-medium text-neutral-100">
                          {t.name}
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </ShellSection>

        {/* CTA */}
        <ShellSection id="cta" tone="raised">
          <motion.div
            className="rounded-3xl border border-white/12 bg-neutral-950 px-6 py-10 text-center sm:px-10"
            initial={fadeUp.initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={viewTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400">
              Do not delay
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Make a small, daily space for the Word.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-neutral-300">
              When you are ready to trade noise for a single, quiet encounter,
              Epistle will be there—once a day, on purpose.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton label="Join Epistle" />
              <span className="text-xs text-neutral-500">
                iOS first. Other platforms thoughtfully considered over time.
              </span>
            </div>
          </motion.div>
        </ShellSection>
          </> ); }

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-2xl bg-white p-0 shadow-sm">
              <img
                src="/epistle-logo.svg"
                alt="Epistle logo"
                className="absolute inset-0 h-full w-full scale-[1.4] object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">
                Epistle
              </span>
              <span className="text-[11px] text-neutral-400">
                A daily encounter
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden text-xs font-medium text-neutral-300 sm:flex sm:items-center sm:gap-6">
              <a href="#features" className="hover:text-white">
                Product
              </a>
              <a href="#rhythm" className="hover:text-white">
                Rhythm
              </a>
              <a href="#testimonials" className="hover:text-white">
                Voices
              </a>
            </div>
            <PrimaryButton label="Join Epistle" />
          </div>
        </nav>
      </header>
      <main id="top">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-100">
              Epistle
            </span>
            <span>© {year}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#features" className="hover:text-neutral-200">
              Product
            </a>
            <a href="#rhythm" className="hover:text-neutral-200">
              How it works
            </a>
            <a href="#testimonials" className="hover:text-neutral-200">
              Testimonials
            </a>
            <Link to="/privacy" className="hover:text-neutral-200">
              Privacy
            </Link>
            <Link to="/tos" className="hover:text-neutral-200">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
