const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const succesButton = document.getElementById("btn-success");
const resetButton = document.getElementById("btn-reset");
const result = document.getElementById("dynamic_bmi");
const message = document.getElementById("bmi_text");
let height, weight, bmi;
function calculateBMI() {
  height = Number(heightInput.value);
  weight = Number(weightInput.value);
  bmi = weight / (height * 0.0254 * height * 0.0254);
  result.textContent = bmi.toFixed(2); //printing
  let msg = showMessage(bmi);
  message.textContent = msg; //printing
}

function showMessage(bmiValue) {
  if (bmiValue < 18.5)
    return " Classification : Underweight Health Risk : Minimal";
    if (bmiValue >24.9 && 29.9> bmiValue)
    return " Classification : Overweight Health Risk : Increased";
    if (bmiValue > 18.5 && bmiValue <24.9)
    return " Classification : Normal weight Health Risk : Minimal";
    if (bmiValue>30 && bmiValue < 34.9)
    return " Classification : Obese Health Risk : High";
    if (bmiValue>35 && bmiValue < 39.9)
    return " Classification : Severely Obese Health Risk : Very High";
    if (bmiValue>40 )
    return " Classification : Morbidly Obese Health Risk :  Extremely High";

}
function reset() {
  heightInput.value = "";
  weightInput.value = "";
  result.textContent = "___________";
  message.textContent = "";
}
const idealWeight =Number(weightInput.value);
function eventHandler() {
  if (heightInput.value && weightInput.value && idealWeight< 300) {
    calculateBMI();
  } else {
    alert("Enter Valid Data");
    reset();
  }
}
succesButton.addEventListener("click", eventHandler);
resetButton.addEventListener("click", reset);
