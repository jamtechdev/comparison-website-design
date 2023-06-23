"use client";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import ProductSlider from "./components/Common/ProductSlider/productSlider";
import Image from "next/image";
import Sponsor from "./components/Common/Sponsor/Sponsor";
import Compare from "./components/Common/Compare/Compare";
import Category from "./components/Common/Category/Category";
import ReviewSlider from "./components/Common/ReviewSlider/reviewSlider";
import ComparisonsSlider from "./components/Common/ComparisonsSlider/comparisonsSlider";
import BlogSlider from "./components/Common/BlogSlider/blogSlider";

export default function Home() {
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
      <section className="hero_section">
        <Container>
          <Row>
            <Col md={12} className="form-col">
              <h1>...Where Product’s DATA and REVIEWS Meet</h1>
              <h4>Discover the Best, Leave the Rest!</h4>
              <Form className="d-flex hero-searchbar">
                <div className="search-icon">
                  <i className="ri-search-line"></i>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Search The Guide or Product You Need..."
                  aria-label="Search"
                />
                <Button>Search</Button>
              </Form>
            </Col>
          </Row>
          <div className="hero-card-container">
            <Row>
              {cardItems.map(function (item, index) {
                return (
                  <Col className="p-2" lg={3} md={6} xs={6} key={index}>
                    <div className="hero-card-content">
                      <span className="count">{item.count}</span>
                      <span className="card-heading">{item.heading}</span>
                      <span className="card-subheading">{item.subheading}</span>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Favourite Guides</h2>
              <ProductSlider />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Compare Products</h2>
              <Compare/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">As Seeen On</h2>
              <Sponsor />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Categories</h2>
              <Category />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-pattern">
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <h2 className="site-main-heading">How Our Rankings Work?</h2>
              <p className="inner-text-content mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text
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
            <Col lg={5} md={12} className="top-space">
              <Image
                className="site_image"
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
      <section className="ptb-80 bg-cat">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <h2 className="text-center">Electronics</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="site-main-heading">Guides</h3>
              <Tabs
                defaultActiveKey="tab-1"
                id="Review-tab"
                className="mb-3 site_tabs"
              >
                <Tab eventKey="tab-1" title="Most Popular Reviews">
                  <ProductSlider />
                </Tab>
                <Tab eventKey="tab-2" title="Latest Reviews">
                  <ProductSlider />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="site-main-heading">Review</h3>
              <Tabs
                defaultActiveKey="tab-1"
                id="Review-tab"
                className="mb-3 site_tabs"
              >
                <Tab eventKey="tab-1" title="Most Popular Reviews">
                 <ReviewSlider/>
                </Tab>
                <Tab eventKey="tab-2" title="Latest Reviews">
                <ReviewSlider/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="site-main-heading">Popular comparisons</h3>
              <ComparisonsSlider/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-3">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="site-main-heading">Blog Posts</h3>
              <BlogSlider />
            </Col>
            <Col md={12} className="text-center">
                <Button className="view-blog">View All Blog Posts <i className="ri-arrow-right-s-line"></i></Button>

                </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
