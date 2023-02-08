const resumeButton = document.querySelector(".resumeButton");
const mainPage = document.querySelector(".mainPage");
const personalInfo = document.querySelector(".personalInfo");
const backButton = document.querySelector(".personal_info_button");
const backButtonSecPage = document.querySelector(
  ".personal_info_button_secPage"
);
const nextPageButton = document.querySelector(".nextPageButton");
const experienceSection = document.querySelector(".experienceSection");
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
  let langRegax = /^[ა-ჰ]+$/;
  return langRegax.test(input);
}
function emailValidation(email) {
  let emailRegax = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegax.test(email);
}
function georgianNumberFormat(mobile) {
  let mobileRegax = /^(\+995)\d{9}$/;
  return mobileRegax.test(mobile);
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
  personalInfo.style.display = "block";
  title.textContent = "პირადი ინფო";
  pages.textContent = "1/3";
});

nextPageButton.addEventListener("click", function (e) {
  e.preventDefault();
  personalInfo.style.display = "none";
  pages.textContent = "2/3";
  experienceSection.style.display = "block";
  title.textContent = "გამოცდილება";
});
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  personalInfo.style.display = "block";
  title.textContent = "პირადი ინფო";
  pages.textContent = "1/3";
});
