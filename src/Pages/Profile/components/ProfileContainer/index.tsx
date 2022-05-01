import ProfileForm from "../ProfileForm";
import styles from "./index.module.scss";
const ProfileContainer = () => {
  return (
    <div className={styles.ProfileWrapper}>
      <div className={styles.ProfileHeader}></div>
      <div className={styles.ProfileContainer}>
        <ProfileForm />
      </div>
    </div>
  );
};
export default ProfileContainer;
