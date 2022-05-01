import { fetchUserDetail } from "actions";
import setAuthToken from "actions/action.utils";
import { useEffect, useState } from "react";
import ProfileForm from "../ProfileForm";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { asyncLocalStorage } from "utils";

const ProfileContainer = () => {
  const [userDetails, setUserDetail] = useState({});
  const navigate = useNavigate();
  const getUserDetail = async () => {
    const res = await fetchUserDetail();
    if (res?.data?._id) {
      setUserDetail(res.data);
    }
  };
  useEffect(() => {
    getUserDetail();
  }, []);
  return (
    <div className={styles.ProfileWrapper}>
      <div
        onClick={() => {
          setAuthToken("");
          asyncLocalStorage.setItem("guviToken", "").then(() => {
            console.log(localStorage.guviToken);
            navigate("/");
            navigate(0);
          });
        }}
        className={styles.ProfileLogout}
      >
        Logout
      </div>
      <div className={styles.ProfileHeader}></div>
      <div className={styles.ProfileContainer}>
        <ProfileForm userDetails={userDetails} />
      </div>
    </div>
  );
};
export default ProfileContainer;
