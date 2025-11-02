function generateMotivation(event) {
  event.preventDefault();

  new Typewriter("#motivation", {
    strings:
      "Perseverance is the steadfast drive to continue a difficult task despite obstacles",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let motivationFormElement = document.querySelector(
  "#motivation-generator-form"
);
motivationFormElement.addEventListener("submit", generateMotivation);
