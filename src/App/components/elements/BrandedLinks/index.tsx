import { FC } from "react";
import Button from "../../UI/Button";

import styles from "./BrandedLinks.module.scss";

const BrandedLinks: FC = () => {
  return (
    <div className={`container row ${styles.mainDiv}`} id="brandedLinks">
      <div className={styles.left}>
        <h2 className={styles.h2}>More than just shorter links</h2>
        <p className={styles.p}>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button withBg style={{ padding: "15px 50px" }}>
          Get started
        </Button>
      </div>
      <div className={styles.right}>
        <img src={"/images/illustration-working.svg"} alt="" />
      </div>
    </div>
  );
};

export default BrandedLinks;
