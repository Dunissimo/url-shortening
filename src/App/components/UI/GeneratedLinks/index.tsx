import { FC, Fragment, useState } from "react";
import { shortLink } from "../../../../api";
import { IApiData, IShortLink } from "../../../../utils/interfaces";
import LinkToShort from "../Link";

interface IProps {
  links: string[];
}

const GeneratedLinks: FC<IProps> = ({ links }) => {
  return (
    <div>
      {links.length > 0 ? (
        links.map((link) => <LinkToShort link={link} />)
      ) : (
        <p style={{ opacity: ".5", textAlign: "center" }}>
          API, который я использую, блокирует множество ссылок, следовательно,
          некоторые ссылки не будут сокращены. <br /> API which I use blocks
          many links, therefore, some links will not be reduced
        </p>
      )}
    </div>
  );
};

export default GeneratedLinks;
