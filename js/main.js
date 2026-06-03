document.addEventListener("DOMContentLoaded", function () {
  // Active nav link based on current page filename
  var page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar__links a").forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === page);
  });

  // Burger menu toggle
  var burger = document.getElementById("burgerBtn");
  var navMenu = document.querySelector(".navbar__links");

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      navMenu.classList.toggle("open");
      document.body.style.overflow = navMenu.classList.contains("open")
        ? "hidden"
        : "";
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("open");
        navMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Fade-in on scroll for service cards
  var fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
