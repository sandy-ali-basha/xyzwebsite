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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

// translation
import { useTranslation } from "react-i18next";
// logo

import { settingsStore } from "store/settingsStore";
import logo from "asset/imgs/logo.svg";
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
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Testimonnial</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="primary" className="text-white">
              Contact Us
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
