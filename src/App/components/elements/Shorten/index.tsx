import { FC, FormEvent, FormEventHandler, useState } from "react";
import { shortLink } from "../../../../api";
import { IApiData } from "../../../../utils/interfaces";
import { validateURL } from "../../../../utils/utils";
import Button from "../../UI/Button";
import GeneratedLinks from "../../UI/GeneratedLinks";

import styles from "./Shorten.module.scss";

const Shorten: FC = () => {
  const prevLinks = sessionStorage.getItem("links");

  const [links, setLinks] = useState<string[]>(JSON.parse(prevLinks!) || []);
  const [link, setLink] = useState("");
  const [isValid, setValid] = useState(true);

  const submitHandler: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();

    if (validateURL(link)) {
      setValid(true);

      setLinks((prev) => [...prev, link]);
      sessionStorage.setItem("links", JSON.stringify([...links, link]));
      setLink("");

      return;
    }

    setValid(false);
  };

  return (
    <div className={styles.mainDiv} id="shorten">
      <div className="container">
        <div className={styles.shorten}>
          <form
            action="post"
            className={isValid ? styles.form : styles.notValidForm}
            onSubmit={submitHandler}
          >
            <input
              type="text"
              name="link"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={isValid ? styles.linkInput : styles.notValidInput}
              placeholder="Shorten a link here"
            />
            <div className={styles.btnBlock}>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px 10px",
                  borderRadius: "5px",
                  fontSize: "1.2rem",
                }}
                withBg
              >
                Shorten It!
              </Button>
            </div>
          </form>
        </div>

        <GeneratedLinks links={links} />
      </div>
    </div>
  );
};

export default Shorten;
