import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">{children}</main>

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
