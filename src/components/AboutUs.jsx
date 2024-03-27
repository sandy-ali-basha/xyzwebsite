import React from "react";
import { Col, Row } from "reactstrap";
import AboutUsImg from "asset/imgs/aboutUs.png";
export default function AboutUs() {
  return (
    <section id="aboutUs" className="position-relative py-5 my-5 px-5">
      <Row className="flex-column-reverse flex-md-row">
        <Col md="6">
          <img className="w-100 px-5" src={AboutUsImg} alt="" />
        </Col>
        <Col md="6">
          <div className="pe-5">
            <h2 className="fs-1 fw-bold">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-muted">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <p className="text-muted">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </Col>
      </Row>
      <div className="cicleAboutUs"></div>
      <div className="cicleAboutUs2"></div>
    </section>
  );
}
