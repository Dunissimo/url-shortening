import { FC, useState } from "react";
import LinkToShort from "../Link";

interface IProps {
  links: string[];
}

const GeneratedLinks: FC<IProps> = ({ links }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const p =
    links.length > 0 ? (
      ""
    ) : (
      <p style={{ textAlign: "center", fontSize: "0.5rem", opacity: 0.5 }}>
        API, который я использую, блокирует некоторые адреса, следовательно,
        некоторые ссылки не будут сокращены. <br /> The API that I use blocks
        some addresses, therefore, some links will not reduced.
      </p>
    );

  return (
    <div>
      {links.map((link, i) => (
        <LinkToShort
          link={link}
          copied={copiedLink}
          setCopied={setCopiedLink}
        />
      ))}
      {p}
    </div>
  );
};

export default GeneratedLinks;
