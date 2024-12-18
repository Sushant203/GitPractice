import { Link } from "react-router-dom";

const NavBar = () => {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Book now",
      path: "/book-now",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ];

  return (
    <nav className="container bg-red-500 px-4 py-4">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <h2 className="text-2xl">Babari.</h2>
        </div>

        {/* navigation */}
        <div className="flex gap-8 text-2xl">
          {navData.map((item, index) => {
            return (
              <Link key={index} className="cursor-pointer" to={item.path}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
