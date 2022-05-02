import { loginUser } from "actions";
import Button from "components/Button";
import Image from "components/Image";
import Input from "components/Input";
import { useStoreContext } from "components/StoreContext";
import { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "utils/image.utils";
import { isEmailValid } from "utils/validation.utils";
import styles from "./index.module.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { pushNotification } = useStoreContext();
  const navigate = useNavigate();

  const loginAction = useCallback(async () => {
    setLoading(true);
    const res = await loginUser({ email: email, password: password });
    if (res && res?.data?.token) {
      // window.alert("Successfully Logged in");
      pushNotification({ title: "Successfully Logged in", type: "Success" });
      navigate("/profile");
      navigate(0);
    } else {
      // window.alert(
      //   res?.response?.data?.message ?? res?.message ?? "Something Went Wrong"
      // );

      pushNotification({
        title:
          res?.response?.data?.message ??
          res?.message ??
          "Something Went Wrong",
        type: "Error",
      });
    }
    setLoading(false);
  }, [email, navigate, password, pushNotification]);

  const isValidEmail = useMemo(() => isEmailValid(email || ""), [email]);
  const isButtonDisabled = useMemo(
    () => !email || !password || !isValidEmail || loading,
    [email, isValidEmail, loading, password]
  );

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
        {email && !isValidEmail && (
          <span className={styles.FormError}>Please enter a valid email</span>
        )}
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
      <Button onClick={loginAction} disabled={isButtonDisabled}>
        Login
      </Button>
      <div style={{ paddingTop: "1rem" }}>
        Don't have account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default LoginForm;
