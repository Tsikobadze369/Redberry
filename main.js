let resumeButton = document.querySelector(".resumeButton");
console.log(resumeButton);
resumeButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "GeneralInformation.html";
});
