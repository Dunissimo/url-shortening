import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const [isOpen, setOpenStatus] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="row" style={{ width: "100%" }}>
          <img src={"/images/logo.svg"} alt="logo" />
          <div className={`${styles.links} ${isOpen ? styles.shownLinks : ""}`}>
            <ul>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
            <div className={styles.auth}>
              <Button>Login</Button>
              <Button withBg>Sign up</Button>
            </div>
          </div>
        </div>

        <div
          className={`${styles.burger} ${isOpen ? styles.shownBurger : ""}`}
          onClick={() => {
            setOpenStatus((prev) => !prev);
            console.log(isOpen);
          }}
        >
          <div className={styles.burger__line}></div>
          <div className={styles.burger__line}></div>
          <div className={styles.burger__line}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
