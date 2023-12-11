"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Link, Form, Row } from "react-bootstrap";
import { getterService } from "../_services/getter.service";

export default function PrivacyAndPolicy() {
  const [faq, setFaq] = useState({});

  useEffect(() => {
    getterService.getPrivacyPolicy().then((res) => {
      setFaq(res.data);
    });
  }, []);
  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="heading-primary">FAQ</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contentSec pt-3 pb-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="contentPara">
                <p>{faq?.data?.content || "Loading..."}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
