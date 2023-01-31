export interface IFeature {
  position: "top" | "center" | "bottom";
  img: string;
  text: { head: string; paragraph: string };
  id: number;
}

export interface IApiData {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    original_link: string;
  };
}

export interface IShortLink {
  link: string;
  shortLink: string;
}
