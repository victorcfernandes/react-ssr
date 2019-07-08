import React from "react";
import "./styles/style.scss";

import data from "./data";

import NavHeaderItem from "./components/NavHeaderItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <ul className="navigation__list">
            {data.map(({ url_path, children_data, name, id }) => (
              <NavHeaderItem link={url_path} children={children_data} name={name} key={id} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
