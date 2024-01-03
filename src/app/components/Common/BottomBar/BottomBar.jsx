import Image from "next/image";
import React, { useState } from "react";

export default function BottomBar({
  isCollapsed,
  setIsCollapsed,
  handleToggleCollapse,
  manageCollapsedDiv,
  setManageCollapsedDiv,
  handleManageCollapsedDiv,
}) {
  return (
    <>
      {manageCollapsedDiv &&  (
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
                <span>3</span>
              </div>
              <i className="ri-arrow-up-s-line"></i>
            </div>
          </div>
          {!isCollapsed && (
            <div className="bottom_bar_body">
              <ul className="bottom_bar_compare_list">
                <li>
                  <img src="/images/compare.png" />
                  <p>Iphone XS</p>
                  <i className="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/images/compare.png" />
                  <p>Samsung Galaxy S22 Ultra</p>
                  <i className="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/images/compare.png" />
                  <p>Samsung Galaxy S22 Ultra</p>
                  <i className="ri-close-fill"></i>
                </li>
              </ul>
              <div className="bottom_bar_compare_list_footer">
                <span>
                  <i className="ri-add-fill"></i>
                </span>
                <button className="btn btn-primary">Compare</button>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
