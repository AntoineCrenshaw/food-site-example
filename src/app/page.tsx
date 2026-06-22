import Link from "next/link";

const navLinks = [
  {
    href: "/posts",
    label: "Posts",
    description: "Latest updates from our kitchen",
  },
  { href: "/about", label: "About Us", description: "Our story and mission" },
  { href: "/menu", label: "Menu", description: "Browse what we're serving" },
  { href: "/contact", label: "Contact", description: "Get in touch with us" },
  {
    href: "/auth",
    label: "Sign In / Register",
    description: "Join our rewards program",
  },
  { href: "/checkout", label: "Checkout", description: "Finalize your order" },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #faf7f2;
          font-family: 'DM Sans', sans-serif;
          color: #1a1a1a;
          min-height: 100vh;
        }

        .page {
          max-width: 680px;
          margin: 0 auto;
          padding: 80px 24px 60px;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b45e2a;
          margin-bottom: 16px;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          font-weight: 600;
          line-height: 1.15;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .subline {
          font-size: 15px;
          font-weight: 300;
          color: #666;
          line-height: 1.6;
          margin-bottom: 52px;
          max-width: 420px;
        }

        .divider {
          width: 48px;
          height: 2px;
          background: #b45e2a;
          margin-bottom: 40px;
        }

        .nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-item a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #e8e0d4;
          text-decoration: none;
          color: inherit;
          transition: padding-left 0.2s ease;
        }

        .nav-item a:hover {
          padding-left: 6px;
        }

        .nav-item a:hover .nav-label {
          color: #b45e2a;
        }

        .nav-item a:hover .nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-text { display: flex; flex-direction: column; gap: 3px; }

        .nav-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .nav-desc {
          font-size: 12px;
          font-weight: 300;
          color: #999;
          letter-spacing: 0.02em;
        }

        .nav-arrow {
          font-size: 18px;
          color: #b45e2a;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .footer-note {
          margin-top: 60px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #bbb;
        }
      `}</style>

      <div className="page">
        <p className="eyebrow">Est. 2024</p>
        <h1 className="headline">
          Good food,
          <br />
          great people.
        </h1>
        <p className="subline">
          Welcome to our corner of the internet. Explore the menu, join our
          rewards program, or just say hello.
        </p>
        <div className="divider" />

        <ul className="nav-list">
          {navLinks.map(({ href, label, description }) => (
            <li key={href} className="nav-item">
              <Link href={href}>
                <span className="nav-text">
                  <span className="nav-label">{label}</span>
                  <span className="nav-desc">{description}</span>
                </span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="footer-note">© 2026 · All rights reserved</p>
      </div>
    </>
  );
}
