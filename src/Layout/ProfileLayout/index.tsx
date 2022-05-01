import Image from "components/Image";
import { ReactElement } from "react";
import styles from "./index.module.scss";

const ProfileLayout = ({ children }: any): ReactElement => {
  return <div className={styles.ProfileLayoutWrapper}>{children}</div>;
};

export default ProfileLayout;
