import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function Sponsor() {
  const sponsor = [
    {
      image: "/images/sponsor1.png",
    },
    {
      image: "/images/sponsor2.png",
    },
    {
      image: "/images/sponsor3.png",
    },
    {
      image: "/images/sponsor4.png",
    },
    {
      image: "/images/sponsor5.png",
    },
    {
      image: "/images/sponsor6.png",
    },
  ];
  return (
    <>
      <Row>
        {sponsor.map(function (item, index) {
          return (
            <Col lg={2} md={4} xs={6} key={index}>
              <div className="sponsor-image-container">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}