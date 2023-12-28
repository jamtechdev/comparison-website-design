import React, { useEffect, useState } from "react";
import { homePage } from "../../_services/homepage.service";
import Link from "next/link";
import { router } from "next/navigation";

const SearchList = ({ search }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search !== "") {
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

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {search !== "" && (
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
                      href={`${
                        category === "guides"
                          ? "/" + item.permalink
                          : category === "products"
                          ? "/product/" + item?.permalink
                          : "/blog/" + item?.permalink
                      }`}
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
        </div>
      )}
    </>
  );
};

export default SearchList;
