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

export default function BestPage() {
  const cardItems = [
    {
      count: "185",
      heading: "Buying Guides",
      subheading: "Find The Guide You Need",
    },
    {
      count: "586",
      heading: "Product Reviews",
      subheading: "Discover If The Product Is Worth Buying",
    },
    {
      count: "248 254",
      heading: "Reviews of Users",
      subheading: "Millions of User Reviews Analyzed",
    },
    {
      count: "158 478",
      heading: "Data Compared",
      subheading: "Favorite Source of Information",
    },
  ];
  return (
    <>
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb firstPageName="Electronics" secondPageName="Samsung New VR Headset Oculus 2.0"/>
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
                  <p>Chiara Fonzi</p>
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
          <Row className="pt-3 best-page-card">
            {cardItems.map(function (item, index) {
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
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <p className="para_content_text">
                Samsung Galaxy S22 is the best smartwatch of 2023. Samsung
                Galaxy S22 is the best smartwatch of 2023. Smartwatches with
                best ratio quality price is XXX.Samsung Galaxy S22 is the best
                smartwatch of 2023. Smartwatches with best ratio quality price
                is XXX.Samsung Galaxy S22 is the best smartwatch of 2023.
                Smartwatches with best ratio quality price is XXX. Smartwatches
                with best ratio quality price is XXX. The best cheap smartwatch
                is YYY. Samsung Galaxy S22 is the best smartwatch of 2023.
                Smartwatches with best ratio quality price is XXX.Samsung Galaxy
                S22 is the best smartwatch of 2023. Smartwatches with best ratio
                quality price is XXX.
              </p>
            </Col>
          </Row>
          <Row className="table-section-mobile">
            
            <Col md={12}>
              <h2 className="site-main-heading pt-5">Comparing Samsung New VR Headset Oculus 2.0 with best robot vacuum cleaners</h2>
              <CompareTable />
            </Col>
          </Row>
          <Row className="table-section-desktop p-0">
            <Col md={12} className="p-0">
              <MobileCompareTable />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="similar-guides">
                <h6>Similar Guides:</h6>
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
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">
                Ranking of Best Smartwatches of 2023
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={3} xl={3} className="sidebar-width">
              <Filter />
            </Col>
            <Col md={12} lg={9} xl={9} className="main-content">
              <Row className="mobile-hide">
                <Col md={8}>
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
                </Col>
                <Col md={4}>
                  <div className="filtered-data-select">
                    <span>Order by :</span>
                    <Form.Select aria-label="Default select example">
                      <option>Autonomy</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <Row className="desktop-hide">
                <Col md={12}>
                  <Button className="site_main_btn w-100 d-block btn-icon mb-4">
                    <i className="ri-close-fill"></i>
                    Close Filter
                  </Button>
                </Col>
                <Col sm={6} xs={6}>
                  <Button className="site_main_btn w-100 d-block btn-icon">
                    <i className="ri-filter-line"></i>
                    Filter
                  </Button>
                </Col>
                <Col sm={6} xs={6}>
                  <span className="filter-data">Ratio Quality Price</span>
                </Col>
              </Row>
              <Row className="m-0">
                <ProductListing />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-pattern">
        <Container>
          <Row>
            <Col md={12} lg={7}>
              <h2 className="site-main-heading">How Our Rankings Work?</h2>
              <p className="inner-text-content mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                <br />
                <br />
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </Col>
            <Col md={12} lg={5}>
              <Image
                className="site_image mt-3"
                src="/images/side-img.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
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
              </p>
              <br />
              <div className="site-main-heading">Connectivity</div>
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
              <div className="site-main-heading">Power</div>
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
                  <h2 className="site-main-heading">
                    Smartwatches with best power
                  </h2>
                </Col>
                <div className="best-product-listing-item">
                  <span className="number">1</span>
                  <Table>
                    <tbody>
                      <tr>
                        <td rowspan="2">
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
                            <span className="count">500 W</span>
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
                        <td rowspan="2">
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
                            <span className="count">500 W</span>
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
                        <td rowspan="2">
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
                            <span className="count">500 W</span>
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
              <h2 className="site-main-heading">Speed</h2>
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
                <h2 className="site-main-heading">In Rankings</h2>
                <div className="product-card">
                  <Image
                    src="/images/product-image.png"
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
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <div className="site-main-heading">Related guides</div>
              <ProductSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
