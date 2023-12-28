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
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    fetchBlogs(loadMore);
  }, [cat_name, currentPage]);

  const fetchBlogs = () => {
    blogService
      .allBlogs(cat_name, currentPage)
      .then((res) => {
        if (loadMore == true) {
          setLoadMore(false);
          setBlogData((prevData) => [...prevData, ...res.data.data.blogs]);
        } else {
          setBlogData(res.data.data.blogs);
        }
        setPaginationData(res.data.data.pagination);
        // console.log(res.data.data.blogs, " all data");
      })
      .catch((err) => {
        console.log(err);
      });
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
              <p className="text-end postCount-2">({blogData?.length})</p>
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
                    <div className="blog-card" role="button">
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
         
          </Row>
        </Container>
      </section>

      {paginationData.total_pages > 1 && (
        <section className="paginationSec pb-5">
          <Container>
            <Pagenation
              totalPages={paginationData.total_pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setPageData={setBlogData}
              setLoadMore={setLoadMore}
            />
          </Container>
        </section>
      )}
    </>
  );
}
