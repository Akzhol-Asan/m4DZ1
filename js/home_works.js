const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-z]+\d*[a-z]*@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "NOT OK";
    gmailResult.style.color = "red";
  }
};
