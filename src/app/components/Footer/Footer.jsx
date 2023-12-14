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
import NewsLetter from "../Common/NewsLetter/newsLetter.js";
import { useState } from "react";

export default function Footer() {
  // news letter pop up
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer>
      <div className={styles.signupContainer}>
        <Container>
          <Row className="align-items-center ">
            <Col lg={6} md={12} xs={12}>
              <div className={"text-uppercase " + styles.singupNewsletter}>Sign up For Newsletter</div>
              <p className="space-bottom-para">
                {/* New subscribers receive <span>10%</span> off their first */}
                {/* purchase */}
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
                <NewsLetter show={show} setShow ={setShow} handleClose={handleClose} handleShow={handleShow}/>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="footer-container">
        <Row>
          <Col lg={3}  md={6}>
            <div className="footer-content">
              <Image src="/images/logo.svg" width={118} height={40} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has...
              </p>
              <div className="social-icon">
                <i className="ri-instagram-line"></i>
                <i className="ri-pinterest-line"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-facebook-fill"></i>
                <i className="ri-youtube-fill"></i>
              </div>
            </div>
          </Col>
          <Col lg={3}  md={6} className="">
            <span className="footer_heading">Contact Us</span>
            <div className="address-section">
              <div className="inner-item">
                <Image src="/images/location.svg" width={20} height={20} alt="" />
                <p>55 Gallaxy Enque,2568 steet, 23568 NY</p>
              </div>
              <div className="inner-item">
                <Image src="/images/call.svg" width={20} height={20} alt="" />
                <p>Phone:(440) 000 000 0000</p>
              </div>
              <div className="inner-item">
                <Image src="/images/message.svg" width={20} height={20} alt="" />
                <p>Email :sales@yousite.com</p>
              </div>
            </div>
          </Col>
          <Col lg={3}  md={6} xs={6} className="top-space">
            <span className="footer_heading">General</span>
            <ul className="footer_list-item">
              <li>
                <Link href="">About us</Link>
              </li>
              <li>
                <Link href="">Careers</Link>
              </li>
              <li>
                <Link href="">Privacy policy</Link>
              </li>
              <li>
                <Link href="">Terms & condition</Link>
              </li>
              <li>
                <Link href="">My Account</Link>
              </li>
              <li>
                <Link href="">FAQs</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}  md={6} xs={6}  className="top-space">
            <span className="footer_heading">Categories</span>
            <ul className="footer_list-item">
              <li>
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
              </li>
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
