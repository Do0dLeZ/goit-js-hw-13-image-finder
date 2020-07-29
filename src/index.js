"use-strict";

import requestPhotos from "./js/apiService";

const requestParams = {
  q: "cats",
  page: 1,
  per_page: 12,
};

requestPhotos(requestParams);
