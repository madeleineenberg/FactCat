import React from "react";

import CardList from "../components/CardList";

export default function StartPage() {
  return (
    <div>
      <div className="app-wrapper">
        <header className="App-header">
          <h1 className="title">Fact CAT</h1>
        </header>
      </div>
      <CardList />
    </div>
  );
}
