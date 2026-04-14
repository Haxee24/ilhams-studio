import React from "react";

function About() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #FAF7F4, #F3ECE8)",
        color: "#3A3A3A",
      }}
    >
      {/* HEADER */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
          About
        </p>

        <h2
          className="text-4xl md:text-5xl mb-6 leading-snug"
          style={{ fontFamily: "serif" }}
        >
          A quiet story,
          <br />
          told through art
        </h2>

        <p className="text-sm md:text-base opacity-70">
          Ilham’s Studio is a space for soft expression — where colors,
          textures, and emotion come together to create pieces that feel calm,
          personal, and intentional.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-6">
          
          <p className="text-sm md:text-base opacity-80 leading-relaxed">
            Each piece is handmade with care, inspired by quiet moments,
            natural tones, and the beauty of simplicity. The goal is not just
            to create art, but to create something that feels — something that
            resonates.
          </p>

          <p className="text-sm md:text-base opacity-80 leading-relaxed">
            From soft abstract paintings to delicate handcrafted items, every
            work carries a sense of warmth and stillness. These pieces are made
            to live gently in your space and bring a sense of calm.
          </p>

          <p className="text-sm md:text-base opacity-80 leading-relaxed">
            Custom pieces are also available — created in collaboration to match
            your space, your mood, and your story.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              className="px-6 py-3 rounded-full text-sm shadow-sm transition hover:opacity-90"
              style={{
                backgroundColor: "#E8DAD3",
              }}
            >
              Request a Custom Piece
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;