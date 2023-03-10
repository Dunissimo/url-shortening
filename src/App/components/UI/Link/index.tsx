import React, { FC, useEffect, useState } from "react";
import { IApiData } from "../../../../utils/interfaces";
import Button from "../Button";
import { shortLink } from "../../../../api";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
        <div className={styles.copy} style={{ cursor: "pointer" }}>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(shortenLink)}
          >
            <Button
              withBg
              style={{
                cursor: "pointer",
                borderRadius: "5px",
                padding: ".5rem 2rem",
                backgroundColor: copied === shortenLink ? "#3A305F" : "#2CCFD1",
              }}
            >
              {copied === shortenLink ? "Copied!" : "Copy"}
            </Button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default LinkToShort;
