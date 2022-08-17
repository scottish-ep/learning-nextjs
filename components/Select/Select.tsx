import React, { FC, useState, useEffect, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";
import SelectMUI from "@mui/material/Select";
import { Icon, MenuItem } from "@mui/material";
import { IsArray } from "../../ultils";
import { isArray } from "lodash";

export interface IsOption {
  label: string | ReactNode;
  value: string | number;
}

export interface SelectProps {
  className?: string;
  variant?: "standard" | "filled" | "outlined";
  icon?: any;
  id?: string;
  disabled?: boolean;
  multiple?: boolean;
  options: IsOption[];
  value?: IsOption[] | IsOption | string;
  defaultValue?: IsOption[] | IsOption | string;
  onChange: (value?: any) => void;
}

const Select: FC<SelectProps> = ({
  id,
  variant,
  className,
  options,
  value,
  icon,
  disabled,
  defaultValue,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <SelectMUI
        className={classNames(className, styles.select)}
        variant={variant}
        id={id}
        value={value}
        IconComponent={icon}
        disabled={disabled}
        defaultValue={defaultValue || options[0].value}
        onChange={onChange}
      >
        {isArray(options) &&
          options.map((item: IsOption, index: number) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </SelectMUI>
    </div>
  );
};

export default Select;
