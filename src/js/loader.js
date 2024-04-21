const loaderEl = document.querySelector(".loader");

const loaderToggle = (info) => {
  if (info === true) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};

export default loaderToggle;
