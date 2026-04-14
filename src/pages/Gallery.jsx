import React, { useState } from "react";
import paintings from "../data/paintings";
import crafts from "../data/crafts";
import { ArtCard } from "../components";

function Gallery() {
  const [active, setActive] = useState("paintings");

  const data = active === "paintings" ? paintings : crafts;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #FAF7F4, #F3ECE8)",
        color: "#3A3A3A",
      }}
    >
      {/* HEADER */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-6"
          style={{ fontFamily: "serif" }}
        >
          Gallery
        </h2>

        {/* SWITCH BUTTON */}
        <div className="flex justify-center gap-2 bg-white/50 backdrop-blur-sm p-1 rounded-full w-fit mx-auto shadow-sm">
          <button
            onClick={() => setActive("paintings")}
            className={`cursor-pointer px-5 py-2 text-sm rounded-full transition ${
              active === "paintings"
                ? "bg-[#E8DAD3]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            Paintings
          </button>

          <button
            onClick={() => setActive("crafts")}
            className={`cursor-pointer px-5 py-2 text-sm rounded-full transition ${
              active === "crafts"
                ? "bg-[#E8DAD3]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            Crafts
          </button>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {data.map((item, index) => (
            <ArtCard key={index} {...item} id={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;