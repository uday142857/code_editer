import React from 'react'
import Select from "react-select";
import "./Se.css"
function Se() {
    const options = [
      {
        value: "python",
        label: (
          <div>
            <img
              src="https://quantumzeitgeist.com/wp-content/uploads/pythoned.png"
              width="20"
            />
            Python
          </div>
        ),
      },
      {
        value: "java",
        label: (
          <div>
            <img src="java.jpg" width="20" /> Java
          </div>
        ),
      },
      {
        value: "js",
        label: (
          <div>
            <img
              src="https://skillforge.com/wp-content/uploads/2020/10/javascript-768x866.png"
              width="20"
            />
            JavaScript
          </div>
        ),
      },
    ];
  return (
    <div>
      <div className="lan">
        <label>Language :</label>
        <div>
          <Select className="sel" options={options} />
        </div>
      </div>
    </div>
  );
}

export default Se