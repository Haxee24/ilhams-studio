import React from "react";

function Navbar() {
  return (
    <nav
      className="w-full bg-[rgb(79,53,71)] text-[rgb(34,66,60)]px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50"
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* LOGO / BRAND */}
      <div
        className="text-lg tracking-wide"
        style={{ fontFamily: "serif" }}
      >
        Ilham's Studio
      </div>

      {/* LINKS */}
      <div className="hidden md:flex items-center gap-8 text-sm opacity-80">
        <a href="#" className="hover:opacity-100 transition">
          Home
        </a>
        <a href="#" className="hover:opacity-100 transition">
          Gallery
        </a>
        <a href="#" className="hover:opacity-100 transition">
          About
        </a>
      </div>

      {/* CTA BUTTON */}
      <button
        className="text-[rgb(34,66,60)] cursor-pointer text-sm px-5 py-2 rounded-full shadow-sm transition hover:opacity-90"
        style={{
          backgroundColor: "#E8DAD3",
        }}
      >
        Contact
      </button>
    </nav>
  );
}

export default Navbar;