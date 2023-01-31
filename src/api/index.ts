const API_BASE = "https://api.shrtco.de/v2";

export const shortLink = async (link: string) => {
  return fetch(`${API_BASE}/shorten?url=${link}`, { mode: "cors" }).then(
    (res) => res.json()
  );
};
