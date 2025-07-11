import { projects } from "./projects.js";

const projectNames = projects.map(project => project.name);
const list = document.getElementById("projectlist")

// console.log(projectNames);

for (const name of projectNames) {
    console.log(name);

    const entry = document.createElement("p");
    entry.textContent = name;
    list.appendChild(p);
}