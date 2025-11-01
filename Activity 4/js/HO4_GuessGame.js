function randomInteger(min, max) {
  return Math.trunc(min + (Math.random() * (max - min + 1)));
}

function unique(arr) {
  let temp = [];

  return arr.filter(item => temp.includes(item) ? false : temp.push(item));
}

function generateArray() {
  let dataArr = [];
  const arrSize = randomInteger(5, 20);

  for (let i = 0; i < arrSize; i++) {
    const data = randomInteger(-100, 100);
    dataArr.push(data);
  }

  let finalArr = unique(dataArr);

  console.log(finalArr);
  return finalArr;
}

let dataArr = generateArray();

function checkGuess() {
  const userInput = parseInt(document.getElementById("input").value);
  let resultWrapper = document.getElementById("results");

  if (isNaN(userInput)) {
    resultWrapper.textContent = "ONLY TAKES INTEGERS BETWEEN -100 AND 100 (INCLUSIVE)"
    return;
  }

  const inArray = dataArr.includes(userInput);
  const index = dataArr.indexOf(userInput);

  inArray ? resultWrapper.textContent = `Data located at: ${index}: ${userInput}` 
    : resultWrapper.textContent = "Data is not in array!";

  resultWrapper.hidden = false;
}