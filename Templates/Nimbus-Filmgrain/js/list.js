import { projects } from "./projects.js";
import { setProject } from "./projectviewer.js";

const list = document.getElementById("projectlist");

for (const project of projects) {
    const { name, description } = project;

    const entry = document.createElement("a");
    entry.setAttribute("href", "#");
    entry.setAttribute("class", "hover-underline-animation projectlink");

    // Pass both name and description to setProject using a closure
    entry.addEventListener("click", () => setProject(name, description));

    entry.textContent = name;
    list.appendChild(entry);

    // Two line breaks after each link
    list.appendChild(document.createElement("br"));
    list.appendChild(document.createElement("br"));
}