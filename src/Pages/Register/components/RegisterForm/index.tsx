import { useState, useCallback, useMemo } from "react";
import Button from "components/Button";
import Image from "components/Image";
import Input from "components/Input";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";
import { registerUser } from "actions";
import { isEmailValid } from "utils/validation.utils";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "components/StoreContext";

function RegisterForm({ imageUrl, imgSrcSet }: any) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { pushNotification } = useStoreContext();
  const registerAction = useCallback(async () => {
    setLoading(true);
    const res = await registerUser({
      email: email,
      password: password,
      name: name,
    });
    if (res && res?.data?.email) {
      // window.alert("Profile Added");
      pushNotification({
        title: "Profile Added",
        type: "Success",
      });
      navigate("/");
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
  }, [email, password, name, pushNotification, navigate]);

  const isValidEmail = useMemo(() => isEmailValid(email || ""), [email]);
  const isPasswordMatch = useMemo(
    () => password === confirmPassword,
    [confirmPassword, password]
  );

  const isButtonDisabled = useMemo(
    () =>
      !email ||
      !name ||
      !password ||
      !isPasswordMatch ||
      !isValidEmail ||
      loading,
    [email, isPasswordMatch, isValidEmail, loading, name, password]
  );

  return (
    <div className={styles.RegisterFormContainer}>
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
      <Image
        className={styles.RegisterFormBanner}
        src={imageUrl}
        srcSet={imgSrcSet}
        alt="register"
      ></Image>
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
        {confirmPassword && !isPasswordMatch && (
          <span className={styles.FormError}>Password mismatch</span>
        )}
      </div>
      <Button onClick={registerAction} disabled={isButtonDisabled}>
        Register
      </Button>
      <div style={{ paddingTop: "1rem" }}>
        Already have account? <Link to="/">Sign in</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
