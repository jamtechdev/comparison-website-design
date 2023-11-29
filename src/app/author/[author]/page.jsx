"use client";
import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/Common/BreadCrumb/breadcrum";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import BlogSlider from "../../components/Common/BlogSlider/blogSlider";
import ProductSlider from "../../components/Common/ProductSlider/productSlider";
import { useRouter } from "next/router";
import { blogService } from "../../_services/blog.service";
import LatesGuid from "../../components/Common/ProductSlider/LatesGuid";
import ReviewSlider from "../../components/Common/ReviewSlider/reviewSlider";

function Author({ params }) {
  console.log(decodeURIComponent(params?.author));

  // get author deatils by author ID
  const [author, setAuthor] = useState("");
  // Blog Api slider
  const fetchData = async () => {
    try {
      const data = await blogService.getAuthorById(
        decodeURIComponent(params?.author)
      );
      setAuthor(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [decodeURIComponent(params?.author)]);
  console.log(author?.data);
  return (
    <>
      {author?.code === 200 && console.log("Data h isme")}
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb firstPageName="" secondPageName="Blog Archive" />
            </Col>
            <Col md={12}>
              <h1 className="heading-primary">{author?.data?.name}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contentSec pt-3 pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="contentPara">
                <div className="author-page-section">
                  <img
                    src={
                      author?.data?.image
                        ? author?.data?.image
                        : "/images/nofound.png"
                    }
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <div className="author-page-section-footer">
                    <span>{author?.data?.name}</span>
                  </div>
                </div>
                {author?.data?.about}
                <br />
                <br />
                {author?.data?.summary}
                <br />
                <br />
                {/* In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                and 4 574 technical data to find out the best smartwatches of
                2023. Let’s see the results together!In total, we’ve analyzed 94
                smartwatches, 247 784 user’s reviews and 4 574 technical data to
                find out the best smartwatches of 2023. Let’s see the results
                together!
                <br />
                <br />
                In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews
                and 4 574 technical data to find out the best smartwatches of
                2023. Let’s see the results together!In total, we’ve analyzed 94 */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="my-3">
            <Col md={12}>
              <h2 className="heading-primary secondary related-guides">
                Latest Guides
              </h2>
            </Col>
            <Col md={12}>
              <LatesGuid favSlider={author?.data?.latest_guides} />
            </Col>
          </Row>
        </Container>
      </section>
      {author?.data?.latest_reviews.length > 0 && (
        <section>
          <Container>
            <Row className="my-3">
              <Col md={12}>
                <h2 className="heading-primary secondary related-guides">
                  Latest Reviews
                </h2>
              </Col>
              <Col md={12}>
                <ReviewSlider favSlider={author?.data?.latest_reviews} />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <section className="blog-slides">
        <Container>
          <Row className="my-3">
            <Col md={12}>
              <h2 className="heading-primary secondary blog-post">
                Related Blog Posts
              </h2>
            </Col>
            <Col md={12}>
              <BlogSlider blogData={author?.data} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Author;
