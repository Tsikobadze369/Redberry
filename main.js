const resumeButton = document.querySelector(".resumeButton");
const mainPage = document.querySelector(".mainPage");
const personalInfo = document.querySelector(".personalInfo");
const personalPage = document.querySelector(".personalPage");
const backButton = document.querySelector(".personal_info_button");
const nextBtn = document.querySelector(".next_btn");
const backToTheExpPageBtn = document.querySelector(".back_to_exp_pg_btn");
const backButtonSecPage = document.querySelector(
  ".personal_info_button_secPage"
);
const nextPageButton = document.querySelector(".nextPageButton");
const threeSectionParent = document.querySelector(".threeSectionParent");
const experienceSection = document.querySelector(".experienceSection");
const educationSection = document.querySelector(".educationSection");
const educationButton = document.querySelector(".education_button");
const pages = document.querySelector(".pages");
const photoUpload = document.querySelector("#photoUpload");
const uploadButton = document.querySelector(".uploadButton");
const backBtn = document.querySelector(".back_btn");
const title = document.querySelector(".title");
const personalPageform = document.querySelector(".personalPageform");
let nameInput = document.querySelector("#name");
let lastNameInput = document.querySelector("#last_name");
let emailInput = document.querySelector("#email");
let mobileNumberInput = document.querySelector("#mobileNumber");
let resumeFullname = document.querySelector(".resumeFullname");
let resumeEmailBox = document.querySelector(".resumeEmailBox");
let resumeEmail = document.querySelector(".resumeEmail");
let emailIcon = document.querySelector(".emailIcon");
let phoneIcon = document.querySelector(".phoneIcon");
let resumeMobileBox = document.querySelector(".resumeMobileBox");
let degrees = document.querySelector("#degrees");
let resumeEducationDegree = document.querySelector(".resumeEducationDegree");
let resumeContainer = document.querySelector("#resumeContainer");
let resumePersonal = document.querySelector(".resumePersonal");
let resumeSection = document.querySelector(".resumeSection");
let aboutMe = document.querySelector("#aboutMe");
let resumeAbout = document.querySelector(".resumeAbout");
const resumeAboutText = document.querySelector(".resumeAboutText");
const resumeNumber = document.querySelector(".resumeNumber");

// შეზღუდვები ენაზე,მეილზე,ნომერზე

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
// შეზღუდვები ენაზე,მეილზე,ნომერზე

// სახელის და გვარის ინფუთების ადგილის გამოტოვებები

function nameAndSurname(firstString, SecondString) {
  resumeFullname.innerHTML = firstString + " " + SecondString;
}
// სახელის და გვარის ინფუთების ადგილის გამოტოვებები

// input validations in personalInfo page

nameInput.value = sessionStorage.getItem("nInput");
if (georgianLangValidation(nameInput.value) && nameInput.value.length >= 2) {
  nameInput.classList.add("is_valid");
  nameInput.classList.remove("not_valid");
}
nameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("nInput", nameInput.value);
  nameAndSurname(nameInput.value, lastNameInput.value);
  resumeFullname.innerHTML = nameInput.value;

  if (georgianLangValidation(nameInput.value) && nameInput.value.length >= 2) {
    nameInput.classList.add("is_valid");
    nameInput.classList.remove("not_valid");
  } else if (
    !georgianLangValidation(nameInput.value) &&
    nameInput.value.length > 0
  ) {
    nameInput.classList.add("not_valid");
    nameInput.classList.remove("is_valid");
  } else if (nameInput.value.trim() === "") {
    nameInput.classList.remove("is_valid");
    nameInput.classList.remove("not_valid");
  }
});

lastNameInput.value = sessionStorage.getItem("lInput");
if (
  georgianLangValidation(lastNameInput.value) &&
  lastNameInput.value.length >= 2
) {
  lastNameInput.classList.add("is_valid");
  lastNameInput.classList.remove("not_valid");
}

lastNameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("lInput", lastNameInput.value);
  nameAndSurname(nameInput.value, lastNameInput.value);
  if (
    georgianLangValidation(lastNameInput.value) &&
    lastNameInput.value.length >= 2
  ) {
    lastNameInput.classList.add("is_valid");
    lastNameInput.classList.remove("not_valid");
  } else if (
    !georgianLangValidation(lastNameInput.value) &&
    lastNameInput.value.length > 0
  ) {
    lastNameInput.classList.add("not_valid");
    lastNameInput.classList.remove("is_valid");
  } else if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.remove("is_valid");
    lastNameInput.classList.remove("not_valid");
  }
});
nameAndSurname(nameInput.value, lastNameInput.value);
// personal page-ზე როა ფოტოს ატვირთვის ღილაკი ეს მაგის კოდია
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
// personal page-ზე როა ფოტოს ატვირთვის ღილაკი ეს მაგის კოდია

// ტექსტარეაში ჩაწერილი ტექსტიიი

aboutMe.value = sessionStorage.getItem("about");
resumeAboutText.textContent = aboutMe.value;
if (aboutMe.value.length > 0) {
  resumeAbout.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
}

aboutMe.addEventListener("keyup", function () {
  sessionStorage.setItem("about", aboutMe.value);
  resumeAboutText.textContent = aboutMe.value;

  if (aboutMe.value.trim() === "") {
    resumeAbout.textContent = "";
  } else {
    resumeAbout.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
  }
});
// ტექსტარეაში ჩაწერილი ტექსტიიი

emailInput.value = sessionStorage.getItem("email");
if (emailInput.value.length > 0) {
  emailIcon.style.display = "block";
}

resumeEmail.textContent = sessionStorage.getItem("email");
if (emailValidation(emailInput.valu)) {
  emailInput.classList.add("is_valid");
  emailInput.classList.remove("not_valid");
}

