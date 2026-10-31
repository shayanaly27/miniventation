"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fredoka } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
});

/** Splits a string into inline-block word spans so GSAP can animate each word. */
function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word inline-block will-change-transform"
          style={{ transformOrigin: "50% 100%" }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate for people who haven't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Background: slow cinematic zoom-out
        tl.fromTo(
          ".hero-bg",
          { scale: 1.15 },
          { scale: 1, duration: 2.4, ease: "power2.out" },
          0
        );

        // Eyebrow text slides in
        tl.from(
          ".hero-eyebrow",
          { y: 20, autoAlpha: 0, letterSpacing: "0.6em", duration: 0.9 },
          0.2
        );

        // Headline: each word flips up in 3D with a bouncy overshoot
        tl.from(
          ".hero-title .hero-word",
          {
            y: 70,
            rotationX: -90,
            rotationZ: 6,
            autoAlpha: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "back.out(1.7)",
          },
          0.4
        );

        // Paragraph fades up
        tl.from(
          ".hero-copy",
          { y: 24, autoAlpha: 0, duration: 0.9 },
          "-=0.5"
        );

        // Button pops in
        tl.fromTo(
          ".hero-cta",
          { scale: 0.6, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.55)",
            clearProps: "opacity,visibility,transform",
          },
          "-=0.5"
        );

        // After the intro: yellow words keep gently bobbing & wobbling
        tl.add(() => {
          gsap.to(".hero-accent .hero-word", {
            y: -8,
            rotation: (i) => (i % 2 === 0 ? -2.5 : 2.5),
            duration: 1.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: { each: 0.25, from: "start" },
          });

          // Arrow nudges forward on a loop
          gsap.to(".hero-arrow", {
            x: 5,
            duration: 0.7,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100svh-4rem)] min-h-[460px] w-full sm:min-h-[520px]">
        {/* Background image */}
        <div className="hero-bg absolute inset-0 will-change-transform">
          <Image
            src="/images/placeholder/hero-background.png"
            alt="Teddy bear, rocket, dinosaur and colourful toys in a kids' room"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        {/* Dark gradient on the left so the text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3d]/80 via-[#0b1f3d]/40 to-transparent md:via-[#0b1f3d]/25" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
          <div className="max-w-xl" style={{ perspective: 900 }}>
            <p className="hero-eyebrow mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
              Play • Learn • Grow
            </p>

            <h1
              className={`${fredoka.className} hero-title text-4xl font-bold leading-[1.05] text-white drop-shadow-md sm:text-5xl md:text-7xl`}
            >
              <Words text="Toys for a" />
              <span className="hero-accent block text-yellow-300">
                <Words text="Brighter Tomorrow" />
              </span>
            </h1>

            <p className="hero-copy mt-6 max-w-md text-base leading-relaxed text-white/95 md:text-lg">
              Discover a world of fun, imagination and learning with our
              amazing collection of toys for all ages.
            </p>

            {/* GSAP animates this wrapper so it doesn't clash with the link's CSS transition */}
            <div className="hero-cta mt-8 inline-block">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-full bg-yellow-300 px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-400"
              >
                Shop Now
                <svg
                  className="hero-arrow h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}