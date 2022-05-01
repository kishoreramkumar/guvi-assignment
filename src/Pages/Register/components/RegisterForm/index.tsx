import { useState, useCallback } from "react";
import Button from "components/Button";
import Image from "components/Image";
import Input from "components/Input";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";
import { registerUser } from "actions";

function RegisterForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerAction = useCallback(async () => {
    registerUser({ email: email, password: password, name: name });
  }, [email, password, name]);

  return (
    <div className={styles.LoginFormContainer}>
      <Image
        src={getImageUrl("png/guvi-logo-full.png")}
        srcSet={[
          {
            type: "image/webp",
            src: getImageUrl("webp/guvi-logo-full.webp"),
          },
        ]}
        alt="logo"
      />
      <div className={styles.FormInputRow}>
        <Input
          label="Name"
          placeHolder="ex. Steve Jobs"
          type="text"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Email"
          placeHolder="ex. abc.def@xyz.com"
          type="email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Password"
          placeHolder=""
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Confirm Password"
          placeHolder=""
          type="password"
          onChange={(e: any) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
        />
      </div>
      <Button onClick={registerAction}>Login</Button>
    </div>
  );
}

export default RegisterForm;
