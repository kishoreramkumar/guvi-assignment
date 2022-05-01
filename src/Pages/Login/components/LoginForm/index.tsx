import { loginUser } from "actions";
import Button from "components/Button";
import Image from "components/Image";
import Input from "components/Input";
import { useCallback, useState } from "react";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginAction = useCallback(async () => {
    loginUser({ email: email, password: password });
  }, [email, password]);

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
      <Button onClick={loginAction}>Login</Button>
    </div>
  );
}

export default LoginForm;
