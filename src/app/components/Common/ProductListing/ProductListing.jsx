import { useState, useEffect,Fragment } from "react";
import Image from "next/image";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import QuestionIcon from "../../Svg/QuestionIcon";
import RightPointingArrow from "../../Svg/RightPointingArrow";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  removeDecimalAboveNine,
  capitalize,
  getAttributeHalf,
} from "../../../_helpers/filter";

export default function ProductListing({ products }) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayedAttributes, setDisplayedAttributes] = useState(5);
  let initialDisplay = 5
  const [displayedAttributesCount, setDisplayedAttributesCount] = useState({})
  const [index, setIndex] = useState()
  const [attrname, setattrname] = useState('')
  const [loading, setloading] = useState('a')

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [products]);

  useEffect(() => {

    attrname && setDisplayedAttributes(displayedAttributes + 5)
    setloading(false)
  }, [attrname])

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

  const handleDisplayedAttributesCount = (productName, attrName) => {
    let obj = {...displayedAttributesCount}
    if (!obj[productName]) {
      obj[productName] = {};
    }
    if (!obj[productName][attrName]) {
      obj[productName][attrName] = 5;
    }
    let updatedPage = obj[productName][attrName] + initialDisplay || initialDisplay * 2
    // setDisplayedAttributesCount({ ...obj, [productName]:{...obj[productName],[attrName]: updatedPage} })
    // setDisplayedAttributesCount({ [productName]:{...obj[productName],[attrName]: updatedPage} })
    setDisplayedAttributesCount({ [productName]:{ [attrName]: updatedPage} })
  }
  return (
    <div className="best-product-wrapper">
      {/* New table layout
      <div className="product_listing_table">
        <table>
          <tbody>
            <tr>
              <th>xvcxv</th>
              <td>
                <span class="counter_style counter-one">4.7</span>

                < i class="star__icon ri-star-fill"></i>

              </td>
              <td>  <span class="counter_style counter-one">4.7</span></td>
              <td>  <span class="counter_style counter-one">4.7</span></td>
              <td>  <span class="counter_style counter-one">4.7</span></td>
              <td>  <span class="counter_style counter-one">4.7</span></td>
            </tr>
            <tr>
              <th>xvcxv</th>
              <td>
                <span class="counter_style counter-one">7.5</span>
              </td>
              <td>vxcv</td>
              <td>vxcv</td>
              <td>cxv</td>
              <td>xcvcx</td>
            </tr>
            <tr>
              <td class="p-0" colspan="6">
                <Accordion className="table-accordion new-acc_style">

                  <Accordion.Item
                    eventKey={index}
                    key={index}
                  >
                    <Accordion.Header as="div">
                       <div className="show-btn">
                        Show All{" "}
                        <i class="ri-add-line"></i>
                      </div>
                      <div className="hide-btn">
                        Hide All{" "}
                        <i class="ri-subtract-line"></i>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="product_listing_table">
                        <table>
                          <tbody>
                            <tr>
                              <th>xvcxv</th>
                              <td>
                                <span class="counter_style counter-two">4.7</span>

                              </td>
                              <td>  <span class="counter_style counter-two">4.7</span></td>
                              <td>  <span class="counter_style counter-two">4.7</span></td>
                              <td>  <span class="counter_style counter-two">4.7</span></td>
                              <td>  <span class="counter_style counter-two">4.7</span></td>
                            </tr>
                            <tr>
                              <th>xvcxv</th>
                              <td>
                                <span class="counter_style counter-two">7.5</span>
                              </td>
                              <td>vxcv</td>
                              <td>vxcv</td>
                              <td>cxv</td>
                              <td>xcvcx</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                </Accordion>


              </td>
            </tr>
          </tbody>
        </table>
      </div> */}




      {/* upadted with new ui */}

      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {finalProducts.map((product, index) => {
            return (
              <Fragment key={index}>
                <div className="best-product-listing" key={index}>
                  <div className="flex-box">
                    <div className="left_box">
                      <span className="ribbon-number">
                        <p>{product?.position}</p>
                        <RightPointingArrow />
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
                        <i className="ri-add-fill"></i>
                        <p className="compare-text">Compare</p>
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
                        <div className="col">.

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
                            <p className="version-availabel">
                              Versions available:
                            </p>
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
                          smartphone with cutting-edge features, a stunning
                          display, and exceptional performance.
                        </p>
                      </div>
                      <Row className="m-0">
                        <Accordion className="table-accordion product-listing-inner-content-table-accordion p-0 ">
                          <Accordion.Item
                            eventKey="1"
                            className="inner-accordion"
                          >
                            <Accordion.Header
                              as="div"
                              className="product-listing-inner-content-table-accordion-btn"
                              onClick={toggleHidden}
                            >
                              <div className="show-btn">
                                Show All{" "}
                                <i className="ri-arrow-down-s-line"></i>
                              </div>
                              <div className="hide-btn">
                                Hide All <i className="ri-arrow-up-s-line"></i>
                              </div>
                            </Accordion.Header>
                            <Row className="m-0">
                              <Col md={12} className="p-0">
                                <Accordion.Body className="d-flex inner-accordion flex-wrap">
                                  <div className="inline-ranking-section w-100">
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

                                  {/* New table layout */}
                                  {/* <div className="product_listing_table w-100">
                                    <table>
                                      <tbody>
                                        <tr>
                                          <th>OVERALL</th>
                                          <td>
                                            <span class="counter_style counter-one">{product.overall_score}</span>
                                            < i class="star__icon ri-star-fill"></i>
                                          </td>
                                          <td>  <span class="counter_style counter-one">4.7</span></td>
                                          <td>  <span class="counter_style counter-one">4.7</span></td>
                                          <td>  <span class="counter_style counter-one">4.7</span></td>
                                          <td>  <span class="counter_style counter-one">4.7</span></td>
                                        </tr>
                                        <tr>
                                          <th>Technical Score</th>
                                          <td>{product.technical_score}</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                        </tr>
                                        <tr>
                                          <th>User&rsquo;s Rating</th>
                                          <td>{product.reviews}</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                        </tr>
                                        <tr>
                                          <th>Expert reviews</th>
                                          <td>{product.expert_reviews_rating}</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                        </tr>
                                        <tr>
                                          <th>Ratio Quality-Price</th>
                                          <td>{product.ratio_quality_price_points}</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                        </tr>
                                        <tr>
                                          <th>Popularity</th>
                                          <td>{product.popularity_points}</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                          <td>null</td>
                                        </tr>
                                        <tr>
                                          <td class="p-0" colspan="6">
                                            <Accordion className="table-accordion new-acc_style">

                                              <Accordion.Item
                                                eventKey={index}
                                                key={index}
                                              >
                                                <Accordion.Header as="div">
                                                  <div className="show-btn">
                                                    Show All{" "}
                                                    <i class="ri-add-line"></i>
                                                  </div>
                                                  <div className="hide-btn">
                                                    Hide All{" "}
                                                    <i class="ri-subtract-line"></i>
                                                  </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                  <div className="product_listing_table">
                                                    <table>
                                                      <tbody>
                                                        {Object.keys(product.attributes)
                                                          .map((attribute, index) => {
                                                            return (
                                                              <>
                                                                <tr>
                                                                  <th>{attribute}</th>
                                                                  <td>
                                                                    <span class="counter_style counter-two">4.7</span>

                                                                  </td>
                                                                  <td>  <span class="counter_style counter-two">4.7</span></td>
                                                                  <td>  <span class="counter_style counter-two">4.7</span></td>
                                                                  <td>  <span class="counter_style counter-two">4.7</span></td>
                                                                  <td>  <span class="counter_style counter-two">4.7</span></td>
                                                                </tr>

                                                                {loading == false ? product.attributes[attribute].slice(0, (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay))
                                                                  .map(
                                                                    (
                                                                      attributeValues,
                                                                      valueIndex
                                                                    ) => {

                                                                      return (
                                                                        <>
                                                                          <tr>
                                                                            <th>{attributeValues.attribute}</th>
                                                                            <td>{capitalize(attributeValues.attribute_value)}</td>
                                                                            <td>null</td>
                                                                            <td>null</td>
                                                                            <td>null</td>
                                                                            <td>null</td>
                                                                          </tr>
                                                                        </>
                                                                      )
                                                                    }
                                                                  )
                                                                  : <Skeleton count={displayedAttributes} />
                                                                }

                                                                {loading == false ? product.attributes[attribute].length > (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay) && (
                                                                  <span className="show_more" onClick={() => {
                                                                    // setloading(true),
                                                                    //   setattrname(attribute + Math.random())
                                                                    // setIndex(index)
                                                                    handleDisplayedAttributesCount(product.name,attribute)
                                                                  }}>
                                                                    {"SHOW MORE "}
                                                                    <i className={`ri-${displayedAttributes < product.attributes[attribute].length ? 'add' : 'subtract'}-line`}></i>
                                                                  </span>
                                                                ) : ''}




                                                              </>


                                                            )
                                                          })}
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </Accordion.Body>
                                              </Accordion.Item>

                                            </Accordion>


                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div> */}



                                  {/* Left */}

                                  <Accordion className="table-accordion w-50 p-0 left-accordion">
                                    <Accordion.Item eventKey="4">
                                      <Accordion.Header as="div">
                                        <div>OVERALL</div>
                                        <span className="count">
                                          {product.overall_score}
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
                                        <div className="spec-section">
                                          <div className="spec-item">
                                            <div className="spec-col">
                                              <p className="query">
                                                Technical Score
                                                <QuestionIcon />
                                              </p>
                                            </div>
                                            <div className="spec-col">
                                              <span className="success-text">
                                                <b>{product.technical_score}</b>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="spec-item">
                                            <div className="spec-col">
                                              <p className="query">
                                                User&rsquo;s Rating
                                                <QuestionIcon />
                                              </p>
                                            </div>
                                            <div className="spec-col">
                                              <span>{product.reviews}</span>
                                            </div>
                                          </div>
                                          {product.expert_reviews_rating >
                                            0 && (
                                              <div className="spec-item">
                                                <div className="spec-col">
                                                  <p className="query text-ellipse">
                                                    Expert reviews
                                                    <QuestionIcon />
                                                  </p>
                                                </div>
                                                <div className="spec-col">
                                                  <span>
                                                    <b>
                                                      {
                                                        product.expert_reviews_rating
                                                      }
                                                    </b>
                                                  </span>
                                                </div>
                                              </div>
                                            )}

                                          <div className="spec-item">
                                            <div className="spec-col">
                                              <p className="query">
                                                Ratio Quality-Price
                                                <QuestionIcon />
                                              </p>
                                            </div>
                                            <div className="spec-col">
                                              <span>
                                                {
                                                  product.ratio_quality_price_points
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="spec-item">
                                            <div className="spec-col">
                                              <p className="query text-ellipse">
                                                Popularity
                                                <QuestionIcon />
                                              </p>
                                            </div>
                                            <div className="spec-col">
                                              <span>
                                                {product.popularity_points}
                                              </span>
                                            </div>
                                          </div>
                                          {product.moreData && product.moreData.length >= 5 && (
                                            <span className="show_more">
                                              SHOW MORE{" "}
                                              <i className="ri-add-line"></i>
                                            </span>
                                          )}
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                    {Object.keys(
                                      getAttributeHalf(product, "first")
                                    ).map((attribute, index) => {
                                      return (
                                        <Fragment key={index}>
                                          <Accordion.Item
                                            eventKey={index}
                                            key={index}
                                          >
                                            <Accordion.Header as="div">
                                              <div>{attribute}</div>
                                              <span className="count dark-color">
                                              {product.attributes[attribute][0].final_points.toFixed(1)}
                                              </span>
                                              <div className="show-btn" onClick={() => {
                                                // setDisplayedAttributes(5)
                                              }}>
                                                Show All{" "}
                                                <i className="ri-arrow-down-s-line"></i>
                                              </div>
                                              <div className="hide-btn" onClick={() => {
                                                // setDisplayedAttributes(5)
                                              }}>
                                                Hide All{" "}
                                                <i className="ri-arrow-up-s-line"></i>
                                              </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                              {/* {console.log(displayedAttributesCount)} */}
                                              {loading == false ? product.attributes[attribute].slice(0, (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay))
                                                .map(
                                                  (
                                                    attributeValues,
                                                    valueIndex
                                                  ) => {

                                                    return (
                                                      <Fragment key={valueIndex}>
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
                                                                <QuestionIcon />
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
                                                      </Fragment>
                                                    )
                                                  }
                                                )
                                                : <Skeleton count={displayedAttributes} />
                                              }

                                              {loading == false ? product.attributes[attribute].length > (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay) && (
                                                <span className="show_more" onClick={() => {
                                                  // setloading(true),
                                                    // setattrname(attribute + Math.random())
                                                    handleDisplayedAttributesCount(product.name,attribute)
                                                  // setIndex(index)
                                                }}>
                                                  {"SHOW MORE "}
                                                  <i className={`ri-${displayedAttributes < product.attributes[attribute].length ? 'add' : 'subtract'}-line`}></i>
                                                </span>
                                              ) : ''}
                                            </Accordion.Body>
                                          </Accordion.Item>
                                        </Fragment>
                                      );
                                    })}
                                  </Accordion>

                                  {/* Right */}
                                  <Accordion className="table-accordion w-50 p-0 right-accordion">
                                    {Object.keys(
                                      getAttributeHalf(product, "second")
                                    ).map((attribute, index) => {
                                      return (
                                        <Fragment key={index}>
                                          <Accordion.Item
                                            eventKey={index}
                                            key={index}
                                          >
                                            <Accordion.Header as="div">
                                              <div>{attribute}</div>
                                              {/* {console.log(product.attributes[attribute][0].final_points)}
                                              {console.log(attribute)} */}
                                              <span className="count">{product.attributes[attribute][0].final_points.toFixed(1)}</span>
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
                                              {loading == false ? product.attributes[
                                                attribute
                                              ].slice(0, (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay))
                                                .map(
                                                  (
                                                    attributeValues,
                                                    valueIndex
                                                  ) => (
                                                    <Fragment key={valueIndex}>
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
                                                              <QuestionIcon />
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
                                                    </Fragment>
                                                  )
                                                )

                                                : <Skeleton count={displayedAttributes} />
                                              }
                                              {loading == false ? product.attributes[attribute].length > (displayedAttributesCount[product.name] && displayedAttributesCount[product.name][attribute]?displayedAttributesCount[product.name][attribute]:initialDisplay) && (
                                                <span className="show_more" onClick={() => {
                                                  handleDisplayedAttributesCount(product.name,attribute)
                                                  // setattrname(attribute + Math.random())
                                                  // setIndex(index)
                                                }}>
                                                  {"SHOW MORE "}
                                                  <i className={`ri-${displayedAttributes < product.attributes[attribute].length ? 'add' : 'subtract'}-line`}></i>
                                                </span>
                                              ) : ''}
                                            </Accordion.Body>
                                          </Accordion.Item>
                                        </Fragment>
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
              </Fragment>
            );
          })}
        </>
      )}

      <div className="text-center d-none">
        <Button className="see_all_btn_filled">
          Load More Products <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
    </div>
  );
}
