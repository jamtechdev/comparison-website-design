import React from "react";
import { renderToString } from "react-dom/server";

const ProsConsToolTip = (props) => {
  const { hover_phrase, info_not_verified, data } = props;
  // console.log(hover_phrase, "hover_phrase");
  // console.log(info_not_verified, "info_not_verified");
  // console.log(data, "data------------------>>>>>>>>>>>>>>>");
  function replaceSpecialCharacters(sentence, replacements) {
    // Define an array of placeholders and their corresponding replacements
    const placeholders = ["@", "#", "$"];

    // Replace each placeholder with the corresponding value
    placeholders.forEach((placeholder, index) => {
      const replacement = replacements[index];

      if (typeof replacement === "string" || typeof replacement === "number") {
        // If the replacement is a string or number, perform a simple string replacement
        sentence = sentence?.replace(
          new RegExp(placeholder, "g"),
          String(replacement)
        );
      } else {
        // If the replacement is not a string or number, assume it's a JSX element or another type
        // Replace the placeholder with an empty string and concatenate the replacement
        sentence = sentence?.split(placeholder).join("") + replacement;
      }
    });

    return sentence;
  }

  // Example usage:
  const apiString = "@@@ has a runtime of ### which is $$$";
  const originalSentence = hover_phrase;
  const newValues = [
    data?.product_name,
    data?.value,
    `is better than ${data?.is_better_than} % of ${data?.attribute_name} and is same as ${data?.is_same_as} % of ${data?.attribute_name}`,
  ];
  const updatedSentence = replaceSpecialCharacters(originalSentence, newValues);
  console.log(updatedSentence, "updatedSentence--->>");
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
