const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19-21",
    area: 45800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg",
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogota, Colombia",
    dedicated: "1999, April, 24-26",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg",
  },
];

const templeCardsContainer = document.getElementById("temple-cards");
temples.forEach((temple) => {
  const templeCard = document.createElement("div");
  templeCard.className = "temple-card";

  templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

  templeCardsContainer.appendChild(templeCard);
});

const selected = document.getElementById("selected");
const home = document.getElementById("home");
const old = document.getElementById("old");
const newbtn = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small");

function filterTemples(filter) {
  let filteredTemples = temples;
  if (filter === "old") {
    filteredTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );
  } else if (filter === "new") {
    filteredTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );
  } else if (filter === "large") {
    filteredTemples = temples.filter((temple) => temple.area > 90000);
  } else if (filter === "small") {
    filteredTemples = temples.filter((temple) => temple.area < 10000);
  }
  return filteredTemples;
}

home.addEventListener("click", () => {
  selected.innerText = home.innerText;

  const templeCardsContainer = document.getElementById("temple-cards");
  temples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

    templeCardsContainer.appendChild(templeCard);
  });
});

old.addEventListener("click", () => {
  selected.innerText = old.innerText;
  document.getElementById("temple-cards").innerHTML = "";

  const templeCardsContainer = document.getElementById("temple-cards");
  filterTemples("old").forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

    templeCardsContainer.appendChild(templeCard);
  });
});

newbtn.addEventListener("click", () => {
  selected.innerText = newbtn.innerText;

  document.getElementById("temple-cards").innerHTML = "";

  const templeCardsContainer = document.getElementById("temple-cards");
  filterTemples("new").forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

    templeCardsContainer.appendChild(templeCard);
  });
});

large.addEventListener("click", () => {
  selected.innerText = large.innerText;

  document.getElementById("temple-cards").innerHTML = "";

  const templeCardsContainer = document.getElementById("temple-cards");
  filterTemples("large").forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

    templeCardsContainer.appendChild(templeCard);
  });
});

small.addEventListener("click", () => {
  selected.innerText = small.innerText;

  document.getElementById("temple-cards").innerHTML = "";

  const templeCardsContainer = document.getElementById("temple-cards");
  filterTemples("small").forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = ` 
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
  `;

    templeCardsContainer.appendChild(templeCard);
  });
});

const date = new Date();
const form = new Intl.DateTimeFormat("en-us", {
  dateStyle: "full",
  timeStyle: "short",
});
var year = date.getFullYear();
var modifiedt = form.format(new Date(document.lastModified));

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = modifiedt;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
