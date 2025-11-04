"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Page() {
  // ========== SMOOTH SCROLL ==========
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="font-sans text-zinc-900 bg-white overflow-x-hidden scroll-smooth selection:bg-[#FFD302]/60 selection:text-black">
      {/* ====================== NAVBAR ======================= */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-8 py-4">
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "#FFD302" }}>
          Artork<span className="text-black"> Design</span>
        </h2>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {["Home", "Work", "About", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-zinc-600 transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FFD302] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* ====================== HERO ======================= */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          src="https://videos.pexels.com/video-files/9665443/9665443-hd_1280_720_25fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="relative z-10 max-w-4xl px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight"
          >
            Where Art <span className="text-[#FFD302]">Meets</span> Design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg text-zinc-200"
          >
            We craft immersive visual identities and contemporary experiences for bold brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              className="bg-[#FFD302] text-black font-semibold px-8 py-6 rounded-full hover:bg-black hover:text-white transition-all"
              onClick={() =>
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Work
            </Button>
            <a href="#contact">
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black rounded-full px-8 py-6"
              >
                Get in Touch
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====================== FEATURED PROJECTS ======================= */}
      <section id="work" className="py-32 px-8 bg-zinc-50 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-14"
        >
          Featured <span className="text-[#FFD302]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-all border-0 bg-white group overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      i === 1
                        ? "1526481280695-3c720685208b"
                        : i === 2
                        ? "1517694712202-14dd9538aa97"
                        : "1557180295-76eee20ae8aa"
                    }?auto=format&fit=crop&w=1000&q=80`}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Project ${i}`}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">Project {i}</h3>
                    <p className="text-zinc-600">
                      Exploring the intersection of art, design, and narrative
                      through elegant visual systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================== ABOUT ======================= */}
      <section id="about" className="py-28 px-8 bg-[#FFD302] text-black text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-8"
        >
          About <span className="text-black/70">Artork</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We are a multidisciplinary design studio merging fine art sensibility
          with digital innovation. Our team crafts identities, campaigns, and
          spaces that provoke emotion and spark connection.
        </motion.p>
      </section>

      {/* ====================== GALLERY ======================= */}
      <section id="gallery" className="py-28 px-8 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          Visual <span className="text-[#FFD302]">Showcase</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "1500530855697-b586d89ba3ee",
            "1511671782779-c97d3d27a1d4",
            "1496317899792-9d7dbcd928a1",
            "1520095972714-909e91eeda9f",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={`https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=900&q=80`}
                alt="Gallery"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================== CONTACT ======================= */}
      <section id="contact" className="py-32 px-8 bg-zinc-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-6"
        >
          Let's <span className="text-[#FFD302]">Collaborate</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-lg text-zinc-700 mb-10"
        >
          Have a project in mind? We’re always open to creative challenges and new opportunities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="mailto:hello@artorkdesign.com">
            <Button className="bg-black text-white hover:bg-[#FFD302] hover:text-black px-8 py-6 rounded-full text-lg font-semibold transition-all">
              Email Us
            </Button>
          </a>
        </motion.div>
      </section>

      {/* ====================== FOOTER ======================= */}
      <footer className="py-12 text-center text-sm text-black bg-[#FFD302] border-t border-black/10">
        <p>
          © {new Date().getFullYear()} <strong>Artork Design</strong> — All Rights Reserved
        </p>
        <div className="mt-3 flex justify-center gap-6 underline text-sm">
          <a href="/privacy-policy" className="hover:text-black/70">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-black/70">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </main>
  );
}
