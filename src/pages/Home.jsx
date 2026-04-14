import paintings from "../data/paintings";
import { ArtCard } from "../components";

function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #FAF7F4, #F3ECE8)",
        color: "#3A3A3A",
      }}
    >
      {/* HERO */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
          Ilham's Studio
        </p>
        <br />

        <h2
          className="text-4xl md:text-5xl mb-6 leading-snug"
          style={{ fontFamily: "serif", color: "#4F3547" }}
        >
          Soft pieces,
          <br />
          made with intention
        </h2>

        <p className="text-sm md:text-base opacity-70 mb-8">
          A quiet collection of paintings and handmade work inspired by soft
          tones, textures, and emotion.
        </p>
      </section>

      {/* PINTEREST GRID */}
      <section className="px-6 md:px-12 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {paintings.slice(0, 5).map((item, index) => (
            <ArtCard key={index} {...item} id={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
