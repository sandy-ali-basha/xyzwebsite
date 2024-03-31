import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import quoteImg from "asset/imgs/quoteImg.png";

function GetQuote() {
  return (
    <Row className="GetQuote py-5 my-5 px-5 position-relative">
      <Col md="6" className="justify-content-center d-flex flex-column pe-5">
        <h2 className="fw-bold" data-aos="fade-up">
          Have a <span className="text-primary">project</span> in mind! Let’s
          work together.
        </h2>
        <p data-aos="fade-in" data-aos-delay="400">
          Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate ut.
          Maecenas molestie sodales tristique. Nunc scelerisque tortor vitae
          ipsum rhoncus auctor.{" "}
        </p>
        <div
          className="bgWhite p-2 rounded-4 shadow"
          data-aos="flip-up"
          data-aos-delay="200"
        >
          <InputGroup>
            <Input className="border-0" placeholder="email Address" />
            <InputGroupText addonType="append" className="bg-primary rounded ">
              <a
                href="http://"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </InputGroupText>
          </InputGroup>
        </div>
      </Col>
      <Col md="6">
        <img className="w-100" data-aos="fade-left" src={quoteImg} alt="" />
      </Col>
      <div className="bluredCircle"></div>
    </Row>
  );
}

export default GetQuote;
