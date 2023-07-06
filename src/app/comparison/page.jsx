"use client";
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Accordion,
  Tab,
  Nav,
  Form,
  Button,
  Tabs,
} from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import Modal from "../components/Modal/Modal";
import CompareTable from "../components/Common/CompareTable/CompareTable";
import Image from "next/image";
import Compare from "../components/Common/Compare/Compare";
import MobileCompareTable from "../components/Common/MobileCompareTable/MobileCompareTable";
import MobileComparisonTool from "../components/Common/MobileComparisonTool/MobileComparisonTool";

export default function Comparison() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb  firstPageName="Iteck’s Store"
                secondPageName="Samsung New VR Headset Oculus 2.0"/>
            </Col>
            <Col md={12}>
              <h1 className="site-main-heading">
              Samsung Galaxy S23 Ultra vs Iphone XS vs Average Vacuum Cleaner
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={12} className="table-section-mobile">
              <div className="comparison-tool">
                <div className="comparison-wrapper">
                  <div className="comparison-tag">Winner</div>
                  <div className="comparison-card">
                    <Image
                      src="/images/compare.png"
                      width={0}
                      height={0}
                      alt=""
                      sizes="100%"
                    />
                    <div className="comparison-card-footer">
                      <p>Samsung Galaxy S23 Ultra </p>
                    </div>
                    <span className="count">8.5</span>
                    <i className="ri-close-circle-line close_icon"></i>
                  </div>
                  <div className="comparison-product-spec">
                    <div className="comparison-product-item">
                      <Image
                        src="/images/amazon.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <span>155.87 €</span>
                    </div>
                    <div className="comparison-product-item">
                      <Image
                        src="/images/amazon.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <span>155.87 €</span>
                    </div>
                  </div>
                </div>
                <div className="comparison-vs-img">
                  <Image src="/images/vs.svg" width={118} height={40} alt="" />
                </div>
                <div className="comparison-wrapper">
                  <div className="comparison-card">
                    <Image
                      src="/images/compare.png"
                      width={0}
                      height={0}
                      alt=""
                      sizes="100%"
                    />
                    <div className="comparison-card-footer">
                      <p>Samsung Galaxy S23 Ultra </p>
                    </div>
                    <span className="count">8.5</span>
                    <i className="ri-close-circle-line close_icon"></i>
                  </div>
                  <div className="comparison-product-spec">
                    <div className="comparison-product-item">
                      <Image
                        src="/images/amazon.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <span>155.87 €</span>
                    </div>
                    <div className="comparison-product-item">
                      <Image
                        src="/images/amazon.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <span>155.87 €</span>
                    </div>
                  </div>
                </div>
                <div className="comparison-vs-img">
                  <Image src="/images/vs.svg" width={118} height={40} alt="" />
                </div>
                <div className="comparison-wrapper">
                  <div className="add-product" onClick={() => setIsOpen(true)}>
                    <div className="add-product-inner-content">
                      <Image
                        src="/images/add_icon.svg"
                        width={50}
                        height={50}
                        alt=""
                      />
                      <p>add a product to compare</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} className="table-section-desktop">
              <MobileComparisonTool />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Graph Comparison</h2>
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
                    <div className="iphoneWorse">Why is iPhone 13 BETTER than average?</div>
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
                        <Col md={8} xl={8}>
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
                        <Col md={4} xl={4}>
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
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="iphoneWorse">Why is iPhone 13 WORSE than others?</div>
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
                        <Col md={8} xl={8}>
                          <Tab.Content className="compare-tab-content">
                            <Tab.Pane eventKey="tab-1">
                              <ul className="compare-crons">
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
                        <Col md={4} xl={4}>
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
              <h2 className="site-main-heading">Table Comparison</h2>
            </Col>
            <Col md={12} className="table-section-mobile">
              <CompareTable />
            </Col>
            <Col md={12} className="table-section-desktop">
              <MobileCompareTable />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Compare Other Products</h2>
              <Compare />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">
                Comparison With All Other Vaccuum Cleaners
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
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
