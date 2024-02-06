const billInput = document.querySelector("#bill");
const payersInput = document.querySelector("#payers");
const customTipInput = document.querySelector("#custom-input");
const resetBtn = document.querySelector(".reset-btn");
const tipPercentBtn = document.querySelectorAll(".btn");
const numberInput = document.querySelectorAll(".input");
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");

const errorMsgText = "Can't be zero";

// const saveInputValues = ;

const saveData = () => {};

const getNumericValue = (input) => parseFloat(input.value);

// Calculate and display the total tip and amount per person
const calculateTotal = (tipPercent, bill, payers) => {
  const totalTipAmount = tipPercent * bill;
  const tipAmountEach = Math.floor((totalTipAmount / payers) * 100);
  const totalEachPerson = (tipPercent * bill) / payers + bill / payers;

  tipPerPerson.textContent = (tipAmountEach / 100).toFixed(2);
  totalPerPerson.textContent = totalEachPerson.toFixed(2);
};

const handleInputError = (inputElem, errorMsgElem, errorMessage) => {
  const errorMsg = document.querySelector(errorMsgElem);

  errorMsg.textContent = errorMessage;

  inputElem.classList.toggle("input-error", !!errorMessage);
  errorMsg.classList.toggle("hidden", !errorMessage);
};

// Defined a function to handle events triggered by user actions
const handleEvents = (tipInput) => {
  const bill = getNumericValue(billInput);
  const payers = getNumericValue(payersInput);

  // Check if both bill and payers are empty or zero, and display error messages accordingly
  handleInputError(billInput, ".bill-error-msg", !bill && errorMsgText);
  handleInputError(payersInput, ".payers-error-msg", !payers && errorMsgText);

  // If either bill or payers are missing or zero, stop further execution
  if (!bill || !payers) return;

  // Calculate and display the total tip and amount per person
  calculateTotal(tipInput, bill, payers);
};

// Event listeners for tip percentage buttons
tipPercentBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Extract the tip percentage from the button's data attribute and convert it to a decimal
    const tipPercent = parseFloat(btn.getAttribute("data-tip-percent")) / 100;

    handleEvents(tipPercent);
  });
});

// Event listener for the custom tip input field
numberInput.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Extract the tip percentage from the custom input and convert it to a decimal
      const customInput = document.querySelector("#custom-input");
      const tipPercent = getNumericValue(customInput) / 100;

      handleInputError(
        customInput,
        ".tip-error-msg",
        !tipPercent && "Please select tip"
      );

      if (!tipPercent) return;

      handleEvents(tipPercent);
    }
  });
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  payersInput.value = "";
  customTipInput.value = "";
  tipPerPerson.textContent = "0.00";
  totalPerPerson.textContent = "0.00";
});
