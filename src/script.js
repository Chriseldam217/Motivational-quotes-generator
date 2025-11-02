function displayMotivation(response) {
  new Typewriter("#motivation", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateMotivation(event) {
  event.preventDefault();

  let userGuideInput = document.querySelector("#user-guidance");
  let apiKey = "d48c015a82tfo433bbe90a92b0d3714a";
  let context =
    "You are a powerful motivation expert and love to write short motivations.Your mission is to generate a 4 line motivation in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a motivation about ${userGuideInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let motivationElement = document.querySelector("#motivation");
  motivationElement.classList.remove("hidden");
  motivationElement.innerHTML = `<div class="generating">⏳ Generating a motivation about ${userGuideInput.value}</div>`;
  axios
    .get(apiURL)
    .then(displayMotivation)
    .catch((err) => {
      motivationElement.innerHTML = `<div class="error">❌ Error generating motivation. Please try again.</div>`;
      console.error(err);
    });
}
