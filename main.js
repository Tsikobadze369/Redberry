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
const threeSection = document.querySelector(".threeSection");
const experienceSection = document.querySelector(".experienceSection");
const educationSection = document.querySelector(".educationSection");
const educationButton = document.querySelector(".education_button");
const educationInput = document.querySelector("#education");
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
const eduDescription = document.querySelector("#eduDescription");
const resumeEducationTitle = document.querySelector(".resumeEducationTitle");
const resumeEducationPlace = document.querySelector(".resumeEducationPlace");
const degreesSelection = document.querySelector("#degrees");
const bottomLine = document.querySelector(".bottomLine");
const eduEndDateInput = document.querySelector("#eduEndDate");
const resumeEducationDescription = document.querySelector(
  ".resumeEducationDescription"
);
const resumeEducationDate = document.querySelector(".resumeEducationDate");
const resumePhoto = document.querySelector(".resumePhoto");
const resumeMainSection = document.querySelector(".resumeMainSection");
const popUpWindow = document.querySelector(".popUpWindow");
const popUpWindowButton = document.querySelector(".popUpWindowButton");
popUpWindowButton.addEventListener("click", function () {
  popUpWindow.style.display = "none";
});
const popUpText = document.querySelector(".popUpText");
// limits

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
    input.style.borderColor = "red";
    return false;
  }
}
function dataCheker(input) {
  if (input.value === "") {
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "";
    return true;
  }
}

// limits

function nameAndSurname(firstString, SecondString) {
  resumeFullname.innerHTML = `${firstString} ${SecondString}`;
}

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
// photo upload in personal page

photoUpload.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    resumePhoto.src = e.target.result;
    resumePhoto.style.display = "block";
    sessionStorage.setItem("resumePic", e.target.result);
  };
  reader.readAsDataURL(file);
});
window.onload = function () {
  if (sessionStorage.getItem("resumePic")) {
    resumePhoto.src = sessionStorage.getItem("resumePic");
    resumePhoto.style.display = "block";
  }
};
uploadButton.addEventListener("click", function (e) {
  e.preventDefault();
  photoUpload.click();
});
// photo upload in personal page

// textarea text

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
//textarea text

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

// experience page validation==>>

function aboutWork(stringFirst, stringSecond) {
  resumeExpEmployer.innerHTML = `${stringFirst}, ${stringSecond}`;
}
postInput.value = sessionStorage.getItem("post");

