import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button, Table } from "react-bootstrap";

export default function CompareTable({ products, categoryAttributes }) {
  const [winPos, setWinPos] = useState(false)
  let initialNoOfCategories = 5
  const [pagination, setPagination] = useState({})

const [fullTable, setFullTable] = useState(2);
  const useDetectSticky = (ref, observerSettings = { threshold: [1] }) => {
    const [isSticky, setIsSticky] = useState(false);
    const newRef = useRef();
    ref ||= newRef;

    // mount
    useEffect(() => {
      const cachedRef = ref.current,
        observer = new IntersectionObserver(
          ([e]) => setIsSticky(e.intersectionRatio < 1),
          observerSettings
        );
      observer.observe(cachedRef);
      return () => {
        observer.unobserve(cachedRef);
      };
    }, []);

    return [isSticky, ref, setIsSticky];
  };

  if (typeof window !== 'undefined') {
    // Access the window object here
    window.onscroll = function () {
      var testDiv = document.getElementById("testone");
      testDiv.getBoundingClientRect().top < 2 ? setWinPos(true) : setWinPos(false)
      // console.log( testDiv.getBoundingClientRect().top); 

      var tbodyDiv = document.getElementById("tbody");
      tbodyDiv.getBoundingClientRect().top > 2 ? setWinPos(false) : setWinPos(true)
    }
  }

  const productsWithAttributeGroup = {};
  products.forEach((product) => {
    const productCopy = { ...product };
    const productAttributes = {};
    product.attributes.forEach((attribute) => {
      const categoryName = attribute.attribute_category.name;
      if (!productAttributes[categoryName]) {
        productAttributes[categoryName] = [];
      }
      productAttributes[categoryName].push(attribute);
    });
    productCopy.attributes = productAttributes;
    productsWithAttributeGroup[product.name] = productCopy;
  });
  const finalProducts = Object.values(productsWithAttributeGroup);
  const [dummyData, setDummyData] = useState({})

  const getValue = (arr, attribute) => {
    const foundElement = arr.find((obj) => obj.attribute === attribute);
    if (foundElement) {
      return foundElement.attribute_value;
    }
    return null
  }

  const handlePagination = (categoryName) => {
    let updatedPage = pagination[categoryName] + initialNoOfCategories || initialNoOfCategories * 2
    setPagination({ ...pagination, [categoryName]: updatedPage })
  }

  const handleTableShow =()=>{
    setFullTable(categoryAttributes.length)
  }


  const [isSticky, ref] = useDetectSticky();
  return (
    <div className={fullTable == 2 ? "compare-container-wrapper" : "compare-container-wrapper no-before"} ref={ref}>
      <Table className="compare-container" >
        <thead id="testone" className={winPos ? "isSticky" : "nonSticky"} ref={ref}>
          <tr>
            <th></th>
            {finalProducts.slice(0, 5).map((product, index) => {
              return (
                <th key={index}>
                  {/* <span className="best-tag-product">Best From All</span> */}
                  <p className="device-name">
                    <span>{index + 1}</span>{product?.name}
                    <Image
                      className="compare_image"
                      src="/images/compare.png"
                      width={0}
                      height={0}
                      alt=""
                      sizes="100%"
                    />
                  </p>
                  <ul className="best-list-item d-none">
                    <li>
                      <Image
                        src="/images/amazon.png"
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <span>155.87 €</span>
                    </li>
                  </ul>
                </th>
              )
            })}
            {/* <th>
              <span className="best-tag-product">Best From All</span>
              <p className="device-name">
                <span>1</span>Samsung Galaxy S23 Ultra
                <Image
                  className="compare_image"
                  src="/images/compare.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100%"
                />
              </p>
              <ul className="best-list-item d-none">
                <li>
                  <Image
                    src="/images/amazon.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>155.87 €</span>
                </li>
              </ul>
            </th>
            <th>
              <span className="best-tag-product">Best Ratio Quality Price</span>
              <p className="device-name">
                <span>2</span>Samsung Galaxy S23 Ultra
                <Image
                  className="compare_image"
                  src="/images/compare.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100%"
                />
              </p>
              <ul className="best-list-item d-none">
                <li>
                  <Image
                    src="/images/amazon.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>155.87 €</span>
                </li>
              </ul>
            </th>
            <th>
              <p className="device-name">
                <span>3</span>Samsung Galaxy S23 Ultra
                <Image
                  className="compare_image"
                  src="/images/compare.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100%"
                />
              </p>
              <ul className="best-list-item d-none">
                <li>
                  <Image
                    src="/images/amazon.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>155.87 €</span>
                </li>
              </ul>
            </th>
            <th>
              <p className="device-name">
                <span>4</span>Iphone XS
                <Image
                  className="compare_image"
                  src="/images/compare.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100%"
                />
              </p>
              <ul className="best-list-item d-none">
                <li>
                  <Image
                    src="/images/amazon.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>155.87 €</span>
                </li>
              </ul>
            </th>
            <th>
              <p className="device-name">
                <span>5</span>Xiaomi Redmi Note
                <Image
                  className="compare_image"
                  src="/images/compare.png"
                  width={0}
                  height={0}
                  alt=""
                  sizes="100%"
                />
              </p>
              <ul className="best-list-item d-none">
                <li>
                  <Image
                    src="/images/amazon.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <span>155.87 €</span>
                </li>
              </ul>
            </th> */}
          </tr>
        </thead>
        <tbody id='tbody'>
          <tr>
            <th>
              <p>Image</p>
            </th>
            {finalProducts.slice(0, 5).map((product, imageIndex) => {
              return (
                <td key={imageIndex}>
                  <Image
                    className="compare_image"
                    src="/images/compare.png"
                    width={0}
                    height={0}
                    alt=""
                    sizes="100%"
                  />
                </td>
              )
            }
            )}
            {/* <td>
              <Image
                className="compare_image"
                src="/images/compare.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </td>
            <td>
              <Image
                className="compare_image"
                src="/images/compare.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </td>
            <td>
              <Image
                className="compare_image"
                src="/images/compare.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </td>
            <td>
              <Image
                className="compare_image"
                src="/images/compare.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </td>
            <td>
              <Image
                className="compare_image"
                src="/images/compare.png"
                width={0}
                height={0}
                alt=""
                sizes="100%"
              />
            </td> */}
          </tr>
          <tr>
            <th>
              <p>Price</p>
            </th>
            {finalProducts.slice(0, 5).map((product, priceIndex) => {
              return (
                <td key={priceIndex}>
                  <div className="best-price-section">
                    <ul className="best-list-item">
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                      <li>
                        <Image
                          src="/images/amazon.png"
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>155.87 €</span>
                      </li>
                    </ul>
                  </div>
                </td>
              )
            }
            )}
            {/* <td>
              <div className="best-price-section">
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
              </div>
            </td>
            <td>
              <div className="best-price-section">
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
              </div>
            </td>
            <td>
              <div className="best-price-section">
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
              </div>
            </td>
            <td>
              <div className="best-price-section">
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
              </div>
            </td>
            <td>
              <div className="best-price-section">
                <ul className="best-list-item">
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                  <li>
                    <Image
                      src="/images/amazon.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <span>155.87 €</span>
                  </li>
                </ul>
              </div>
            </td> */}
          </tr>
          <tr className="tr-bg-color">
            <th>
              <p>Overall Score</p>
            </th>

            {/* {console.log(finalProducts[0])} */}


            {finalProducts.slice(0, 5).map((product, overAllIndex) => {
              return (
                <td key={overAllIndex}>
                  <span className="count dark-color">{product.overall_score
                  }</span>
                </td>
              )
            }
            )}
            {/* <td>
              <span className="count dark-color">8.5</span>
              <div className="hover_container">
                <i className="ri-star-fill"></i>
                <p className="display-content">
                  Samsung Galaxy S22 has the best power
                </p>
              </div>
            </td>
            <td>
              <span className="count dark-color">8.5</span>
            </td>
            <td>
              <span className="count dark-color">8.5</span>
            </td>
            <td>
              <span className="count dark-color">8.5</span>
            </td>
            <td>
              <span className="count dark-color">8.5</span>
            </td> */}
          </tr>
          <tr>
            <th className="sub-inner-padding">
              <p>Technical Score</p>
            </th>
            {finalProducts.slice(0, 5).map((product, technicalIndex) => {
              return (
                <td key={technicalIndex}>{product.technical_score}</td>
              )
            }
            )}
            {/* <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td> */}
          </tr>
          <tr className="tr-bg-color">
            <th className="sub-inner-padding">
              <p>User’s Ratings</p>
            </th>
            {finalProducts.slice(0, 5).map((product, userIndex) => {
              return (
                <td key={userIndex}>{product.reviews}</td>
              )
            }
            )}
            {/* <td>9.7</td>
            <td>
              9.7
              <div className="hover_container">
                <i className="ri-star-fill"></i>
                <p className="display-content">
                  Samsung Galaxy S22 has the best power
                </p>
              </div>
            </td>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td> */}
          </tr>
          <tr>
            <th className="sub-inner-padding">
              <p>Ratio Qlt/Price</p>
            </th>
            {finalProducts.slice(0, 5).map((product, ratioIndex) => {
              return (
                <td key={ratioIndex}>{product.ratio_quality_price_points}</td>
              )
            }
            )}

            {/* <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td> */}
          </tr>
          {categoryAttributes.slice(0,fullTable || 2).map((category, categoryIndex) => {
            return (
              <>
                <tr className="tr-bg-color">
                  <th>
                    <p>{category.name}</p>
                  </th>
                  <td>
                    <span className="count">8.5</span>
                  </td>
                  <td>
                    <span className="count">8.5</span>
                  </td>
                  <td>
                    <span className="count">8.5</span>
                  </td>
                  <td>
                    <span className="count">8.5</span>
                  </td>
                  <td>
                    <span className="count">8.5</span>
                  </td>
                </tr>
                {category.attributes.slice(0,(pagination[category.name] || initialNoOfCategories)).map((catAttribute, catAttributeIndex) => {
                  return (
                    <tr key={catAttributeIndex}>
                      <th className="sub-inner-padding">
                        <p>{catAttribute.name}</p>
                      </th>
                      {finalProducts.slice(0, 5).map((product, attrindex) => {

                        return (
                          <td key={attrindex}>{getValue(product.attributes[category.name], catAttribute.name)}</td>
                        )
                      }
                      )}
                    </tr>
                  )

                }
                )}

                {/* <tr className="tr-bg-color">
            <th className="sub-inner-padding">
              <p>User’s Ratings</p>
            </th>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
          </tr>
          <tr>
            <th className="sub-inner-padding">
              <p>Ratio Qlt/Price</p>
            </th>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
          </tr> */}
          {/* {console.log(category.attributes.length)} */}
          {(category.attributes.length > (pagination[category.name] || initialNoOfCategories)) &&
              <tr>
                <td colspan="6">
                <span className="show_more" onClick={() => handlePagination(category.name)}>SHOW MORE <i className="ri-add-line"></i></span>
                </td>
              </tr>
            }



              </>
            )
          }
          )}

          {/* <th>
              <p>General</p>
            </th>
            <td>
              <span className="count">8.5</span>
            </td>
            <td>
              <span className="count">8.5</span>
            </td>
            <td>
              <span className="count">8.5</span>
            </td>
            <td>
              <span className="count">8.5</span>
            </td>
            <td>
              <span className="count">8.5</span>
            </td>
          </tr>
          <tr>
            <th className="sub-inner-padding">
              <p>Technical Score</p>
            </th>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
          </tr>
          <tr className="tr-bg-color">
            <th className="sub-inner-padding">
              <p>User’s Ratings</p>
            </th>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
            <td>9.7</td>
          </tr>
          <tr>
            <th className="sub-inner-padding">
              <p>Ratio Qlt/Price</p>
            </th>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
            <td>electric</td>
          </tr> */}
        </tbody>
      </Table>
      {fullTable ==2 &&
      <div className="text-center">
        <Button className="see_all_btn_outline" onClick={handleTableShow}>
          See Full Table <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
}
    </div>
  );
}
