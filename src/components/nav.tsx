/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  {
    name: "Lore",
    path: "/lore",
  },
  // {
  //   name: "Store",
  //   path: "/store",
  // },
  {
    name: "Events",
    path: "/events",
  },
  // {
  //   name: "Archive",
  //   path: "/events",
  // },
];

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsOpen(false);
    });
  }, [router.events]);

  return (
    <nav
      style={{
        background: isOpen ? "var(--background)" : "transparent",
      }}
    >
      <header className="container">
        <Link href="/">
          <img src={"/logo.svg"} alt="Planet Lukukul" />
        </Link>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <button
          className={`toggle ${!isOpen ? "" : " -open"}`}
          onClick={() => toggle()}
        />
        <ul className={`nav-list -mobile ${isOpen ? "-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </header>
    </nav>
  );
};

export default Nav;
