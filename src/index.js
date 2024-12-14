function generatePoem(event) {
    event.preventDefault();

new Typewriter("#poem", {
    strings: "Shall I compare thee to a summer's day?",
    autoStart: true,
    delay: 50,
    cursor:"",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
