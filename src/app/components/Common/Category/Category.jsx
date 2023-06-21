import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function Category() {
  const sponsor = [
    {
      image: "/images/cat1.png",
      name:'Electric'
    },
    {
      image: "/images/cat2.png",
      name:'Home'
    },
    {
      image: "/images/cat3.png",
      name:'kitchen'
    },
    {
      image: "/images/cat4.png",
      name:'Tools'
    },
    {
      image: "/images/cat5.png",
      name:'Beauty'
    },
    {
      image: "/images/cat6.png",
      name:'Health'
    },
    {
      image: "/images/cat7.png",
      name:'Sport'
    },
    {
      image: "/images/cat8.png",
      name:'Hobby'
    }
  ];
  return (
    <>
      <Row>
        {sponsor.map(function (item, index) {
          return (
            <Col xl={3} lg={4} md={6} xs={6} key={index}>
              <div className={`category-section ${index===1 ? "site-card-active" : ""}`}>
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
                <span className="category_name">{item.name}</span>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
