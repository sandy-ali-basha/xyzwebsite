import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import projectImg1 from "asset/imgs/services/service (1).png";
import projectImg2 from "asset/imgs/services/service (2).png";
import projectImg3 from "asset/imgs/services/service (3).png";
import CircleBtn from "./CircleBtn";
function Projects() {
  const [Show, setShow] = useState(null);

  const content = [
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg1,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg2,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg1,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg2,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg1,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg2,
    },
    {
      title: "google",
      content: "Illustrating Google Kid Space",
      link: "https://fnj",
      img: projectImg3,
    },
  ];
  return (
    <div className="my-5 py-5 position-relative">
      <h3
        className="text-center fs-1 fw-bold mx-auto mt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Some of our selected <br />
        <span className="text-primary">projects</span>
      </h3>
      <div className="px-5 mx-5 py-5">
        <Row>
          {content.map((item, index) => {
            return (
              <Col md="4" key={index}>
                <div
                  className="ServiceImg"
                  data-aos="flip-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`link ${Show === index ? "showService" : ""}`}
                    onMouseEnter={() => setShow(index)}
                    onMouseLeave={() => setShow(null)}
                  >
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      <CircleBtn />
                    </a>
                  </div>
                  <img src={item.img} alt="" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="text-center">
        <Button
          color="primary"
          className="my-5 text-white"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="top-center"
        >
          View all portfolio{" "}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 12H20.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 5.25L20.75 12L14 18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div
        className="circleServices"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-anchor-placement="top-center"
      ></div>
      <div className="circleServices2"></div>
    </div>
  );
}

export default Projects;
