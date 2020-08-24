import React from "react";

export default function FactDetail({ props }) {
  return (
    <div className="container">
      <div className="fact-detail">
        <div className="content">
          <h5>{props.text}</h5>
        </div>
      </div>
    </div>
  );
}
