import { Highlight, themes } from "prism-react-renderer";
import { ChangeEvent } from "react";
import "./style.css"
import React from "react";

interface CodeEditorProps {
  code: string;
  onCodeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeEditor = ({ code, onCodeChange }: CodeEditorProps) => {
  return (
    <div className="code-box">
      <Highlight theme={themes.github} code={code} language="jsx">
        {({ tokens, getLineProps, getTokenProps, style }) => (
          <pre
            className="common-css"
            style={{
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="common-css textarea"
        value={code}
        onChange={onCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
