import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import quoteImg from "asset/imgs/quoteImg.png";

function GetQuote() {
  return (
    <Row className="GetQuote py-5 my-5 px-5">
      <Col md="6" className="justify-content-center d-flex flex-column pe-5">
        <h2 className="fw-bold ">
          Have a <span className="text-primary">project</span> in mind! Let’s
          work together.
        </h2>
        <p>
          Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate ut.
          Maecenas molestie sodales tristique. Nunc scelerisque tortor vitae
          ipsum rhoncus auctor.{" "}
        </p>
        <div className="bgWhite p-2 rounded-4 shadow">
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
        <img className="w-100   " src={quoteImg} alt="" />
      </Col>
    </Row>
  );
}

export default GetQuote;
