"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Button,
  Col,
  Container,
  Form,
  NavDropdown,
  Row,
  // Modal,
  Accordion,
  Navbar,
  Spinner,
} from "react-bootstrap";
import { homePage } from "../../_services/homepage.service";
import SearchList from "../Search/SearchList";
import Modal from "../../components/Modal/Modal";
import CompareModal from "../../components/Modal/Modal";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [navData, setNavData] = useState();
  const [logoFavicon, setLogoFavicon] = useState();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const [show, setShow] = useState(false);
  const scrollDirection = useScrollDirection();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // setLoading(true);
    homePage
      .navData()
      .then((res) => {
        console.log(res);
        // setLoading(false);
        setNavData(res?.data?.data);
      })
      .catch((err) => {
        // setLoading(false);
        console.log("Some Error Occured", err);
      });
    setLoading(true);
    homePage
      .manageLogoFavicon()
      .then((res) => {
        console.log(res, "favicon");
        setLoading(false);
        setLogoFavicon(res?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Some Error Occured", err);
      });
  }, []);
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "top-sticky-not" : "top-sticky"
      }`}
    >
      <Container>
        <Row className="py-2 align-items-center logo-header">
          <Col lg={2} md={4} xs={4} className="hidden">
            <div className="menu-hambergar text-start">
              <Button className="hambergar-btn" onClick={() => setShow(true)}>
                <i className="ri-menu-line"></i>
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="menuModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Menu
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header as="div">Electronics</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li className="nav-active">Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header as="div">Home</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li className="nav-active">Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={3} md={6} xs={12}>
                            <div className="nav-list-section">
                              <span>Cleaning</span>
                              <ul>
                                <li>Washing machines</li>
                                <li>Tumble dryers</li>
                                <li>Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                                <li>Robot Vacuum Cleaners</li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Navbar className="nav-links-mobile">
                    <Navbar.Brand href="#how-we-rank">How we rank</Navbar.Brand>
                    <Navbar.Brand href="#comparison-tool">
                      Comparison Tool
                    </Navbar.Brand>
                    <Navbar.Brand href="#blog">Blog</Navbar.Brand>
                  </Navbar>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col lg={2} md={4} xs={4}>
            {!loading ? (
              <Link href="/">
                <Image
                  src={logoFavicon?.logo}
                  className="logo"
                  width={155}
                  height={52}
                  alt=""
                />
              </Link>
            ) : (
              <div className="logo" style={{ height: "" }}>
                <span>Loading...</span>
              </div>
            )}
          </Col>
          <Col lg={4} md={4} xs={4} className="form-search">
            {pathname !== "/" && (
              <>
                <Form className={"d-flex " + styles.searchbar}>
                  <Form.Control
                    type="search"
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    placeholder="Search Shofy.com"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearch}
                  />
                  <Button className="searchBarInner">
                    <i className="ri-search-line"></i>
                  </Button>
                  <SearchList
                    setsearch={setSearch}
                    search={search}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                  />
                </Form>
              </>
            )}
          </Col>
          <Col md={6} className="hide-header-list">
            <ul className={styles.navitem}>
              <li onClick={() => setIsOpen(true)} role="button">
                Compare
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="#">How we rank</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <nav className={styles.categories_nav_item}>
        <div className={"nav-dropdown-item " + styles.inner_container}>
          {navData &&
            navData?.map((item, index) => {
              return (
                <>
                  <div className="cat-nav-item" key={index}>
                    <div
                      className="dropdown-toggle nav-link"
                      onClick={() => {
                        router.push(
                          `/category-archive/${item?.primary_category}`
                        );
                      }}
                    >
                      {item?.primary_category}
                    </div>
                    <Container className="dropdown-menu">
                      <Row>
                        <Col md={12}>
                          <div className="nav-list-section">
                            <span>{item?.secondary_category}</span>
                            <ul>
                              {item?.guides &&
                                item?.guides?.map((guide, index) => {
                                  return (
                                    <li
                                      key={index}
                                      onClick={() => {
                                        router.push(`/${guide?.permalink}`);
                                      }}
                                    >
                                      {guide?.title}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </>
              );
            })}

          {/* <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Home</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Kitchen</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Tools</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Beauty</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Health</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Sport</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="cat-nav-item">
            <div className="dropdown-toggle nav-link">Hobby</div>
            <Container className="dropdown-menu">
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="nav-list-section">
                    <span>Cleaning</span>
                    <ul>
                      <li>Washing machines</li>
                      <li>Tumble dryers</li>
                      <li>Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                      <li>Robot Vacuum Cleaners</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}
        </div>
      </nav>
      {isOpen && <CompareModal setIsOpen={setIsOpen} />}{" "}
    </header>
  );
}
