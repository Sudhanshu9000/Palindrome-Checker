function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   console.log(cleanStr);
  const reversedStr = cleanStr.split('').reverse().join('');
//   console.log(reversedStr);
  return cleanStr === reversedStr;
}

function palindromeChecker() {
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");
  const inputValue = inputText.value.trim();

  if(!inputValue){
    result.textContent = "Please enter a non-empty string";
  }
  else if(inputValue.length < 2){
    result.textContent = "Please enter at least two letters";
  }
  else if (isPalindrome(inputValue)) {
    result.textContent = `"${inputValue}" is a Palindrome`;
  }else{
    result.textContent = `"${inputValue}" is not a Palindrome`;
  }
  result.classList.add('fadeIn');
  inputText.value = '';
}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromeChecker);
