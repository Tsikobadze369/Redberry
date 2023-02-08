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
let resumeFullname = document.querySelector(".resumeFullname");
let resumeEmailBox = document.querySelector(".resumeEmailBox");
let emailSvg = document.querySelector(".emailSvg");
let resumeMobileBox = document.querySelector(".resumeMobileBox");
let mobileSvg = document.querySelector(".mobileSvg");
// input validations in personalInfo page

function georgianLangValidation(input) {
  let regExp = /^[ა-ჰ]+$/;
  return regExp.test(input);
}

function emailValidation(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegex.test(email);
}
function georgianNumberFormat(mobile) {
  let mobileRegex = /^(\+995)\d{9}$/;
  return mobileRegex.test(mobile);
}
function dateVal(input) {
  if (input.value === "") {
    return false;
  } else return true;
}
// function minTwoSymbol(input) {
//   if (input.value.length >= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function imageUploadValidation(img) {
//   if (img.src === "") {
//     return false;
//   } else return true;
// }

function nameAndSurname(firstString, SecondString) {
  resumeFullname.innerHTML = firstString + " " + SecondString;
}

nameInput.addEventListener("keyup", function () {
  nameAndSurname(nameInput.value, lastNameInput.value);
  resumeFullname.innerHTML = nameInput.value;
  if (georgianLangValidation(nameInput.value) && nameInput.value.length >= 2) {
    nameInput.classList.add("is_valid_green");
    nameInput.classList.remove("not_valid_red");
  } else if (
    !georgianLangValidation(nameInput.value) &&
    nameInput.value.length > 0
  ) {
    nameInput.classList.add("not_valid_red");
    nameInput.classList.remove("is_valid_green");
  } else if (nameInput.value.trim() === "") {
    nameInput.classList.remove("is_valid_green");
    nameInput.classList.remove("not_valid_red");
  }
  console.log(nameInput);
});
lastNameInput.addEventListener("keyup", function () {
  nameAndSurname(nameInput.value, lastNameInput.value);
  if (
    georgianLangValidation(lastNameInput.value) &&
    lastNameInput.value.length >= 2
  ) {
    lastNameInput.classList.add("is_valid_green");
    lastNameInput.classList.remove("not_valid_red");
  } else if (
    !georgianLangValidation(lastNameInput.value) &&
    lastNameInput.value.length > 0
  ) {
    lastNameInput.classList.add("not_valid_red");
    lastNameInput.classList.remove("is_valid_green");
  } else if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.remove("is_valid_green");
    lastNameInput.classList.remove("not_valid_red");
  }
});

emailInput.addEventListener("keyup", function () {
  resumeEmailBox.textContent = emailInput.value;
  emailSvg.style.display = "block";
  console.log(emailInput);
});
mobileNumberInput.addEventListener("keyup", function () {
  resumeMobileBox.textContent = mobileNumberInput.value;
  mobileSvg.style.display = "block";
  console.log(mobileNumberInput);
});
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
