import React from "react";
import { Link } from "react-router-dom";

export default function FactList({ props, id }) {
  console.log(props, id);
  return (
    <div className="container">
      <div className="card">
        <div className="circle">
          <h2>{id + 1}</h2>
        </div>
        <div className="content">
          <h5>{`${props.text.slice(0, 20)} ...`}</h5>
          <p>
            Author: {props.user.name.first} {props.user.name.last}
          </p>
        </div>
        <Link className="link" to={`/fact/${props._id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
