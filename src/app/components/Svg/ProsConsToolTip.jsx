import React from "react";

const ProsConsToolTip = (props) => {
  const { hover_phrase, info_not_verified } = props;
  return (
    <>
      {(hover_phrase != "" || info_not_verified != "") && (
        <div className="tooltip-display-content">
          {hover_phrase && (
            <>
              {" "}
              <p class="mb-2">
                <b>
                  {/* Samsung Galaxy S23 Ultra has a battery capacity{" "}
              <span style={{ color: "#093673" }}>2500mAh</span> which is{" "}
              <span style={{ color: "#093673" }}>better than 54%</span> of the
              vacuum cleaners and{" "}
              <span style={{ color: "#093673" }}>same as 24%</span> of the
              vacuum cleaners. */}
                  {hover_phrase}
                </b>
              </p>
            {  info_not_verified  && <hr />}
            </>
          )}

          {info_not_verified && (
            <p class="mb-2">
              <i>
                (Information is not verified. If you believe this is a mistake,
                please, contact our team.)
              </i>
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ProsConsToolTip;
