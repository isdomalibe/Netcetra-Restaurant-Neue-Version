// script.js
document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("aboutLink");
    var aboutWisdomLink = document.getElementById("aboutWisdomLink");
    var contactLink = document.getElementById("contactLink");
    var aboutWisdomSection = document.getElementById("aboutwisdom");
    var contactSection = document.getElementById("contact");

    aboutLink.addEventListener("click", function() {
        aboutWisdomSection.style.display = "none";
        contactSection.style.display = "none";
        aboutLink.classList.add("active");
        aboutWisdomLink.classList.remove("active");
        contactLink.classList.remove("active");
    });

    aboutWisdomLink.addEventListener("click", function() {
        aboutWisdomSection.style.display = "block";
        contactSection.style.display = "none";
        aboutLink.classList.remove("active");
        aboutWisdomLink.classList.add("active");
        contactLink.classList.remove("active");
    });

    contactLink.addEventListener("click", function() {
        aboutWisdomSection.style.display = "none";
        contactSection.style.display = "block";
        aboutLink.classList.remove("active");
        aboutWisdomLink.classList.remove("active");
        contactLink.classList.add("active");
    });
});
