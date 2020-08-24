import React, { useState, useEffect } from "react";
import FactList from "./FactList";

export default function CardList() {
  let [factsList, setFactsList] = useState([]);

  function fetchFactList() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setFactsList(result);
      });
  }

  useEffect(() => {
    fetchFactList();
  }, []);

  return (
    <div className="container-wrapper">
      <h2 className="sub-title">Kitty Fun Facts!</h2>
      <div className="card-wrapper">
        {Object.keys(factsList).map((item, i) =>
          factsList[item]
            .sort(() => Math.random() - Math.random())
            .slice(0, 20)
            .map((item, index) => (
              <FactList props={item} id={index} key={index} />
            ))
        )}
        )
      </div>
    </div>
  );
}
