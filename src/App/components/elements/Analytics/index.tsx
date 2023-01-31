import { FC } from "react";
import { IFeature } from "../../../../utils/interfaces";
import Feature from "../Feature";
import styles from "./Analytics.module.scss";

const data: IFeature[] = [
  {
    img: "./images/icon-brand-recognition.svg",
    position: "top",
    text: {
      head: "Brand Recognition",
      paragraph: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
    },
    id: 111,
  },
  {
    img: "./images/icon-detailed-records.svg",
    position: "center",
    text: {
      head: "Detailed Records",
      paragraph: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    },
    id: 222,
  },
  {
    img: "./images/icon-fully-customizable.svg",
    position: "bottom",
    text: {
      head: "Fully Customizable",
      paragraph: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    },
    id: 333,
  },
];

const Analytics: FC = () => {
  return (
    <div className={styles.wrapper} id="analytics">
      <div className="container">
        <div className={styles.head}>
          <h3 className={styles.h3}>Advanced Statistics</h3>
          <p className={styles.p}>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className={styles.features}>
          <Feature feature={data[0]} />
          <div className={styles.line}></div>
          <Feature feature={data[1]} />
          <div className={styles.line}></div>
          <Feature feature={data[2]} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
