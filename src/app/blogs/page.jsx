"use client";
import { Button, Col, Container, Form, Row, Breadcrumb } from "react-bootstrap";
import BlogSlider from "../components/Common/BlogSlider/blogSlider";
import BreadCrumb from "../components/Common/BreadCrumb/breadcrum";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function blogArchive() {
  // call api of blogData counter
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
  };
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/archive-page`, config)
      .then((res) => {
        setBlogData(res.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb firstPageName="Blog Archive" secondPageName="" />
            </Col>

            <Col md={12}>
              <h1 className="heading-primary">Blog Posts Archive</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog_post_section py-5">
        <Container>
          {blogData?.map((item, index) => {
            return (
              <>
                <Row>
                  <Col md={12}>
                    <h2 className="heading-primary secondary">
                      Latest Blog Posts in {item?.title}
                    </h2>
                  </Col>
                  <Col md={12}>
                    {
                      <BlogSlider
                        blogDataList={item?.blogs}
                        blogPageType={"listPage"}
                      />
                    }
                  </Col>
                  <Col md={12} className="text-center">
                    <Link href={`/all-blog/${item?.title}`}>
                    <Button className="view-blog">
                      View All Blog Posts in {blogData?.data?.title}{" "}
                      <i className="ri-arrow-right-s-line"></i>
                    </Button>
                    </Link>
                   
                  </Col>
                </Row>
              </>
            );
          })}
        </Container>
      </section>
    </>
  );
}
