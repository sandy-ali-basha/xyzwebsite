import React, { useState, useEffect } from "react";
//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  NavLink,
  Button,
} from "reactstrap";

// translation
import { useTranslation } from "react-i18next";
// logo

import { settingsStore } from "store/settingsStore";
import logo from "asset/imgs/logo.svg";
import { Link } from "react-scroll";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { t, i18n } = useTranslation("navbar");

  const [direction, setDirection] = settingsStore((state) => [
    state.direction,
    state.setDirection,
  ]);

  const toggleLang = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
    i18n.changeLanguage(direction === "ltr" ? "ar" : "en");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="mx-5 bgWhite mt-4 rounded px-4">
      <Navbar expand="lg">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link
                className="mx-2 text-muted"
                activeClass="active"
                to="services"
                // spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="mx-2 text-muted"
                activeClass="active"
                to="Portfolio"
                // spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="mx-2 text-muted"
                activeClass="active"
                to="aboutus"
                // spy={true}
                smooth={true}
                duration={500}
              >
                About Us
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="primary" className="text-white">
              <Link
                className="mx-2 text-white"
                activeClass="active"
                to="contactUs"
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
