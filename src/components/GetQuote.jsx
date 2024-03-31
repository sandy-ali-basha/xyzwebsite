import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import quoteImg from "asset/imgs/quoteImg.png";

function GetQuote() {
  return (
    <Row className="GetQuote py-5 my-5 px-5 position-relative">
      <Col md="6" className="justify-content-center d-flex flex-column pe-5">
        <h2
          className="fw-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          Have a <span className="text-primary">project</span> in mind! Let’s
          work together.
        </h2>
        <p
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate ut.
          Maecenas molestie sodales tristique. Nunc scelerisque tortor vitae
          ipsum rhoncus auctor.{" "}
        </p>
        <div
          className="bgWhite p-2 rounded-4 shadow"
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <InputGroup>
            <Input className="border-0" placeholder="email Address" />
            <InputGroupText addonType="append" className="bg-primary rounded ">
              <a
                href="mailto:ferasshaher@gmail.com?subject=quote for xyz project"
                className="text-white"
              >
                Get a Quote
              </a>
            </InputGroupText>
          </InputGroup>
        </div>
      </Col>
      <Col md="6">
        <img
          className="w-100"
          data-aos="fade-left"
          src={quoteImg}
          alt=""
          data-aos-anchor-placement="top-center"
        />
      </Col>
      <div className="bluredCircle"></div>
    </Row>
  );
}

export default GetQuote;
