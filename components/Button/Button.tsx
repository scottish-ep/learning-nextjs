import React, { FC, useState, useEffect, ReactNode } from "react";
import classNames from "classnames";

import Loading from "../Loading/Loading";

import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/library.css";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    "size" | "prefix" | "className"
  > {
  id?: string;
  text?: string;
  width?: string | number;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "no-outlined"
    | "secondary-no-outlined"
    | "underlined"
    | "";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  backgroundColor?: string;
  isLoading?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  id,
  text,
  width,
  className,
  prefix,
  suffix,
  variant = "primary",
  size = "medium",
  type = "button",
  backgroundColor,
  isLoading = false,
  disabled = false,
  children,
  ...rest
}) => {
  const buttonClassName = classNames(className, styles.button, {
    [styles.disabled]: disabled,
    [styles.outlined]: variant === "outlined",
    [styles.underlined]: variant === "underlined",
    [styles.secondary]: variant === "secondary",
    [styles.no_outlined]: variant === "no-outlined",
    [styles.secondary_no_outlined]: variant === "secondary-no-outlined",
    [styles.large]: size === "large",
    [styles.small]: size === "small",
    [styles.loading]: isLoading,
  });

  return (
    <button
      disabled={disabled || isLoading}
      className={buttonClassName}
      type={type}
      id={id}
      style={{ width, backgroundColor }}
      {...rest}
    >
      {isLoading && (
        <Spinner color="white" size={15.5} speed={1} animating={true} />
      )}
      {!isLoading && (
        <>
          {prefix && <div>{prefix}</div>}
          {text || children}
          {suffix && <div>{suffix}</div>}
        </>
      )}
    </button>
  );
};

export default Button;
