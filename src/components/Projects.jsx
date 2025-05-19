import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import projectImg1 from "asset/imgs/services/service (1).png";
import projectImg2 from "asset/imgs/services/service (2).png";
import projectImg3 from "asset/imgs/services/service (3).png";
import projectImg4 from "asset/imgs/services/service (4).png";
import projectImg6 from "asset/imgs/services/service (6).png";
import projectImg7 from "asset/imgs/services/service (7).png";
import projectImg8 from "asset/imgs/services/service (8).png";
import projectImg9 from "asset/imgs/services/service (9).png";
import projectImg10 from "asset/imgs/services/service (10).png";

import CircleBtn from "./CircleBtn";
import { Element } from "react-scroll";
import Splitting from "splitting";
function Projects() {
  const [Show, setShow] = useState(null);

  const content = [
    {
      title: "Al-Amira modern",
      content: "E-commerce store in France",
      link: "http://alamira-moderne.com",
      img: projectImg8,
    },
    {
      title: "Gozlan Jwellery",
      content: "Jwellery E-commerce store based on turkey",
      link: "https://sandy-ali-basha.github.io/LKGT/",
      img: projectImg7,
    },
    {
      title: "kanaangroup",
      content:
        "At KANAAN GROUP, we offer premium gold and diamond products with unmatched service and expertise.",
      link: "https://kanaangroup.net/",
      img: projectImg9,
    },
    {
      title: "LKGT",
      content: "ALKHWAM Global Tech",
      link: "https://sandy-ali-basha.github.io/LKGT/",
      img: projectImg10,
    },
    {
      title: "EIT Developers",
      content: "Software development team",
      link: "https://www.elite-it-team.com/",
      img: projectImg1,
    },
    {
      title: "Plus besmile",
      content: "Insurance company in germany",
      link: "https://plus-besmile.de",
      img: projectImg2,
    },
    {
      title: "Miro",
      content: "Team's visual platform website",
      link: "https://miro-psi.vercel.app/",
      img: projectImg3,
    },
    {
      title: "LKGT",
      content: "ALKHWAM Global Tech",
      link: "https://sandy-ali-basha.github.io/LKGT/",
      img: projectImg4,
    },

    {
      title: "LKGT",
      content: "ALKHWAM Global Tech",
      link: "https://sandy-ali-basha.github.io/LKGT/",
      img: projectImg6,
    },
  ];
  const myRef = useRef();

  useEffect(() => {
    Splitting({ target: myRef.current });
  }, []);

  return (
    <Element name="Portfolio" className="my-5 py-5 position-relative">
      <h3
        className="text-center fs-1 fw-bold mx-auto mt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div ref={myRef} data-splitting="words">
          Some of our selected <br />
          <span className="text-primary">projects</span>
        </div>
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
      <div className="circleServices"></div>
      <div className="circleServices2 "></div>
    </Element>
  );
}

export default Projects;
