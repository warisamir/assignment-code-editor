import { ChangeEvent, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import { defaultCode } from "../constants";
import "./mainpage.style.css";
import React from "react";

const MainPage = () => {
  const [code, setCode] = useState<string>(defaultCode);

  const onCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <h1>simple react code editor</h1>
      <div className="editor-box">
        <CodeEditor code={code} onCodeChange={onCodeChange} />
      </div>
    </div>
  );
};

export default MainPage;
