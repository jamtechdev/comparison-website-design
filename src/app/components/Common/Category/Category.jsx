import Image from "next/image";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

export default function Category({ favSlider }) {
  const router = useRouter()
  const sponsor = [
    {
      image: "/images/cat1.png",
      name: "Electric",
    },
    {
      image: "/images/cat2.png",
      name: "Home",
    },
    {
      image: "/images/cat3.png",
      name: "kitchen",
    },
    {
      image: "/images/cat4.png",
      name: "Tools",
    },
    {
      image: "/images/cat5.png",
      name: "Beauty",
    },
    {
      image: "/images/cat6.png",
      name: "Health",
    },
    {
      image: "/images/cat7.png",
      name: "Sport",
    },
    {
      image: "/images/cat8.png",
      name: "Hobby",
    },
  ];

  console.log(favSlider?.data)
  return (
    <>
      <Row>
        {favSlider && favSlider.code == 200 ? (
          <>
            {Object.values(favSlider && favSlider?.data?.categories).map(
              (section, index) => {
                if (section.primary_archive_category != null) {
                  return (
                    <>
                      <Col xl={3} lg={4} md={6} xs={6} key={index} onClick={()=>{router.push(`/category-archive/${section?.primary_archive_category}`)}}>
                        <div className="category-section">
                          <Image
                            src={section.square_image}
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          <span className="category_name">
                            {section.primary_archive_category}
                          </span>
                        </div>
                      </Col>
                      </>
                  );
                } else {
                  return (
                    <>
                      <Col xl={3} lg={4} md={6} xs={6} key={index}>
                        <div className="category-section">
                          <Image
                            src={section.square_image}
                            width={0}
                            height={0}
                            sizes="100%"
                            alt=""
                          />
                          <span className="category_name">
                            NOT FOUND
                            {/* {section.primary_archive_category} */}
                          </span>
                        </div>
                      </Col>
                    </>
                  );
                }
              }
            )}
          </>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
}
