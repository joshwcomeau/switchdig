export const toQueryString = data => (
  Object
    .keys(data)
    .map(key => (
      `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    ))
    .join('&')
);
