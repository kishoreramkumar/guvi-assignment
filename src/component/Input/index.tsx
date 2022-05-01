import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeHolder = "Please enter the value",
  autoComplete = "off",
  ...restProps
}: any) => {
  const [classValue, setFocusClass] = useState<any>(null);
  const setActive = (el: any, active: boolean) => {
    if (active) {
      setFocusClass(styles.FormField_isActive);
    } else {
      setFocusClass(null);
      if (el.target.value === "") setFocusClass(null);
      else setFocusClass(styles.FormField_isFilled);
    }
  };
  useEffect(() => {
    if (value && !classValue) {
      setFocusClass(styles.FormField_isFilled);
    }
  }, [classValue, value]);

  return (
    <div className={`${styles.FormField} ${classValue}`}>
      <div className={styles.FormFieldControl}>
        <label className={styles.FormFieldLabel}>{label}</label>
        <input
          type={type}
          className={styles.FormFieldInput}
          value={value}
          onChange={onChange}
          onBlur={(el) => {
            setActive(el, false);
          }}
          onFocus={(el) => {
            setActive(el, true);
          }}
          placeholder={(classValue && !value) || !label ? placeHolder : ""}
          autoComplete={autoComplete}
          onWheel={(event: any) => event?.target?.blur()}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default Input;
