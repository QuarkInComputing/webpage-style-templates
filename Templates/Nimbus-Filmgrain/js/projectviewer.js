export function setProject(projectname, projectdesc) {
    const image = document.getElementById("projectimage");
    const name = document.getElementById("projectname");
    const desc = document.getElementById("projectdescription");

    image.setAttribute("src", "./media/projects/" + projectname + ".png");
    name.innerText = projectname;
    desc.innerText = projectdesc;
}