import { useState } from "react";
import Image from "next/image";
import { Accordion, Button, Col, Row } from "react-bootstrap";

export default function ProductListing() {
  const [bar, setBar] = useState({ isHidden: false });
  function toggleHidden() {
    setBar({ isHidden: !bar.isHidden });
  }
  return (
    <div className="best-product-wrapper">
      <div className="best-product-listing">
        <span className="best-tag-product">Best For Children</span>
        <span className="number">1</span>
        <Row className="m-0">
          <Col md={12} lg={3} xl={2} className="border-right p-0">
            <p className="device-name">Samsung Galaxy S23 Ultra</p>
            <Image
              className="compare_image"
              src="/images/compare.png"
              width={0}
              height={0}
              alt=""
              sizes="100%"
            />
            {bar.isHidden ? (
              <div className="ranking bestpage-raking-section">
                <ul className="best-list-item">
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.1 in <small>Migliori Aspirapolvere senza sacco</small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.8 in <small>Virtual Headsets for</small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.8 in <small>Virtual Headsets for</small>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </Col>
          <Col md={12} lg={9} xl={10} className="p-0">
            <div className="product-listing-inner-content">
              <div className="col light-bg-color">
                <div className="product-score-container">
                  <div className="score-section">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>Overall Score</h5>
                    </div>
                  </div>
                  <div className="score-section color-change">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>Technical Score </h5>
                    </div>
                  </div>
                  <div className="score-section color-change">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>User’s Rating </h5>
                      <i>4824 Reviews</i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="best-price-section">
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
                  </ul>
                </div>
              </div>
              <div className="col light-bg-color">
                <div className="pros-corns-section pros">
                  <h6>Why to buy?</h6>
                  <ul>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="pros-corns-section corns">
                  <h6>Why to avoid?</h6>
                  <ul>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-100">
              <p className="best-product-content border-top p-2">
                The Samsung Galaxy S23 is a powerful and innovative smartphone
                with cutting-edge features, a stunning display, and exceptional
                performance.
              </p>
            </div>
            <Row className="m-0">
              <Accordion className="table-accordion p-0">
                <Accordion.Item eventKey="1" className="inner-accordion">
                  <Accordion.Header onClick={toggleHidden}>
                    <div className="show-btn">
                      Show All <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="hide-btn">
                      Hide All <i className="ri-arrow-up-s-line"></i>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="d-flex inner-accordion flex-wrap">
                    <Accordion className="table-accordion w-50 p-0 left-accordion">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                    <Accordion className="table-accordion w-50 p-0 right-accordion">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                    <Row className="w-100 m-0">
                      <Col md={12}>
                        <div className="alternatives pt-3">
                          <h6>Versions available:</h6>
                          <ul>
                            <li className="active">
                              <span>9 kg</span>
                            </li>
                            <li>
                              <span>10 kg</span>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="best-product-listing">
        <span className="best-tag-product">Best Ratio Quality Price</span>
        <span className="number">2</span>
        <Row className="m-0">
          <Col md={12} lg={3} xl={2} className="border-right p-0">
            <p className="device-name">Samsung Galaxy S23 Ultra</p>
            <Image
              className="compare_image"
              src="/images/compare.png"
              width={0}
              height={0}
              alt=""
              sizes="100%"
            />
            {bar.isHidden ? (
              <div className="ranking bestpage-raking-section">
                <ul className="best-list-item">
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.1 in <small>Migliori Aspirapolvere senza sacco</small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.8 in <small>Virtual Headsets for</small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Image
                        src="/images/double-arrow.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p>
                        N.8 in <small>Virtual Headsets for</small>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </Col>
          <Col md={12} lg={9} xl={10} className="p-0">
            <div className="product-listing-inner-content">
              <div className="col light-bg-color">
                <div className="product-score-container">
                  <div className="score-section">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>Overall Score</h5>
                    </div>
                  </div>
                  <div className="score-section color-change">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>Technical Score </h5>
                    </div>
                  </div>
                  <div className="score-section color-change">
                    <span className="count">8.5</span>
                    <div className="score-detail">
                      <h5>User’s Rating </h5>
                      <i>4824 Reviews</i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="best-price-section">
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
                  </ul>
                </div>
              </div>
              <div className="col light-bg-color">
                <div className="pros-corns-section pros">
                  <h6>Why to buy?</h6>
                  <ul>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                    <li>8 Accessories</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="pros-corns-section corns">
                  <h6>Why to avoid?</h6>
                  <ul>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                    <li>17.5h longer batt</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-100">
              <p className="best-product-content border-top p-2">
                The Samsung Galaxy S23 is a powerful and innovative smartphone
                with cutting-edge features, a stunning display, and exceptional
                performance.
              </p>
            </div>
            <Row className="m-0">
              <Accordion className="table-accordion p-0">
                <Accordion.Item eventKey="1" className="inner-accordion">
                  <Accordion.Header onClick={toggleHidden}>
                    <div className="show-btn">
                      Show All <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="hide-btn">
                      Hide All <i className="ri-arrow-up-s-line"></i>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="d-flex inner-accordion flex-wrap">
                    <Accordion className="table-accordion w-50 p-0 left-accordion">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                    <Accordion className="table-accordion w-50 p-0 right-accordion">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                                <h5 className="text-ellipse">
                                  Autonomy in Turbo Mode
                                </h5>
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
                                <h5 className="text-ellipse">
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
                    <Row className="w-100 m-0">
                      <Col md={12}>
                        <div className="alternatives pt-3">
                          <h6>Versions available:</h6>
                          <ul>
                            <li className="active">
                              <span>9 kg</span>
                            </li>
                            <li>
                              <span>10 kg</span>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="text-center">
        <Button className="see_all_btn_filled">
          Load More Products <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
    </div>
  );
}
