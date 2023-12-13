import React from "react";

const ProsConsToolTip = (props) => {
  const { hover_phrase, info_not_verified, data } = props;

  // console.log(hover_phrase, "hover_phrase");
  // console.log(info_not_verified, "info_not_verified");
  // console.log(data, "data------------------>>>>>>>>>>>>>>>");

  function replaceSpecialCharacters(sentence, newValues) {
    // Define an array of special characters to be replaced
    const specialCharacters = ["@@@", "###", "$$$"];

    // Replace each special character with the corresponding new value
    specialCharacters.forEach((char, index) => {
      sentence = sentence?.replace(new RegExp(char, "g"), newValues[index]);
    });

    return sentence;
  }

  // Example usage:
  const originalSentence = hover_phrase;
  const newValues = [
    data?.product_name,
    data?.value,
    <>
      is better than {data?.is_better_than} % of{" "}
      <span style={{ color: "blue" }}>{data?.attribute_name}</span> and is same
      as {data?.is_same_as} % of{" "}
      <span style={{ color: "blue" }}>{data?.attribute_name}</span>
    </>,
  ];
  console.log(newValues, "newValues------------------>>>>>>>>>");
  console.log(originalSentence, "originalSentence--->>>>>");
  const updatedSentence = replaceSpecialCharacters(originalSentence, newValues);
  console.log(updatedSentence, "updatedSentence--->>>");

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
                  is better than {data?.is_better_than} %{" "}
                </span>{" "}
                of {data?.attribute_name} and is same as{" "}
                <span style={{ color: "rgb(9, 54, 115)" }}> {data?.is_same_as} % </span> of{" "}
                {data?.attribute_name}
              </>,
            ]}
          </b>
        </p>
        <hr />
        <p class="mb-2">
          <i>
            (Information is not verified. If you believe this is a mistake,
            please, contact our team.)
          </i>
        </p>
      </div>
    </>
  );
};

export default ProsConsToolTip;
