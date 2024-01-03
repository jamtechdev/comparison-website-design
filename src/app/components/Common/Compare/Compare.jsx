"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import SearchList from "../../Search/SearchList";
import styles from "../../Header/Header.module.css";
import Select from "react-select";
import { homePage } from "../../../_services/homepage.service";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addCompareProduct } from "../../../../redux/features/compareProduct/compareProSlice";
export default function ComparisonsSlider() {
  // const dispatch = useDispatch()

  const [product1Filled, setProduct1Filled] = useState(false);
  const [product2Filled, setProduct2Filled] = useState(false);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");

  const [catId, setCatId] = useState();
  const [catId3, setCatId3] = useState();
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [receivedValue, setReceivedValue] = useState("");
  const [receivedValue2, setReceivedValue2] = useState("");
  const [receivedValue3, setReceivedValue3] = useState("");
  const router = useRouter();
  // Your function to construct and push the route
  const handleComparison = (e) => {
    console.log(" m called");
    const routeParts = [
      receivedValue?.permalink,
      receivedValue2?.permalink,
      receivedValue3?.permalink,
    ];

    // Filter out undefined or null values
    const validRouteParts = routeParts.filter((part) => part);
    console.log(validRouteParts, "validRouteParts--->>");

    // Construct the route
    let route = "";
    if (validRouteParts.length >= 1) {
      router.push(`/comparison/${validRouteParts[0]}`);
      // `/comparison/${validRouteParts[0]}`;
      if (validRouteParts.length >= 2) {
        router.push(
          `/comparison/${validRouteParts[0]}-vs-${validRouteParts[1]}`
        );
      }
      if (validRouteParts.length >= 3) {
        router.push(
          `/comparison/${validRouteParts[0]}-vs-${validRouteParts[1]}-vs-${validRouteParts[2]}`
        );
      }
    }
  };

  // Function to receive value from child component
  const handleChildValue2 = (value) => {
    setReceivedValue2(value);
    setSearch2(value.name);
  };
  const handleChildValue3 = (value) => {
    setReceivedValue3(value);
    setSearch3(value.name);
  };
  // Function to receive value from child component
  const handleChildValue = (value) => {
    setReceivedValue(value);
    setSearch(value.name);
  };

  const handleProduct1Click = (e) => {
    // Logic to fill the 1st product
    setSearch(e.target.value);
    // dispatch(addCompareProduct)

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
      setIsFocused1(false);
      setIsFocused2(false);
      setIsFocused3(false);
    }, 200);
  };

  return (
    <>
      <div className="compare-section">
        <div className="position-relative w-100">
          <Form.Control
            type="text"
            placeholder={"1st product..."}
            onChange={handleProduct1Click}
            onFocus={() => setIsFocused1(true)}
            onBlur={handleBlur}
            aria-label="Search"
            value={search}
          />
          {search.length > 0 && isFocused1 && (
            <>
              <SearchList
                compareProSearchList={search}
                compareTabType={"comparetab"}
                isFocused={isFocused1}
                setIsFocused={setIsFocused1}
                onSendValue={handleChildValue}
              />
            </>
          )}
        </div>
        <Image src="/images/vs.svg" width={118} height={40} alt="" />
        <div className="position-relative w-100">
          <Form.Control
            type="text"
            placeholder="2nd product..."
            onChange={handleProduct2Click}
            onFocus={() => setIsFocused2(true)}
            onBlur={handleBlur}
            aria-label="Search"
            value={search2}
            disabled={!receivedValue || search === ""}
          />
          {search2.length > 0 && isFocused2 && (
            <>
              <SearchList
                compareProSearchListForCat={search2}
                compareTabType={"comparetab"}
                isFocused={isFocused2}
                setIsFocused={setIsFocused2}
                onSendValue2={handleChildValue2}
                catId={catId}
              />
            </>
          )}
        </div>
        <Image src="/images/vs.svg" width={118} height={40} alt="" />
        <div className="position-relative w-100">
          <Form.Control
            type="text"
            placeholder="3rd product... (optional)"
            onChange={handleProduct3Click}
            onFocus={() => setIsFocused3(true)}
            onBlur={handleBlur}
            aria-label="Search"
            value={search3}
            disabled={!receivedValue2 || search2 === ""}
          />
          {search3.length > 0 && isFocused3 && (
            <>
              <SearchList
                compareProSearchListForCat3={search3}
                compareTabType={"comparetab"}
                isFocused={isFocused3}
                setIsFocused={setIsFocused3}
                onSendValue3={handleChildValue3}
                catId3={catId3}
              />
            </>
          )}
        </div>
      </div>
      <div className="text-center">
        <Button
          className="site_main_btn"
          onClick={(e) => {
            handleComparison(e);
          }}
        >
          Compare
        </Button>
      </div>
    </>
  );
}
