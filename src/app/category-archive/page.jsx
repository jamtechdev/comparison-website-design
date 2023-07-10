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
              <BreadCrumb firstPageName="Blog Archive"
                secondPageName=""/>
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
              <div className="heading-primary secondary">Washing Machines</div>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="heading-primary secondary">Fridge & Freezers</div>
            </Col>
            <Col md={12}>
              <ProductSlider />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="heading-primary secondary">Heating</div>
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
