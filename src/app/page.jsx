"use client";

import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import ProductSlider from "./components/Common/ProductSlider/productSlider";
import LatesGuid from "./components/Common/ProductSlider/LatesGuid";
import FavSlider from "./components/Common/ProductSlider/FavSlider";
import Image from "next/image";
import Sponsor from "./components/Common/Sponsor/Sponsor";
import Compare from "./components/Common/Compare/Compare";
import Category from "./components/Common/Category/Category";
import ReviewSlider from "./components/Common/ReviewSlider/reviewSlider";
import ComparisonsSlider from "./components/Common/ComparisonsSlider/comparisonsSlider";
import BlogSlider from "./components/Common/BlogSlider/blogSlider";
import "../../public/font/font.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { homePage } from "./_services/homepage.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  // search query
  const [search, setsearch] = useState("");
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  // call api of guides counter
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
  };
  const [guides, setGuiudes] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/homepage/counts`, config)
      .then((res) => {
        return setGuiudes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // favi slider
  const [faveSlider, setFaveSlider] = useState(null);
  const fetchData = async () => {
    try {
      const data = await homePage.favSlider();
      setFaveSlider(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(faveSlider)
  return (
    <>
      <section className="hero_section home">
        <Container>
          <Row>
            <Col md={12} className="form-col">
              <h1>...Where Product’s DATA and REVIEWS Meet</h1>
              <p>Discover the Best, Leave the Rest!</p>
              <Form className="d-flex hero-searchbar">
                <div className="search-icon">
                  <i className="ri-search-line"></i>
                </div>
                <Form.Control
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search The Guide or Product You Need..."
                  aria-label="Search"
                />
                <Button className="search-btn">Search</Button>
              </Form>
            </Col>
          </Row>
          <div className="hero-card-container">
            <Row>
              {guides?.code == 200 ? (
                <>
                  {guides &&
                    guides?.data &&
                    Object.values(guides?.data).map((section, index) => (
                      <Col className="p-2" lg={3} md={6} xs={6} key={index}>
                        <div className="hero-card-content">
                          <span className="count">{section.count}</span>
                          <span className="card-heading">
                            {section.heading}
                          </span>
                          <span className="card-subheading">
                            {section.subheading}
                          </span>
                        </div>
                      </Col>
                    ))}
                </>
              ) : (
                <>
                  {" "}
                  <Col className="p-2" lg={12}>
                    <h2>No Data Found</h2>
                  </Col>{" "}
                </>
              )}
              {/* {cardItems.map(function (item, index) {
                  return (
                    <Col className="p-2" lg={3} md={6} xs={6} key={index}>
                      <div className="hero-card-content">
                        <span className="count">{item.count}</span>
                        <span className="card-heading">{item.heading}</span>
                        <span className="card-subheading">{item.subheading}</span>
                      </div>
                    </Col>
                  );
                })} */}
            </Row>
          </div>
        </Container>
      </section>
      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Favourite Guides</h2>
              {faveSlider &&
                faveSlider.data &&
                faveSlider.data.favorite_guides && (
                  <LatesGuid favSlider={faveSlider.data.favorite_guides} />
                )}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-color">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Compare Products</h2>
              <Compare />
            </Col>
          </Row>
        </Container>
      </section>
      {faveSlider?.data && faveSlider?.data?.as_seen_on.length != 0 && (
        <>
          <section className="ptb-80">
            <Container>
              <Row>
                <Col md={12}>
                  <h2 className="site-main-heading">As Seen On</h2>
                  <Sponsor favSlider={faveSlider} />
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}

      <section className="ptb-80">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-main-heading">Categories</h2>
              <Category favSlider={faveSlider} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ptb-80 bg-pattern">
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <h2 className="site-main-heading">How Our Rankings Work?</h2>
              <p
                className="inner-text-content mt-3"
                dangerouslySetInnerHTML={{
                  __html: faveSlider && faveSlider.data.how_ranking_work,
                }}
              ></p>
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

      {faveSlider &&
        faveSlider?.data?.categories?.map((data) => {
          return (
            <>
              <section className="ptb-80 bg-cat">
                <Container className="small-p-0">
                  <Row>
                    <Col md={12} xs={12}>
                      <h2
                        className="text-center electronics"
                        style={{
                          backgroundImage: `url(${data?.rectangle_image})`,
                        }}
                        onClick={() => {
                          router.push(
                            `/category-archive/${data?.primary_archive_category}`
                          );
                        }}
                      >
                        {data?.primary_archive_category}
                      </h2>
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
                        <Tab eventKey="tab-1" title="Most Popular Guides">
                          <ProductSlider favSlider={data?.popular_guides} />
                        </Tab>
                        <Tab eventKey="tab-2" title="Latest Guides">
                          <LatesGuid favSlider={data?.latest_guides} />
                        </Tab>
                      </Tabs>
                    </Col>
                  </Row>
                </Container>
              </section>
              {data?.popular_reviews?.length ||
                (data?.latest_reviews?.length != 0 && (
                  <>
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
                              <Tab
                                eventKey="tab-1"
                                title="Most Popular Reviews"
                              >
                                <ReviewSlider
                                  favSlider={data?.popular_reviews}
                                />
                              </Tab>
                              <Tab eventKey="tab-2" title="Latest Reviews">
                                <ReviewSlider
                                  favSlider={data?.latest_reviews}
                                />
                              </Tab>
                            </Tabs>
                          </Col>
                        </Row>
                      </Container>
                    </section>
                  </>
                ))}

              <section className="mt-3">
                <Container>
                  <Row>
                    {/* Popular comparisons here for future use */}
                    <Col md={12}>
                      {/* <h3 className="site-main-heading">Popular comparisons</h3>
                      <ComparisonsSlider /> */}
                    </Col>
                  </Row>
                </Container>
              </section>
              {data?.blog_posts && data?.blog_posts?.length != 0 ? (
                <>
                  <section className="my-3">
                    <Container>
                      <Row>
                        <Col md={12}>
                          <h3 className="site-main-heading">Blog Posts</h3>
                          <BlogSlider blogData={data.blog_posts} />
                        </Col>
                        <Col md={12} className="text-center">
                          <Button className="view-blog">
                            View All Blog Posts{" "}
                            <i className="ri-arrow-right-s-line"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
    </>
  );
}