emailInput.addEventListener("keyup", function () {
  sessionStorage.setItem("email", emailInput.value);
  resumeEmail.textContent = sessionStorage.getItem("email");
  emailIcon.style.display = "block";
  if (emailInput.value.trim() === "") {
    emailIcon.style.display = "none";
    emailInput.classList.remove("is_valid");
    emailInput.classList.remove("not_valid");
  } else if (emailValidation(emailInput.value)) {
    emailInput.classList.add("is_valid");
    emailInput.classList.remove("not_valid");
  } else {
    emailInput.classList.remove("is_valid");
    emailInput.classList.add("not_valid");
  }
});

mobileNumberInput.value = sessionStorage.getItem("phone");
if (mobileNumberInput.value.length > 0) {
  phoneIcon.style.display = "block";
}

resumeNumber.textContent = sessionStorage.getItem("phone");
if (georgianNumberFormat(mobileNumberInput.value)) {
  mobileNumberInput.classList.add("is_valid");
  mobileNumberInput.classList.remove("not_valid");
}

mobileNumberInput.addEventListener("keyup", function () {
  sessionStorage.setItem("phone", mobileNumberInput.value);
  resumeNumber.textContent = sessionStorage.getItem("phone");
  resumeMobileBox.textContent = mobileNumberInput.value;
  phoneIcon.style.display = "block";
  if (georgianNumberFormat(mobileNumberInput.value)) {
    mobileNumberInput.classList.add("is_valid");
    mobileNumberInput.classList.remove("not_valid");
  } else if (
    !georgianNumberFormat(mobileNumberInput.value) &&
    mobileNumberInput.value.length > 0
  ) {
    mobileNumberInput.classList.remove("is_valid");
    mobileNumberInput.classList.add("not_valid");
  } else if (mobileNumberInput.value.trim() === "") {
    phoneIcon.style.display = "none";
    mobileNumberInput.classList.remove("is_valid");
    mobileNumberInput.classList.remove("not_valid");
  }
});

// input validations in personalInfo page

// მეინფეიჯის resume button არის ეს
resumeButton.addEventListener("click", function () {
  mainPage.style.display = "none";
  personalInfo.style.display = "flex";
  threeSectionParent.style.display = "flex";
  personalPage.style.display = "block";
  personalPageform.style.display = "flex";
});

// მეინფეიჯის resume button არის ეს

// ეს არის თავში რომ წრეში პატარა ვექტორებია,ეგ ღილაკი პერსონალფეიჯის გვერდზე
backButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  mainPage.style.display = "block";
});
// ეს არის თავში რომ წრეში პატარა ეროუა,ეგ ღილაკი პერსონალფეიჯის გვერდზე

// ეს არის გამოცდილების გვერდზე რომ პატარა ეროუა, მაგის ღილაკი
backButtonSecPage.addEventListener("click", function () {
  experienceSection.style.display = "none";
  mainPage.style.display = "block";
});
// ეს არის გამოცდილების გვერდზე რომ პატარა ეროუა, მაგის ღილაკი

// პერსონალურ გვერდზე როა, შემდეგ გვერდზე გადასასვლელი ბათონი არის ეს.
nextPageButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (nameInput.value.length === 0) {
    nameInput.classList.add("not_valid");
  }
  if (lastNameInput.value.length === 0) {
    lastNameInput.classList.add("not_valid");
  }
  if (emailInput.value.length === 0) {
    emailInput.classList.add("not_valid");
  }
  if (mobileNumberInput.value.length === 0) {
    mobileNumberInput.classList.add("not_valid");
  }
  if (
    georgianLangValidation(nameInput.value, lastNameInput.value) &&
    emailValidation(emailInput.value) &&
    georgianNumberFormat(mobileNumberInput.value)
  ) {
    personalInfo.style.display = "none";
    pages.textContent = "2/3";
    experienceSection.style.display = "block";
    title.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  }
});
// პერსონალური გვერდის შემდეგ გვერდზე გადასასვლელი ბათონი არის ეს

// გამოცდილების გვერდზე უკან გადასასვლელი ღილაკია ეს
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  personalInfo.style.display = "block";
  title.textContent = "პირადი ინფო";
  pages.textContent = "1/3";
});
// გამოცდილების გვერდზეა ეს, უკან გადასასვლელი ღილაკიაააა

// გამოცდილების გვერდზზეა ესეც, შემდეგ გვერდზე გადასასვლელი ღილაკია
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  educationSection.style.display = "flex";
  title.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  pages.textContent = "3/3";
});
// გამოცდილების გვერდზზეა ესეც, შემდეგ გვერდზე გადასასვლელი ღილაკია

// ესეც პატარა ეროუიანი წრეა, განათლების გვერდზე
educationButton.addEventListener("click", function () {
  educationSection.style.display = "none";
  mainPage.style.display = "block";
});
// ესეც პატარა ეროუიანი წრეა, განათლების გვერდზე

// განათლების გვერდზე არის ეს,უკან გადასასვლელი ღილაკია,გამოცდილების გვერდზე გადადის უკან
backToTheExpPageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  educationSection.style.display = "none";
  experienceSection.style.display = "block";
  title.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  pages.textContent = "2/3";
});
// განათლების გვერდზე არის ეს,უკან გადასასვლელი ღილაკია,გამოცდილების გვერდზე გადადის უკან

// Axios/Get information from API
// axios
//   .get("https://resume.redberryinternship.ge/api/degrees")
//   .then((response) => {
//     const degreeData = response.data;
//     console.log(response.data);
//     degreeData.forEach((element) => {
//       let degreeOption = document.createElement("option");
//       degrees.appendChild(degreeOption);
//       degreeOption.value = element.title;
//       degreeOption.innerHTML = element.title;
//     });
//   });
