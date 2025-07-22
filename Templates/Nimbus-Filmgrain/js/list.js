import { projects } from "./projects.js";

const projectNames = projects.map(project => project.name);
const list = document.getElementById("projectlist")

// console.log(projectNames);

for (const name of projectNames) {
    console.log(name);

    const entry = document.createElement("a");
    entry.setAttribute("href", "#");
    entry.setAttribute("class", "hover-underline-animation");
    entry.setAttribute("id", "projectlink");
    entry.setAttribute("onclick", "") //Put method here
    
    entry.textContent = name;
    list.appendChild(entry);
}

for(var i = 0; i < 2; i++){
    const pagebreak = document.createElement("BR"); 
    document.getElementById("projectlink").insertBefore(pagebreak, null); 
}
