function ArtPiece( item ) {
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="opacity-60">No artwork selected</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #FAF7F4, #F3ECE8)",
        color: "#3A3A3A",
      }}
    >
      {/* CONTENT */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "serif" }}
          >
            {item.title}
          </h2>

          {item.description && (
            <p className="text-sm md:text-base opacity-70 leading-relaxed">
              {item.description}
            </p>
          )}

          {/* EXTRA INFO */}
          <div className="text-sm opacity-70 space-y-2">
            {item.size && <p>Size: {item.size}</p>}
            {item.medium && <p>Medium: {item.medium}</p>}
            {item.price && <p>Price: {item.price}</p>}
          </div>

          {/* CTA */}
          <button
            className="px-6 py-3 rounded-full text-sm shadow-sm transition hover:opacity-90"
            style={{
              backgroundColor: "#E8DAD3",
            }}
          >
            Enquire / Request Similar
          </button>
        </div>
      </section>
    </div>
  );
}

export default ArtPiece;