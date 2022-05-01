import { setUserDetails } from "actions";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { getImageUrl } from "utils/image.utils";
import styles from "./index.module.scss";
const ProfileForm = ({ userDetails }: any) => {
  const [name, setName] = useState(userDetails?.name ?? "");
  const [email, setEmail] = useState(userDetails?.email ?? "");
  const [age, setAge] = useState(userDetails?.age ?? "");
  const [gender, setGender] = useState(userDetails?.gender ?? "");
  const [dob, setDob] = useState(userDetails?.dov ?? "");
  const [mobile, setNumber] = useState(userDetails?.mobile ?? "");

  useEffect(() => {
    const { name, email, age, gender, dob, mobile } = userDetails || {};
    setName(name);
    setEmail(email);
    setAge(age);
    setGender(gender);
    setDob(dob);
    setNumber(mobile);
  }, [userDetails]);

  const updateUserProfile = () => {
    setUserDetails({
      name: name,
      age: age,
      gender: gender,
      dob: dob,
      mobile: mobile,
    });
  };

  return (
    <div className={styles.ProfileFormWrapper}>
      <div className={styles.ProfileFormImg}>
        <img src={getImageUrl("defaultProfile.gif")} alt="profile"></img>
      </div>
      <div className={styles.ProfileFormContainer}>
        <div className={styles.ProfileFormRow}>
          <div className={styles.ProfileFormItem}>
            <Input
              label="Name"
              placeHolder=""
              type="text"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className={styles.ProfileFormItem}>
            <Input
              label="Email"
              placeHolder=""
              type="email"
              value={email}
              disabled={true}
            />
          </div>
        </div>
        <div className={styles.ProfileFormRow}>
          <div className={styles.ProfileFormItem}>
            <Input
              label="Age"
              placeHolder=""
              type="number"
              onChange={(e: any) => {
                setAge(e.target.value);
              }}
              value={age}
            />
          </div>
          <div className={styles.ProfileFormItem}>
            <Dropdown
              label="Gender"
              placeHolder=""
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
                { name: "Others", value: "others" },
              ]}
              onChange={(e: any) => {
                setGender(e.target.value);
              }}
              value={gender}
            />
          </div>
        </div>
        <div className={styles.ProfileFormRow}>
          <div className={styles.ProfileFormItem}>
            <Input
              label="DOB"
              placeHolder="Date"
              type="date"
              onChange={(e: any) => {
                setDob(e.target.value);
              }}
              value={dob}
            />
          </div>
          <div className={styles.ProfileFormItem}>
            <Input
              label="Mobile"
              placeHolder=""
              type="number"
              onChange={(e: any) => {
                setNumber(e.target.value);
              }}
              value={mobile}
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            updateUserProfile();
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
