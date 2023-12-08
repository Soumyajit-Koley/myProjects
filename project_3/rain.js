const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const suggestion = document.querySelector("#suggestion");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid input";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid input";
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    result.innerHTML = bmi;
    console.log(bmi);

    if (bmi < 18.6){
        suggestion.innerHTML = "Under Weight"
    }
     else if (bmi > 24.9){
        suggestion.innerHTML = "Over Weight"
    }
     else{
        suggestion.innerHTML = "Normal"
    }
    
  }
});
