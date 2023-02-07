const resumeButton = document.querySelector(".resumeButton");
const mainPage = document.querySelector(".mainPage");
const personalInfo = document.querySelector(".personalInfo");
let backButton = document.querySelector(".personal_info_button");
resumeButton.addEventListener("click", function () {
  mainPage.style.display = "none";
  personalInfo.style.display = "block";
});
backButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  mainPage.style.display = "block";
});
