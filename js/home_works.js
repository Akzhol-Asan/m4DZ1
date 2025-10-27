//GMAIL

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

//HOMEWORK 1 (PART 2)

const childBlock = document.querySelector("#child_block");

let distance = 0;

const move = () => {
  if (distance < 450) {
    distance++;
    childBlock.style.left = distance + "px";
    requestAnimationFrame(move);
  }
};

move();
