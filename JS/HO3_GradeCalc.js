function getAve() {
  const projwgt = 0.25;
  const qzwgt = 0.15;
  const mtwgt = 0.25;
  const fnlwgt = 0.25;
  const actwgt = 0.10;

  let projgrd = (document.getElementById("project").value / 25) * projwgt;
  let qzgrd = (document.getElementById("quiz").value / 15) * qzwgt;
  let mtgrd = (document.getElementById("midterm").value / 25) * mtwgt;
  let fnlgrd = (document.getElementById("final").value / 25) * fnlwgt;
  let actgrd = (document.getElementById("activities").value / 10) * actwgt; 

  let average = projgrd + qzgrd + mtgrd + fnlgrd + actgrd;

  let results = document.getElementById("results");
  results.innerHTML = "";

  results.innerHTML += `Your grade is ${average * 100}\n`;

  if (average < 0.75) {
    results.innerHTML += "Sorry, you failed";
  } else {
    results.innerHTML += "Congratulations! You passed!";
  }
  
  results.hidden = false;
}