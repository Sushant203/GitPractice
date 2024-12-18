import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <Footer />

      {children}

    </div>
  );
};

export default Layout;
