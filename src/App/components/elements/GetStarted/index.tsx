import { FC } from "react";
import Button from "../../UI/Button";

import styles from "./GetStarted.module.scss";

const GetStarted: FC = () => {
  return (
    <div className={styles.bg}>
      <div className="container">
        <h3 className={styles.h}>Boost your links today</h3>
        <Button withBg style={{ padding: "15px 50px" }}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
