"use client";
import Image from "next/image";
import { Button, Col, Container, Link, Form, Row, } from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";

export default function contact() {
    return (
        <>
            <section className="breadcrumb-section">
                <Container>
                    <Row >
                        <Col md={12}>
                            <BreadCrumb />
                        </Col>

                        <Col md={12}>
                            <h1 className="heading-primary">About us</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contentSec py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="contentPara">
                                <p>In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!
                                    <br />
                                    <br />
                                    In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together! In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and
                                    <br />
                                    <br />
                                    In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!
                                    <br />
                                    <br />
                                    In total, we’ve analyzed 94 smartwatches, 247 784 user’s reviews and 4 574 technical data to find out the best smartwatches of 2023. Let’s see the results together!In total, we’ve analyzed 94

                                </p>
                            </div>
                        </Col>
                        <Col md={4} className="about-category-Sec">
                            <h2 className="heading-primary secondary">See also</h2>
                            <Row className="mt-3">

                                <Col md={12} xs={6}>
                                    <div className="category-section">
                                        <Image
                                            src="/images/how-work.png"
                                            width={0}
                                            height={0}
                                            sizes="100%"
                                            alt=""
                                            className="card-img"
                                        />
                                        <span className="category_name">How our ranking works</span>
                                    </div>
                                </Col>
                                <Col md={12} xs={6} className="ps">
                                    <div className="category-section">
                                        <Image
                                            src="/images/tab.png"
                                            width={0}
                                            height={0}
                                            sizes="100%"
                                            alt=""
                                            className="card-img"
                                        />
                                        <span className="category_name">Blog</span>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
