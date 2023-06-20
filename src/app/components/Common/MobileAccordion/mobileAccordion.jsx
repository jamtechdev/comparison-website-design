
import {
    Button,
    Col,
    Container,
    Row,
    Accordion,
} from "react-bootstrap";
import MobileProductSlider from "../MobileProductSlider/mobileProductSlider";
export default function mobileAccordion() {

    return (
        <>
            <section className="sec-mobile_accordion">
                <Accordion className="mobile_accordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >
                            User’s Reviews
                        </Accordion.Header>
                        <Accordion.Body className="px-2">
                            <Row>
                                <Col md={12} xs={12} className="px-0">
                                    <MobileProductSlider />
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header >Video Reviews</Accordion.Header>
                        <Accordion.Body className="px-2">
                            <Row>
                                <Col md={12} xs={12} className="px-0">
                                    <MobileProductSlider />
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header >Expert Reviews</Accordion.Header>
                        <Accordion.Body className="px-2">
                            <Row>
                                <Col md={12} xs={12} className="px-0">
                                    <MobileProductSlider />
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </section>
        </>
    )
}