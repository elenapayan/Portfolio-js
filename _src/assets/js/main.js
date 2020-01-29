'use strict';

const grid = new Muuri('.grid', {
  layout: {
    rounding: false
  }
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("image-loaded");

  const links = document.querySelectorAll("#categories a");
  links.forEach(link => {
    link.addEventListener('click', ev => {
      ev.preventDefault();
      const active = document.querySelectorAll(".active");
      active[0].classList.remove("active");
      ev.target.classList.add("active");

      const category = ev.target.innerHTML.toLowerCase();
      category === "all" ? grid.filter("[data-categories]") : grid.filter(`[data-categories="${category}"]`);
    })
  });

})
