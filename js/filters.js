const filterKnoppen = document.querySelectorAll("#filters>#filter>div");
const filters = document.querySelector("#filters>#filter");
const keuzes = document.querySelectorAll("#filters>#keuze>div");
const keuzeBalk = document.querySelectorAll("#filters>#keuze");


for (let i = 0; i < filterKnoppen.length; i++) {
  const knop = filterKnoppen[i];
  knop.addEventListener("click", () => {
    if (knop.classList.contains("actief")) {
      // If clicked knop is already active → remove it
      knop.classList.remove("actief");
      keuzes[i].classList.remove("actief");
      filters.classList.remove("actief"); //voor de border-top
    } else {
      // Otherwise → clear others and set this one active
      filterKnoppen.forEach(f => f.classList.remove("actief"));
      keuzes.forEach(k => k.classList.remove("actief"));
      knop.classList.add("actief");
      keuzes[i].classList.add("actief");
      filters.classList.add("actief"); //voor de border-top
    }
  });
}