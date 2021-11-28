import "./App.css";
import React from "react";
import Header from "./component/header";
import List from "./component/list";
import Search from "./component/search";

function App() {
  const [search, setSearch] = React.useState(false);
  return (
    <React.Fragment>
      {search ? (
        <React.Fragment>
          <Search setSearch={setSearch}></Search>
        </React.Fragment>
      ) : (
        ""
      )}
      <div className="lg:px-16 px-9 py-9">
        <Header setSearch={setSearch}></Header>
        <List></List>
      </div>
    </React.Fragment>
  );
}

export default App;
