import React from "react";

const ProsConsToolTip = (props) => {
  const { hover_phrase, info_not_verified, data } = props;
  return (
    <>
      <div className="tooltip-display-content">
        <p class="mb-2">
          <b>
            {[
              data?.product_name,
              data?.value,
              data?.value,
              <>
                <span style={{ color: "rgb(9, 54, 115)" }}>
                  {" "}
                  is better than {(data?.is_better_than)*100} %{" "}
                </span>{" "}
                of {data?.attribute_name} and is same as{" "}
                <span style={{ color: "rgb(9, 54, 115)" }}>
                  {" "}
                  {(data?.is_same_as)*100} %{" "}
                </span>{" "}
                of {data?.attribute_name}
              </>,
            ]}
          </b>
        </p>

        {info_not_verified && (
          <>
            <hr />
            <p class="mb-2">
              <i>
                (Information is not verified. If you believe this is a mistake,
                please, contact our team.)
              </i>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ProsConsToolTip;
