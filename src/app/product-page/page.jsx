"use client";
import Image from "next/image";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import ThumbSlider from "../components/Common/ThumbSlider/ThumbSlider";
import Compare from "../components/Common/Compare/Compare";
import ReviewSlider from "../components/Common/ReviewSlider/reviewSlider";
import ComparisonsSlider from "../components/Common/ComparisonsSlider/comparisonsSlider";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import MobileAccordion from "../components/Common/MobileAccordion/mobileAccordion";
import ProductSlider from "../components/Common/ProductSlider/productSlider";
import CompareTable from "../components/Common/CompareTable/CompareTable";
import MobileCompareTable from "../components/Common/MobileCompareTable/MobileCompareTable";

export default function ProductPage() {
  return (
    <>
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb />
            </Col>
            <Col md={12} lg={12} xl={9}>
              <h1 className="site-main-heading">
                Samsung New VR Headset Oculus 2.0
              </h1>
            </Col>
            <Col md={12} lg={12} xl={3}>
              <div className="user-section">
                <Image
                  src="/images/user.png"
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
                <div className="user-detail">
                  <h6>Chiara Fonzi</h6>
                  <span>5 maggio 2023</span>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <p className="product-inner-content">
                We’ve analyzed 24 784 user’s reviews and 45 technical data to
                find out if the Samsung New VR Headset Oculus 2.0 is worth
                buying. Let’s check the results!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-score-section">
        <Container>
          <div className="product-score-container">
            <div className="score-section">
              <span className="count">8.9</span>
              <div className="score-detail">
                <h5>
                  Overall Score
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                    </svg>
                  </span>
                </h5>
                <div className="score-bar">
                  <span className="fill-bar"></span>
                </div>
                <small>
                  Average (better than <i>58%</i>)
                </small>
              </div>
            </div>
            <div className="score-section color-change">
              <span className="count">9.4</span>
              <div className="score-detail">
                <h5>
                  Technical Score{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                    </svg>
                  </span>
                </h5>
                <div className="score-bar">
                  <span className="fill-bar"></span>
                </div>
                <small>
                  Amazing (better than <i>94%</i>)
                </small>
              </div>
            </div>
            <div className="score-section color-change">
              <span className="count">8.7</span>
              <div className="score-detail">
                <h5>
                  User’s Rating{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                    </svg>
                  </span>
                </h5>
                <div className="score-bar">
                  <span className="fill-bar"></span>
                </div>
                <small>
                  Very good (better than <i>84%</i>)
                </small>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mb-3">
        <Container>
          <Row>
            <Col md={12} lg={12} xl={4}>
              <ThumbSlider />
            </Col>
            <Col lg={6} md={6} xl={4}>
              <div className="best-price-section">
                <h1 className="site-main-heading">Best Prices</h1>
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
                <Button className="see_all_btn">
                  See All <i className="ri-arrow-down-s-line"></i>
                </Button>
              </div>
            </Col>
            <Col lg={6} md={6} xl={4}>
              <div className="best-price-section ranking">
                <h1 className="site-main-heading">Best Rankings</h1>
                <ul className="best-list-item">
                  <li>
                    <p>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      N.1 in <small>Migliori Aspirapolvere senza sacco</small>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      N.8 in <small>Virtual Headsets for</small>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      N.8 in <small>Virtual Headsets for</small>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      N.8 in <small>Virtual Headsets for</small>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      N.8 in <small>Virtual Headsets for</small>
                    </p>
                  </li>
                </ul>
                <Button className="see_all_btn">
                  See All <i className="ri-arrow-down-s-line"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="site-main-heading">Technical Specifications</h1>
            </Col>
            <Col md={12} xs={12}>
              <Row className="m-0">
                <Accordion className="table-accordion w-50 p-0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count dark-color">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <div className="hover_container">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                  </svg>
                                </span>
                                <p className="display-content">
                                  Battery power, or battery capacity, represents
                                  the amount of electrical energy that a battery
                                  can store. More battery power can be an
                                  indication of longer battery life.
                                </p>
                              </div>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="table-accordion w-50 p-0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h6>Technology</h6>
                      <span className="count">8.5</span>
                      <div className="show-btn">
                        Show All <i className="ri-arrow-down-s-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All <i className="ri-arrow-up-s-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-section">
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span className="success-text">
                              <b>300 W</b> (better than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>Autonomy in Turbo Mode</h5>
                          </div>
                          <div className="spec-col">
                            <span className="danger-text">
                              <b>300 W</b> (worse than 89%)
                            </span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Power
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                        <div className="spec-item">
                          <div className="spec-col">
                            <h5>
                              Autonomy in Turbo Mode
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                </svg>
                              </span>
                            </h5>
                          </div>
                          <div className="spec-col">
                            <span>25 minutes</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">
                Samsung New VR Headset Oculus 2.0 VS Average Vacuum Cleaner
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Tabs
                defaultActiveKey="tab-1"
                id="Review-tab"
                className="site_tabs graph-tab"
              >
                <Tab eventKey="tab-1" title="iPhone 13">
                  <Image
                    className="site_image"
                    src="/images/chart.png"
                    width={0}
                    height={0}
                    alt=""
                    sizes="100%"
                  />
                </Tab>
                <Tab eventKey="tab-2" title="Average">
                  <Image
                    className="site_image"
                    src="/images/chart.png"
                    width={0}
                    height={0}
                    alt=""
                    sizes="100%"
                  />
                </Tab>
              </Tabs>
            </Col>
            <Col md={12} lg={6}>
              <Accordion defaultActiveKey="1" className="compare-accordion p-0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h6>Why is iPhone 13 BETTER than average?</h6>
                    <div className="show-btn">
                      Show All <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="hide-btn">
                      Hide All <i className="ri-arrow-up-s-line"></i>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Tab.Container
                      id="compare-left-tabs"
                      defaultActiveKey="tab-1"
                    >
                      <Row>
                        <Col md={8} xl={9}>
                          <Tab.Content className="compare-tab-content">
                            <Tab.Pane eventKey="tab-1">
                              <ul>
                                <li>
                                  17.5h longer battery life{" "}
                                  <span className="question-marker-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                    </svg>
                                  </span>
                                  <small className="d-block">
                                    <i>18W vs 12W </i>
                                  </small>
                                </li>
                                <li>Has voice commands</li>
                                <li>Has an in-line control panel</li>
                                <li>17.5h longer battery life</li>
                                <li>Has voice commands</li>
                                <li>
                                  17.5h longer battery life
                                  <small className="d-block">
                                    <i>18W vs 12W </i>
                                  </small>
                                </li>
                              </ul>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                        <Col md={4} xl={3}>
                          <div className="overlay">
                            <Nav className="flex-column compare-nav">
                              <Nav.Item>
                                <Nav.Link eventKey="tab-1">TOTAL</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab-2">DESIGN</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab-3">DISPLAY</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab-4">
                                  PERFORMANCE
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab-5">AUDIO</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab-6">BATTERY</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">
                Samsung New VR Headset Oculus 2.0 VS All Vaccuum Cleaners
              </h2>
            </Col>
            <Col md={12}>
              <div className="filtered-data-select justify-content-start">
                <span>Compare:</span>
                <Form.Select aria-label="Default select example">
                  <option>Power</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4} lg={3}>
              <p className="text-end para_content_text">
                Power is since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. ever
                galley of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col md={8} lg={9}>
              <Image
                className="graph-bar"
                src="/images/graph-bar.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Who is it For</h2>
            </Col>
            <Col md={6}>
              <div className="pros-corns-section pros">
                <div className="pros-header">
                  Who SHOULD BUY Samsung New VR Headset Oculus 2.0?
                </div>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="pros-corns-section corns">
                <div className="pros-header">
                  Who SHOULD BUY Samsung New VR Headset Oculus 2.0?
                </div>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">
                Review of Samsung New VR Headset Oculus 2.0
              </h2>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4} lg={2}>
              <div className="outline-section">
                <h6>Outline</h6>
                <ol>
                  <li>Overall</li>
                  <li>Technical</li>
                  <li>VS Average</li>
                  <li className="outline-active">
                    Review
                    <ol>
                      <li>Subtile</li>
                      <li>Subtile</li>
                    </ol>
                  </li>
                  <li>Pros/Cons</li>
                </ol>
              </div>
            </Col>
            <Col md={8} lg={8}>
              <p className="review-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry standard
                dummy text Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text Ipsum has been the industry
                standard dummy text
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text
              </p>
              <Row className="mt-3">
                <Col md={12} lg={6}>
                  <div className="best-price-section mobile-best-price-section">
                    <h1 className="site-main-heading">Best Prices</h1>
                    <ul className="best-list-item">
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                    </ul>
                    <Button className="see_all_btn">
                      See All <i className="ri-arrow-down-s-line"></i>
                    </Button>
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="best-price-section mobile-best-price-section ranking">
                    <h1 className="site-main-heading">Best Rankings</h1>
                    <ul className="best-list-item">
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.1 in{" "}
                          <small>Migliori Aspirapolvere senza sacco</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.8 in <small>Virtual Headsets for</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.8 in <small>Virtual Headsets for</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.8 in <small>Virtual Headsets for</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.8 in <small>Virtual Headsets for</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <Image
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          N.8 in <small>Virtual Headsets for</small>
                        </p>
                      </li>
                    </ul>
                    <Button className="see_all_btn">
                      See All <i className="ri-arrow-down-s-line"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={2}>
              <div className="ranking-section">
                <h2 className="site-main-heading">In Rankings</h2>
                <div className="product-card card-mobile">
                  <Image
                    src="/images/product-image.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <h6>Best Monitors</h6>
                </div>
                <ProductSlider className="slider-show" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <div className="pros-corns-section pros light-background">
                <div className="pros-header">Pros</div>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="pros-corns-section corns light-background">
                <div className="pros-header">Corns</div>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li>
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">3rd Party Reviews</h2>
            </Col>
            <Col md={12} className="site_tabs_hide">
              <Tabs
                defaultActiveKey="tab-1"
                id="Review-tab"
                className="mb-3 site_tabs site_tabs_hide"
              >
                <Tab eventKey="tab-1" title="User’s Reviews">
                  <Row>
                    <Col md={2}>
                      <Image
                        src="/images/review.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Col>
                    <Col md={2}>
                      <Image
                        src="/images/review.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab-2" title="Video Reviews"></Tab>
                <Tab eventKey="tab-3" title="Expert Reviews"></Tab>
              </Tabs>
            </Col>
            <Col md={12} className="">
              <MobileAccordion />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Reviews of Our Users</h2>
              <p className="no-review">No reviews yet.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <div className="form-container">
                <h2 className="heading-primary secondary">Leave a comment</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <Row className="align-items-end detail-form">
                  <Col lg={8} md={12}>
                    <Form className="form mt-4">
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label className="form-label">Name *</Form.Label>
                          <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label className="form-label">
                            Email *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                          />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label className="form-label">
                            Comment *
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "200px" }}
                          />
                        </Form.Group>
                      </Row>
                      <Button
                        className="site_main_btn"
                        variant="primary"
                        type="submit"
                      >
                        Send Review
                      </Button>
                    </Form>
                  </Col>
                  <Col lg={4} md={12}>
                    <div className="rating-section">
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                      <div className="rating-start">
                        <div className="star">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <span>General</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Best Alternatives</h2>
              <ReviewSlider />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="table-section-mobile">
            <Col md={12}>
              <CompareTable />
            </Col>
          </Row>
          <Row className="table-section-desktop p-0">
            <Col md={12} className="p-0">
              <MobileCompareTable />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3 ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Compare With Other Products</h2>
              <Compare />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3 mobile-popular-comparison">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Popular comparisons</h2>
              <ComparisonsSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
