if (document.getElementById("my-work-link")) {
  document.getElementById("my-work-link").addEventListener("click", () => {
    document
      .getElementById("my-work-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

var imageContainer = document.getElementById(
  "portfolio-header-image-container"
);
var image = document.querySelector(".portfolio-header-image");

imageContainer.addEventListener("click", function () {
  image.classList.toggle("flipped");
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var percentage = (scrollPosition / height) * 100;
  var hue = Math.floor(percentage * 2.55); // Convert the percentage to hue value (0-255)

  document.body.style.backgroundColor = "hsl(" + hue + ", 70%, 80%)";
});
