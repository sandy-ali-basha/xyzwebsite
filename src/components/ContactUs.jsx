import React, { useEffect, useRef } from "react";
import { Col, Input, Label, Row, Button } from "reactstrap";
import Email from "asset/imgs/icons/email.svg";
import phone from "asset/imgs/icons/phone.svg";
import location from "asset/imgs/icons/location.png";
import facebook from "asset/imgs/icons/facebook.svg";
import insta from "asset/imgs/icons/instagram.svg";
import linkedin from "asset/imgs/icons/linkedin.svg";

import contactShape1 from "asset/imgs/contactImg.png";
import contactShape2 from "asset/imgs/contactImg2.png";
import { Element } from "react-scroll";
import Splitting from "splitting";
export default function ContactUs() {
  const myRef = useRef();

  useEffect(() => {
    Splitting({ target: myRef.current });
  }, []);

  return (
    <Element name="contactUs" className="my-5 py-5">
      <h2
        className="fs-1 fw-bold text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div ref={myRef} data-splitting="words">
          Have a project in mind! <br />
          <span className="text-primary">Drop us</span> a line.
        </div>
      </h2>
      <p
        className="text-muted text-center w-75 mb-5 mx-auto"
        data-aos="fade-in"
        data-aos-anchor-placement="top-center"
      >
        Got a project? Drop us a line if you want to work together on something
        exciting. Or do you need our help? Feel free to contact us.
      </p>
      <div className="ContactForm mt-5">
        <Row
          className="w-75 my-5 mx-auto bgWhite"
          data-aos="fade-in"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Col className="px-4 py-5">
            <h3 className="fs-4">Get In Touch</h3>
            <div className="contact_info">
              <div className="d-flex mt-4">
                <img
                  src={Email}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay="200"
                />
                <div>
                  <div className="text-muted fs-6">Email us</div>
                  <a
                    className="text-black fs-6 fw-light"
                    href="mailto:ferasshaher@gmail.com"
                  >
                    ferasshaher@gmail.com
                  </a>
                </div>
              </div>
              <div className="d-flex mt-4">
                <img
                  src={phone}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay="200"
                />
                <div>
                  <div className="text-muted fs-6 fw-light">Phone Number</div>
                  <a
                    className="text-black fs-6"
                    href="tel:+201124812216"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +20 112 481 2216
                  </a>
                </div>
              </div>
              <div className="d-flex mt-4">
                <img
                  src={location}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay="200"
                />

                <div>
                  <div className="text-muted fs-6 fw-light">Our Location</div>
                <p>
                    6th Of October, Giza, Egypt
                </p>
                </div>
              </div>
            </div>
            <div className="contact_social mt-3">
              <h4
                className="d-flex align-items-center gap-2 fw-light mt-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="prev"></div>
                <div className="fs-6 ">Connect with us:</div>
              </h4>
              <div className="social_icons d-flex">
                <a
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="img"
                  href="https://www.facebook.com/xyz.devs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-100" src={facebook} alt="" />
                </a>
                <a
                  className="img"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  href="https://www.instagram.com/xyzdevteam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-100" src={insta} alt="" />
                </a>

                <a
                  href="https://www.linkedin.com/company/xyzdevteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="img"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <img className="w-100" src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </Col>
          <Col className="bg-light_orange px-4 py-5">
            <form className="p-4">
              <div className="d-flex">
                <div className="px-1">
                  <Label className="text-muted fs-6">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-100 text mb-4"
                  />
                </div>
                <div className="px-1">
                  <Label className="text-muted fs-6">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="w-100  mb-4"
                  />
                </div>
              </div>
              <div className="px-1">
                <Label className="text-muted fs-6">Subject</Label>
                <Input
                  type="text"
                  name="Subject"
                  placeholder=""
                  className="w-100  mb-4"
                />
              </div>
              <div className="px-1">
                <Label className="text-muted fs-6">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="w-100  mb-4"
                />
              </div>
              <Button color="secondary" className="px-2 text-white">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
        <img
          className="contactShape contactShape1"
          src={contactShape2}
          alt=""
          data-aos="zoom-in"
          data-aos-delay="500"
        />
        <img
          className="contactShape contactShape2"
          src={contactShape1}
          alt=""
          data-aos="zoom-in"
          data-aos-delay="500"
        />
      </div>
    </Element>
  );
}
