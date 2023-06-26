"use client";
import { Button, Col, Container, Form, Row, Breadcrumb } from "react-bootstrap";
import BlogSlider from "../components/Common/BlogSlider/blogSlider";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
export default function blogArchive() {
  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb
                firstPageName="Blog Archive"
                secondPageName=""
              />
            </Col>

            <Col md={12}>
              <h1 className="heading-primary">Blog Posts Archive</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog_post_section py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="heading-primary secondary">
                Latest Blog Posts in Electronics
              </h2>
            </Col>
            <Col md={12}>
              <BlogSlider />
            </Col>
            <Col md={12} className="text-center">
              <Button className="view-blog">
                View All Blog Posts in Electronics{" "}
                <i className="ri-arrow-right-s-line"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
