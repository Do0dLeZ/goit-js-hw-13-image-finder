"use-strict";

// ==============     API IMPORT    ================

import requestPhotos from "./js/apiService.js";
import toast from "toastr";

// ==============   TEMPLATE IMPORT ================

import queryFormTemplate from "./hbs/queryForm.hbs";
import listCardsTemplate from "./hbs/listCards.hbs";
import cardTemplate from "./hbs/card.hbs";

// ==============    Style Import   ================

import "./sass/gallery.scss";
import "material-design-icons";
import "toastr/build/toastr.css";
import "./sass/form.scss";

// ==============     MAIN PARAMS   ================

const requestParams = {
  q: "",
  page: 1,
  per_page: 12,
};

const refs = {
  bodyElem: document.querySelector("body"),
  galleryContainer: document.querySelector(".gallery-container"),
};

const initFormParams = () => {
  refs.formSearch = document.querySelector("#search-form");
};

const initGalleryParams = () => {
  refs.gallery = document.querySelector(".gallery");
  refs.btnLoadMore = document.querySelector("#btn-load-more");
};

// ==============        MODEL      ================

const cardsHTMLCreator = (cards = []) => {
  return cards.map((card) => cardTemplate(card)).join("");
};

// ==============       RENDERS     ================

const renderOnLoad = () => {
  refs.bodyElem.insertAdjacentHTML("afterbegin", queryFormTemplate());
};

const renderCards = (cards = []) => {
  refs.gallery.insertAdjacentHTML("beforeend", cardsHTMLCreator(cards));
};

const renderClearGallery = () => {
  refs.galleryContainer.innerHTML = "";
};

// ==============       HENDLERS    =================

const handleSubmit = (e) => {
  renderClearGallery();
  e.preventDefault();
  const queryValue = e.target.elements.query.value;
  if (queryValue) {
    initListContainer();
    requestParams.q = queryValue;
    requestParams.page = 1;
    requestPhotos(requestParams).then(renderCards);
  } else {
    toast.warning("Empty or wrong request...");
  }
};

const handleLoadMore = (e) => {
  if (requestParams.q) {
    requestParams.page += 1;
    requestPhotos(requestParams).then(renderCards);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
};

// ==============        EVENTS     =================

const initFromEvents = () => {
  refs.formSearch.addEventListener("submit", handleSubmit);
};

const initGalleryEvents = () => {
  refs.btnLoadMore.addEventListener("click", handleLoadMore);
};

// ===============        INIT      =================

const initListContainer = function () {
  refs.galleryContainer.insertAdjacentHTML("beforeend", listCardsTemplate());
  initGalleryParams();
  initGalleryEvents();
};

const initPageOnLoad = function () {
  renderOnLoad();
  initFormParams();
  initFromEvents();
};

initPageOnLoad();
