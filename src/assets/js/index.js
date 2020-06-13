const root = document.getElementById("root");
const container = document.createElement("div");
const header = document.createElement("h2");

header.textContent = "Hello from webpack vanilla template partial";
container.appendChild(header);
root.appendChild(container);
