import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "reactstrap";
import HroImg from "asset/imgs/hero.svg";
import Services from "components/Services";
import GetQuote from "components/GetQuote";
import Projects from "components/Projects";
import AboutUs from "components/AboutUs";
import ContactUs from "components/ContactUs";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Row className="vh-100 px-5">
        <Col
          md="5"
          className="d-flex justify-content-center align-items-start flex-column"
        >
          <div className="rounded pill bg-light_orange px-2 rounded-3 mb-2 text-white">
            hi there
          </div>
          <h1 className="fw-bold">
            Welcome to <span className="text-primary">XYZ</span>
          </h1>
          <p className="text-muted">
            At XYZ, we specialize in creating innovative and efficient digital
            solutions. Our team of experienced developers is dedicated to
            helping businesses thrive in the digital age.
          </p>
          <Button className=" bg-orange border-0 text-white">
            Request a Quote
          </Button>
        </Col>
        <Col
          md="7"
          className="d-flex align-items-center justify-content-center"
        >
          <img src={HroImg} alt="" className="w-100" />
        </Col>
      </Row>
      <div className="orange_circle"></div>
      <div className="blured_cicle"></div>
      <Services />
      <GetQuote />
      <Projects />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default Home;
