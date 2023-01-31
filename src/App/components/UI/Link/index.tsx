import React, { FC, useEffect, useState } from "react";
import { IApiData } from "../../../../utils/interfaces";
import Button from "../Button";
import { shortLink } from "../../../../api";

import styles from "./Link.module.scss";

interface IProps {
  link: string;
  copied: string | null;
  setCopied: React.Dispatch<React.SetStateAction<string | null>>;
}

const LinkToShort: FC<IProps> = ({ link, copied, setCopied }) => {
  const [shortenLink, setLink] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    shortLink(link)
      .then((data: IApiData) => {
        setLink(data.result.short_link);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLink("Error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link).then(() => setCopied(link));
  };

  if (error) {
    return (
      <div className={styles.link}>
        <div className={styles.input}>Something went wrong :(</div>
        <div className={styles.output}>
          <a href="/">{shortenLink}</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.link}>
      <div className={styles.input}>{link}</div>
      <div className={styles.shortLink}>
        <div className={styles.output}>
          <a href={`https://${shortenLink}`}>{shortenLink}</a>
        </div>
        <div className="copy">
          <Button
            withBg
            style={{
              borderRadius: "5px",
              padding: ".5rem 2rem",
              backgroundColor: copied === shortenLink ? "#3A305F" : "#2CCFD1",
            }}
            onClick={() => copyToClipboard(shortenLink)}
          >
            {copied === shortenLink ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkToShort;
