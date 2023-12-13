import React from "react";
const ProsConsToolTip = (props) => {
  const { hover_phrase, info_not_verified, data, typeComp } = props;
  function replaceSpecialCharacters(sentence, newValues) {
    // Define an array of special characters to be replaced
    const specialCharacters = ["@@@", "###", "$$$"];

    // Replace each special character with the corresponding new value
    specialCharacters.forEach((char, index) => {
      sentence = sentence?.replace(new RegExp(char, "g"), newValues[index]);
    });

    return sentence;
  }
  const originalSentence = hover_phrase;
  const newValues = [
    data?.product_name,
    data?.value,
    `is better than ${data?.is_better_than} % of ${data?.attribute_name} and is same as ${data?.is_same_as} % of ${data?.attribute_name}`,
  ];
  const updatedSentence = replaceSpecialCharacters(originalSentence, newValues);
  return (
    <>
      <div className="tooltip-display-content">
        <p class="mb-2">
          {typeComp == "pros" && (
            <b>
              {[
                data?.product_name,
                data?.value * 100,
                ` is better than ${
                  data?.is_better_than ? data?.is_better_than : "N/A"
                } % of ${
                  data?.attribute_name ? data?.attribute_name : "N/A"
                } and is same as ${
                  data?.is_same_as ? data?.is_same_as * 100 : ""
                } % of ${data?.attribute_name ? data?.attribute_name : "N/A"}`,
              ]}
            </b>
          )}
          {typeComp == "cons" && (
            <b>
              {[
                data?.product_name,
                data?.value * 100,
                ` is worse than ${
                  data?.is_better_than ? data?.is_better_than : "N/A"
                } % of ${
                  data?.attribute_name ? data?.attribute_name : "N/A"
                } and is same as ${
                  data?.is_same_as ? data?.is_same_as * 100 : ""
                } % of ${data?.attribute_name ? data?.attribute_name : "N/A"}`,
              ]}
            </b>
          )}
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
