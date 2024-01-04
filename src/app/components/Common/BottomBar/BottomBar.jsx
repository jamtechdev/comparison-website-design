import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BottomBar = React.memo(
  ({
    isCollapsed,
    setIsCollapsed,
    handleToggleCollapse,
    manageCollapsedDiv,
    setManageCollapsedDiv,
    handleManageCollapsedDiv,
    compareGuideData,
    setCompareGuideData,
    handleComparedProduct,
    guideComparePro,
  }) => {
    const router = useRouter();
    return (
      <>
        {console.log(compareGuideData?.length, "compareGuideData--????")}
        {manageCollapsedDiv && (
          <section className="bottom_bar">
            <div
              className="bottom_bar_head"
              //  onClick={handleToggleCollapse}
              onClick={(e) => {
                handleToggleCollapse(e);
                handleManageCollapsedDiv(e);
              }}
            >
              <div className="bottom_bar_header_content">
                <Image src="/images/vs.svg" width={40} height={40} alt="" />
                <div className="bottom_bar_heading">
                  <div>Comparison</div>
                  <span>{compareGuideData?.length}</span>
                </div>
                <i className="ri-arrow-up-s-line"></i>
              </div>
            </div>
            {!isCollapsed && (
              <div className="bottom_bar_body">
                <ul className="bottom_bar_compare_list">
                  {compareGuideData?.map((item, index) => {
                    {
                      console.log(item, "4------->>>>>>>>>>>>>>");
                    }
                    return (
                      <li key={index}>
                        <Image
                          src={item.image ? item.image : "/images/vs.svg"}
                          width={0}
                          height={0}
                          alt=""
                        />
                        <p>{item.proName}</p>
                        <i className="ri-close-fill"></i>
                      </li>
                    );
                  })}

                  {/* <li>
                    <img src="/images/compare.png" />
                    <p>Samsung Galaxy S22 Ultra</p>
                    <i className="ri-close-fill"></i>
                  </li>
                  <li>
                    <img src="/images/compare.png" />
                    <p>Samsung Galaxy S22 Ultra</p>
                    <i className="ri-close-fill"></i>
                  </li> */}
                </ul>
                <div className="bottom_bar_compare_list_footer">
                  {compareGuideData?.length == 3 && (
                    <span>
                      <i
                        className="ri-add-fill "
                        style={{ cursor: "not-allowed" }}
                      ></i>
                    </span>
                  )}
                  {compareGuideData?.length < 3 && (
                    <span>
                      <i className="ri-add-fill" style={{ cursor: "pointer" }}></i>
                    </span>
                  )}
                  {console.log(compareGuideData, "compareGuideData-->>>")}
                  {compareGuideData?.length == 1 && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        router.push(`/${compareGuideData[0]?.permaLink}`);
                      }}
                    >
                      {" "}
                      Compare
                    </button>
                  )}
                  {compareGuideData?.length > 1 && (
                    <button
                      className="btn btn-primary  "
                      // onClick={() => {
                      //   router.push(`/${compareGuideData[0]?.permaLink}`);
                      // }}
                    >
                      {" "}
                      Compare
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </>
    );
  }
);
BottomBar.displayName = "BottomBar";

export default BottomBar;
