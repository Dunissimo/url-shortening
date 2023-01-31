import { FC, useEffect, useState } from "react";
import { IApiData } from "../../../../utils/interfaces";
import Button from "../Button";
import { shortLink } from "../../../../api";

import styles from "./Link.module.scss";

interface IProps {
  link: string;
}

const LinkToShort: FC<IProps> = ({ link }) => {
  const [copiedLink, setCopiedLink] = useState(null);
  const [shortenLink, setLink] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    shortLink(link)
      .then((data: IApiData) => {
        setLink(data.result.short_link);
        // TODO: поменять api
        setError(false);
      })
      .catch((e) => {
        setError(true);
        setLink("Error");
      });
  }, []);

  if (error) {
    return (
      <div className={styles.link}>
        <div className="input">Something went wrong :(</div>
        <div className={styles.output}>
          <a href="/">{shortenLink}</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.link}>
      <div className="input">{link}</div>
      <div className={styles.shortLink}>
        <div className={styles.output}>
          <a href={`https://${shortenLink}`}>{shortenLink}</a>
        </div>
        <div className="copy">
          <Button withBg style={{ borderRadius: "5px", padding: ".5rem 2rem" }}>
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkToShort;
