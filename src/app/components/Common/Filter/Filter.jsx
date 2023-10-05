import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

export default function Filter({ categoryAttributes }) {
  let initialNoOfCategories = 5
  const [pagination, setPagination] = useState({})

  const handlePagination = (categoryName) => {
    let updatedPage = pagination[categoryName] + initialNoOfCategories || initialNoOfCategories*2
    setPagination({...pagination, [categoryName]: updatedPage})
  }

  return (
    <div className="filter-container">
      {categoryAttributes?.map((category, index) =>
        <div className="filter-section" key={index}>
          <div className="tech-features">{category.name}</div>
          <Accordion className="filter-accordion">
            {category?.attributes?.map((attribute,attrIndex) => {
              if (attribute.position <= (pagination[category.name] || initialNoOfCategories))
                return (
                  <Accordion.Item eventKey={attrIndex} key={attribute.position}>
                    <Accordion.Header as="div">{attribute.name} <i className="ri-arrow-down-s-fill"></i></Accordion.Header>
                    <Accordion.Body>
                      <Form.Check required label="Febonic" />
                      <Form.Check required label="Durian" />
                      <Form.Check required label="Dreamzz" />
                      <Form.Check required label="Furniture" />
                    </Accordion.Body>
                  </Accordion.Item>
                )
            }
            )}

            {/* <Accordion.Item eventKey="1">
              <Accordion.Header as="div">
                Autonomy <i className="ri-arrow-down-s-fill"></i>
              </Accordion.Header>
              <Accordion.Body>
                <Form.Range />
                <div className="range">
                  <label><input type="number" />Min</label>
                  <label><input type="number" />Max</label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">

              <Accordion.Header as="div">
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
            </Accordion.Item> */}
          </Accordion>
          {(category.attributes.length >= (pagination[category.name] || initialNoOfCategories)) &&
            <span className="show_more" onClick={() => handlePagination(category.name)}>SHOW MORE <i class="ri-add-line"></i></span>
          }
        </div>
      )}
      {/* <div className="filter-section">
        <div className="tech-features">Features</div>
        <Accordion className="filter-accordion">
          <Accordion.Item eventKey="0">
         
            <Accordion.Header as="div">
            Mapping Technology <i className="ri-arrow-down-s-fill"></i>
            </Accordion.Header>
            <Accordion.Body>
              <Form.Check required label="Febonic" />
              <Form.Check required label="Durian" />
              <Form.Check required label="Dreamzz" />
              <Form.Check required label="Furniture" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header as="div">
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
            <Accordion.Header as="div">
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
        <span className="show_more">SHOW MORE <i class="ri-add-line"></i></span>
      </div> */}
    </div>
  );
}
