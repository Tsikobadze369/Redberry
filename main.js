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
const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#last_name");
const emailInput = document.querySelector("#email");
const mobileNumberInput = document.querySelector("#mobileNumber");
const resumeFullname = document.querySelector(".resumeFullname");
const resumeEmailBox = document.querySelector(".resumeEmailBox");
const resumeEmail = document.querySelector(".resumeEmail");
const emailIcon = document.querySelector(".emailIcon");
const phoneIcon = document.querySelector(".phoneIcon");
const resumeMobileBox = document.querySelector(".resumeMobileBox");
const degrees = document.querySelector("#degrees");
const resumeEducationDegree = document.querySelector(".resumeEducationDegree");
const resumePersonal = document.querySelector(".resumePersonal");
const resumeSection = document.querySelector(".resumeSection");
const aboutMe = document.querySelector("#aboutMe");
const resumeAbout = document.querySelector(".resumeAbout");
const resumeAboutText = document.querySelector(".resumeAboutText");
const resumeNumber = document.querySelector(".resumeNumber");
const postInput = document.querySelector("#post");
const resumeExperienceBox = document.querySelector(".resumeExperienceBox");
const resumeExperienceTitle = document.querySelector(".resumeExperienceTitle");
const resumeExperiencePost = document.querySelector(".resumeExperiencePost");
const employerInput = document.querySelector("#employer");
const resumeExpEmployer = document.querySelector(".resumeExpEmployer");
const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const resumeExperienceDate = document.querySelector(".resumeExperienceDate");
const resumeExperienceDescription = document.querySelector(
  ".resumeExperienceDescription"
);
const description = document.querySelector("#description");
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

function twoSymbolValidation(input) {
  if (input.value.length >= 2) {
    return true;
  } else {
    return false;
  }
}

function dataCheker(input) {
  if (input.value === "") {
    return false;
  } else {
    return true;
  }
}
// შეზღუდვები ენაზე,მეილზე,ნომერზე

// სახელის და გვარის ინფუთების ადგილის გამოტოვებები

function nameAndSurname(firstString, SecondString) {
  resumeFullname.innerHTML = `${firstString} ${SecondString}`;
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

// experience page validation

function aboutWork(stringFirst, stringSecond) {
  resumeExpEmployer.innerHTML = `${stringFirst}, ${stringSecond}`;
}

postInput.value = sessionStorage.getItem("post");
// resumeExperiencePost.textContent = postInput.value;

if (twoSymbolValidation(postInput)) {
  resumeExperienceTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  postInput.classList.add("is_valid");
  postInput.classList.remove("not_valid");
}
postInput.addEventListener("keyup", function () {
  sessionStorage.setItem("post", postInput.value);
  // resumeExperiencePost.textContent = postInput.value;
  aboutWork(postInput.value, employerInput.value);
  if (twoSymbolValidation(postInput)) {
    resumeExperienceTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
    postInput.classList.add("is_valid");
    postInput.classList.remove("not_valid");
  } else if (
    !twoSymbolValidation(postInput) &&
    postInput.value.length > 0 &&
    postInput.value.length < 2
  ) {
    postInput.classList.remove("is_valid");
    postInput.classList.add("not_valid");
  } else {
    resumeExperienceTitle.textContent = "";
    postInput.classList.remove("is_valid");
    postInput.classList.remove("not_valid");
  }
});

employerInput.value = sessionStorage.getItem("employer");
resumeExpEmployer.innerHTML = employerInput.value;
if (twoSymbolValidation(employerInput)) {
  employerInput.classList.add("is_valid");
  employerInput.classList.remove("not_valid");
}
employerInput.addEventListener("keyup", function () {
  aboutWork(postInput.value, employerInput.value);
  sessionStorage.setItem("employer", employerInput.value);
  // resumeExpEmployer.innerHTML = employerInput.value;
  // resumeExpEmployer.textContent = employerInput.value;
  if (twoSymbolValidation(employerInput)) {
    employerInput.classList.add("is_valid");
    employerInput.classList.remove("not_valid");
  } else if (
    !twoSymbolValidation(employerInput) &&
    employerInput.value.length > 0 &&
    employerInput.value.lengtn < 2
  ) {
    employerInput.classList.remove("is_valid");
    employerInput.classList.add("not_valid");
  } else {
    emailInput.classList.remove("is_valid");
    employerInput.classList.remove("not_valid");
  }
});
aboutWork(postInput.value, employerInput.value);

function bothDate(start, end) {
  resumeExperienceDate.textContent = `${start}-${end}`;
}

startDate.value = sessionStorage.getItem("startDate");
endDate.value = sessionStorage.getItem("endDate");

if (dataCheker(startDate)) {
  startDate.classList.add("is_valid");
  startDate.classList.remove("not_valid");
}
bothDate(startDate.value, endDate.value);
startDate.addEventListener("change", function () {
  bothDate(startDate.value, endDate.value);
  sessionStorage.setItem("startDate", startDate.value);
  if (dataCheker(startDate)) {
    startDate.classList.add("is_valid");
    startDate.classList.remove("not_valid");
  } else {
    startDate.classList.remove("is_valid");
    startDate.classList.remove("not_valid");
  }
});
if (dataCheker(startDate)) {
  endDate.classList.add("is_valid");
  endDate.classList.remove("not_valid");
}
endDate.addEventListener("change", function () {
  bothDate(startDate.value, endDate.value);
  sessionStorage.setItem("endDate", endDate.value);
  if (dataCheker(startDate)) {
    endDate.classList.add("is_valid");
    endDate.classList.remove("not_valid");
  } else {
    endDate.classList.remove("is_valid");
    endDate.classList.add("not_valid");
  }
});

description.value = sessionStorage.getItem("descript");
resumeExperienceDescription.textContent = description.value;
if (dataCheker(description)) {
  description.classList.add("is_valid");
  description.classList.remove(".not_valid");
}
description.addEventListener("keyup", function () {
  sessionStorage.setItem("descript", description.value);
  resumeExperienceDescription.textContent = description.value;
  if (dataCheker(description)) {
    description.classList.add("is_valid");
    description.classList.remove("not_valid");
  } else {
    description.classList.remove("is_valid");
    description.classList.add("not_valid");
  }
});
// experience page validation

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
  if (postInput.value.length === 0) {
    postInput.classList.add("not_valid");
  }
  if (employerInput.value.length === 0) {
    employerInput.classList.add("not_valid");
  }
  if (startDate.value.length === 0) {
    startDate.classList.add("not_valid");
  }
  if (endDate.value.length === 0) {
    endDate.value.classList.add("not_valid");
  }
  if (description.value.length === 0) {
    description.classList.add("not_valid");
  }
  if (
    twoSymbolValidation(postInput) &&
    twoSymbolValidation(employerInput) &&
    dataCheker(startDate) &&
    dataCheker(endDate) &&
    dataCheker(description)
  )
    experienceSection.style.display = "none";
  educationSection.style.display = "flex";
  // title.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  // pages.textContent = "3/3";
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
