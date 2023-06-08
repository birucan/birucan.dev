import React, { useState } from "react";
import "98.css";
import { getFile, openFile } from "../utils/fileManager";
import { FileEnum } from "../../../types";

const PasswordCheck = ({ file }: { file: FileEnum }) => {
  const [pass, setPass] = useState<string>("");

  return (
    <center>
      <p style={{ textAlign: "center" }}>Password Protected!</p>
      <br />
      <br />
      <input
        type="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          //Cybersecurity is my passion
          if (pass === "admin") {
            openFile(getFile(file));
          }
        }}
      >
        Enter
      </button>
    </center>
  );
};
export default PasswordCheck;
