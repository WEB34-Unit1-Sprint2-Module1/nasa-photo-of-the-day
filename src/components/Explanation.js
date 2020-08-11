import React from "react";

function Explanation(props) {

  return (
    <div>
      <p>{props.photoProp.date}</p>
      <p>{props.photoProp.copyright}</p>
      <p>{props.photoProp.explanation}</p>
    </div>
  );
}

export default Explanation;