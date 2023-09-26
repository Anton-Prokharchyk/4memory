import React from 'react';
import cn from "classnames";

import {ButtonProps} from "@/components/button/button.proptypes";

import styles from "./button.module.scss";
export function Button({children, buttonType = "primary", ...props}: ButtonProps) : React.ReactElement {
  return <button className={cn(styles.btn,
      { [styles.primary]: buttonType === "primary",
      [styles.dark]: buttonType === "dark",
      [styles.lined]: buttonType === "bordered",
      [styles.none]: buttonType === "none",
    })} {...props}>{children}</button>;
}