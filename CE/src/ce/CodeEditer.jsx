import React, { useState, useRef } from "react";
// import Select from "react-select";
import { Editor } from "@monaco-editor/react";
import { useToast } from "@chakra-ui/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../constant";
import { executeCode } from "../api";
import "./CodeEditer.css";
function CodeEditer() {
  const toast = useToast();
  const editorRef = useRef();
  const inputRef = useRef();
  const [showOutput, setShowOutput] = useState(false);
  const [imActive, setImActive] = useState(null);
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState("");


  const languages = Object.entries(LANGUAGE_VERSIONS);
  const image = [
    {
      i_m: "https://quantumzeitgeist.com/wp-content/uploads/pythoned.png",
      name: "Python",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png",
      name: "Java",
    },
    {
      i_m: "https://skillforge.com/wp-content/uploads/2020/10/javascript-768x866.png",
      name: "JavaScript",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png",
      name: "C",
    },
    {
      i_m: "https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/csharp--programming-language-icon-symbol-logo-vector-.png",
      name: "Csharp",
    },
    {
      i_m: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710",
      name: "Cpp",
    },
    {
      i_m: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/go-programming-language-icon.png",
      name: "Go",
    },
    {
      i_m: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png?20240131042527",
      name: "R",
    },
  ];

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

  

    const inputKeywords = ["input(", "scanf", "cin >>", "prompt("];

    if (
      inputKeywords.some((keyword) => sourceCode.includes(keyword)) &&
      !userInput
    ) {
      toast({
        title: "Input required",
        description: "Please enter your input in the left box and press Enter.",
        status: "info",
        duration: 4000,
      });
      setShowOutput(true); 
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      return;
    }

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(
        language,
        sourceCode,
        userInput
      );
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const lineCount = code.split("\n").length;
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
                          const langKey = image[index].name
                            .toLowerCase()
                            .replace(/\s+/g, "");
                          setLanguage(langKey);
                          console.log(langKey);
                          setCode(CODE_SNIPPETS[langKey] || "");
                          console.log(CODE_SNIPPETS[langKey] || "");
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
              <div className="tol" isLoading={isLoading} onClick={runCode}>
                <span className="tip">Run</span>
                <i class="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <div className="editor-container">
           

            <Editor
              height="72vh"
              theme="vs-dark"
              defaultLanguage={language}
              value={code}
              language={language}
              defaultValue="//Write code here"
              onMount={(e) => {
                editorRef.current = e;
                e.focus();
              }}
              onChange={(e) => {
                setCode(e);
              }}
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
              ref={inputRef}
              className="intext iot"
              placeholder="Enter your input..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  runCode();
                  setUserInput("")
                }
              }}
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
              
              <div
                className="outtext iot"
                style={{
                  color: isError ? "#b50303" : "",
                  border: "1px solid",
                  borderRadius: "4px",
                  borderColor: isError ? "red" : "#333",
                }}
              >
                {output
                  ? output.map((line, i) => <p key={i}>{line}</p>)
                  : 'Click "Run Code" to see the output here'}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CodeEditer;
