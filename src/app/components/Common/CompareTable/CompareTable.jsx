import Image from "next/image";
import { Button, Table } from "react-bootstrap";

export default function CompareTable() {
  return (
    <div className="compare-container-wrapper">
      <Table className="compare-container">
        <thead>
          <tr>
            <th></th>
            <th>
              <span className="best-tag-product">Best From All</span>
              <p className="device-name">
                <span>1</span>Samsung Galaxy S23 Ultra
              </p>
            </th>
            <th>
              <span className="best-tag-product">Best Ratio Quality Price</span>
              <p className="device-name">
                <span>2</span>Samsung Galaxy S23 Ultra
              </p>
            </th>
            <th>
              <p className="device-name">
                <span>3</span>Samsung Galaxy S23 Ultra
              </p>
            </th>
            <th>
              <p className="device-name">
                <span>4</span>Iphone XS
              </p>
            </th>
            <th>
              <p className="device-name">
                <span>5</span>Xiaomi Redmi Note
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <p>Image</p>
            </th>
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
          </tr>
          <tr>
            <th>
              <p>Price</p>
            </th>
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
          </tr>
          <tr className="tr-bg-color">
            <th>
              <p>Overall Score</p>
            </th>
            <td>
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
          </tr>
          <tr className="tr-bg-color">
            <th>
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
          </tr>
        </tbody>
      </Table>
      <div className="text-center">
        <Button className="see_all_btn_outline">
          See Full Table <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
    </div>
  );
}
