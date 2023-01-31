export const validateURL = (url: string) => {
  const reg = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return reg.test(url);
};
