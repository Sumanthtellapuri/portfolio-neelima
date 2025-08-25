import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = ["home", "about", "skills", "projects", "contact"];
const NAV_HEIGHT = 80; // height of your fixed navbar

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${NAV_HEIGHT / 2}px 0px -${NAV_HEIGHT / 2}px 0px`,
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -NAV_HEIGHT; // offset for fixed navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <h1 onClick={handleScroll("home")} style={{ cursor: "pointer" }}>
          Neelima Martha
        </h1>

        <ul className="nav-links" type="none">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={handleScroll(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={handleScroll("contact")}
          className="contact-btn"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
