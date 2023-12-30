"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import SearchList from "../../Search/SearchList";
import styles from "../../Header/Header.module.css";
import Select from "react-select";
import { homePage } from "../../../_services/homepage.service";

export default function ComparisonsSlider() {
  const [product1Filled, setProduct1Filled] = useState(false);
  const [product2Filled, setProduct2Filled] = useState(false);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");

  const [catId, setCatId] = useState();
  const [catId3, setCatId3] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [receivedValue, setReceivedValue] = useState("");
  const [receivedValue2, setReceivedValue2] = useState("");
  const [receivedValue3, setReceivedValue3] = useState("");

  // Function to receive value from child component
  const handleChildValue2 = (value) => {
    setReceivedValue2(value);
  };
  const handleChildValue3 = (value) => {
    setReceivedValue3(value);
  };
  // Function to receive value from child component
  const handleChildValue = (value) => {
    setReceivedValue(value);
  };

  const handleProduct1Click = (e) => {
    // Logic to fill the 1st product
    setSearch(e.target.value);

    setProduct1Filled(true);
  };

  const handleProduct2Click = (e) => {
    // Only allow clicking on the 2nd product if the 1st product is filled
    if (product1Filled) {
      setSearch2(e.target.value);
      setCatId(receivedValue.category_id);
      // Logic to fill the 2nd product
      setProduct2Filled(true);
    }
  };

  const handleProduct3Click = (e) => {
    // Only allow clicking on the 3rd product if the 2nd product is filled
    if (product2Filled) {
      setSearch3(e.target.value);
      setCatId3(receivedValue2.category_id);
      // Logic to fill the 3rd product
      // setProduct3Filled(true);
    }
  };
  // console.log(search, "search--->>>>");
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  return (
    <>
      <div className="compare-section ">
        <Form className="d-flex hero-searchbar form-search">
          {!receivedValue && (
            <Form.Control
              type="search"
              placeholder={"1st product..."}
              onChange={handleProduct1Click}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              aria-label="Search"
              value={search}
            />
          )}
          {receivedValue && (
            <Form.Control readOnly value={receivedValue?.name} />
          )}
          {!receivedValue && (
            <>
              <SearchList
                compareProSearchList={search}
                compareTabType={"comparetab"}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                onSendValue={handleChildValue}
              />
              <Image src="/images/vs.svg" width={118} height={40} alt="" />
            </>
          )}
          {!receivedValue2 && (
            <Form.Control
              type="text"
              placeholder="2nd product..."
              onChange={handleProduct2Click}
              disabled={!product1Filled}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              aria-label="Search"
              value={search2}
            />
          )}
          {!receivedValue2 && (
            <>
              <SearchList
                compareProSearchListForCat={search2}
                compareTabType={"comparetab"}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                onSendValue2={handleChildValue2}
                catId={catId}
              />
              <Image src="/images/vs.svg" width={118} height={40} alt="" />
            </>
          )}

          {receivedValue2 && (
            <Form.Control readOnly value={receivedValue2?.name} />
          )}

          {!receivedValue3 && (
            <Form.Control
              type="text"
              placeholder="3rd product... (optional)"
              onChange={handleProduct3Click}
              disabled={!product2Filled}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              aria-label="Search"
              value={search3}
            />
          )}
          {!receivedValue3 && (
            <>
              <SearchList
                compareProSearchListForCat3={search2}
                compareTabType={"comparetab"}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                onSendValue3={handleChildValue3}
                catId3={catId3}
              />
              <Image src="/images/vs.svg" width={118} height={40} alt="" />
            </>
          )}

          {receivedValue3 && (
            <Form.Control readOnly value={receivedValue3?.name} />
          )}
        </Form>
      </div>
      <div className="text-center">
        <Button
          className="site_main_btn"
          onClick={(e) => {
            setReceivedValue("");
            setReceivedValue2("");
            setReceivedValue3("");
            setSearch("");
            setSearch2("");
            setSearch3("");
          }}
        >
          Compare
        </Button>
      </div>
    </>
  );
}
