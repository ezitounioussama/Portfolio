var toTopButton = document.getElementById("to-top-button");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
};

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    // Remove the active class from all navigation elements
    navItems.forEach((navItem) => navItem.classList.remove("md:text-blue-700"));
    navItems.forEach((navItem) => navItem.classList.remove("bg-blue-700"));
    // Add the active class to the clicked element
    event.currentTarget.classList.add("md:text-blue-700");
    event.currentTarget.classList.add("bg-blue-700");
  });
});

// effects
ScrollReveal().reveal(".headline");
