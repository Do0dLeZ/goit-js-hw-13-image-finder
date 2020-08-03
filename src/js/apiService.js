"use-strict";

// =====================       IMPORTS      ============================

import axios from "axios";

// =====================    AXIOS/REQUEST SETTINGS  ============================
// axios.defaults.baseURL = "https://pixabay.com/";

const requestParams = {
  image_type: "photo",
  orientation: "horizontal",
  q: "",
  page: 1,
  per_page: 12,
  key: "17682728-11c80b1f20b878b44cd6dfacb",
};

// =====================    DFAULT FUNC     ============================

export default function (queryParams = {}) {
  return axios
    .get("https://pixabay.com/api", { params: { ...requestParams, ...queryParams } })
    .then(({ data }) => data.hits);
}

// ===================== FETCH ============================

// export default function (queryParams = {}) {
//   const url = `https://pixabay.com/api?image_type=${requestParams.image_type}&orientation=${requestParams.orientation}&q=${queryParams.q}&page=${queryParams.page}&per_page=${queryParams.per_page}&key=${requestParams.key}`;
//   return fetch(url, {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })
//     .then((response) => response)
//     .then(console.log);
// }
