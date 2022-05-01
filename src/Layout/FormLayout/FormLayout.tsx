import Image from "components/Image";
import { ReactElement } from "react";
import styles from "./FormLayout.module.scss";

interface Props {
  img: string;
  srcSet: Array<any>;
  children: any;
}
const FormLayout = ({ img, srcSet, children }: Props): ReactElement => {
  return (
    <div className={styles.FormLayoutWrapper}>
      <div className={styles.LeftContainer}>
        <Image src={img} srcSet={srcSet} alt=""></Image>
      </div>
      <div className={styles.RightContainer}>{children}</div>
    </div>
  );
};

export default FormLayout;
