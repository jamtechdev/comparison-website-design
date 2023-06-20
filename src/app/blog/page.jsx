"use client";
import Image from "next/image";
import { Button, Col, Container, Link, Form, Row, } from "react-bootstrap";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import Pagination from "../components/Common/Pagination/pagination";

export default function blog() {
    return (
        <>
            <section className="breadcrumb-section">
                <Container>
                    <Row >
                        <Col md={12}>
                            <BreadCrumb />
                        </Col>

                        <Col md={12}>
                            <h1 className="heading-primary">Blog Posts Archive - Electronics</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cardsGrid py-5">
                <Container>

                    <Row>
                        <Col md={12}>
                            <p className="text-end postCount">(48 posts)</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={3} md={4} xs={6} className="px-2">
                            <div className="blog-card">
                                <Image
                                    src="/images/controller.png"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt=""
                                    className="card-img"
                                />
                                <p className="dates">SEPTEMBER 20 2022</p>
                                <h6>Drinking Hot Water: Health Benefits and Risks</h6>
                                <p className="category">Electronics</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} xs={6} className="px-2">
                            <div className="blog-card">
                                <Image
                                    src="/images/controller.png"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt=""
                                    className="card-img"
                                />
                                <p className="dates">SEPTEMBER 20 2022</p>
                                <h6>Drinking Hot Water: Health Benefits and Risks</h6>
                                <p className="category">Electronics</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} xs={6} className="px-2">
                            <div className="blog-card">
                                <Image
                                    src="/images/controller.png"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt=""
                                    className="card-img"
                                />
                                <p className="dates">SEPTEMBER 20 2022</p>
                                <h6>Drinking Hot Water: Health Benefits and Risks</h6>
                                <p className="category">Electronics</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} xs={6} className="px-2">
                            <div className="blog-card">
                                <Image
                                    src="/images/controller.png"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt=""
                                    className="card-img"
                                />
                                <p className="dates">SEPTEMBER 20 2022</p>
                                <h6>Drinking Hot Water: Health Benefits and Risks</h6>
                                <p className="category">Electronics</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section className="paginationSec py-5">
                <Container>

                    <Row>
                        <Col md={12} className="text-center">
                            <Button className="view-blog load-more">Load more <i className="ri-arrow-right-s-line"></i></Button>

                        </Col>
                        <Col md={12} className="text-center pt-4">
                            <Pagination />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}