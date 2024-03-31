import React from "react";
import { Col, Row } from "reactstrap";
import { Element } from "react-scroll";
import ServicesImg from "asset/imgs/servicesImg.png";
import squares from "asset/imgs/icons/squares.svg";
import penIcon from "asset/imgs/icons/pin.svg";
import globe from "asset/imgs/icons/globe.svg";
import CircleBtn from "./CircleBtn";

function Services() {
  return (
    <Element className="px-5" name="services">
      <Row className="align-items-center py-5 ">
        <Col
          md="3"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <img src={ServicesImg} alt="" />
        </Col>
        <Col md="4">
          <h2
            className="fs-large fw-bold "
            data-aos="fade-in"
            data-aos-anchor-placement="top-center"
          >
            Our Services designed to <span className="text-primary">grow</span>
            your business.
          </h2>
        </Col>
        <Col
          className="text-muted"
          data-aos="in-left"
          data-aos-anchor-placement="top-center"
        >
          Our team is skilled in delivering custom solutions that ensure optimal
          user experience and functionality.
        </Col>
      </Row>
      <Row className="align-items-stretch ">
        <Col>
          <div
            className="bgWhite box h-100"
            data-aos="fade-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="title">
              <img
                src={penIcon}
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <h3
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-anchor-placement="top-center"
              >
                Web Applications
              </h3>
            </div>
            <p
              className="text-muted fs-6"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Leverage our expertise in creating high-performance web
              applications. We use the latest technologies to transform your
              ideas into efficient, scalable solutions.
            </p>
            <CircleBtn />
          </div>
        </Col>
        <Col>
          <div className="bgWhite box h-100" data-aos="fade-in">
            <div className="title">
              <img
                src={globe}
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center"
              />
              <h3 data-aos="fade-left" data-aos-delay="400">
                Mobile Apps
              </h3>
            </div>
            <p
              className="text-muted fs-6"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Embrace the mobile-first world with our innovative mobile app
              solutions. We design and develop intuitive, user-friendly apps.
              Stay connected with your audience anytime, anywhere with our
              engaging mobile apps.
            </p>
            <CircleBtn />
          </div>
        </Col>
        <Col>
          <div className="bgWhite box h-100" data-aos="fade-in">
            <div className="title">
              <img
                src={squares}
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <h3 data-aos="fade-left" data-aos-delay="400">
                Websites
              </h3>
            </div>
            <p
              className="text-muted fs-6"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Get a visually appealing, responsive, and SEO-optimized website
              tailored to your business needs. Our expertise in modern design
              principles and technologies ensures your website not only looks
              good but also drives results.
            </p>
            <CircleBtn />
          </div>
        </Col>
      </Row>
    </Element>
  );
}

export default Services;
