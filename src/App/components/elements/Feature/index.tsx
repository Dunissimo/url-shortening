import { FC } from "react";
import { IFeature } from "../../../../utils/interfaces";

import styles from "./Feature.module.scss";

interface IProps {
  feature: IFeature;
}

const Feature: FC<IProps> = ({ feature: { position, img, text } }) => {
  return (
    <div className={`${styles.feature} ${styles[position]}`}>
      <div className={styles.imgBlock}>
        <img src={`${img}`} alt="" />
      </div>
      <h4 className={styles.h4}>{text.head}</h4>
      <p className={styles.p}>{text.paragraph}</p>
    </div>
  );
};

export default Feature;
