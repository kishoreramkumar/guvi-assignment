import { fetchUserDetail } from "actions";
import setAuthToken from "actions/action.utils";
import { useEffect, useState } from "react";
import ProfileForm from "../ProfileForm";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { asyncLocalStorage } from "utils";

const ProfileContainer = () => {
  const [userDetails, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getUserDetail = async () => {
    setLoading(true);
    const res = await fetchUserDetail();
    if (res?.data?._id) {
      setUserDetail(res.data);
    } else {
      window.alert(
        res?.response?.data?.message ?? res?.message ?? "Something Went Wrong"
      );
    }
    setLoading(false);
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
        <ProfileForm userDetails={userDetails} loading={loading} />
      </div>
    </div>
  );
};
export default ProfileContainer;
