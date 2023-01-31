const API_BASE = "https://api.shrtco.de/v2";

export const shortLink = async (link: string) => {
  return fetch(`${API_BASE}/shorten?url=${link}`, { mode: "cors" }).then(
    (res) => res.json()
  );
  // const res = await fetch(`${API_BASE}/shorten?url=${link}`, {
  // mode: "no-cors",
  // method: "GET",
  // });
  // const data = await res.json();
  // console.log(data);

  // return data;
};
