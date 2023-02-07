const resumeButton = document.querySelector(".resumeButton");
const mainPage = document.querySelector(".mainPage");
const personalInfo = document.querySelector(".personalInfo");
const backButton = document.querySelector(".personal_info_button");
const nextPageButton = document.querySelector(".nextPageButton");
const experienceSection = document.querySelector(".experienceSection");
const pages = document.querySelector(".pages");
resumeButton.addEventListener("click", function () {
  mainPage.style.display = "none";
  personalInfo.style.display = "block";
});
backButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  mainPage.style.display = "block";
});
nextPageButton.addEventListener("click", function (e) {
  e.preventDefault();
  personalInfo.style.display = "none";
  pages.textContent = "2/3";
  experienceSection.style.display = "block";
});
