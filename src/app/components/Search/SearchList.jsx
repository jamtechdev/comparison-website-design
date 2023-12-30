import React, { useEffect, useState } from "react";
import { homePage } from "../../_services/homepage.service";
import Link from "next/link";

const SearchList = ({
  search,
  isFocused,
  compareProSearchList,
  compareTabType,
  onSendValue
}) => {
  console.log(compareProSearchList, "compareProSearchList--->>");
  console.log(search, "search minre---->>>");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredProData, setFilteredProData] = useState([]);
  const [selectedText,setSelectedText]=useState();


  const [childValue, setChildValue] = useState('');

  const handleChange = (item) => {
    // let value = event.target.outerText;
    console.log(item, "l------>>>>>>>");
    setChildValue(item.name);
    // Send the value to the parent component
    onSendValue(item);
  };
  useEffect(() => {
    if (search !== "" || search !== undefined) {
      homePage
        .searchFilter(search)
        .then((res) => {
          setFilteredData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [search]);
  useEffect(() => {
    if (compareProSearchList != "") {
      homePage
        .getAllSearchedProducts(compareProSearchList)
        .then((res) => {
          console.log(res, "res-->>");
          setFilteredProData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [compareProSearchList]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(filteredProData, "filteredProData-->>>");

  const paramsCate = (category, links) => {
    if (category === "guides") {
      return "/" + links;
    } else if (category === "products") {
      return "/product/" + links;
    } else {
      return "/blog/" + links;
    }
  };

  console.log(selectedText, "selectedText-->>>>>>");
  return (
    <>
      <div className={isFocused && search?.length > 0  || isFocused && compareProSearchList?.length >0 ? "" : "d-none"}>
        <div className="search-dropdown-list">
          {filteredData &&
            Object.keys(filteredData).map((category, index) => (
              <div className="search-data-list" key={index}>
                <h2 className="search-data-heading">
                  {capitalizeFirstLetter(category)}
                </h2>
                <ul>
                  {/* `${
                        category === "guides" ? "/" + item.permalink : ""
                      }` */}
                  {filteredData[category].map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={paramsCate(category, item?.permalink)}
                    >
                      <li>
                        <span>{item?.short_name || item?.title}</span>

                        {item?.banner_image && (
                          <img
                            src={item?.banner_image || item?.image}
                            alt={`Image ${itemIndex}`}
                          />
                        )}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          {!filteredData && search !== "" && (
            <div className="search-data-list">
              <span className="no-result-found">No results found</span>
            </div>
          )}

          {/* compare home page */}
          {filteredProData &&
            filteredProData.map((item, index) => (
              <div className="search-data-list" key={index}>
                <h2 className="search-data-heading" onClick={(e)=>{handleChange(item)}}>
                  {capitalizeFirstLetter(item?.name)}
                </h2>
                {/* <ul>
                  <Link
                    href="#"
               
                  >
                    <li>
                      <span>{item?.name}</span>

                      {item?.main_image && (
                        <img
                          src={item?.main_image}
                          alt={`Image ${itemIndex}`}
                        />
                      )}
                    </li>
                  </Link>
                 
                </ul> */}
              </div>
            ))}
          {filteredProData =="" || search == "" && (
            <div className="search-data-list">
              <span className="no-result-found">No results found</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchList;
