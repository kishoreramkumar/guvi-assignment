import React from "react";
import styles from "./index.module.scss";

const Button = (props: any) => {
  return (
    <button
      onClick={!props.disabled ? props.onClick : null}
      className={
        !props.disabled
          ? [styles.ButtonWrapper, props.customClass].join(" ")
          : [
              styles.ButtonWrapper,
              styles.ButtonDisabled,
              props.disabledClass,
            ].join(" ")
      }
      id={props.id}
      key={props.key}
    >
      {props.children}
    </button>
  );
};

export default Button;
