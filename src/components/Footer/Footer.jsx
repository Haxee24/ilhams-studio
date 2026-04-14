const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="4.5"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2.5c-5.25 0-8 3.73-8 7.8 0 2.15.82 4.05 2.58 4.77.29.12.54.01.62-.31l.24-.95c.08-.31.05-.42-.17-.68-.47-.56-.77-1.28-.77-2.31 0-2.98 2.23-5.65 5.81-5.65 3.17 0 4.91 1.94 4.91 4.53 0 3.4-1.5 6.27-3.73 6.27-1.23 0-2.15-1.02-1.85-2.27.35-1.49 1.02-3.1 1.02-4.18 0-.97-.52-1.78-1.6-1.78-1.27 0-2.29 1.31-2.29 3.07 0 1.12.38 1.88.38 1.88l-1.53 6.48c-.45 1.9-.07 4.23-.04 4.46.02.14.2.17.28.07.11-.14 1.5-1.86 1.97-3.58.13-.49.76-2.96.76-2.96.38.72 1.48 1.35 2.65 1.35 3.49 0 5.86-3.18 5.86-7.43 0-3.22-2.73-6.24-6.88-6.24Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M13.36 21v-7.3h2.45l.37-2.85h-2.82V9.03c0-.83.23-1.39 1.42-1.39h1.52V5.09c-.26-.04-1.17-.09-2.22-.09-2.2 0-3.71 1.34-3.71 3.81v2.04H8v2.85h2.37V21h2.99Z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-[rgb(79,53,71)] px-6 py-8 text-white md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg tracking-wide" style={{ fontFamily: "serif" }}>
            Ilham&apos;s Studio
          </p>
          <p className="text-sm text-white/70">
            Art and handmade pieces with a soft, thoughtful feel.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white hover:text-[rgb(79,53,71)]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
