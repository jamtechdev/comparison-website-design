import React from "react";

const TestComp = (props) => {
  const { hover_phrase, info_not_verified } = props;
  console.log(hover_phrase, "hover_phrase");
  console.log(info_not_verified, "info_not_verified");
  return (
    <>
     {<span className="question_hover_container question-marker-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
      </svg>

      {( hover_phrase!= "" || info_not_verified !="") && 
        <span className="display-content">
          {hover_phrase && (
            <p className="mb-2" style={{ color: "rgb(133, 178, 241)" }}>
              {/* <b style={{ color: "rgb(39 48 78 / 70%)" }}>Importance:{''} </b> */}
              {hover_phrase}
            </p>
          )}
          {info_not_verified && <p className="mb-2">{info_not_verified}</p>}
        </span>
      }
    </span>}
    </>
  
  );
};

export default TestComp;
