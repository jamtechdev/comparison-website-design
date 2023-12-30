/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BreadCrumb from "../../components/Common/BreadCrumb/breadcrum";
import BlogSlider from "../../components/Common/BlogSlider/blogSlider";
import ProductSliderBlog from "../../components/Common/ProductSliderBlog/ProductSliderBlog";
import ReviewSlider from "../../components/Common/ReviewSlider/reviewSlider";
import ReviewSliderBlog from "../../components/Common/ReviewSliderBlog/ReviewSliderBlog";
import ProductSlider from "../../components/Common/ProductSlider/productSlider";
import { blogService } from "../../_services/blog.service";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function SingleBlog({ params }) {
  // fetch Api for blogByparamlink
  const [blog, setBlog] = useState("");
  // Blog Api slider
  const fetchData = async () => {
    try {
      if (params?.blog?.length === 2) {
        const data = await blogService.getBlogByPermalink(params?.blog[1]);
        setBlog(data.data);
      } else {
        const data = await blogService.getBlogByPermalink(params?.blog[0]);
        setBlog(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [params?.blog?.length === 2 ? params?.blog[1] : params?.blog[0]]);

  var dateObject = new Date(blog?.data?.published_at);
  // Extract day, month, and year
  var day = dateObject.getDate();
  var month = dateObject.getMonth() + 1; // Month is zero-based, so we add 1
  var year = dateObject.getFullYear();

  return (
    <>
      {blog?.code === 200 ? (
        <>
          <section className="product-header">
            <Container>
              <Row className="align-items-center">
                <Col md={12}>
                  <BreadCrumb
                    firstPageName="Blog"
                    secondPageName={blog?.data?.title}
                  />
                </Col>
                <Col md={12} lg={12} xl={9}>
                  <h1 className="site-main-heading">{blog?.data?.title}</h1>
                </Col>

                <Col md={12} lg={12} xl={3}>
                  <div className="user-info-section">
                    {blog?.data?.author && (
                      <div className="user-section">
                        {blog?.data?.author?.image && (
                          <img
                            src={
                              blog?.data?.author?.image
                                ? blog?.data?.author?.image
                                : "/images/user.png"
                            }
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                        )}

                        <div className="user-detail">
                          <p>
                            <Link href={`/author/${blog?.data?.author?.id}`}>
                              {blog?.data?.author?.name}{" "}
                            </Link>
                          </p>
                        </div>
                      </div>
                    )}
                    <span>
                      updated:
                      <i>{blog?.data?.updated_at}</i>
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="contentSec my-3">
            <Container>
              <Row>
                <Col lg={2} md={2} xs={12}>
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
                <Col lg={8} md={8} xs={12}>
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: blog.data?.text_part && blog.data?.text_part,
                      }}
                    >
                      {/* {blog.data?.text_part}
                      <br /> */}
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
                  <div className="fonzi p-3 my-md-4 my-xs-0">
                    <div className="profile mb-2">
                      <div className="avatar">
                        <img
                          src={
                            blog?.data?.author?.image
                              ? blog?.data?.author?.image
                              : "/images/user.png"
                          }
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                      </div>
                      <div className="label">
                        <Link href={`/author/${blog?.data?.author?.id}`}>
                          <p className="name">{blog?.data?.author?.name}</p>
                        </Link>
                        <p>{blog?.data?.author?.summary}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-container">
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
                  </div> */}
                </Col>
                <Col
                  lg={2}
                  md={2}
                  xs={12}
                  className="mobile-hide productSlider-Container"
                >
                  <Row className="mt-3">
                    <Col md={12}>
                      <div className="heading-primary secondary mb-2">
                        Related Guides
                      </div>
                    </Col>
                    <Col md={12}>
                      <ProductSliderBlog
                        favSlider={blog?.data?.related_guides}
                      />
                    </Col>
                  </Row>
                  {/* <Row className="mt-3">
                    <Col md={12}>
                      <div className="heading-primary secondary mb-2">
                        Related Reviews
                      </div>
                    </Col>
                    <Col md={12}>
                      <ReviewSliderBlog />
                    </Col>
                  </Row> */}
                </Col>
              </Row>
            </Container>
          </section>
          <section className="blog-slides">
            <Container>
              <Row className="my-3">
                <Col md={12}>
                  <h2 className="heading-primary secondary blog-post">
                    Blog Posts
                  </h2>
                </Col>
                <Col md={12}>
                  <BlogSlider blogData={blog?.data?.related_blogs} />
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <Row className="my-3">
                <Col md={12}>
                  <h2 className="heading-primary secondary related-guides">
                    Related Guides
                  </h2>
                </Col>
                <Col md={12}>
                  <ProductSlider favSlider={blog?.data?.related_guides} />
                </Col>
              </Row>
            </Container>
          </section>
        </>
      ) : (
        <>
          <Container className="text-center">
            <h1>DATA NOT FOUND</h1>
          </Container>
        </>
      )}

      {/* <section>
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
          </section> */}
    </>
  );
}
