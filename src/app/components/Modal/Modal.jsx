import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Compare from "../Common/Compare/Compare";
import Image from "next/image";

const Modal = ({ setIsOpen }) => {
  const product = [
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    }
  ];
  return (
    <section className="add-product-modal">
      <div className="add-product-modal-header">
        <Container>
          <Row>
            <Col md={12}>
              <span
                className="d-block text-end"
                onClick={() => setIsOpen(false)}
              >
                <i className="ri-close-circle-line close_icon"></i>
              </span>
            </Col>
            <Col md={12}>
              <h2 className="site-main-heading">Add to Comparison</h2>
              <Compare />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-4">
        <Row>
          <Col md={12}>
            <h2 className="site-main-heading">Often Compared With...</h2>
          </Col>
        </Row>
        <Row>
          {product.map(function (item, index) {
            return (
              <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3" key={index}>
                <div className="review-wrapper">
                  <div className="review-card">
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <div className="footer_content">
                      <span>{item.reviewName}</span>
                      <p>{item.reviewContent}</p>
                    </div>
                    <span className="rating_count">{item.rating}</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Modal;
