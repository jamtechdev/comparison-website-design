import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useRouter,usePathname } from "next/navigation";
import {
  Button,
  Col,
  Container,
  Form,
  NavDropdown,
  Row,
  Modal,
  Accordion,
  Navbar
} from "react-bootstrap";

export default function Header() {
  const pathname = usePathname()
  const [show, setShow] = useState(false);
  return (
    <header>
      <Container>
        <Row className="py-2 align-items-center logo-header">
          <Col lg={2} md={3} xs={4}>
            <Image src="/images/logo.svg" className="logo" width={155} height={52} alt="" />
          </Col>
          <Col lg={4} md={9} xs={8} className="form-search">
            {pathname !=='/' && <>
            <Form className={"d-flex " + styles.searchbar}>
              <Form.Control
                type="search"
                placeholder="Search Shofy.com"
                aria-label="Search"
              />
              <Button>
                <i className="ri-search-line"></i>
              </Button>
            </Form>
            </>}
          </Col>
          <Col md={6} className="hide-header-list">
            <ul className={styles.navitem}>
              <li>
                <Link href="#">Compare</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">How we rank</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
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
          <NavDropdown title="Electronics" >
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Home">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Kitchen">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Tools">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Beauty">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Health">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Sport">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
          <NavDropdown title="Hobby">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="nav-list-section">
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
                    <h6>Cleaning</h6>
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
          </NavDropdown>
        </div>
        <div className="menu-hambergar hidden py-2 text-end px-3">
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
            <Modal.Body className="px-0">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header >Electronics</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={3} md={6} xs={12}>
                        <div className="nav-list-section">
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
                  <Accordion.Header >Home</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col lg={3} md={6} xs={12}>
                        <div className="nav-list-section">
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
                          <h6>Cleaning</h6>
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
              <Navbar.Brand href="#comparison-tool">Comparison Tool</Navbar.Brand>
              <Navbar.Brand href="#blog">Blog</Navbar.Brand>
              </Navbar>
            </Modal.Body>
          </Modal>
        </div>
      </nav>
    </header>
  );
}
