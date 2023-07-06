"use client";
import Image from "next/image";
import { Button, Col, Container, Link, Form, Row } from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import BlogSlider from "../components/Common/BlogSlider/blogSlider";
import ProductSliderBlog from "../components/Common/ProductSliderBlog/ProductSliderBlog";
import ReviewSlider from "../components/Common/ReviewSlider/reviewSlider";
import ReviewSliderBlog from "../components/Common/ReviewSliderBlog/ReviewSliderBlog";
import ProductSlider from "../components/Common/ProductSlider/productSlider";
export default function singleBlog() {
  return (
    <>
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb
               firstPageName="Blog"
               secondPageName="Best Apps for Running in Winter"
              />
            </Col>
            <Col md={12} lg={12} xl={9}>
              <h1 className="site-main-heading">
              Best Apps for Running in Winter
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
          </Row>
        </Container>
      </section>
      <section className="contentSec mb-5">
        <Container>
          <Row>
            <Col lg={8} md={12} xs={12}>
              {/* <div className="social-icon items-icon pt-3">
                <div className="twitter">
                  <i className="ri-twitter-fill"></i>
                </div>
                <div className="facebook">
                  <i className="ri-facebook-fill"></i>
                </div>
                <div className="printerest">
                  <i className="ri-pinterest-fill"></i>
                </div>
                <div className="linkedIn">
                  <i className="ri-linkedin-fill"></i>
                </div>

                <p className="share-count">91 shared</p>
              </div> */}
              <div className="content-para mt-1">
                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                  <br />
                  <br />
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together! In
                  total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                  and 4 574 technical data to find out the best smartwatches of
                  2023. Let’s see the results together!In total, we’ve analyzed
                  94 smartwatches, 247 784 user’s reviews and 4 574 technical
                  data to find out the best smartwatches of 2023. Let’s see the
                  results together!In total, we’ve analyzed 94 smartwatches, 247
                  784 user’s reviews and
                  <br />
                  <br />
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!In total,
                  we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4
                  574 technical data to find out the best smartwatches of 2023.
                  Let’s see the results together!
                </p>

                <div className="kitchen">
                  <Image
                    src="/images/kitchen.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="kitchen-img"
                  />
                </div>
                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                  <br />
                  <br />
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                  <br />
                  <br />
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together! In
                  total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                  and 4 574 technical data to find out the best smartwatches of
                  2023. Let’s see the results together!In total, we’ve analyzed
                  94 smartwatches, 247 784 user’s reviews
                </p>
                <h2 className="heading-primary secondary my-4">
                  Most important things to consider
                </h2>

                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together! In
                  total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                  and 4 574 technical data to find out the best smartwatches of
                  2023. Let’s see the results together!In total, we’ve analyzed
                  94 smartwatches, 247 784 user’s reviews saads as asd sa e
                  results together!In total, we’ve analyzed 94 smartwatches, 247
                  784 user’s reviews saads as asd sa
                </p>
                <h2 className="heading-primary secondary my-4">
                  Why to buy a smartwatch
                </h2>
                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                  <br />
                  <br />
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together! In
                  total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                  and 4 574 technical data to find out the best smartwatches of
                  2023. Let’s see the results together!In total, we’ve analyzed
                  94 smartwatches, 247 784 user’s reviews and 4 574 technical
                  data to find out the best smartwatches of 2023. Let’s see the
                  results together!In total, we’ve analyzed 94 smartwatches, 247
                  784 user’s reviews and 4 574 technical data to find out the
                  best smartwatches of 2023. Let’s see the results together!
                </p>
                <div className="architect">
                  <Image
                    src="/images/architect.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="architect-img"
                  />
                </div>
                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                </p>
              </div>
              <div className="social-icon items-icon">
                <div className="twitter">
                  <i className="ri-twitter-fill"></i>
                </div>
                <div className="facebook">
                  <i className="ri-facebook-fill"></i>
                </div>
                <div className="printerest">
                  <i className="ri-pinterest-fill"></i>
                </div>
                <div className="linkedIn">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </div>
              <div className="fonzi p-3 my-5">
                <div className="profile mb-2">
                  <div className="avatar">
                    <Image
                      src="/images/profile.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                  </div>
                  <div className="label">
                    <p className="name">Chiara Fonzi</p>
                  </div>
                </div>
                <p>
                  In total, we’ve analyzed 94 smartwatches, 247 784 user’s
                  reviews and 4 574 technical data to find out the best
                  smartwatches of 2023. Let’s see the results together!
                </p>
              </div>
              <div className="form-container">
                <h2 className="heading-primary secondary">Leave a comment</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <Form className="form mt-4">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="form-label">Name *</Form.Label>
                      <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label className="form-label">Email *</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="form-label">Comment *</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "200px" }}
                      />
                    </Form.Group>
                  </Row>
                  <Button
                    className="submit-btn"
                    variant="primary"
                    type="submit"
                  >
                    Send Comment
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={4} md={12} xs={12} className="mobile-hide">
              <Row className="mt-3">
                <Col md={12}>
                <div className="heading-primary secondary mb-0">Related Guides</div>
                </Col>
                <Col md={12}>
                  <ProductSliderBlog />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={12}>
                  <div className="heading-primary secondary mb-0">Related Reviews</div>
                </Col>
                <Col md={12}>
                  <ReviewSliderBlog/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section  >
        <Container>
          <Row className="my-3">
            <Col md={12}>
              <h2 className="heading-primary secondary blog-post">Blog Posts</h2>
            </Col>
            <Col md={12}>
              <BlogSlider />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="my-3">
            <Col md={12}>
              <h2 className="heading-primary secondary related-guides">Related Guides</h2>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="my-3">
            <Col md={12}>
              <h2 className="heading-primary secondary related-reviews">Related Reviews</h2>
            </Col>
            <Col md={12}>
              <ReviewSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
