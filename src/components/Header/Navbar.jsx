import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "transition duration-200 hover:opacity-100";

  return (
    <nav
      className="w-full bg-[rgb(79,53,71)] text-[rgb(34,66,60)] px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50"
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* LOGO */}
      <div
        className="text-lg tracking-wide"
        style={{ fontFamily: "serif" }}
      >
        <NavLink to="/">Ilham's Studio</NavLink>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "opacity-100 font-medium" : "opacity-70"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "opacity-100 font-medium" : "opacity-70"
            }`
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "opacity-100 font-medium" : "opacity-70"
            }`
          }
        >
          About
        </NavLink>
      </div>

      {/* CTA */}
      <NavLink
        to="/contact"
        className="text-[rgb(34,66,60)] text-sm px-5 py-2 rounded-full shadow-sm transition hover:opacity-90"
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