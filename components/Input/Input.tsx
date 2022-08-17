import React, { FC, useState, useEffect } from "react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";

import classNames from "classnames";
import styles from "./Input.module.scss";

export interface InputProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    "size" | "prefix" | "className"
  > {
  label?: string;
  success?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  id?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?: string;
  className?: string;
  value?: any;
  width?: number | string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
  borderRadius?: 8 | 12 | 16;
  readOnly?: boolean;
  disabled?: boolean;
  require?: boolean;
  register?: UseFormRegisterReturn; //Use with useForm of "react-hook-form"
  onChange?: (value?: any) => void;
  onSubmit?: (value?: any) => void;
}

const Input: FC<InputProps> = ({
  label,
  success,
  error,
  helperText,
  placeholder = "",
  id,
  prefix,
  suffix,
  borderRadius = 8,
  type = "text",
  variant = "outlined",
  className,
  value,
  width,
  size = "medium",
  readOnly,
  disabled,
  require,
  register,
  onChange,
  onSubmit,
  ...rest
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(e);
  };

  const inputWrapperClassName = classNames(className, styles.input, {
    [styles.filled]: variant === "filled",
    [styles.disabled]: disabled,
    [styles.large]: size === "large",
    [styles.small]: size === "small",
    [styles.label]: label,
    [styles.error_input]: error,
  });

  return (
    <div className={inputWrapperClassName} style={{ width }}>
      {success && <div className={styles.success}>{success}</div>}
      {label && (
        <label htmlFor={id}>
          {label} {require && <span className={styles.error}>*</span>}
        </label>
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          {prefix && <div className={styles.prefix_container}>{prefix}</div>}
          <input
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            required={require}
            id={id}
            {...register}
            {...rest}
            onKeyPress={(e) => {
              if (e.key === "Enter" && onSubmit) {
                onSubmit();
              }
            }}
          />
          {suffix && <div className={styles.suffix_container}>{suffix}</div>}
        </div>
      </div>
      {helperText && <div>{helperText}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
