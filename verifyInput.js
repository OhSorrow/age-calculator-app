const dayField = document.getElementById("day");
const monthField = document.getElementById("month");
const yearField = document.getElementById("year");

const dayError = document.querySelector("#dayError");
const monthError = document.querySelector("#monthError");
const yearError = document.querySelector("#yearError");

const dayLabel = document.querySelector("#dayLabel");
const monthLabel = document.querySelector("#monthLabel");
const yearLabel = document.querySelector("#yearLabel");
const currentDate = new Date();

function verifyInput() {
  let isValid = true;

  if (isInputEmpty()) {
    isValid = false;
  }
  if (!isInputANumber()) {
    isValid = false;
  }
  if (isYearInFuture()) {
    isValid = false;
  }
  if (!isMonthValid()) {
    isValid = false;
  }
  if (!isDayValid()) {
    isValid = false;
  }
  if (!isDateValid()) {
    isValid = false;
  }

  if (isValid) {
    return new Date(yearField.value, monthField.value - 1, dayField.value);
  } else {
    return false;
  }
}
function isDateValid() {
  if (
    yearField.value <= currentDate.getFullYear() &&
    monthField.value <= 12 &&
    monthField.value >= 1 &&
    dayField.value <= 31 &&
    dayField.value >= 1
  ) {
    const date = new Date(
      yearField.value,
      monthField.value - 1,
      dayField.value
    );
    if (
      date.getFullYear() != yearField.value ||
      date.getMonth() != monthField.value - 1 ||
      date.getDate() != dayField.value
    ) {
      showError(yearField, yearLabel, yearError, "");
      showError(monthField, monthLabel, monthError, "");
      showError(dayField, dayLabel, dayError, "Must be a valid date");
      return false;
    } else {
      hideError(yearField, yearLabel, yearError);
      hideError(monthField, monthLabel, monthError);
      hideError(dayField, dayLabel, dayError);
      return true;
    }
  } else {
    return false;
  }
}
function isDayValid() {
  if (dayField.value > 31 || dayField.value < 1) {
    showError(dayField, dayLabel, dayError, "Must be a valid day");
    return false;
  } else {
    hideError(dayField, dayLabel, dayError);
    return true;
  }
}
function isMonthValid() {
  if (monthField.value > 12 || monthField.value < 1) {
    showError(monthField, monthLabel, monthError, "Must be a valid month");
    return false;
  } else {
    hideError(monthField, monthLabel, monthError);
    return true;
  }
}
function isYearInFuture() {
  if (yearField.value > currentDate.getFullYear()) {
    showError(yearField, yearLabel, yearError, "Must be in the past");
    return true;
  } else {
    hideError(yearField, yearLabel, yearError);
    return false;
  }
}
function isInputANumber() {
  if (
    isNaN(yearField.value) ||
    isNaN(monthField.value) ||
    isNaN(dayField.value)
  ) {
    if (isNaN(yearField.value)) {
      showError(yearField, yearLabel, yearError, "Must be a valid year");
    } else {
      hideError(yearField, yearLabel, yearError);
    }
    if (isNaN(monthField.value)) {
      showError(monthField, monthLabel, monthError, "Must be a valid month");
    } else {
      hideError(monthField, monthLabel, monthError);
    }
    if (isNaN(dayField.value)) {
      showError(dayField, dayLabel, dayError, "Must be a valid day");
    } else {
      hideError(dayField, dayLabel, dayError);
    }
    return false;
  } else {
    hideError(yearField, yearLabel, yearError);
    hideError(monthField, monthLabel, monthError);
    hideError(dayField, dayLabel, dayError);
    return true;
  }
}
function isInputEmpty() {
  if (
    dayField.value === "" ||
    monthField.value === "" ||
    yearField.value === ""
  ) {
    if (yearField.value === "") {
      showError(yearField, yearLabel, yearError, "This field is required");
    }
    if (monthField.value === "") {
      showError(monthField, monthLabel, monthError, "This field is required");
    }
    if (dayField.value === "") {
      showError(dayField, dayLabel, dayError, "This field is required");
    }
    return true;
  }
  return false;
}

function showError(input, label, errorElement, message) {
  input.classList.add("invalidInput");
  label.classList.add("invalidLabel");
  errorElement.textContent = message;
  errorElement.style.visibility = "visible";
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function hideError(input, label, errorElement) {
  input.classList.remove("invalidInput");
  label.classList.remove("invalidLabel");
  errorElement.style.visibility = "hidden";
}
