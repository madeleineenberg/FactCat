import React, { useState, useEffect } from "react";
import FactDetail from "../components/FactDetail";

export default function FactDetailPage(props) {
  let [catFactData, setCatFactData] = useState({});
  let [userFactData, setUserFactData] = useState([]);
  let factDataId = props.match.params.id;
  let index;
  findIndexData(factDataId);

  function fetchFacts() {
    let factId = props.match.params.id;

    fetch(`https://cat-fact.herokuapp.com/facts/${factId}`)
      .then((res) => res.json())
      .then((result) => {
        setCatFactData(result);
      });
  }

  function fetchUser() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        setUserFactData(result.all);
      });
  }

  function findIndexData(id) {
    index = userFactData
      .map((item, i) => {
        return item._id;
      })
      .indexOf(id);
    console.log(userFactData[index]);
  }

  useEffect(() => {
    fetchFacts();
    fetchUser();
  }, []);

  return (
    <div className="container">
      <h2 className="sub-title">CAT FACT!</h2>

      <FactDetail props={catFactData} />
    </div>
  );
}
