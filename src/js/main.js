import "../css/main.css";

import request from "./request";

import { creatCountries } from "./updateUI";

import "./filter";
import "./mode";

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    creatCountries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
