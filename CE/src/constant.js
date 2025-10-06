export const LANGUAGE_VERSIONS = {
  python: "3.10.0",
  java: "15.0.2",
  javascript: "18.15.0",
  c: "11.2.0",
  csharp: "6.12.0",
  cpp: "10.2.0",
  go: "1.16.2",
  r: "4.2.1",
};


export const FILE_NAMES = {
  python: "main.py",
  java: "Main.java",
  javascript: "main.js",
  c: "main.c",
  csharp: "Program.cs",
  cpp: "main.cpp",
  go: "main.go",
  r: "main.R",
};

export const CODE_SNIPPETS = {
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello World in C");\n\treturn 0;\n}\n`,
  csharp: `using System;\n\nnamespace HelloWorld {\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello World in C++";\n\treturn 0;\n}\n`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World in Go")\n}\n`,
  r: `print("Hello World in R")\n`,
};
