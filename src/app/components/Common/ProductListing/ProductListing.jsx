import { useState } from "react";
import Image from "next/image";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import {
  removeDecimalAboveNine,
  capitalize,
  getAttributeHalf,
} from "../../../_helpers/filter";

export default function ProductListing({ products }) {
  const productsWithAttributeGroup = {};
  products.forEach((product) => {
    const productCopy = { ...product };
    const productAttributes = {};
    product.attributes.forEach((attribute) => {
      const categoryName = attribute.attribute_category.name;
      if (!productAttributes[categoryName]) {
        productAttributes[categoryName] = [];
      }
      productAttributes[categoryName].push(attribute);
    });
    productCopy.attributes = productAttributes;
    productsWithAttributeGroup[product.name] = productCopy;
  });
  const finalProducts = Object.values(productsWithAttributeGroup);
  const [bar, setBar] = useState({ isHidden: false });
  function toggleHidden() {
    setBar({ isHidden: !bar.isHidden });
  }
  const [bar1, setBar1] = useState({ isHidden1: false });
  function toggleHidden2() {
    setBar1({ isHidden1: !bar1.isHidden1 });
  }
  return (
    <div className="best-product-wrapper">
      {finalProducts.map((product, index) => {
        return (
          <>
            <div className="best-product-listing">
              <div className="flex-box">
                <div className="left_box">
                  <span className="ribbon-number">
                    <p>{index + 1}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="25"
                      viewBox="0 0 37 25"
                      fill="none"
                    >
                      <path
                        d="M0 3.8147e-06L37 0V25L0 25L6.01303 12.5L0 3.8147e-06Z"
                        fill="#ECF2FB"
                      />
                      <path
                        d="M0.795364 0.500004L36.5 0.5V24.5L0.795364 24.5L6.46361 12.7167L6.56787 12.5L6.46361 12.2833L0.795364 0.500004Z"
                        stroke="#27304E"
                        stroke-opacity="0.3"
                      />
                    </svg>
                  </span>
                  <div className="box_content light-bg-color">
                    {product?.name}
                  </div>
                </div>
                <span className="best-tag-product">Best For Children</span>
              </div>

              <Row className="m-0">
                <Col
                  md={12}
                  lg={3}
                  xl={2}
                  className="border-right p-0 product-listing-width-20"
                >
                  <span className="compare-section-plus">
                    <i class="ri-add-fill"></i>
                    <p class="compare-text">Compare</p>
                  </span>
                  <Image
                    className="compare_image"
                    src="/images/compare.png"
                    width={0}
                    height={0}
                    alt=""
                    sizes="100%"
                  />
                </Col>
                <Col
                  md={12}
                  lg={9}
                  xl={10}
                  className="p-0 product-listing-width-80"
                >
                  <div className="product-listing-inner-content">
                    <div className="col light-bg-color">
                      <div className="product-score-container">
                        <div className="score-section">
                          <span className="count">
                            {removeDecimalAboveNine(product.overall_score)}
                          </span>
                          <div className="score-detail">
                            <span>Overall Score</span>
                          </div>
                        </div>
                        <div className="score-section color-change">
                          <span className="count">
                            {product.technical_score}
                          </span>
                          <div className="score-detail">
                            <span>Technical Score </span>
                          </div>
                        </div>
                        <div className="score-section color-change">
                          <span className="count">{product.reviews}</span>
                          <div className="score-detail">
                            <span>User’s Rating </span>
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
                        <p className="buy-avoid">Why to buy?</p>
                        <ul>
                          <li>
                            <span> 8 Accessories</span>{" "}
                          </li>
                          <li>
                            <span> 8 Accessories</span>{" "}
                          </li>
                          <li>
                            <span> 8 Accessories</span>{" "}
                          </li>
                          <li>
                            <span> 8 Accessories</span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="pros-corns-section corns">
                        <p className="buy-avoid">Why to avoid?</p>
                        <ul>
                          <li>
                            <span>17.5h longer batt</span>
                          </li>
                          <li>
                            <span>17.5h longer batt</span>
                          </li>
                          <li>
                            <span>17.5h longer batt</span>
                          </li>
                          <li>
                            <span>17.5h longer batt</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="p-0">
                  <Row className="w-100 m-0 alternatives-border-top">
                    <Col md={12}>
                      <div className="alternatives">
                        <p className="version-availabel">Versions available:</p>
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
                  <div className="w-100">
                    <p className="best-product-content border-top p-2">
                      The Samsung Galaxy S23 is a powerful and innovative
                      smartphone with cutting-edge features, a stunning display,
                      and exceptional performance.
                    </p>
                  </div>
                  <Row className="m-0">
                    <Accordion className="table-accordion product-listing-inner-content-table-accordion p-0 ">
                      <Accordion.Item eventKey="1" className="inner-accordion">
                        <Accordion.Header
                          as="div"
                          className="product-listing-inner-content-table-accordion-btn"
                          onClick={toggleHidden}
                        >
                          <div className="show-btn">
                            Show All <i className="ri-arrow-down-s-line"></i>
                          </div>
                          <div className="hide-btn">
                            Hide All <i className="ri-arrow-up-s-line"></i>
                          </div>
                        </Accordion.Header>
                        <Row className="m-0">
                          <Col md={12} className="p-0">
                            <Accordion.Body className="d-flex inner-accordion flex-wrap">
                              <div class="inline-ranking-section w-100">
                                <span className="ranking-heading">
                                  RANKINGS
                                </span>
                                <Image
                                  src="/images/double-arrow.png"
                                  width={0}
                                  height={0}
                                  sizes="100%"
                                  alt=""
                                />
                                <p>
                                  <span>#1 in</span>Best smartphones
                                </p>
                                <p>
                                  <span>#2 in</span>Best smartphones for
                                  children
                                </p>
                              </div>
                              {/* Left */}
                              <Accordion className="table-accordion w-50 p-0 left-accordion">
                                {Object.keys(
                                  getAttributeHalf(product, "first")
                                ).map((attribute, index) => {
                                  return (
                                    <>
                                      <Accordion.Item
                                        eventKey={index}
                                        key={index}
                                      >
                                        <Accordion.Header as="div">
                                          <div>{attribute}</div>
                                          <span className="count dark-color">
                                            8.5
                                          </span>
                                          <div className="show-btn">
                                            Show All{" "}
                                            <i className="ri-arrow-down-s-line"></i>
                                          </div>
                                          <div className="hide-btn">
                                            Hide All{" "}
                                            <i className="ri-arrow-up-s-line"></i>
                                          </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          {product.attributes[attribute].map(
                                            (attributeValues, valueIndex) => (
                                              <>
                                                <div
                                                  className="spec-section"
                                                  key={valueIndex}
                                                >
                                                  <div className="spec-item">
                                                    <div className="spec-col">
                                                      <p className="query">
                                                        {
                                                          attributeValues.attribute
                                                        }
                                                        <span>
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                          >
                                                            <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                                          </svg>
                                                        </span>
                                                      </p>
                                                    </div>
                                                    <div className="spec-col">
                                                      <span className="success-text">
                                                        <b>
                                                          {capitalize(
                                                            attributeValues.attribute_value
                                                          )}
                                                        </b>
                                                        {/* (better than 89%) */}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            )
                                          )}
                                          <span class="show_more">
                                            SHOW MORE{" "}
                                            <i class="ri-add-line"></i>
                                          </span>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </>
                                  );
                                })}
                                {/* <Accordion.Item eventKey="2">
                                  <Accordion.Header as="div">
                                    <div>Technology</div>
                                    <span className="count">8.5</span>
                                    <div className="show-btn">
                                      Show All{" "}
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                    <div className="hide-btn">
                                      Hide All{" "}
                                      <i className="ri-arrow-up-s-line"></i>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="spec-section">
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Power
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span className="success-text">
                                            <b>300 W</b> (better than 89%)
                                          </span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Autonomy
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query text-ellipse">
                                            Autonomy in Turbo Mode
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span className="danger-text">
                                            <b>300 W</b> (worse than 89%)
                                          </span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Power
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query text-ellipse">
                                            Autonomy in Turbo Mode
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <span class="show_more">
                                        SHOW MORE <i class="ri-add-line"></i>
                                      </span>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                  <Accordion.Header as="div">
                                    <div>Technology</div>
                                    <span className="count">8.5</span>
                                    <div className="show-btn">
                                      Show All{" "}
                                      <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                    <div className="hide-btn">
                                      Hide All{" "}
                                      <i className="ri-arrow-up-s-line"></i>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="spec-section">
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Power
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span className="success-text">
                                            <b>300 W</b> (better than 89%)
                                          </span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Autonomy
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query text-ellipse">
                                            Autonomy in Turbo Mode
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span className="danger-text">
                                            <b>300 W</b> (worse than 89%)
                                          </span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query">
                                            Power
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <div className="spec-item">
                                        <div className="spec-col">
                                          <p className="query text-ellipse">
                                            Autonomy in Turbo Mode
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                              </svg>
                                            </span>
                                          </p>
                                        </div>
                                        <div className="spec-col">
                                          <span>25 minutes</span>
                                        </div>
                                      </div>
                                      <span class="show_more">
                                        SHOW MORE <i class="ri-add-line"></i>
                                      </span>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item> */}
                              </Accordion>

                              {/* Right */}
                              <Accordion className="table-accordion w-50 p-0 right-accordion">
                                {Object.keys(
                                  getAttributeHalf(product, "second")
                                ).map((attribute, index) => {
                                  return (
                                    <>
                                      <Accordion.Item
                                        eventKey={index}
                                        key={index}
                                      >
                                        <Accordion.Header as="div">
                                          <div>{attribute}</div>
                                          <span className="count">8.5</span>
                                          <div className="show-btn">
                                            Show All{" "}
                                            <i className="ri-arrow-down-s-line"></i>
                                          </div>
                                          <div className="hide-btn">
                                            Hide All{" "}
                                            <i className="ri-arrow-up-s-line"></i>
                                          </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          {product.attributes[attribute].map(
                                            (attributeValues, valueIndex) => (
                                              <>
                                                <div
                                                  className="spec-section"
                                                  key={valueIndex}
                                                >
                                                  <div className="spec-item">
                                                    <div className="spec-col">
                                                      <p className="query">
                                                        {
                                                          attributeValues.attribute
                                                        }
                                                        <span>
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                          >
                                                            <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                                          </svg>
                                                        </span>
                                                      </p>
                                                    </div>
                                                    <div className="spec-col">
                                                      <span className="success-text">
                                                        <b>
                                                          {capitalize(
                                                            attributeValues.attribute_value
                                                          )}
                                                        </b>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            )
                                          )}
                                          <span class="show_more">
                                            SHOW MORE{" "}
                                            <i class="ri-add-line"></i>
                                          </span>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </>
                                  );
                                })}
                              </Accordion>
                            </Accordion.Body>
                          </Col>
                        </Row>
                      </Accordion.Item>
                    </Accordion>
                  </Row>
                </Col>
              </Row>
            </div>
          </>
        );
      })}
      <div className="text-center d-none">
        <Button className="see_all_btn_filled">
          Load More Products <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
    </div>
  );
}
