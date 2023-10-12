import React, { useState, useRef, useEffect } from "react";
import { Accordion, Form } from "react-bootstrap";
import { filterArrayOfObject, handleFilterValueChange, isCheckboxChecked, capitalize, filterProducts } from "../../../_helpers";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider.js";
const Filter = React.memo(({ categoryAttributes, setFilterObj, filterObj, products }) => {
  let initialNoOfCategories = 5
  const [pagination, setPagination] = useState({})

  const remainigProductsCalculateFilter = (category, attribute, value) => {
    let newobj = {}
    // if (!newobj[category]) {
    newobj[category] = {};
    // }
    // if (!newobj[category][attribute]) {
    newobj[category][attribute] = [];
    // }
    newobj[category][attribute].push(value);
    return filterProducts({ ...filterObj, ...newobj }, products).length
  }


  const handlePagination = (categoryName) => {
    let updatedPage = pagination[categoryName] + initialNoOfCategories || initialNoOfCategories * 2
    setPagination({ ...pagination, [categoryName]: updatedPage })
  }
  // let refObj = useRef({})

  const handleFilterChange = (category, attribute, value, e) => {
    handleFilterValueChange(filterObj, setFilterObj, category, attribute, value, e)
  };

  const handleRangeChange = (category, attribute, value, initial_min, initial_max) => {
    let obj = { ...filterObj }
    if (!obj[category]) {
      obj[category] = {};
    }
    if (!obj[category][attribute]) {
      obj[category][attribute] = [{ min: 0, max: 100 }];
    }

    if (initial_max - initial_min >= 1 && initial_max == value.max && initial_min == value.min) {
      delete obj[category][attribute];
      if (Object.keys(obj[category]).length === 0) {
        delete obj[category];
      }
    }
    else if (initial_max - initial_min < 1 && value.max == 100 && value.min == 0) {
      delete obj[category][attribute];
      if (Object.keys(obj[category]).length === 0) {
        delete obj[category];
      }
    }
    else {
      obj[category][attribute][0] = {
        min: value.min,
        max: value.max
      }
    }
    setFilterObj({ ...obj })
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
                  let resultFilterArrayOfObject = filterArrayOfObject(attribute);
                  // console.log(resultFilterArrayOfObject)
                  if (resultFilterArrayOfObject?.type == 'dropdown') {
                    countAttribute++;
                    // check if values contain only yes then Toggle Switch
                    if (resultFilterArrayOfObject.values.length == 1 && resultFilterArrayOfObject.values[0] == "yes") {
                      // console.log(resultFilterArrayOfObject.values[0]);
                      const value = resultFilterArrayOfObject.values[0];
                      const groupName = `${category.name}-${attribute.name}`
                      return (
                        <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                          <Accordion.Header as="div">{attribute.name}
                            <Form.Check
                              required
                              className="custom-switch"
                              type="switch"
                              checked={isCheckboxChecked(filterObj, category.name, attribute.name, value)}
                              id={`${groupName}-${value}`}
                              onChange={(e) => handleFilterChange(category.name, attribute.name, value, e)}
                            />
                            </Accordion.Header>
                        </Accordion.Item>
                      )
                    }
                    // if not toggle show dropdown
                    else {
                      return (
                        <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                          <Accordion.Header as="div">{attribute.name} <i className="ri-arrow-down-s-fill"></i></Accordion.Header>
                          <Accordion.Body>
                            {resultFilterArrayOfObject.values?.map((value, valIndex) => {
                              const groupName = `${category.name}-${attribute.name}`;
                              // console.log("category", category.name, " attr ", attribute.name, " value ", value)
                              // console.log()
                              let countProduct = remainigProductsCalculateFilter(category.name, attribute.name, value)
                              return (
                                <Form.Check
                                  required
                                  label={(
                                    <span>
                                      {value.toString()} <span dangerouslySetInnerHTML={{ __html: `<p>(${countProduct})</p>` }} />
                                    </span>
                                  )}
                                  checked={isCheckboxChecked(filterObj, category.name, attribute.name, value)}
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
                  }
                  else if (resultFilterArrayOfObject?.type == "range") {
                    countAttribute++;
                    return (
                      <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                        <Accordion.Header as="div">
                          {attribute.name} <i className="ri-arrow-down-s-fill"></i>
                        </Accordion.Header>
                        <Accordion.Body>
                          <MultiRangeSlider
                            min={(resultFilterArrayOfObject.maxValue - resultFilterArrayOfObject.minValue) >= 1 ? resultFilterArrayOfObject.minValue : 0}
                            max={(resultFilterArrayOfObject.maxValue - resultFilterArrayOfObject.minValue) >= 1 ? resultFilterArrayOfObject.maxValue : 100}
                            onChange={({ min, max }) => {
                              handleRangeChange(category.name, attribute.name, { min, max }, resultFilterArrayOfObject.minValue, resultFilterArrayOfObject.maxValue);
                            }}
                            unit={resultFilterArrayOfObject.unit}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    )
                  }
                }
              }
              )}
            </Accordion>
            {(countAttribute > (pagination[category.name] || initialNoOfCategories)) &&
              <span className="show_more" onClick={() => handlePagination(category.name)}>SHOW MORE <i className="ri-add-line"></i></span>
            }
          </div>
        )
      }
      )}
    </div>
  );
});

export default Filter