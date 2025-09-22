import React, { useState } from "react";
// import Select from "react-select";
import "./CodeEditer.css";
function CodeEditer() {
  const [code, setCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [imActive, setImActive] = useState(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const image = [
    {
      i_m: "https://quantumzeitgeist.com/wp-content/uploads/pythoned.png",
      name: "Pthon",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png",
      name: "Java",
    },
    {
      i_m: "https://skillforge.com/wp-content/uploads/2020/10/javascript-768x866.png",
      name: "Java Script",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png",
      name: "C",
    },
    {
      i_m: "https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/csharp--programming-language-icon-symbol-logo-vector-.png",
      name: "C#",
    },
    {
      i_m: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710",
      name: "C++",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/go-programming-language-icon.png",
      name: "GOlang",
    },
    {
      i_m: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png?20240131042527",
      name: "R",
    },
    
  ];

  const lineCount = code.split("\n").length;
  return (
    <div>
      <header className="h1">
        <div className="name">
          <p>
            <span>
              <i class="bi bi-code-slash"></i>
            </span>
            Online Compiler
          </p>
        </div>
        <div className="cd">
          <p> Horizon Model</p>
          <p>Explore Courses</p>
          <p>Campus Recruitment Training</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <button>🤖 AI Code Review</button>
        </div>
      </header>
      <section className="main">
        <div className="codepanel">
          <div className="lan">
            <div className="top1">
              {/* <p>Language :</p> */}
              <div className="t1">
                {image.map((im, index) => {
                  return (
                    <div className="itol">
                      <img
                        key={index}
                        className={`i1 ${imActive === index ? "active" : " "}`}
                        src={im.i_m}
                        onClick={() => {
                          setImActive(index);
                        }}
                        alt="img"
                      />
                      <span className="itip">{im.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="run">
              <div className="tol">
                <span className="tip">Resize</span>
                <i class="bi bi-arrows-angle-contract"></i>
              </div>
              <div className="tol">
                <span className="tip">Theme</span>
                <i class="bi bi-brightness-high"></i>
              </div>
              <div className="tol">
                <span className="tip">Share</span>
                <i class="bi bi-share"></i>
              </div>
              <div className="tol">
                <span className="tip">Mail</span>
                <i class="bi bi-envelope"></i>
              </div>
              <div className="tol">
                <span className="tip">Download</span>
                <i class="bi bi-download"></i>
              </div>
              <div className="tol">
                <span className="tip">Run</span>
                <i class="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <div className="editor-container">
            <div className="line-numbers">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <textarea
              className="code-input"
              value={code}
              onChange={handleChange}
              placeholder="Write your code here..."
            />
          </div>
        </div>
        <div className="inout">
          <div className={`io1 ${showOutput ? "half" : "full"}`}>
            <div className="i io2">
              <h4>Input</h4>
              {!showOutput && (
                <button className="btn" onClick={() => setShowOutput(true)}>
                  Output
                </button>
              )}
            </div>
            <textarea
              className="intext iot"
              placeholder="Enter your input..."
            />
          </div>
          {showOutput && (
            <div className="io1 half">
              <div className="io2 o">
                <h4>Output</h4>
                <button className="btn" onClick={() => setShowOutput(false)}>
                  <i class="bi bi-x-circle"></i>
                </button>
              </div>
              <textarea className="outtext iot" placeholder="Your output..." />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CodeEditer;
