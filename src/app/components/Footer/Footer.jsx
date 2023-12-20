import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Form,
  NavDropdown,
  Row,
} from "react-bootstrap";
import NewsLetter from "../Common/NewsLetter/newsLetter.jsx";
import { useEffect, useState } from "react";
import { homePage } from "../../_services/homepage.service";

export default function Footer() {
  // news letter pop up
  const [show, setShow] = useState(false);
  const [footerData, setFooterData] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    homePage
      .footerData()
      .then((res) => {
        setFooterData(res.data.data);
      })
      .catch((err) => {
        console.log("Some Error Occured", err);
      });
  }, []);
  return (
    <footer>
      <div className={styles.signupContainer}>
        <Container>
          <Row className="align-items-center ">
            <Col lg={6} md={12} xs={12}>
              <div className={"text-uppercase " + styles.singupNewsletter}>
                Sign up For Newsletter
              </div>
              <p className="space-bottom-para">
                {/* New subscribers receive <span>10%</span> off their first
                purchase */}
                Get the latest buying advice
              </p>
            </Col>
            <Col lg={6} md={12} xs={12} className="top-space">
              <Form className={"d-flex " + styles.emailinput}>
                <div className="search-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Your email..."
                  aria-label="Search"
                />
                <Button onClick={handleShow}>Subscribe</Button>
                {/* inactive newsletter pop up */}
                <NewsLetter
                  show={show}
                  setShow={setShow}
                  handleClose={handleClose}
                  handleShow={handleShow}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="footer-container">
        <Row>
          <Col lg={3} md={6}>
            <div className="footer-content">
              <Image src="/images/logo.svg" width={118} height={40} alt="" />
              <p>{footerData && footerData?.column_one?.desc}</p>
              <div className="social-icon">
                {footerData?.column_one?.instagram_link && (
                  <Link href={footerData?.column_one?.instagram_link || ""}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                )}
                {footerData?.column_one?.pinterest_link && (
                  <Link href={footerData?.column_one?.pinterest_link || ""}>
                    {" "}
                    <i className="ri-pinterest-line"></i>
                  </Link>
                )}
                {footerData?.column_one?.twitter_link && (
                  <Link href={footerData?.column_one?.twitter_link || ""}>
                    <i className="ri-twitter-fill"></i>
                  </Link>
                )}
                {footerData?.column_one?.facebook_link && (
                  <Link href={footerData?.column_one?.facebook_link || ""}>
                    <i className="ri-facebook-fill"></i>
                  </Link>
                )}
                {footerData?.column_one?.youtube_link && (
                  <Link href={footerData?.column_one?.youtube_link || ""}>
                    <i className="ri-youtube-fill"></i>
                  </Link>
                )}
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="">
            <span className="footer_heading">
              {footerData?.column_two?.c2nd_title}
            </span>
            <div className="address-section">
              {footerData?.column_two?.address && (
                <div className="inner-item">
                  <Image
                    src="/images/location.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>{footerData?.column_two?.address}</p>
                </div>
              )}
              {footerData?.column_two?.phone && (
                <div className="inner-item">
                  <Image src="/images/call.svg" width={20} height={20} alt="" />
                  <p>{footerData?.column_two?.phone}</p>
                </div>
              )}
              {footerData?.column_two?.email && (
                <div className="inner-item">
                  <Image
                    src="/images/message.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p>{footerData?.column_two?.email}</p>
                </div>
              )}
            </div>
          </Col>
          <Col lg={3} md={6} xs={6} className="top-space">
            <span className="footer_heading">
              {footerData?.column_three?.c3rd_title}
            </span>

            {footerData &&
              footerData?.column_three?.name_link?.map((item, index) => {
                return (
                  <ul
                    className={
                      item[`name${index + 1}`] != null ? "footer_list-item" : ""
                    }
                    key={index}
                  >
                    <li>
                      <Link href={item[`link${index + 1}`] || ""}>
                        {item[`name${index + 1}`] != null
                          ? item[`name${index + 1}`]
                          : ""}
                      </Link>
                    </li>
                  </ul>
                );
              })}
          </Col>
          <Col lg={3} md={6} xs={6} className="top-space">
            <span className="footer_heading">
              {footerData?.column_four?.title}
            </span>
            <ul className="footer_list-item">
              {footerData &&
                footerData?.column_four?.categories?.map((cat, index) => {
                  return (
                    <li key={index}>
                      <Link href="">{cat.title}</Link>
                    </li>
                  );
                })}
              {/* <li>
                <Link href="">Furniture</Link>
              </li>
              <li>
                <Link href="">Decoraton</Link>
              </li>
              <li>
                <Link href="">Textile</Link>
              </li>
              <li>
                <Link href="">Lamps</Link>
              </li>
              <li>
                <Link href="">Construction</Link>
              </li>
              <li>
                <Link href="">Accessories</Link>
              </li>
              <li>
                <Link href="">Others</Link>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copy-right">
        <p className="text-center">Copyright © 2023. All Right Reserved</p>
      </div>
    </footer>
  );
}
