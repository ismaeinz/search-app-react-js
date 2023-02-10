import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <input
          type="text "
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
          //
          .map(
            (val) => {
              return (
                <div className="filter">
                  <p className="filter-name">{val.first_name}</p>
                </div>
              );
            }
            //
          )}
      </div>
    </>
  );
};

export default App;
