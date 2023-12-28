import React from "react";
import { renderToString } from "react-dom/server";

const ProsConsToolTip = ({hover_phrase, info_not_verified}) => {
  // const { hover_phrase, info_not_verified, data } = props;
  console.log(hover_phrase, "222222------>>>");

  return (
    <>
      {hover_phrase && (
        <div className="tooltip-display-content">
          <p
            class="mb-2 prosconsColor"
            dangerouslySetInnerHTML={{ __html: hover_phrase }}
          ></p>
          {info_not_verified && (
            <>
              <hr />
              <p class="mb-2">
                <i>
                  (Information is not verified. If you believe this is a
                  mistake, please, contact our team.)
                </i>
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProsConsToolTip;
