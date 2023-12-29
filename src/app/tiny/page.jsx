"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";

function Tiny() {
  const [tiny, setTiny] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
  };
  useEffect(() => {
    axios
      .get("https://panel.mondopedia.it/api/v1/testing-textarea", config)
      .then((res) => {
        return setTiny(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(tiny ,"tiny");
  return (
    <>
    
      <section className="product-header">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrumb
                firstPageName="Blog"
                secondPageName={tiny?.title}
              />
            </Col>
            <Col md={12} lg={12} xl={9}>
              <h1 className="site-main-heading">{tiny?.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog-slides">
        <Container>
          <Row className="my-3">
            <Col md={12} dangerouslySetInnerHTML={{__html: tiny?.description}}>


            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Tiny;
