"use client";
import Image from "next/image";
import { Button, Col, Container, Link, Form, Row } from "react-bootstrap";
import BreadCrumb from "../../components/Common/BreadCrumb/breadcrum";
import Pagenation from "../../components/Common/Pagination/pagination";
import { blogService } from "../../_services/blog.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Blog({ params }) {
  const router = useRouter();
  const cat_name = params?.cat_name;
  const [blogData, setBlogData] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   blogService
  //     .allBlogs(cat_name)
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setBlogData(res.data.data.blogs);
  //       setPaginationData(res.data.data.pagination);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [cat_name]);
  // // console.log(blogData, "blogData-->>");

  useEffect(() => {
    fetchBlogs();
  }, [cat_name, currentPage]);

  const fetchBlogs = () => {
    blogService
      .allBlogs(cat_name, currentPage)
      .then((res) => {
        setBlogData(res.data.data.blogs);
        setPaginationData(res.data.data.pagination);
        console.log(res.data.data, " all data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb firstPageName="Blog Archive" secondPageName="" />
            </Col>

            <Col md={12}>
              <h1 className="heading-primary">
                Blog Posts Archive - {cat_name}
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="cardsGrid pt-3">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-end postCount">({blogData?.length})</p>
            </Col>
          </Row>
          <Row className="mt-3">
            {blogData &&
              blogData?.map((item, index) => {
                return (
                  <Col
                    lg={3}
                    md={4}
                    xs={6}
                    className="px-2 mb-3"
                    key={index}
                    onClick={() => {
                      router.push(`/blog/${item?.permalink}`);
                    }}
                  >
                    <div className="blog-card">
                      <div className="blog-card-img">
                        <Image
                          src={item?.bannerImage}
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                          className="card-img"
                        />
                      </div>
                      <p className="dates">SEPTEMBER 20 2022</p>
                      <span className="blog-title">{item?.title}</span>
                      <p className="category">{item?.category}</p>
                    </div>
                  </Col>
                );
              })}
            {/* <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>

            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>

            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>

            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6} className="px-2 mb-3">
              <div className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src="/images/controller.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    className="card-img"
                  />
                </div>
                <p className="dates">SEPTEMBER 20 2022</p>
                <span className="blog-title">Drinking Hot Water: Health Benefits and Risks</span>
                <p className="category">Electronics</p>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>

      {paginationData.total_pages > 1 && (
        <section className="paginationSec pb-5">
          <Container>
            <Row>
              {/* <Col md={12} className="text-center">
                <Button
                  className="view-blog load-more"
                  onClick={handleLoadMore}
                >
                  Load more <i className="ri-arrow-right-s-line"></i>
                </Button>
              </Col> */}
              <Col className="d-flex justify-content-center text-center">
                <Pagenation
                  totalPages={paginationData.total_pages}
                  setCurrentPage={handlePageChange}
                  currentPage={currentPage}
                  setPageData={setBlogData} // Ensure this function updates the data on page change
                />
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}
