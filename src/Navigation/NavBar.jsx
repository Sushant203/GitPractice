const NavBar = () => {
  const navData = [
    {
      name: "Home",
    },
    {
      name: "Book now",
    },
    {
      name: "About Us",
    },
    {
      name: "Services",
    },
    {
      name: "Gallery",
    },
  ];
  return (
    <nav className="container bg-red-500 px-4 py-4 ">
      <div className="flex  justify-between ">
        {/* logo */}
        <div>
          <h2 className="text-2xl">Babari.</h2>
        </div>

        {/* navigation */}
        <div className="flex gap-8 text-2xl">
          {navData.map((item, index) => {
            return (
              <div key={index} className="cursor-pointer">
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
