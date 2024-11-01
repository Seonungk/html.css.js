function displayGreeting(name, info) {
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerText = `Hello, ${name}! 학번: ${info}`;
    alert(`Hello, ${name}! 학번: ${info}`);
}

const inputText = document.getElementById("helloName");
const additionalInput = document.getElementById("additionalInfo");
const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", () => {
    const name = inputText.value;
    const info = additionalInput.value;
    displayGreeting(name, info);
});
