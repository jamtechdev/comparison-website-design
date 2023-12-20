/* eslint-disable @next/next/no-img-element */
import React, { useState, Fragment } from "react";
import { Accordion, Col, Row, Button, Form } from "react-bootstrap";
import QuestionIcon from "../../../Svg/QuestionIcon";
import Questiontool from "../../../Svg/Questiontool";
import ProsConsToolTip from "../../../Svg/ProsConsToolTip";

import RightPointingArrow from "../../../Svg/RightPointingArrow";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  removeDecimalAboveNine,
  capitalize,
  getAttributeHalf,
} from "../../../../_helpers/filter";

const Product = React.memo(({ product }) => {
  let initialDisplay = 5;
  const [displayedAttributesCount, setDisplayedAttributesCount] = useState({});
  const [loading, setloading] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const [showFullData, setShowFullData] = useState(false);

  const toggleShowFullData = () => {
    setShowFullData(!showFullData);
  };

  const [bar, setBar] = useState({ isHidden: false });
  function toggleHidden() {
    setBar({ isHidden: !bar.isHidden });
  }

  const handleDisplayedAttributesCount = (productName, attrName) => {
    let obj = { ...displayedAttributesCount };
    if (!obj[productName]) {
      obj[productName] = {};
    }
    if (!obj[productName][attrName]) {
      obj[productName][attrName] = 5;
    }
    let updatedPage =
      obj[productName][attrName] + initialDisplay || initialDisplay * 2;

    setDisplayedAttributesCount({ [productName]: { [attrName]: updatedPage } });
  };
  // max-cahcaracter
  // overallScore color by its number of scores
  const getColorBasedOnScore = (score) => {
    if (score >= 7.5) {
      return "#093673";
    } else if (score >= 5 && score < 7.5) {
      return "#437ECE";
    } else {
      return "#85B2F1";
    }
  };
  const overallScoreColor = getColorBasedOnScore(
    removeDecimalAboveNine(product?.overall_score)
  );
  const technicalScoreColor = getColorBasedOnScore(product?.technical_score);
  const userRatingColor = getColorBasedOnScore(product?.reviews);
  const popularityColor = getColorBasedOnScore(product?.popularity_points);

  // filter a value which numeric or string
  const renderValue = (item) => {
    const numericValue = parseFloat(item?.value);

    if (!isNaN(numericValue)) {
      return `(${numericValue} ${item.unit ? item.unit : ""})`;
    }

    return ""; // Return null for strings
  };
  return (
    <Fragment>
      <div className="best-product-listing">
        <div className="flex-box">
          <div className="left_box">
            <span className="ribbon-number">
              <p>{product?.position}</p>
              <RightPointingArrow />
            </span>
            <div className="box_content light-bg-color">{product?.name}</div>
          </div>

          {product?.assigned_title && (
            <span className="best-tag-product">{product?.assigned_title}</span>
          )}
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

            <img
              className="compare_image"
              src={
                product?.main_image
                  ? product?.main_image
                  : "/images/nofound.png"
              }
              width={0}
              height={0}
              alt=""
              sizes="100%"
            />
          </Col>
          <Col md={12} lg={9} xl={10} className="p-0 product-listing-width-80">
            <div className="product-listing-inner-content">
              <div className="col light-bg-color">
                <div className="product-score-container">
                  {/* Overall Score */}
                  <div className="score-section">
                    <span
                      className="count"
                      style={{ background: overallScoreColor }}
                    >
                      {removeDecimalAboveNine(product.overall_score)}
                    </span>
                    {product?.overall_score_descriptions && (
                      <div className="score-detail tooltip-title">
                        <span className="overall" style={{ color: "#27304E" }}>
                          Overall Score
                        </span>
                        <div className="tooltip-display-content">
                          {/* {product?.overall_score_descriptions.importance && (
                            <p class="mb-2">
                              <b>Importance: </b>
                              {product?.overall_score_descriptions?.importance}
                            </p>
                          )} */}
                          {product?.overall_score_descriptions.description && (
                            <p class="mb-2">
                              <b>What it is: </b>
                              {product?.overall_score_descriptions?.description}
                            </p>
                          )}
                          {product?.overall_score_descriptions.when_matters && (
                            <p class="mb-2">
                              <b>When it matters: </b>
                              {
                                product?.overall_score_descriptions
                                  ?.when_matters
                              }
                            </p>
                          )}
                          <p>
                            <b>Score components:</b>
                          </p>
                          {product.overall_score_descriptions
                            .score_components &&
                            product.overall_score_descriptions.score_components?.map(
                              (data, index) => {
                                return (
                                  <>
                                    <div className="scroe_section" key={index}>
                                      <p className="text-end">
                                        {`${parseFloat(
                                          data?.importance
                                        ).toFixed(1)}%`}
                                      </p>
                                      <div
                                        className="score-count"
                                        style={{
                                          background:
                                            data?.attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : data?.attribute_evaluation >=
                                                  5 &&
                                                data?.attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {/* {removeDecimalAboveNine(
                                          data?.attribute_evaluation
                                        )} */}

                                        {/* {`${parseFloat(
                                          data?.attribute_evaluation
                                        ).toFixed(1)}`} */}

                                        {data?.attribute_evaluation != null
                                          ? data?.attribute_evaluation >= 10
                                            ? Math.trunc(
                                                data?.attribute_evaluation
                                              )
                                            : data?.attribute_evaluation.toFixed(
                                                1
                                              )
                                          : "0.0"}
                                      </div>
                                      <p>{data?.attribute_category}</p>
                                    </div>
                                  </>
                                );
                              }
                            )}
                          {/* {product?.overall_score_descriptions
                            .score_components &&
                            product?.overall_score_descriptions.score_components?.map(
                              (data, index) => {
                                return (
                                  <>
                                    <div className="scroe_section" key={index}>
                                      <p>{data?.importance}%</p>
                                      <div className="score-count">
                                        {data?.attribute_evaluation}
                                      </div>
                                      <p>{data?.attribute_category}</p>
                                    </div>
                                  </>
                                );
                              }
                            )} */}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technical Score */}
                  <div className="score-section">
                    <span
                      className="count"
                      style={{ background: technicalScoreColor }}
                    >
                      {/* {product.technical_score == 10
                        ? product.technical_score
                        : product.technical_score.toFixed(1)} */}
                      {/* {removeDecimalAboveNine(product.technical_score)} */}
                      {product.technical_score != null
                        ? product.technical_score >= 10
                          ? Math.trunc(product.technical_score)
                          : product.technical_score.toFixed(1)
                        : "0.0"}
                    </span>
                    {product?.technical_score_descriptions && (
                      <div className="score-detail tooltip-title">
                        <span>Technical Score</span>
                        <div className="tooltip-display-content">
                          {/* {product?.technical_score_descriptions.importance && (
                            <p class="mb-2">
                              <b>Importance: </b>
                              {
                                product?.technical_score_descriptions
                                  ?.importance
                              }
                            </p>
                          )} */}
                          {product?.technical_score_descriptions
                            .description && (
                            <p class="mb-2">
                              <b>What it is: </b>
                              {
                                product?.technical_score_descriptions
                                  ?.description
                              }
                            </p>
                          )}
                          {product?.technical_score_descriptions
                            .when_matters && (
                            <p class="mb-2">
                              <b>When it matters: </b>
                              {
                                product?.technical_score_descriptions
                                  ?.when_matters
                              }
                            </p>
                          )}
                          <p>
                            <b>Score components:</b>
                          </p>
                          {product?.technical_score_descriptions
                            .score_components &&
                            product?.technical_score_descriptions.score_components?.map(
                              (data, index) => {
                                return (
                                  <>
                                    <div className="scroe_section" key={index}>
                                      <p className="text-end">
                                        {`${parseFloat(
                                          data?.importance
                                        ).toFixed(1)}%`}
                                      </p>
                                      <div
                                        className="score-count"
                                        style={{
                                          background:
                                            data?.attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : data?.attribute_evaluation >=
                                                  5 &&
                                                data?.attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {/* {`${parseFloat(
                                          data?.attribute_evaluation
                                        ).toFixed(1)}`} */}
                                        {data?.attribute_evaluation != null
                                          ? data?.attribute_evaluation >= 10
                                            ? Math.trunc(
                                                data?.attribute_evaluation
                                              )
                                            : data?.attribute_evaluation.toFixed(
                                                1
                                              )
                                          : "0.0"}
                                        {/* {removeDecimalAboveNine(
                                          data?.attribute_evaluation
                                        )} */}
                                      </div>
                                      <p>{data?.attribute_category}</p>
                                    </div>
                                  </>
                                );
                              }
                            )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User's Rating */}
                  <div className="score-section">
                    <span
                      className="count"
                      style={{ background: userRatingColor }}
                    >
                      {product.reviews != null
                        ? product.reviews >= 10
                          ? Math.trunc(product.reviews)
                          : product.reviews.toFixed(1)
                        : "0.0"}
                    </span>
                    {product?.users_rating_descriptions && (
                      <div className="score-detail tooltip-title">
                        <span>User’s Rating</span>

                        <div className="tooltip-display-content">
                          {/* {product?.users_rating_descriptions.importance && (
                            <p class="mb-2">
                              <b>Importance: </b>
                              {product?.users_rating_descriptions?.importance}
                            </p>
                          )} */}
                          {product?.users_rating_descriptions.description && (
                            <p class="mb-2">
                              <b>What it is: </b>
                              {product?.users_rating_descriptions?.description}
                            </p>
                          )}
                          {product?.users_rating_descriptions.when_matters && (
                            <p class="mb-2">
                              <b>When it matters: </b>
                              {product?.users_rating_descriptions?.when_matters}
                            </p>
                          )}
                          <p>
                            <b>Score components:</b>
                          </p>
                          {product?.users_rating_descriptions
                            .score_components &&
                            product?.users_rating_descriptions.score_components?.map(
                              (data, index) => {
                                return (
                                  <>
                                    <div className="scroe_section" key={index}>
                                      <p className="text-end">
                                        {`${parseFloat(
                                          data?.importance
                                        ).toFixed(1)}%`}
                                      </p>
                                      <div
                                        className="score-count"
                                        style={{
                                          background:
                                            data?.attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : data?.attribute_evaluation >=
                                                  5 &&
                                                data?.attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {/* {`${parseFloat(
                                          data?.attribute_evaluation
                                        ).toFixed(1)}`} */}
                                        {data?.attribute_evaluation != null
                                          ? data?.attribute_evaluation >= 10
                                            ? Math.trunc(
                                                data?.attribute_evaluation
                                              )
                                            : data?.attribute_evaluation.toFixed(
                                                1
                                              )
                                          : "0.0"}
                                        {/* {removeDecimalAboveNine(
                                          data?.attribute_evaluation
                                        )} */}
                                      </div>
                                      <p>{data?.attribute_category}</p>
                                    </div>
                                  </>
                                );
                              }
                            )}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Popularity */}
                  <div className="score-section">
                    <span
                      className="count"
                      style={{ background: popularityColor }}
                    >
                      {product.popularity_points != null
                        ? product.popularity_points >= 10
                          ? Math.trunc(product.popularity_points)
                          : product.popularity_points.toFixed(1)
                        : "0.0"}
                    </span>
                    {product?.popularity_descriptions && (
                      <div className="score-detail tooltip-title">
                        <span>Popularity</span>
                        <div className="tooltip-display-content">
                          {/* {product?.popularity_descriptions.importance && (
                            <p class="mb-2">
                              <b>Importance: </b>
                              {product?.popularity_descriptions?.importance}
                            </p>
                          )} */}
                          {product?.popularity_descriptions.description && (
                            <p class="mb-2">
                              <b>What it is: </b>
                              {product?.popularity_descriptions?.description}
                            </p>
                          )}
                          {product?.popularity_descriptions.when_matters && (
                            <p class="mb-2">
                              <b>When it matters: </b>
                              {product?.popularity_descriptions?.when_matters}
                            </p>
                          )}
                          {/*<p><b>Score components:</b></p>
                          {product?.users_rating_descriptions
                            .score_components &&
                            product.popularity_descriptions.score_components?.map(
                              (data, index) => {
                                return (
                                  <>
                                    <div className="scroe_section" key={index}>
                                      <p>{data?.importance}%</p>
                                      <div
                                        className="score-count"
                                        style={{
                                          background:
                                            data?.attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : data?.attribute_evaluation >=
                                                  5 &&
                                                data?.attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {data?.attribute_evaluation}
                                      </div>
                                      <p>{data?.attribute_category}</p>
                                    </div>
                                  </>
                                );
                              }
                            )} */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="best-price-section">
                  {product.price_websites &&
                    product?.price_websites?.every(
                      (data) => data.price === null
                    ) && (
                      <div className="not-availabel">
                        <span className="txt">NOT AVAILABLE</span>
                        <span className="price">~ {product?.price} €</span>
                      </div>
                    )}
                  {product?.price_websites &&
                    product?.price_websites?.some(
                      (data) => data.price !== null
                    ) && (
                      <>
                        <ul className="best-list-item">
                          {product.price_websites &&
                            product.price_websites.map((data, dIndex) => {
                              return (
                                <>
                                  {data.price !== null && (
                                    <li key={dIndex}>
                                      <>
                                        <img
                                          src={data?.logo}
                                          width={0}
                                          height={0}
                                          sizes="100vw"
                                          alt=""
                                        />
                                        <span>{data?.price} €</span>
                                      </>
                                    </li>
                                  )}
                                </>
                              );
                            })}
                        </ul>
                      </>
                    )}
                </div>
              </div>
              <div className="listing-container">
                <div id="pros" className="col light-bg-color guide">
                  <div className="pros-corns-section pros">
                    <p className="buy-avoid">Why to buy?</p>
                    <ul>
                      {product &&
                        product?.top_pros
                          ?.slice(
                            0,
                            showFullData ? product?.top_pros.length : 4
                          )

                          ?.map((data, index) => {
                            return (
                              <>
                                <li key={index} className="tooltip-title">
                                  <span className="">
                                    {data?.name} {renderValue(data)}
                                  </span>
                                  <ProsConsToolTip
                                    typeComp={`pros`}
                                    info_not_verified={data.info_not_verified}
                                    hover_phrase={data.hover_phrase}
                                    data={data}
                                  />
                                </li>
                              </>
                            );
                          })}
                      {product?.top_pros?.length > 0 && !showFullData && "..."}
                    </ul>
                  </div>
                </div>
                <div id="cons" className="col guide">
                  <div className="pros-corns-section corns">
                    <p className="buy-avoid">Why to avoid?</p>
                    <ul>
                      {product &&
                        product?.top_cons
                          ?.slice(
                            0,
                            showFullData ? product?.top_cons?.length : 4
                          )

                          ?.map((data, index) => {
                            return (
                              <>
                                <li key={index} className="tooltip-title">
                                  <span>
                                    {data?.name} {renderValue(data)}
                                  </span>
                                  <ProsConsToolTip
                                    typeComp={`cons`}
                                    data={data}
                                    info_not_verified={data.info_not_verified}
                                    hover_phrase={data.hover_phrase}
                                  />
                                </li>
                              </>
                            );
                          })}
                      {product?.top_pros?.length > 0 && !showFullData && "..."}
                    </ul>
                  </div>
                </div>
                <Button className="hide-show-btn" onClick={toggleShowFullData}>
                  <i
                    className={
                      showFullData
                        ? "ri-arrow-up-s-line"
                        : "ri-arrow-down-s-line"
                    }
                  ></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} className="p-0">
            <Row className="w-100 m-0 alternatives-border-top">
              {product?.available_colors?.length != 0 ? (
                <>
                  {/* <hr
                    style={{
                      padding: "0px",
                      margin: "5px 0px",
                      opacity: "0.2",
                    }}
                  /> */}
                  <Col md={12}>
                    <div className="alternatives">
                      <p className="version-availabel">Colors available:</p>
                      <Form className="color-section">
                        {product?.available_colors?.map((data, key) => {
                          return (
                            <>
                              <div className="color-item">
                                <Form.Check
                                  inline
                                  label={data?.color}
                                  name="color"
                                  type="radio"
                                  defaultChecked={key === 0}
                                  id={`inline-${data?.color}-${key}`}
                                />
                              </div>
                            </>
                          );
                        })}
                      </Form>
                    </div>
                  </Col>
                </>
              ) : (
                <></>
              )}
            </Row>
            {product?.summary && product?.summary.length !== 0 ? (
              <>
                <div className="w-100">
                  <p className="best-product-content border-top p-2 _html">
                    {showFullSummary ? (
                      <>
                        {product?.summary}
                        <span
                          className="read-less-more-btn"
                          style={{ paddingLeft: "5px" }}
                          onClick={toggleSummary}
                        >
                          read less
                        </span>
                      </>
                    ) : product?.summary && product?.summary?.length > 200 ? (
                      <>
                        {product?.summary?.substring(0, 200)}...
                        <span
                          className="read-less-more-btn pl-1"
                          style={{ paddingLeft: "5px" }}
                          onClick={toggleSummary}
                        >
                          read more
                        </span>
                      </>
                    ) : (
                      <>{product?.summary}</>
                    )}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}

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
                        <div className="inline-ranking-section w-100">
                          <span className="ranking-heading">RANKINGS</span>
                          <img
                            src="/images/double-arrow.png"
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          <div className="ranking-item-list-sec">
                            {product?.guide_ratings?.map((data, key) => {
                              return (
                                <p key={key}>
                                  <span>#{data?.position} in </span>
                                  {data?.guide_name};
                                </p>
                              );
                            })}
                          </div>
                        </div>

                        {/* Left */}

                        <Accordion className="table-accordion w-50 p-0 left-accordion">
                          <Accordion.Item eventKey="4">
                            <Accordion.Header as="div">
                              <div className="table-accordion-header">
                                OVERALL
                                <Questiontool
                                  attributes={
                                    product?.overall_score_descriptions
                                  }
                                />
                              </div>

                              <span
                                className="count"
                                style={{ background: overallScoreColor }}
                              >
                                {product.overall_score}
                              </span>
                              <div className="show-btn">
                                Show All{" "}
                                <i className="ri-arrow-down-s-line"></i>
                              </div>
                              <div className="hide-btn">
                                Hide All <i className="ri-arrow-up-s-line"></i>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="spec-section">
                                <div className="spec-item">
                                  <div className="spec-col">
                                    <p className="query ranking-tooltip-title">
                                      Technical Score
                                      <span className="">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                        </svg>
                                      </span>
                                      <div className="tooltip-display-content">
                                        {/* {product?.technical_score_descriptions
                                          .importance && (
                                          <p class="mb-2">
                                            <b>Importance: </b>
                                            {
                                              product
                                                ?.technical_score_descriptions
                                                ?.importance
                                            }
                                          </p>
                                        )} */}
                                        {product?.technical_score_descriptions
                                          .description && (
                                          <p class="mb-2">
                                            <b>What it is: </b>
                                            {
                                              product
                                                ?.technical_score_descriptions
                                                ?.description
                                            }
                                          </p>
                                        )}
                                        {product?.technical_score_descriptions
                                          .when_matters && (
                                          <p class="mb-2">
                                            <b>When it matters: </b>
                                            {
                                              product
                                                ?.technical_score_descriptions
                                                ?.when_matters
                                            }
                                          </p>
                                        )}
                                        <p>
                                          <b>Score components:</b>
                                        </p>
                                        {product?.technical_score_descriptions
                                          .score_components &&
                                          product?.technical_score_descriptions.score_components?.map(
                                            (data, index) => {
                                              return (
                                                <>
                                                  <div
                                                    className="scroe_section"
                                                    key={index}
                                                  >
                                                    <p className="text-end">
                                                      {`${parseFloat(
                                                        data?.importance
                                                      ).toFixed(1)}%`}
                                                    </p>
                                                    <div
                                                      className="score-count"
                                                      style={{
                                                        background:
                                                          data?.attribute_evaluation >=
                                                          7.5
                                                            ? "#093673"
                                                            : data?.attribute_evaluation >=
                                                                5 &&
                                                              data?.attribute_evaluation <
                                                                7.5
                                                            ? "#437ECE"
                                                            : "#85B2F1",
                                                      }}
                                                    >
                                                      {`${parseFloat(
                                                        data?.attribute_evaluation
                                                      ).toFixed(1)}`}
                                                    </div>
                                                    <p>
                                                      {data?.attribute_category}
                                                    </p>
                                                  </div>
                                                </>
                                              );
                                            }
                                          )}
                                      </div>
                                      {/* <Questiontool
                                        attributes={
                                          product?.technical_score_descriptions
                                        }
                                      /> */}
                                    </p>
                                  </div>
                                  <div className="spec-col ">
                                    <span  className="tooltip-title"
                                      style={{
                                        color:
                                          product.technical_score_is_better_than *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.technical_score_is_worse_than *
                                                100 >=
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        fontSize: "15px",
                                        textDecoration: "underline",
                                        textDecorationStyle: "dotted",
                                        textDecorationThickness: "1.5px",
                                        textDecorationColor:
                                          product.technical_score_is_better_than *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.technical_score_is_worse_than *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        textUnderlineOffset: "5px",
                                      }}
                                    >
                                      {product.technical_score}
                                      <ProsConsToolTip hover_phrase={product.technical_score_phase} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="spec-section">
                                <div className="spec-item">
                                  <div className="spec-col">
                                    <p className="query ranking-tooltip-title">
                                      User&rsquo;s Rating
                                      <span className="">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
                                        </svg>
                                      </span>
                                      <div className="tooltip-display-content">
                                        {/* {product?.users_rating_descriptions
                                          .importance && (
                                          <p class="mb-2">
                                            <b>Importance: </b>
                                            {
                                              product?.users_rating_descriptions
                                                ?.importance
                                            }
                                          </p>
                                        )} */}
                                        {product?.users_rating_descriptions
                                          .description && (
                                          <p class="mb-2">
                                            <b>What it is: </b>
                                            {
                                              product?.users_rating_descriptions
                                                ?.description
                                            }
                                          </p>
                                        )}
                                        {product?.users_rating_descriptions
                                          .when_matters && (
                                          <p class="mb-2">
                                            <b>When it matters: </b>
                                            {
                                              product?.users_rating_descriptions
                                                ?.when_matters
                                            }
                                          </p>
                                        )}
                                        <p>
                                          <b>Score components:</b>
                                        </p>
                                        {product?.users_rating_descriptions
                                          .score_components &&
                                          product?.users_rating_descriptions.score_components?.map(
                                            (data, index) => {
                                              return (
                                                <>
                                                  <div
                                                    className="scroe_section"
                                                    key={index}
                                                  >
                                                    <p className="text-end">
                                                      {`${parseFloat(
                                                        data?.importance
                                                      ).toFixed(1)}%`}
                                                    </p>
                                                    <div
                                                      className="score-count"
                                                      style={{
                                                        background:
                                                          data?.attribute_evaluation >=
                                                          7.5
                                                            ? "#093673"
                                                            : data?.attribute_evaluation >=
                                                                5 &&
                                                              data?.attribute_evaluation <
                                                                7.5
                                                            ? "#437ECE"
                                                            : "#85B2F1",
                                                      }}
                                                    >
                                                      {`${parseFloat(
                                                        data?.attribute_evaluation
                                                      ).toFixed(1)}`}
                                                    </div>
                                                    <p>
                                                      {data?.attribute_category}
                                                    </p>
                                                  </div>
                                                </>
                                              );
                                            }
                                          )}
                                      </div>
                                    </p>
                                  </div>
                                  <div className="spec-col">
                                    <span  className="tooltip-title"  
                                      style={{
                                        color:
                                          product.reviews_is_better_than *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.reviews_is_worse_than *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        fontSize: "15px",
                                        textDecoration: "underline",
                                        textDecorationStyle: "dotted",
                                        textDecorationThickness: "1.5px",
                                        textDecorationColor:
                                          product.reviews_is_better_than *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.reviews_is_worse_than *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        textUnderlineOffset: "5px",
                                      }}
                                    >
                                      {product.reviews}
                                      <ProsConsToolTip hover_phrase={product.reviews_phase} />
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {product.expert_reviews_rating > 0 && (
                                <div className="spec-section">
                                  <div className="spec-item">
                                    <div className="spec-col">
                                      <p className="query text-ellipse ranking-tooltip-title">
                                        Expert reviews
                                        <QuestionIcon
                                          attributes={
                                            product?.expert_reviews_descriptions
                                          }
                                        />
                                      </p>
                                    </div>
                                    <div className="spec-col">
                                      <span  className="tooltip-title"
                                        style={{
                                          color:
                                            product.expert_reviews_is_better_than *
                                              100 >=
                                            70
                                              ? "#437ece"
                                              : product.expert_reviews_is_worse_than *
                                                  100 <
                                                70
                                              ? "#ce434b"
                                              : "#27304e",
                                          fontSize: "15px",
                                          textDecoration: "underline",
                                          textDecorationStyle: "dotted",
                                          textDecorationThickness: "1.5px",
                                          textDecorationColor:
                                            product.expert_reviews_is_better_than *
                                              100 >=
                                            70
                                              ? "#437ece"
                                              : product.expert_reviews_is_worse_than *
                                                  100 <
                                                70
                                              ? "#ce434b"
                                              : "#27304e",
                                          textUnderlineOffset: "5px",
                                        }}
                                      >
                                        {product.expert_reviews_rating}
                                        <ProsConsToolTip hover_phrase={product.expert_reviews_rating_phase} />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="spec-section">
                                <div className="spec-item">
                                  <div className="spec-col">
                                    <p className="query">
                                      Ratio Quality-Price
                                      <QuestionIcon
                                        attributes={
                                          product?.ratio_qulitiy_points_descriptions
                                        }
                                      />
                                    </p>
                                  </div>
                                  <div className="spec-col ">
                                    <span  className="tooltip-title"
                                      style={{
                                        color:
                                          product.ratio_quality_price_points_better_then *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.ratio_quality_price_points_worse_then *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        fontSize: "15px",
                                        textDecoration: "underline",
                                        textDecorationStyle: "dotted",
                                        textDecorationThickness: "1.5px",
                                        textDecorationColor:
                                          product.ratio_quality_price_points_better_then *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.ratio_quality_price_points_worse_then *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        textUnderlineOffset: "5px",
                                      }}
                                    >
                                      {product.ratio_quality_price_points}
                                      <ProsConsToolTip hover_phrase={product.ratio_quality_price_points_phase} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="spec-section">
                                <div className="spec-item">
                                  <div className="spec-col">
                                    <p className="query text-ellipse">
                                      Popularity
                                      <QuestionIcon
                                        attributes={
                                          product?.popularity_descriptions
                                        }
                                      />
                                    </p>
                                  </div>
                                  <div className="spec-col">
                                    <span  className="tooltip-title"
                                      style={{
                                        color:
                                          product.popularity_points_better_then *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.popularity_points_worse_then *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        fontSize: "15px",
                                        textDecoration: "underline",
                                        textDecorationStyle: "dotted",
                                        textDecorationThickness: "1.5px",
                                        textDecorationColor:
                                          product.popularity_points_better_then *
                                            100 >=
                                          70
                                            ? "#437ece"
                                            : product.popularity_points_worse_then *
                                                100 <
                                              70
                                            ? "#ce434b"
                                            : "#27304e",
                                        textUnderlineOffset: "5px",
                                      }}
                                    >
                                      {product.popularity_points}
                                      <ProsConsToolTip hover_phrase={product.popularity_points_phase}/>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {product.moreData &&
                                product.moreData.length >= 5 && (
                                  <span className="show_more">
                                    SHOW MORE <i className="ri-add-line"></i>
                                  </span>
                                )}
                            </Accordion.Body>
                          </Accordion.Item>
                          {Object.keys(getAttributeHalf(product, "first")).map(
                            (attribute, index) => {
                              return (
                                <Fragment key={index}>
                                  <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header as="div">
                                      <div className="table-accordion-header">
                                        {attribute}
                                        <Questiontool
                                          attributes={
                                            product.attributes[attribute][0]
                                              ?.attribute_category
                                          }
                                        />
                                      </div>
                                      <span
                                        className="count dark-color"
                                        style={{
                                          background:
                                            product.attributes[attribute][0]
                                              .attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : product.attributes[attribute][0]
                                                  .attribute_evaluation >= 5 &&
                                                product.attributes[attribute][0]
                                                  .attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {product.attributes[attribute][0]
                                          .attribute_evaluation != null
                                          ? parseInt(
                                              product.attributes[attribute][0]
                                                .attribute_evaluation
                                            ) >= 10
                                            ? Math.trunc(
                                                parseInt(
                                                  product.attributes[
                                                    attribute
                                                  ][0].attribute_evaluation
                                                )
                                              )
                                            : parseInt(
                                                product.attributes[attribute][0]
                                                  .attribute_evaluation
                                              ).toFixed(1)
                                          : "0.0"}
                                      </span>
                                      <div
                                        className="show-btn"
                                        onClick={() => {
                                          // setDisplayedAttributes(5)
                                        }}
                                      >
                                        Show All{" "}
                                        <i className="ri-arrow-down-s-line"></i>
                                      </div>
                                      <div
                                        className="hide-btn"
                                        onClick={() => {
                                          // setDisplayedAttributes(5)
                                        }}
                                      >
                                        Hide All{" "}
                                        <i className="ri-arrow-up-s-line"></i>
                                      </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {/* {console.log(displayedAttributesCount)} */}
                                      {loading == false ? (
                                        product.attributes[attribute]
                                          .slice(
                                            0,
                                            displayedAttributesCount[
                                              product.name
                                            ] &&
                                              displayedAttributesCount[
                                                product.name
                                              ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay
                                          )
                                          .map(
                                            (attributeValues, valueIndex) => {
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

                                                          <QuestionIcon
                                                            attributes={
                                                              attributeValues &&
                                                              attributeValues
                                                            }
                                                          />
                                                        </p>
                                                      </div>
                                                      <div className="spec-col">
                                                        <span
                                                          className="tooltip-title"
                                                          style={{
                                                            color:
                                                              attributeValues.is_better_than *
                                                                100 >=
                                                              70
                                                                ? "#437ece"
                                                                : attributeValues.is_worse_than *
                                                                    100 <
                                                                  70
                                                                ? "#ce434b"
                                                                : "#27304e",
                                                            fontSize: "15px",
                                                            textDecoration:
                                                              "underline",
                                                            textDecorationStyle:
                                                              "dotted",
                                                            textDecorationThickness:
                                                              "1.5px",
                                                            textDecorationColor:
                                                              attributeValues.is_better_than *
                                                                100 >=
                                                              70
                                                                ? "#437ece"
                                                                : attributeValues.is_worse_than *
                                                                    100 <
                                                                  70
                                                                ? "#ce434b"
                                                                : "#27304e",
                                                            textUnderlineOffset:
                                                              "5px",
                                                          }}
                                                        >
                                                          {
                                                            attributeValues.attribute_value
                                                          }
                                                          <ProsConsToolTip
                                                            hover_phrase={
                                                              attributeValues &&
                                                              attributeValues.hover_phase
                                                            }
                                                          />
                                                          {/* (better than 89%) */}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Fragment>
                                              );
                                            }
                                          )
                                      ) : (
                                        <Skeleton
                                          height={35}
                                          count={
                                            displayedAttributesCount[
                                              product.name
                                            ] &&
                                            displayedAttributesCount[
                                              product.name
                                            ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay
                                          }
                                        />
                                      )}

                                      {loading == false
                                        ? product.attributes[attribute].length >
                                            (displayedAttributesCount[
                                              product.name
                                            ] &&
                                            displayedAttributesCount[
                                              product.name
                                            ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay) && (
                                            <span
                                              className="show_more"
                                              onClick={() => {
                                                setloading(true),
                                                  // setattrname(attribute + Math.random())
                                                  handleDisplayedAttributesCount(
                                                    product.name,
                                                    attribute
                                                  );
                                                // setIndex(index)
                                                setTimeout(() => {
                                                  setloading(false);
                                                }, 600);
                                              }}
                                            >
                                              {"SHOW MORE "}
                                              <i
                                                className={`ri-${
                                                  initialDisplay <
                                                  product.attributes[attribute]
                                                    .length
                                                    ? "add"
                                                    : "subtract"
                                                }-line`}
                                              ></i>
                                            </span>
                                          )
                                        : ""}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Fragment>
                              );
                            }
                          )}
                        </Accordion>
                        {/* Right */}
                        <Accordion className="table-accordion w-50 p-0 right-accordion">
                          {Object.keys(getAttributeHalf(product, "second")).map(
                            (attribute, index) => {
                              return (
                                <Fragment key={index}>
                                  <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header as="div">
                                      <div className="table-accordion-header">
                                        {attribute}

                                        <Questiontool
                                          attributes={
                                            product.attributes[attribute][0]
                                              ?.attribute_category
                                          }
                                        />
                                      </div>
                                      {/* {console.log(product.attributes[attribute][0].attribute_evaluation)}
                                              {console.log(attribute)} */}
                                      <span
                                        className="count"
                                        style={{
                                          background:
                                            product.attributes[attribute][0]
                                              .attribute_evaluation >= 7.5
                                              ? "#093673"
                                              : product.attributes[attribute][0]
                                                  .attribute_evaluation >= 5 &&
                                                product.attributes[attribute][0]
                                                  .attribute_evaluation < 7.5
                                              ? "#437ECE"
                                              : "#85B2F1",
                                        }}
                                      >
                                        {/* {parseInt(
                                          product.attributes[attribute][0]
                                            .attribute_evaluation
                                        ).toFixed(1)} */}
                                        {product.attributes[attribute][0]
                                          .attribute_evaluation != null
                                          ? parseInt(
                                              product.attributes[attribute][0]
                                                .attribute_evaluation
                                            ).toFixed(1)
                                          : "0.0"}
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
                                      {loading == false ? (
                                        product.attributes[attribute]
                                          .slice(
                                            0,
                                            displayedAttributesCount[
                                              product.name
                                            ] &&
                                              displayedAttributesCount[
                                                product.name
                                              ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay
                                          )
                                          .map(
                                            (attributeValues, valueIndex) => (
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
                                                        <QuestionIcon
                                                          attributes={
                                                            attributeValues &&
                                                            attributeValues
                                                          }
                                                        />
                                                      </p>
                                                    </div>
                                                    <div className="spec-col">
                                                      <span
                                                        className="tooltip-title"
                                                        style={{
                                                          color:
                                                            attributeValues.is_better_than *
                                                              100 >=
                                                            70
                                                              ? "#437ece"
                                                              : attributeValues.is_worse_than *
                                                                  100 <
                                                                70
                                                              ? "#ce434b"
                                                              : "#27304e",
                                                          fontSize: "15px",
                                                          textDecoration:
                                                            "underline",
                                                          textDecorationStyle:
                                                            "dotted",
                                                          textDecorationThickness:
                                                            "1.5px",
                                                          textDecorationColor:
                                                            attributeValues.is_better_than *
                                                              100 >=
                                                            70
                                                              ? "#437ece"
                                                              : attributeValues.is_worse_than *
                                                                  100 <
                                                                70
                                                              ? "#ce434b"
                                                              : "#27304e",
                                                          textUnderlineOffset:
                                                            "5px",
                                                        }}
                                                      >
                                                        {
                                                          attributeValues.attribute_value
                                                        }
                                                        <ProsConsToolTip
                                                          hover_phrase={
                                                            attributeValues &&
                                                            attributeValues.hover_phase
                                                          }
                                                        />
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Fragment>
                                            )
                                          )
                                      ) : (
                                        <Skeleton
                                          height={35}
                                          count={
                                            displayedAttributesCount[
                                              product.name
                                            ] &&
                                            displayedAttributesCount[
                                              product.name
                                            ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay
                                          }
                                        />
                                      )}
                                      {loading == false
                                        ? product.attributes[attribute].length >
                                            (displayedAttributesCount[
                                              product.name
                                            ] &&
                                            displayedAttributesCount[
                                              product.name
                                            ][attribute]
                                              ? displayedAttributesCount[
                                                  product.name
                                                ][attribute]
                                              : initialDisplay) && (
                                            <span
                                              className="show_more"
                                              onClick={() => {
                                                setloading(true),
                                                  handleDisplayedAttributesCount(
                                                    product.name,
                                                    attribute
                                                  );
                                                // setattrname(attribute + Math.random())
                                                // setIndex(index)
                                                setTimeout(() => {
                                                  setloading(false);
                                                }, 600);
                                              }}
                                            >
                                              {"SHOW MORE "}
                                              <i
                                                className={`ri-${
                                                  initialDisplay <
                                                  product.attributes[attribute]
                                                    .length
                                                    ? "add"
                                                    : "subtract"
                                                }-line`}
                                              ></i>
                                            </span>
                                          )
                                        : ""}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Fragment>
                              );
                            }
                          )}
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
});

Product.displayName = "Product";
export default Product;
