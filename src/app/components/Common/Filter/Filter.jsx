import { useState, useRef, useEffect } from "react";
import { Accordion, Form } from "react-bootstrap";
import { filterArrayOfObject, handleFilterValueChange, isCheckboxChecked,capitalize } from "../../../_helpers";
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
                                    {capitalize(value.toString())} <span dangerouslySetInnerHTML={{ __html: '<p>(30)</p>' }} />
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
                  else if (result?.type == "range") {
                    countAttribute++;
                    return (
                      <Accordion.Item eventKey={attrIndex} key={attrIndex}>
                        <Accordion.Header as="div">
                          {attribute.name} <i className="ri-arrow-down-s-fill"></i>
                        </Accordion.Header>
                        <Accordion.Body>
                          <MultiRangeSlider
                            min={(result.maxValue - result.minValue) >= 1 ? result.minValue : 0}
                            max={(result.maxValue - result.minValue) >= 1 ? result.maxValue : 100}
                            onChange={({ min, max }) => {
                              handleRangeChange(category.name, attribute.name, { min, max }, result.minValue, result.maxValue);
                            }}
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
}
