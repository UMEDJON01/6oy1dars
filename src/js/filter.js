const searchFormEl = document.querySelector(".search");

searchFormEl.addEventListener("input", () => {
  const searchValue = searchFormEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".card__item");
  const cardsTitler = document.querySelectorAll(".cards__title");
  cardsTitler.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

import { creatCountries } from "./updateUI";
import request from "./request";

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterAPI;

    if (li.textContent == "All") {
      filterAPI = "https://restcountries.com/v3.1/all";
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
      console.log(filterAPI);
    }

    request(filterAPI)
      .then((data) => {
        creatCountries(data);
      })
      .catch((err) => {
        alert.apply(err.message);
      });
  });
});
