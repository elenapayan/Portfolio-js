"use strict";const grid=new Muuri(".grid",{layout:{rounding:!1}});window.addEventListener("load",()=>{grid.refreshItems().layout(),document.getElementById("grid").classList.add("image-loaded"),document.querySelectorAll("#categories a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".active")[0].classList.remove("active"),e.target.classList.add("active");const t=e.target.innerHTML.toLowerCase();"all"===t?grid.filter("[data-categories]"):grid.filter(`[data-categories="${t}"]`)})}),document.querySelector("#header-input").addEventListener("input",e=>{const t=e.target.value;grid.filter(e=>e.getElement().dataset.label.includes(t))});const e=document.getElementById("overlay");document.querySelectorAll(".grid-items-images").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("src"),a=t.parentNode.parentNode.dataset.description;e.classList.add("active"),document.querySelector(".overlay-image").src=r,document.querySelector(".overlay-description").innerHTML=a})}),document.querySelector("#btn-close").addEventListener("click",()=>{e.classList.remove("active")}),e.addEventListener("click",t=>{"overlay"===t.target.id&&e.classList.remove("active")})});