if (twoSymbolValidation(postInput)) {
  resumeExperienceTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  postInput.classList.add("is_valid");
  postInput.classList.remove("not_valid");
} else {
  postInput.classList.remove("is_valid");
  postInput.classList.add("not_valid");
}
postInput.addEventListener("keyup", function () {
  sessionStorage.setItem("post", postInput.value);
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
} else {
  employerInput.classList.remove("is_valid");
  employerInput.classList.add("not_valid");
}
employerInput.addEventListener("keyup", function () {
  aboutWork(postInput.value, employerInput.value);
  sessionStorage.setItem("employer", employerInput.value);
  if (twoSymbolValidation(employerInput)) {
    employerInput.classList.add("is_valid");
    employerInput.classList.remove("not_valid");
  } else if (
    !twoSymbolValidation(employerInput) &&
    employerInput.value.length > 0 &&
    employerInput.value.length < 2
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

// experience page validation ends

// education sectiooonnn!!!

function eduAndDegree(eduPlace, eduDegree) {
  resumeEducationPlace.textContent = `${eduPlace} ${eduDegree}`;
}

educationInput.value = sessionStorage.getItem("education");
resumeEducationPlace.textContent = educationInput.value;
if (twoSymbolValidation(educationInput)) {
  resumeEducationTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  educationInput.classList.add("is_valid");
  educationInput.classList.remove("not_valid");
}
educationInput.addEventListener("keyup", function () {
  eduAndDegree(educationInput.value, degreesSelection.value);
  sessionStorage.setItem("education", educationInput.value);
  if (twoSymbolValidation(educationInput)) {
    resumeEducationTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
    resumeEducationPlace.textContent = educationInput.value;
    educationInput.classList.add("is_valid");
    educationInput.classList.remove("not_valid");
  } else if (
    !twoSymbolValidation(educationInput) &&
    educationInput.value.length > 0 &&
    educationInput.value.length < 2
  ) {
    educationInput.classList.remove("is_valid");
    educationInput.classList.add("not_valid");
  } else {
    educationInput.classList.remove("is_valid");
    educationInput.classList.remove("not_valid");
  }
});

// Axios/Get information from API

axios
  .get("https://resume.redberryinternship.ge/api/degrees")
  .then((response) => {
    const listOfDegrees = response.data;
    console.log(response.data);
    listOfDegrees.map((element) => {
      let degreeList = document.createElement("option");
      degrees.appendChild(degreeList);
      degreeList.value = element.id;
      degreeList.innerHTML = element.title;
    });
  });

degrees.value = sessionStorage.getItem("edDegree");

function eduAndDegree(eduPlace, eduDegree) {
  resumeEducationPlace.textContent = `${eduPlace}, ${eduDegree}`;
}

degrees.addEventListener("change", function () {
  let selectedDegree = degrees.options[degrees.selectedIndex].textContent;
  eduAndDegree(educationInput.value, selectedDegree);
  sessionStorage.setItem("edDegree", degrees.value);
  if (dataCheker(degrees)) {
    degrees.classList.add("is_valid");
    degrees.classList.remove("not_valid");
  } else {
    degrees.classList.remove("is_valid");
    degrees.classList.add("not_valid");
  }
});
// Axios/Get information from API

// axios/Post information
const finishBtn = document.querySelector(".end_btn");
finishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    twoSymbolValidation(educationInput) &&
    dataCheker(degrees) &&
    dataCheker(eduEndDateInput) &&
    dataCheker(eduDescription)
  ) {
    submition();
    popUpWindow.style.display = "block";
    threeSection.style.display = "none";
    resumeMainSection.style.margin = "0 auto";
    resumeMainSection.style.display = "block";
    personalInfo.style.display = "none";
    experienceSection.style.display = "none";
    educationSection.style.display = "none";
    sessionStorage.clear();
  }
});

function submition() {}
function insertNodeAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertNodeBefore(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function submitForm() {
  const formModel = retrieveFormModel();
  const formData = formatFormData(formModel);

  axios
    .post("https://resume.redberryinternship.ge/api/cvs", formData)
    .then((response) => {
      console.log(response.data);
      popUpWindow.style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    });
}

function retrieveFormModel() {
  const workExperiences = Array.from(
    document.querySelectorAll(".app__personal--page .position-wrap")
  ).map((positionElement) => {
    return {
      position: positionElement.querySelector(".app__input--position").value,
      employer: positionElement.querySelector(".app__input--employer").value,
      startDate: positionElement.querySelector(".app__date--input1").value,
      endDate: positionElement.querySelector(".app__date--input2").value,
      description: positionElement.querySelector(".app__input--description")
        .value,
    };
  });

  const educationHistory = Array.from(
    document.querySelectorAll(".app__personal--page .education-wrap")
  ).map((educationElement) => {
    const degreeSelect = educationElement.querySelector(
      ".app__education--select"
    );

    return {
      institute: educationElement.querySelector(".app__education--school")
        .value,
      degreeId: degreeSelect.value,
      degree: degreeSelect.options[degreeSelect.selectedIndex].text,
      endDate: educationElement.querySelector(".app__education--date").value,
      description: educationElement.querySelector(
        ".app__input--edu--description"
      ).value,
    };
  });

  return {
    name: nameInput.value,
    surname: lastNameInput.value,
    email: emailInput.value,
    phoneNumber: mobileInput.value,
    workExperiences,
    educationHistory,
    image: picUploadInput.files[0],
    aboutMe: personalAbout.value,
  };
}

function formatFormData(data = {}, form = null, namespace = "") {
  const formData = new FormData();

  for (const propertyName in data) {
    if (!data.hasOwnProperty(propertyName) || !data[propertyName]) continue;

    let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;

    if (data[propertyName] instanceof Date) {
      formData.append(formKey, data[propertyName].toISOString());
    } else if (data[propertyName] instanceof File) {
      formKey = formKey.replace("[" + propertyName + "]", "." + propertyName);
    }
  }
}

// axios/Post information

eduEndDateInput.value = sessionStorage.getItem("eduEndDate");
resumeEducationDate.textContent = eduEndDateInput.value;

if (dataCheker(eduEndDateInput)) {
  eduEndDateInput.classList.add("is_valid");
  eduEndDateInput.classList.remove("not_valid");
}
eduEndDateInput.addEventListener("change", function () {
  sessionStorage.setItem("eduEndDate", eduEndDateInput.value);

  if (dataCheker(eduEndDateInput)) {
    eduEndDateInput.classList.add("is_valid");
    eduEndDateInput.classList.remove("not_valid");
  } else {
    eduEndDateInput.classList.remove("is_valid");
    eduEndDateInput.classList.add("not_valid");
  }
});

eduDescription.value = sessionStorage.getItem("educatDescript");
if (dataCheker(eduDescription)) {
  eduDescription.classList.add("is_valid");
  eduDescription.classList.remove("not_valid");
}
resumeEducationDescription.textContent = eduDescription.value;
eduDescription.addEventListener("keyup", function () {
  sessionStorage.setItem("educatDescript", eduDescription.value);
  resumeEducationDescription.textContent = eduDescription.value;
  if (dataCheker(eduDescription)) {
    eduDescription.classList.add("is_valid");
    eduDescription.classList.remove("not_valid");
  } else {
    eduDescription.classList.remove("is_valid");
    eduDescription.classList.add("not_valid");
  }
});

// education sectiooonnn ends!!!

//resume upload btn
resumeButton.addEventListener("click", function () {
  mainPage.style.display = "none";
  personalInfo.style.display = "flex";
  threeSectionParent.style.display = "flex";
  personalPage.style.display = "block";
  personalPageform.style.display = "flex";
});
//resume upload btn

// small cicles in head of the page,with small arrows within.
backButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  mainPage.style.display = "block";
});
// small cicles in head of the page,with small arrows within.

/// small cicles in head of the page,with small arrows within.
backButtonSecPage.addEventListener("click", function () {
  experienceSection.style.display = "none";
  mainPage.style.display = "block";
});
// small cicles in head of the page,with small arrows within.

// next page btn in pers page
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
// next page btn in pers page

// / back btn in experience page
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSection.style.display = "none";
  personalInfo.style.display = "block";
  title.textContent = "პირადი ინფო";
  pages.textContent = "1/3";
});
// / back btn in experience page

// next pg btn in exp page.
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
});
// next pg btn in exp page.

// small cicles in head of the page,with small arrows within.
educationButton.addEventListener("click", function () {
  educationSection.style.display = "none";
  mainPage.style.display = "block";
});
// small cicles in head of the page,with small arrows within.

// edu pg back btn
backToTheExpPageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  educationSection.style.display = "none";
  experienceSection.style.display = "block";
  title.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
  pages.textContent = "2/3";
});
// edu pg back btn
