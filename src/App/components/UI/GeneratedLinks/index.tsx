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
      <p style={{ opacity: ".5", textAlign: "center" }}>
        API, который я использую, блокирует множество ссылок, следовательно,
        некоторые ссылки не будут сокращены. <br /> API which I use blocks many
        links, therefore, some links will not be reduced
      </p>
    );

  return (
    <div>
      {links.map((link) => (
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
