import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const baseStyle = "hover:opacity-100 transition";

  return (
    <nav
      className="w-full bg-[rgb(79,53,71)] px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50"
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
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "opacity-100 text-white font-medium" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "opacity-100 text-white font-medium" : ""}`
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "opacity-100 text-white font-medium" : ""}`
          }
        >
          About
        </NavLink>
      </div>

      {/* CTA BUTTON */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-[rgb(34,66,60)] cursor-pointer text-sm px-5 py-2 rounded-full shadow-sm transition hover:opacity-90 ${
            isActive ? "ring-1 ring-black/10" : ""
          }`
        }
        style={{
          backgroundColor: "#E8DAD3",
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;