"use client";
import { Button, Col, Container, Form, Row, Breadcrumb } from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import ProductSlider from "../components/Common/ProductSlider/productSlider";
export default function categoryArchive() {
  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb />
            </Col>
            <Col md={12}>
              <h1 className="heading-primary">Electronics</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog_post_section py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="heading-primary secondary">Washing Machines</h2>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2 className="heading-primary secondary">Fridge & Freezers</h2>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2 className="heading-primary secondary">Heating</h2>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
