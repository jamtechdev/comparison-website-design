import { useState, useRef, useEffect } from "react";
import { Accordion, Form } from "react-bootstrap";
import { filterArrayOfObject, handleFilterValueChange, isCheckboxChecked } from "../../../_helpers/filter.js";

import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider.js";

export default function Filter({ categoryAttributes, setFilterObj, filterObj }) {
  let initialNoOfCategories = 5
  const [pagination, setPagination] = useState({})

  const handlePagination = (categoryName) => {
    let updatedPage = pagination[categoryName] + initialNoOfCategories || initialNoOfCategories * 2
    setPagination({ ...pagination, [categoryName]: updatedPage })
  }
  // let refObj = useRef({})

  const handleFilterChange = (category, attribute, value, e) => {
    handleFilterValueChange(filterObj, setFilterObj, category, attribute, value, e)
  };

  const handleRangeChange = (category, attribute, value) => {
    // let obj = { ...filterObj }
    // if (!obj[category]) {
    //   obj[category] = {};
    // }
    // if (!obj[category][attribute]) {
    //   obj[category][attribute] = {min: 0, max: 100};
    // }
    // obj[category][attribute]={
    //   min : value.min,
    //   max : value.max
    // }
    // setFilterObj({...obj})

  };


  return (
    <div className="filter-container">
      {categoryAttributes?.map((category, index) => {
        let countAttribute = 1;
        return (
          <div className="filter-section" key={index}>
            <div className="tech-features">{category.name}</div>
            <Accordion className="filter-accordion">
              {category?.attributes?.map((attribute, attrIndex) => {
                if (countAttribute <= (pagination[category.name] || initialNoOfCategories)) {
                  // console.log(attribute)
                  let result = filterArrayOfObject(attribute);
                  if (result?.type == 'dropdown') {
                    countAttribute++;
                    return (
                      <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                        <Accordion.Header as="div">{attribute.name} <i className="ri-arrow-down-s-fill"></i></Accordion.Header>
                        <Accordion.Body>
                          {result.values?.map((value, valIndex) => {
                            const groupName = `${category.name}-${attribute.name}`;

                            return (
                              <Form.Check
                                required
                                label={(
                                  <span>
                                    {value} <span dangerouslySetInnerHTML={{ __html: '<p>(30)</p>' }} />
                                  </span>
                                )}

                                checked={isCheckboxChecked(filterObj,category.name, attribute.name, value)}
                                key={valIndex}
                                id={`${groupName}-${value}`}
                                onChange={(e) => handleFilterChange(category.name, attribute.name, value, e)}
                              />
                            );
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                    )
                  }
                  else if (result?.type == "range") {
                    countAttribute++;
                    return (
                      <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                        <Accordion.Header as="div">
                          {attribute.name} <i className="ri-arrow-down-s-fill"></i>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <Form.Range
                            min={result.minValue}
                            max={result.maxValue}
                          /> */}
                          <MultiRangeSlider
                            min={result.minValue}
                            max={result.maxValue}
                            onChange={({ min, max }) => handleRangeChange(category.name, attribute.name, {min,max})}
                          />
                          {/* <div className="range">
                            <label>{result.minValue}Min</label>
                            <label>{result.maxValue}Max</label>
                          </div> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    )
                  }
                }
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
            {/* {(category.attributes.length >= (pagination[category.name] || initialNoOfCategories) */}
            {(countAttribute > (pagination[category.name] || initialNoOfCategories)) &&
              <span className="show_more" onClick={() => handlePagination(category.name)}>SHOW MORE <i className="ri-add-line"></i></span>
            }
          </div>
        )
      }
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
        <span className="show_more">SHOW MORE <i className="ri-add-line"></i></span>
      </div> */}
    </div>
  );
}
