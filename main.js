const resumeButton = document.querySelector(".resumeButton");
const mainPage = document.querySelector(".mainPage");
const personalInfo = document.querySelector(".personalInfo");
const backButton = document.querySelector(".personal_info_button");
const nextBtn = document.querySelector(".next_btn");
const backToTheExpPageBtn = document.querySelector(".back_to_exp_pg_btn");
const backButtonSecPage = document.querySelector(
  ".personal_info_button_secPage"
);
const nextPageButton = document.querySelector(".nextPageButton");
const experienceSection = document.querySelector(".experienceSection");
const educationSection = document.querySelector(".educationSection");
const educationButton = document.querySelector(".education_button");
const pages = document.querySelector(".pages");
const photoUpload = document.querySelector("#photoUpload");
const uploadButton = document.querySelector(".uploadButton");
const backBtn = document.querySelector(".back_btn");
const title = document.querySelector(".title");
const form = document.querySelector(".form");
let nameInput = document.querySelector("#name");
let lastNameInput = document.querySelector("#last_name");
let emailInput = document.querySelector("#email");
let mobileNumberInput = document.querySelector("#mobileNumber");

// input validations in personalInfo page

function georgianLangValidation(input) {
  let langRegex = /^[ა-ჰ]+$/;
  return langRegex.test(input);
}
function emailValidation(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegex.test(email);
}
function georgianNumberFormat(mobile) {
  let mobileRegex = /^(\+995)\d{9}$/;
  return mobileRegex.test(mobile);
}

function imageUploadValidation(img) {
  if (img.src === "") {
    return false;
  } else return true;
}
// input validations in personalInfo page

photoUpload.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    resumePic.src = e.target.result;
    resumePic.style.display = "block";
  };
  reader.readAsDataURL(new Blob([file]));
});

uploadButton.addEventListener("click", function (e) {
  e.preventDefault();
  photoUpload.click();
});
resumeButton.addEventListener("click", function () {
  mainPage.style.display = "none";
  personalInfo.style.display = "block";
});
backButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  mainPage.style.display = "block";
});
backButtonSecPage.addEventListener("click", function () {
  experienceSection.style.display = "none";
  mainPage.style.display = "block";
});

nextPageButton.addEventListener("click", function (e) {
  e.preventDefault();
  personalInfo.style.display = "none";
  pages.textContent = "2/3";
  experienceSection.style.display = "block";
  title.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
});
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  personalInfo.style.display = "block";
  title.textContent = "პირადი ინფო";
  pages.textContent = "1/3";
});
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  educationSection.style.display = "block";
  title.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  pages.textContent = "3/3";
});
educationButton.addEventListener("click", function () {
  educationSection.style.display = "none";
  mainPage.style.display = "block";
});
backToTheExpPageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  educationSection.style.display = "none";
  experienceSection.style.display = "block";
  title.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  pages.textContent = "2/3";
});
