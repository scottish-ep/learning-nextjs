import React, { FC, useState, useEffect, useRef, ReactNode } from "react";
import style from "./style.module.css";

interface InputCodeProps {
  length: number;
  loading: any;
  onComplete: any;
}

const InputCode: FC<InputCodeProps> = ({ length, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs: any = useRef([]);

  const processInput = (e: any, slot: any) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    } else {
      inputs.current[slot].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: any, slot: any) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className={`${style.code_input} flex flex-row justify-between`}>
      {code.map((num, idx) => {
        return (
          <input
            className={`sub-title-20 fw-5 color-primary-500 ${style.input_verify}`}
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && idx === 0}
            readOnly={loading}
            onChange={(e) => processInput(e, idx)}
            onKeyUp={(e) => onKeyUp(e, idx)}
            ref={(ref) => inputs.current.push(ref)}
          />
        );
      })}
    </div>
  );
};

export default InputCode;
