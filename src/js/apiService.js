"use-strict";

// =====================       IMPORTS      ============================

import axios from "axios";

// =====================    AXIOS/REQUEST SETTINGS  ============================
axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://pixabay.com";

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
    .get("/api", { params: { ...requestParams, ...queryParams } })
    .then(({ data }) => data.hits);
}
