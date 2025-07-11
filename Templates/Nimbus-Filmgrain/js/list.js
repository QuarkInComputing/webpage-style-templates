import { projects } from "./projects.js";

const projectNames = projects.map(project => project.name);
const list = document.getElementById("projectlist")

// console.log(projectNames);

for (const name of projectNames) {
    console.log(name);

    const p = document.createElement("p");
    p.textContent = name;
    list.appendChild(p);
}