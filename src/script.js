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

inputCardholderName.addEventListener("input", function () {
  decorCardholderName.textContent = inputCardholderName.value;
});

inputCardNumber.addEventListener("input", function () {
  decorCardNumber.textContent = inputCardNumber.value;
});

inputMonth.addEventListener("input", function () {
  decorMonth.textContent = inputMonth.value;
});

inputYear.addEventListener("input", function () {
  decorYear.textContent = inputYear.value;
});

inputCvc.addEventListener("input", function () {
  decorCvc.textContent = inputCvc.value;
});
