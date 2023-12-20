"use client";
import { Button, Col, Container, Form, Row, Breadcrumb } from "react-bootstrap";
import BreadCrumb from "../../components/Common/BreadCrumb/breadcrum";
import ProductSlider from "../../components/Common/ProductSlider/productSlider";
import { useEffect, useState } from "react";
import { guideService } from "../../_services";
export default function CategoryArchive({params}) {
  const cat_name = params?.cat_name
  const [guides,setGuiudes]=useState([])
  useEffect(()=>{
    guideService.getAllguides(cat_name).then((res)=>{
      console.log(res?.data?.data,"prem")
      setGuiudes(res?.data?.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[cat_name])
  return (
    <>
      <section className="breadcrumb-section">
        <Container>
          <Row>
            <Col md={12}>
              <BreadCrumb firstPageName="Blog Archive"
                secondPageName=""/>
            </Col>
            <Col md={12}>
              <h1 className="heading-primary">{guides?.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog_post_section py-5">
        <Container>
          {guides && guides?.categories?.map((item,index)=>{
            return(
              <Row key={index}>
              <Col md={12}>
                <div className="heading-primary secondary">{item?.title}</div>
              </Col>
              <Col md={12}>
                <ProductSlider favSlider={item?.guides}/>
              </Col>
            </Row>
            )
          })}
         
        </Container>
      </section>
    </>
  );
}
