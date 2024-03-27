import React from "react";
import { Col, Row } from "reactstrap";

import ServicesImg from "asset/imgs/servicesImg.png";
import squares from "asset/imgs/icons/squares.svg";
import penIcon from "asset/imgs/icons/pin.svg";
import globe from "asset/imgs/icons/globe.svg";
import CircleBtn from "./CircleBtn";

function Services() {
  return (
    <div className="px-5">
      <Row className="align-items-center py-5 ">
        <Col md="3">
          <img src={ServicesImg} alt="" />
        </Col>
        <Col md="4">
          <h2 className="fs-large fw-bold">
            Our Services designed to <span className="text-primary">grow</span>
            your business.
          </h2>
        </Col>
        <Col className="text-muted">
          Bootstrap code with a well-organized Figma file to design & develop
          your next websites in minutes.
        </Col>
      </Row>
      <Row className="align-items-stretch ">
        <Col>
          <div className="bgWhite box h-100">
            <div className="title">
              <img src={penIcon} alt="" />
              <h3>Mobile App</h3>
            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, aliquid itaque perspiciatis animi eum maxime.
              Accusantium incidunt ipsum officiis soluta.
            </p>
            <CircleBtn />
          </div>
        </Col>
        <Col>
          <div className="bgWhite box h-100">
            <div className="title">
              <img src={globe} alt="" />
              <h3>UI/UX</h3>
            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, aliquid itaque perspiciatis animi eum maxime.
              Accusantium incidunt ipsum officiis soluta.
            </p>
            <CircleBtn />
          </div>
        </Col>
        <Col>
          <div className="bgWhite box h-100">
            <div className="title">
              <img src={squares} alt="" />
              <h3>Mobile App</h3>
            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, aliquid itaque perspiciatis animi eum maxime.
              Accusantium incidunt ipsum officiis soluta.
            </p>
            <CircleBtn />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
