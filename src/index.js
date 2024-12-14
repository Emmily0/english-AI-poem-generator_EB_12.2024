function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 50,
        cursor:"",
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions");
let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
let prompt = `User instructions are to generate an English poem about ${instructionsInput.value}`;
let context = "You are a romantic Poem expert and love to write short poems inspired by Shakespeare style and wording. Your mission is to generate a 6 lines poem in basic HTML, do not display HTML or /''/ or /``/ at the beginning or ending of the poem and seperate each line with a <br />. Please make sure to follow the User instructions, thank you. Do not include a title in the poem. Sign the end of the poem in with SheCodes AI inside a <strong> element.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
