import { Link } from "react-router-dom";

const NavBar = () => {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Book Now",
      path: "/book-now",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className="container bg-red-500 px-4 py-4">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">Babari.</h2>
        </div>

        {/* navigation */}
        <div className="flex gap-8 text-2xl">
          {navData.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white hover:underline cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
