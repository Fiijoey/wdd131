const projects = [
  {
    projectName: "Temple album project",
    dateis: "2024, November, 7",
    image: "images/image1.png",
    projectUrl:
    "https://fiijoey.github.io/wdd131/filtered-temples.html"
  },
  {
    projectName: "Places Information project",
    dateis: "2024, November, 21",
    image: "images/image5.png",
    projectUrl:
    "https://fiijoey.github.io/wdd131/place.html"
  },
  {
    projectName: "Portfolio website project",
    dateis: "2024, November, 7",
    image: "images/image6.png",
    projectUrl:
    "https://fiijoey.github.io/wdd131/project/home.html"
  }
 
];

const projectCardsContainer = document.getElementById("project-cards");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";

  projectCard.innerHTML = ` 
            <h2>${project.projectName}</h2>
            <p><strong>Date:</strong> ${project.dateis}</p>
            <a href="${project.projectUrl}"><img src="${project.image}" alt="${project.projectName}" loading="lazy"> </a>
            
    `;

  projectCardsContainer.appendChild(projectCard);
});
