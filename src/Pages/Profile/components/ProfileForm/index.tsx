import Dropdown from "components/Dropdown";
import Input from "components/Input";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";
const ProfileForm = () => {
  return (
    <div className={styles.ProfileFormWrapper}>
      <div className={styles.ProfileFormImg}>
        <img src={getImageUrl("defaultProfile.gif")} alt="profile"></img>
      </div>
      <div className={styles.ProfileFormContainer}>
        <div className={styles.ProfileFormRow}>
          <Input
            label="Name"
            placeHolder=""
            type="text"
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
        <div className={styles.ProfileFormRow}>
          <Input
            label="Email"
            placeHolder=""
            type="email"
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
        <div className={styles.ProfileFormRow}>
          <Input
            label="Age"
            placeHolder=""
            type="number"
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
        <div className={styles.ProfileFormRow}>
          <Dropdown
            label="Gender"
            placeHolder=""
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
              { name: "Others", value: "others" },
            ]}
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
        <div className={styles.ProfileFormRow}>
          <Input
            label="DOB"
            placeHolder="w"
            type="date"
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
        <div className={styles.ProfileFormRow}>
          <Input
            label="Mobile"
            placeHolder=""
            type="number"
            onChange={(e: any) => {}}
            value={""}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
