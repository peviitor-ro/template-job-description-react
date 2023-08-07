const Navbar = ({ click }) => {
  const links = [
    "Acasa",
    "Despre",
    "Servicii",
    "Produse",
    "Cariere",
    "Contact",
  ];

  const renderLinks = links.map((link, index) => (
    <li
      key={index}
      className={link === "Cariere" ? "link link--orange" : "link"}
    >
      <a href={`/${link.toLowerCase()}`} className="anchor">
        {link}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul className={`navbar ${click ? "active" : ""}`}>{renderLinks}</ul>
    </nav>
  );
};

export default Navbar;
