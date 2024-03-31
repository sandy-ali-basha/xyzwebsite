import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import facebook from "asset/imgs/icons/facebook.svg";
import linkedin from "asset/imgs/icons/linkedin.svg";
import instagram from "asset/imgs/icons/instagram.svg";

//* images

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className=" footer bg_light_blue pt-5 pb-3 mt-5" data-aos="fade-up">
      <Container>
        <Row className=" row-grid align-items-center mb-5">
          <Col lg="6">
            <h3 className=" text-primary font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className=" mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon-only rounded-circle"
              color="twitter"
              href="https://twitter.com/creativetim"
              id="tooltip475038074"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip475038074">
              Follow us
            </UncontrolledTooltip>
            <Button
              className="btn-icon-only rounded-circle ml-1"
              color="facebook"
              href="https://www.facebook.com/creativetim"
              id="tooltip837440414"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip837440414">
              Like us
            </UncontrolledTooltip>
            <Button
              className="btn-icon-only rounded-circle ml-1"
              color="dribbble"
              href="https://dribbble.com/creativetim"
              id="tooltip829810202"
              target="_blank"
            >
              <img src={instagram} alt="" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip829810202">
              Follow us
            </UncontrolledTooltip>
            {/* <Button
              className="btn-icon-only rounded-circle ml-1"
              color="github"
              href="https://github.com/creativetimofficial"
              id="tooltip495507257"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-github" />
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip495507257">
              Star on Github
            </UncontrolledTooltip> */}
          </Col>
        </Row>
        <hr />
        <Row className=" align-items-center justify-content-md-between">
          <Col md="6">
            <div className=" copyright">
              © {new Date().getFullYear()}{" "}
              <a href="" target="_blank">
                XYZ Team
              </a>
              .
            </div>
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <NavLink
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  Creative Tim
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#aboutUs">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="http://blog.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
