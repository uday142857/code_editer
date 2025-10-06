import axios from "axios";
import { LANGUAGE_VERSIONS, FILE_NAMES } from "./constant";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, stdin = "") => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [{ name: FILE_NAMES[language], content: sourceCode }],
    stdin: stdin,
  });
  return response.data;
};
