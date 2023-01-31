import { FC } from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialMedia from "../../UI/SocialMedia";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div className="logo">
            <img src="/images/logo-light.svg" alt="" />
          </div>
          <div className={styles.links}>
            <div className={styles.flex}>
              <ul>
                <h4>Features</h4>
                <li>
                  <Link to="/#shorten" smooth>
                    Link shortening
                  </Link>
                </li>
                <li>
                  <Link to="/#brandedLinks" smooth>
                    Branded Links
                  </Link>
                </li>
                <li>
                  <Link to="/#analytics" smooth>
                    Analytics
                  </Link>
                </li>
              </ul>
              <ul>
                <h4>Resources</h4>
                <li>
                  <Link to="/resources">Blog</Link>
                </li>
                <li>
                  <Link to="/resources">Developers</Link>
                </li>
                <li>
                  <Link to="/resources">Support</Link>
                </li>
              </ul>
              <ul>
                <h4>Company</h4>
                <li>
                  <Link to="/company">About</Link>
                </li>
                <li>
                  <Link to="/company">Our Team</Link>
                </li>
                <li>
                  <Link to="/company">Careers</Link>
                </li>
                <li>
                  <Link to="/company">Contact</Link>
                </li>
              </ul>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
