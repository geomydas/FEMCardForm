const inputCardholderName = document.querySelector("[data-js='cardholder-name']");
const inputCardNumber = document.querySelector("[data-js='card-number']");
const inputMonth = document.querySelector("[data-js='month']");
const inputYear = document.querySelector("[data-js='year']");
const inputCvc = document.querySelector("[data-js='cvc']");
const inputs = [inputCardholderName, inputCardNumber, inputMonth, inputYear, inputCvc];
const decorCardholderName = document.querySelector("[data-js='decor-cardholder-name']");
const decorCardNumber = document.querySelector("[data-js='decor-card-number']");
const decorMonth = document.querySelector("[data-js='decor-month']");
const decorYear = document.querySelector("[data-js='decor-year']");
const decorCvc = document.querySelector("[data-js='decor-cvc']");
const decors = [decorCardholderName, decorCardNumber, decorMonth, decorYear, decorCvc];

function mapValue(param1, param2) {
  return (param2.textContent = param1.value);
}
const inputsAndDecors = [
  { input: inputCardholderName, decor: decorCardholderName },
  { input: inputCardNumber, decor: decorCardNumber },
  { input: inputMonth, decor: decorMonth },
  { input: inputYear, decor: decorYear },
  { input: inputCvc, decor: decorCvc },
];

inputsAndDecors.forEach((element) => {
  element.input.addEventListener("input", function () {
    mapValue(element.input, element.decor)
  })
});
