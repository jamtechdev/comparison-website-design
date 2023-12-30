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
  const [catId, setCatId] = useState();

  const [isFocused, setIsFocused] = useState(false);
  const [receivedValue, setReceivedValue] = useState("");
  const [receivedValue2, setReceivedValue2] = useState("");

  console.log(receivedValue, "receivedValue-->>>");

  useEffect(() => {
    if (search2 != "" && search == "") {
      homePage
        .getAllSearchedProductsByCategory(catId, search2)
        .then((res) => {
          console.log(res, "res-->>>>>>>>");
          // setFilteredData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [search2]);

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
      setSearch(e.target.value);

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
          <SearchList
            compareProSearchList={search}
            compareTabType={"comparetab"}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            onSendValue={handleChildValue}
          />
          <Image src="/images/vs.svg" width={118} height={40} alt="" />
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
          <SearchList
            compareProSearchList={search2}
            compareTabType={"comparetab"}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            onSendValue={handleChildValue}
          />
          <Image src="/images/vs.svg" width={118} height={40} alt="" />
          <Form.Control
            type="text"
            placeholder="3rd product... (optional)"
            onChange={handleProduct3Click}
            disabled={!product2Filled}
          />
        </Form>
      </div>
      <div className="text-center">
        <Button className="site_main_btn">Compare</Button>
      </div>
    </>
  );
}
