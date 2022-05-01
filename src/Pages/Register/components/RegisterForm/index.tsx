import Button from "components/Button";
import Image from "components/Image";
import Input from "components/Input";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";

function RegisterForm() {
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
          onChange={(e: any) => {}}
          value={""}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Email"
          placeHolder="ex. abc.def@xyz.com"
          type="email"
          onChange={(e: any) => {}}
          value={""}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Password"
          placeHolder=""
          type="password"
          onChange={(e: any) => {}}
          value={""}
        />
      </div>
      <div className={styles.FormInputRow}>
        <Input
          label="Confirm Password"
          placeHolder=""
          type="password"
          onChange={(e: any) => {}}
          value={""}
        />
      </div>
      <Button>Login</Button>
    </div>
  );
}

export default RegisterForm;
