import { Accordion, Form } from "react-bootstrap";

export default function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-section">
        <h6>TECHNOLOGY</h6>
        <Accordion className="filter-accordion">
          <Accordion.Item eventKey="0">
       
            <div className="accordion-header">
            <button type="button" aria-expanded="false" class="accordion-button collapsed">Mapping Technology <i className="ri-arrow-down-s-fill"></i></button>
              
            </div>
            <Accordion.Body>
              <Form.Check required label="Febonic" />
              <Form.Check required label="Durian" />
              <Form.Check required label="Dreamzz" />
              <Form.Check required label="Furniture" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <div className="accordion-header">
            <button type="button" aria-expanded="false" class="accordion-button collapsed"> Autonomy <i className="ri-arrow-down-s-fill"></i></button>
              
            </div>
            {/* <Accordion.Header>
             
            </Accordion.Header> */}
            <Accordion.Body>
              <Form.Range />
              <div className="range">
                 <label><input type="number"/>Min</label>
                 <label><input type="number"/>Max</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <div className="accordion-header">
            <button type="button" aria-expanded="false" class="accordion-button collapsed">  App Control <i className="ri-arrow-down-s-fill"></i></button>
              
            </div>
            {/* <Accordion.Header>
             
            </Accordion.Header> */}
            <Accordion.Body>
            <div className="d-flex justify-content-between">
                <Form.Check required label="yes" />
                <span>(48)</span>
              </div>
              <div className="d-flex justify-content-between">
                <Form.Check required label="no" />
                <span>(35)</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="filter-section">
        <h6>Features</h6>
        <Accordion className="filter-accordion">
          <Accordion.Item eventKey="0">
          <div className="accordion-header">
            <button type="button" aria-expanded="false" class="accordion-button collapsed">   Mapping Technology <i className="ri-arrow-down-s-fill"></i></button>
              
            </div>
            <Accordion.Header>
             
            </Accordion.Header>
            <Accordion.Body>
              <Form.Check required label="Febonic" />
              <Form.Check required label="Durian" />
              <Form.Check required label="Dreamzz" />
              <Form.Check required label="Furniture" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Autonomy <i className="ri-arrow-down-s-fill"></i>
            </Accordion.Header>
            <Accordion.Body>
              <Form.Range />
              <div className="range">
                 <label><input type="number"/>Min</label>
                 <label><input type="number"/>Max</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              App Control <i className="ri-arrow-down-s-fill"></i>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-between">
                <Form.Check required label="yes" />
                <span>(48)</span>
              </div>
              <div className="d-flex justify-content-between">
                <Form.Check required label="no" />
                <span>(35)</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
