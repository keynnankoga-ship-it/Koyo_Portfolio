/* INTRO SCREEN */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.style.display = "none";
    }, 2200);
  }
});


/* DARK MODE */
const toggle = document.querySelector(".toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}


/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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

if (buttons.length > 0) {
  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      items.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

    });
  });
}


/* SEARCH */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}


/* PAGE FADE TRANSITION */
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      if (target && target.includes(".html")) {
        e.preventDefault();
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = target;
        }, 300);
      }
    });
  }
});

window.addEventListener("pageshow", () => {
  document.body.style.opacity = "1";
});
