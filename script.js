/* LOADING SCREEN */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 600);
  }
});

/* DARK MODE */
const toggle = document.querySelector(".toggle");
if(toggle){
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
}

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".work-item").forEach(el => {
  observer.observe(el);
});

/* FILTER */
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".work-item");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    items.forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

/* SEARCH */
const searchInput = document.getElementById("searchInput");
if(searchInput){
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  items.forEach(item => {
    item.style.display =
      item.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
  });
});
}
