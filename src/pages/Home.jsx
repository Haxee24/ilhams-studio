import paintings from "../data/paintings";

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

        <h2
          className="text-4xl md:text-5xl mb-6 leading-snug"
          style={{ fontFamily: "serif" }}
        >
          Soft pieces,
          <br />
          made with intention
        </h2>

        <p className="text-sm md:text-base opacity-70 mb-8">
          A quiet collection of paintings and handmade work inspired by soft
          tones, textures, and emotion.
        </p>

        <button
          className="px-6 py-3 rounded-full text-sm shadow-sm"
          style={{
            backgroundColor: "#E8DAD3",
          }}
        >
          Request a Custom Piece
        </button>
      </section>

      {/* PINTEREST GRID */}
      <section className="px-6 md:px-12 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {paintings.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)] transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover hover:opacity-95 transition"
              />

              <div className="p-4">
                <p className="text-sm opacity-80">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
