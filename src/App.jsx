import "./App.css";
import React from "react";
import Header from "./component/header";
import List from "./component/list";

function App() {
  
  return (
    <React.Fragment>
      <div className=" px-16 py-9">
        <Header></Header>
        <List></List>
      </div>
    </React.Fragment>
  );
}

export default App;
