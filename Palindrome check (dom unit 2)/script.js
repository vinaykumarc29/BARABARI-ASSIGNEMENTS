const inputText = document.querySelector("#inputText");
const submitBtm = document.querySelector("#submitBtn");
const resultBox = document.querySelector(".resultBox");
const result = document.querySelector("#result");
const resultEmoji = document.querySelector(".emoji");
const comparisionBox = document.querySelector(".comparisionBox");
const strDetailsBox = document.querySelector('.extraInfo');
const originalStr = document.querySelector('.originalStr');
const reversedStr = document.querySelector('.reversedStr');

let isPalindrome = null;
// the main problem was to check palindrome using recursive func , i accidentlty missed to read it at initial stage.
// i used for loop to check palindrome 

const reverseString = ()=>{
  let orgStr = inputText.value;
  let strLen = orgStr.length;
  let revStr =  ``;

  originalStr.textContent =``;
  reversedStr.textContent = ``;


  for(let i=strLen-1 ; i>=0;i--){
   revStr += orgStr[i];
  }

  originalStr.textContent =`Original String : ${orgStr}`;
  reversedStr.textContent = `Reversed String : ${revStr}`;

  strDetailsBox.classList.remove('hidden');
}




const checkPalindrome = () => {
  let str = inputText.value;
  let strLen = str.length;

  if (strLen == 0) {
    result.textContent = `Please Enter the Text`;
    resultBox.style.backgroundColor = "#f8d7da";
    resultEmoji.textContent = "⚠️";
    resultBox.classList.remove("hidden");

    return;
  }

  reverseString();

  // console.log(str, strLen);
  comparisionBox.innerHTML = "<h2>Step-by-Step Comparision:</h2>";

  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] != str[strLen - i - 1]) {
      isPalindrome = false;
      // console.log(
      //   `Comparing ${str[i]}(position-${i}) with ${str[strLen - i - 1]}     Not Matched !!`,
      // );

      let step = document.createElement("p");
      step.setAttribute("class", "steps");

      step.innerHTML = `<span class="stepCount">Step${i + 1}:</span>Comparing ${str[i]}(position ${i}) with ${str[strLen - i - 1]}(position ${strLen - i - 1}) <span class="stepResult failed">No Match!</span>`;

      comparisionBox.appendChild(step);

      break;
    } else {
      // console.log(
      //   `Comparing ${str[i]}(position-${i}) with ${str[strLen - i - 1]}(position-${strLen - i - 1})    Matched !!`,
      // );
      let step = document.createElement("p");
      step.setAttribute("class", "steps");

      step.innerHTML = `<span class="stepCount">Step${i + 1}:</span>Comparing ${str[i]}(position ${i}) with ${str[strLen - i - 1]}(position ${strLen - i - 1}) <span class="stepResult">Match!✓</span>`;

      comparisionBox.appendChild(step);
      isPalindrome = true;
    }
  }

  if (isPalindrome) {
    result.textContent = `${str} is a Palindrome `;
    resultBox.style.backgroundColor = "#e9f7fe";
    resultEmoji.textContent = "🎉";
  } else {
    result.textContent = `${str} is not a  Palindrome `;
    resultBox.style.backgroundColor = "#f8d7da";
    resultEmoji.textContent = "😕";
  }
  comparisionBox.classList.remove("hidden");
  resultBox.classList.remove("hidden");
};

submitBtm.addEventListener("click", () => {
  console.log("btn clicked");
  checkPalindrome();
});

inputText.addEventListener("keydown", (e) => {
  if (e.key == "Enter") checkPalindrome();
});
