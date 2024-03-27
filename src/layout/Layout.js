import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./header/NavBar";
const Layout = ({ children }) => {

  return (
    <div>
      <NavBar />
      <div>

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
