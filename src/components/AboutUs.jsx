import React from "react";
import { Col, Row } from "reactstrap";
import AboutUsImg from "asset/imgs/aboutUs.png";
import { Element } from "react-scroll";
export default function AboutUs() {
  return (
    <Element name="aboutus" className="position-relative py-5 my-5 px-5">
      <Row className="flex-column-reverse flex-md-row">
        <Col md="6">
          <img
            className="w-100 px-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            src={AboutUsImg}
            alt=""
          />
        </Col>
        <Col md="6">
          <div className="pe-5">
            <h2
              className="fs-1 fw-bold"
              data-aos="fade-in-down"
              data-aos-anchor-placement="top-center"
            >
              About <span className="text-primary">Us</span>
            </h2>
            <p
              className="text-muted"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-anchor-placement="top-center"
            >
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <p
              className="text-muted"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-anchor-placement="top-center"
            >
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </Col>
      </Row>
      <div className="cicleAboutUs"></div>
      <div className="cicleAboutUs2"></div>
    </Element>
  );
}
