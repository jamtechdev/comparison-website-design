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
  Table,
  Tabs,
} from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import CompareTable from "../components/Common/CompareTable/CompareTable";
import Filter from "../components/Common/Filter/Filter";
import ProductListing from "../components/Common/ProductListing/ProductListing";
import ProductSlider from "../components/Common/ProductSlider/productSlider";
import MobileCompareTable from "../components/Common/MobileCompareTable/MobileCompareTable";
import { useEffect, useRef, useState } from "react";
import { guideService } from "../_services";
import {
  filterProducts,
  handleFilterValueChange,
  arrangeProducts,
  arrangeCategories,
} from "../_helpers/filter.js";
export default function Page({ params }) {
  const [isShown, setIsShown] = useState(false);
  const [guide, setGuide] = useState(null);
  const [categoryAttributes, setCategoryAttributes] = useState([]);
  const [topCounts, setTopCounts] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  const sortRangeAttributeArray = useRef([{algo:"",rangeAttributes:"Overall"}]);
  const sortRangeAttribute = useRef({algo:"",rangeAttributes:"Overall"});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    guideService.getGuidesByPermalink(params.permalink).then((res) => {
      arrangeProducts(res.data.data, setGuide);
    });

    guideService.getCategoryAttributes(params.permalink).then((res) => {
      arrangeCategories(res.data.data, setCategoryAttributes);
    });

    guideService.getTopGuideCount(params.permalink).then((res) => {
      const valuesArray = Object.values(res.data.data);
      setTopCounts(valuesArray);
      console.log(">>>>>>>>",valuesArray)
    });
  }, [params.permalink]);

  useEffect(() => {
    if (guide)
      setFilteredProducts([...filterProducts(filterObj, guide.products,sortRangeAttribute.current)]);
  }, [filterObj, guide]);

  const handleRemoveValue = (categoryName, attributeName, attrValue, e) => {
    handleFilterValueChange(
      filterObj,
      setFilterObj,
      categoryName,
      attributeName,
      attrValue,
      e
    );
  };
  const handleRemoveAttribute = (categoryName, attributeName) => {
    let obj = { ...filterObj };
    delete obj[categoryName][attributeName];
    if (Object.keys(obj[categoryName]).length === 0) {
      delete obj[categoryName];
    }
    setFilterObj({ ...obj });
  };

  const handleSort = (sortAttribute) =>{
    sortRangeAttribute.current = JSON.parse(sortAttribute)
    setFilteredProducts([...filterProducts(filterObj, guide.products,sortRangeAttribute.current)]);
    // console.log(JSON.parse(sortAttribute))
  }

  const openClick = (event) => {
    setIsShown(true);
  };
  const closeClick = (event) => {
    setIsShown(false);
  };
  // const cardItems = [
  //   {
  //     count: "185",
  //     heading: "Buying Guides",
  //     subheading: "Find The Guide You Need",
  //   },
  //   {
  //     count: "586",
  //     heading: "Product Reviews",
  //     subheading: "Discover If The Product Is Worth Buying",
  //   },
  //   {
  //     count: "248 254",
  //     heading: "Reviews of Users",
  //     subheading: "Millions of User Reviews Analyzed",
  //   },
  //   {
  //     count: "158 478",
  //     heading: "Data Compared",
  //     subheading: "Favorite Source of Information",
  //   },
  // ];
  return (
    <>
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb
                firstPageName="Electronics"
                secondPageName="Samsung New VR Headset Oculus 2.0"
              />
            </Col>
            <Col md={12} lg={12} xl={9}>
              <h1 className="site-main-heading">{guide?.title}</h1>
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
                  <p>Chiara Fonzi</p>
                  <span>5 maggio 2023</span>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <p className="product-inner-content">{guide?.text_first_part}</p>
            </Col>
          </Row>
          <Row className="pt-3 best-page-card">
            {topCounts.map(function (item, index) {
              return (
                <Col className="p-2" md={6} lg={3} sm={6} xs={6} key={index}>
                  <div className="hero-card-content">
                    <span className="count">{item.count}</span>
                    <span className="card-heading">{item.heading}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="ptb-25">
        <Container>
          <Row>
            <Col md={12}>
              <p className="para_content_text">{guide?.text_second_part}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-25">
        <Container>
          <Row>
            <Col md={12}>
              {/* <h2 className="site-main-heading">
                Ranking of Best Smartwatches of 2023
              </h2> */}
            </Col>
          </Row>
          <Row>
            <Col
              md={12}
              lg={3}
              xl={3}
              className="sidebar-width"
              style={{ display: isShown ? "block" : "none" }}
            >
              <Filter
                categoryAttributes={categoryAttributes}
                setFilterObj={setFilterObj}
                filterObj={filterObj}
                products={filteredProducts}
                sortRangeAttributeArray = {sortRangeAttributeArray.current}
              />
              <div className="desktop-hide">
                <Button
                  onClick={closeClick}
                  className="site_main_btn w-100 d-block btn-icon mb-4"
                >
                  <i className="ri-close-fill"></i>
                  Close Filter
                </Button>
              </div>
            </Col>
            <Col md={12} lg={9} xl={9} className="main-content">
              <Row className="mobile-hide">
                <Col md={8}>
                  <div className="filtered-data">
                    <ul>
                      {Object.keys(filterObj).map((categoryName) =>
                        Object.keys(filterObj[categoryName]).map(
                          (attributeName, attrIndex) => (
                            <li key={attrIndex}>
                              {attributeName}:
                              <ul>
                                {typeof filterObj[categoryName][
                                  attributeName
                                ][0] == "object" ? (
                                  <>
                                    <li>
                                      Min :{" "}
                                      {
                                        filterObj[categoryName][
                                          attributeName
                                        ][0].min
                                      }
                                      {/* <i className="ri-close-line" onClick={(e) => {  }}></i> */}
                                    </li>
                                    <li>
                                      Max :{" "}
                                      {
                                        filterObj[categoryName][
                                          attributeName
                                        ][0].max
                                      }
                                      {/* <i className="ri-close-line" onClick={(e) => {  }}></i> */}
                                    </li>
                                  </>
                                ) : (
                                  filterObj[categoryName][attributeName].map(
                                    (attrValue, valIndex) => (
                                      <li key={valIndex}>
                                        {attrValue}
                                        <i
                                          className="ri-close-line"
                                          onClick={(e) => {
                                            handleRemoveValue(
                                              categoryName,
                                              attributeName,
                                              attrValue,
                                              e
                                            );
                                          }}
                                        ></i>
                                      </li>
                                    )
                                  )
                                )}
                              </ul>
                              <i
                                className="ri-close-line"
                                onClick={() =>
                                  handleRemoveAttribute(
                                    categoryName,
                                    attributeName
                                  )
                                }
                              ></i>
                            </li>
                          )
                        )
                      )}
                    </ul>
                    {Object.keys(filterObj).length > 0 && (
                      <span
                        onClick={() => {
                          setFilterObj({});
                        }}
                      >
                        Remove all filters
                      </span>
                    )}
                  </div>
                </Col>

                {/* <Col md={8}>
                  <div className="filtered-data">
                    <ul>
                      <li>
                        App Control: yes <i className="ri-close-line"></i>
                      </li>
                      <li>
                        Mapping Technology: Lidr{" "}
                        <i className="ri-close-line"></i>
                      </li>
                    </ul>
                    <span>Remove all filters</span>
                  </div>
                </Col> */}
                <Col md={4}>
                  <div className="filtered-data-select">
                    <span>Order by :</span>
                    <Form.Select aria-label="Default select example" onChange={(e)=>handleSort(e.target.value)}>
                      {/* <option>Autonomy</option> */}
                      {
                        sortRangeAttributeArray.current.map((algoAttribute,attrIndex)=>
                        <option value={JSON.stringify(algoAttribute)} key= {attrIndex}>{algoAttribute.rangeAttributes}
                        {/* {algoAttribute.algo == "lowest_to_highest" && " (Lowest to Highest)"} */}
                        </option>
                        )
                      }
                      
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <Row className="desktop-hide">
                <Col sm={6} xs={6}>
                  <Button
                    onClick={openClick}
                    className="site_main_btn w-100 d-block btn-icon"
                  >
                    <i className="ri-filter-line"></i>
                    Filter
                  </Button>
                </Col>
                <Col sm={6} xs={6}>
                  <span className="filter-data">
                    Ratio Quality Price{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.2073 9.04304 12.0002 2.83594 5.79312 9.04304 7.20733 10.4573 12.0002 5.66436 16.7931 10.4573 18.2073 9.04304ZM5.79297 14.9574 12.0001 21.1646 18.2072 14.9574 16.793 13.5432 12.0001 18.3361 7.20718 13.5432 5.79297 14.9574Z" />
                      </svg>
                    </div>
                  </span>
                </Col>
              </Row>
              <Row className="m-0">
                {/* {console.log(guide?.products_scores)} */}
                {guide?.products && (
                  <ProductListing products={filteredProducts} />
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-25">
        <Container>
          <Row>
            <Col md={12}>
              <div className="similar-guides">
                <p>Similar Guides:</p>
                <ul>
                  <li>Smartwatches for Children</li>
                  <li>Smartphones</li>
                  <li>Smartwatches for Children</li>
                  <li>Smartwatches for Children</li>
                  <li>Smartwatches With High Autonommy</li>
                  <li>Smartphones</li>
                  <li>Smartwatches for Children</li>
                  <li>Smartwatches for Children</li>
                  <li>Smartwatches With High Autonommy</li>
                  <li>Smartphones</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="table-section-mobile">
            <Col md={12}>
              <h2 className="site-main-heading pt-5">
                Comparing Samsung New VR Headset Oculus 2.0 with best robot
                vacuum cleaners
              </h2>
              <CompareTable />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile-table-section">
        <Container>
          <Row className="table-section-desktop p-0">
            <Col md={12} className="p-0">
              <MobileCompareTable />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
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
                <p>Outline</p>
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
              <p className="review-content">{guide?.text_third_part_main}</p>
              <br />
              <h3 className="site-main-heading">Connectivity</h3>
              <p className="review-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text
              </p>
              <br />
              <h3 className="site-main-heading">Power</h3>
              <p className="review-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text
              </p>
              <Row className="mt-3">
                <Col md={12}>
                  <h4 className="site-main-heading">
                    Smartwatches with best power
                  </h4>
                </Col>
                <div className="best-product-listing-item">
                  <span className="number">1</span>
                  <Table>
                    <tbody>
                      <tr>
                        <td rowSpan="2">
                          <div className="best-product-listing-item-name">
                            <p className="device-name">
                              Samsung Galaxy S23 Ultra
                            </p>
                            <Image
                              className="compare_image"
                              src="/images/compare.png"
                              width={0}
                              height={0}
                              alt=""
                              sizes="100%"
                            />
                          </div>
                        </td>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Overall Score</span>
                            <span className="count dark-color">8.5</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Power</span>
                            <span className="count power-of-count">500 W</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="best-product-listing-item">
                  <span className="number">2</span>
                  <Table>
                    <tbody>
                      <tr>
                        <td rowSpan="2">
                          <div className="best-product-listing-item-name">
                            <p className="device-name">
                              Samsung Galaxy S23 Ultra
                            </p>
                            <Image
                              className="compare_image"
                              src="/images/compare.png"
                              width={0}
                              height={0}
                              alt=""
                              sizes="100%"
                            />
                          </div>
                        </td>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Overall Score</span>
                            <span className="count dark-color">8.5</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Power</span>
                            <span className="count power-of-count">500 W</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="best-product-listing-item">
                  <span className="number">3</span>
                  <Table>
                    <tbody>
                      <tr>
                        <td rowSpan="2">
                          <div className="best-product-listing-item-name">
                            <p className="device-name">
                              Samsung Galaxy S23 Ultra
                            </p>
                            <Image
                              className="compare_image"
                              src="/images/compare.png"
                              width={0}
                              height={0}
                              alt=""
                              sizes="100%"
                            />
                          </div>
                        </td>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Overall Score</span>
                            <span className="count dark-color">8.5</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="light-bg-color">
                          <div className="best-product-listing-item-rating-item">
                            <span>Power</span>
                            <span className="count power-of-count">500 W</span>
                          </div>
                        </td>
                        <td>
                          <div className="best-product-listing-item-price-item">
                            <Image
                              src="/images/amazon.png"
                              width={0}
                              height={0}
                              sizes="100%"
                              alt=""
                            />
                            <span>155.87 €</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
              <br />
              <h3 className="site-main-heading">Speed</h3>
              <p className="review-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text Ipsum has been the industry standard dummy
                text
              </p>
            </Col>
            <Col className="mobile-hide" md={12} lg={2}>
              <div className="ranking-section">
                <div className="site-main-heading">In Rankings</div>
                <div className="product-card">
                  <Image
                    src="/images/p1.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>Best Monitors</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ptb-25 mobite-mb-20">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Related guides</h2>
              <ProductSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
