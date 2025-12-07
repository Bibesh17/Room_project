export default function Navbar() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Room & Suites", id: "room" },
    { name: "Facilities", id: "facilities" },
    { name: "Apply", id: "about" },
  ];

  const Scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white-300 text-black py-4 px-6 shadow-lg flex items-end justify-between">
      <ul className="flex gap-6">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer hover:text-yellow-300 transition"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
