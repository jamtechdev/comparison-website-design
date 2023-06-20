import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Compare from "../Common/Compare/Compare";
import Image from "next/image";

const Modal = ({ setIsOpen }) => {
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
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xs={6} className="my-3">
            <div className="review-card">
              <Image
                src="/images/review-image.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
              />
              <div className="footer_content">
                <h6>Klarstein 22X 58 Imagine</h6>
                <p>Kitchen Robots</p>
              </div>
              <span className="rating_count">8.0</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Modal;
