import React from "react";
import Header from "./components/Header";
import Travel from "./components/Travel";
import travels from "./data";

export default function App() {
  return (
    <div>
      <Header />
      {travels.map((travel, index) => {
        return (
            <Travel 
                key={index}
                travel={travel}
                />
              );
            }
          )
        }
    </div>
  );
}

