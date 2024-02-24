const dayField = document.getElementById("day");
const monthField = document.getElementById("month");
const yearField = document.getElementById("year");
const ageYear = document.getElementById("ageYear");
const ageMonth = document.getElementById("ageMonth");
const ageDay = document.getElementById("ageDay");

function getBirthDate() {
  const birthDate = new Date(
    yearField.value,
    monthField.value - 1,
    dayField.value
  );
  return birthDate;
}

function calculateAge() {
  const birthDate = getBirthDate();
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const year = ageDate.getFullYear() - 1970;
  const month = ageDate.getMonth();
  const day = ageDate.getDate() - 2;

  return { years: year, months: month, days: day };
}

function showBirthDate() {
  const age = calculateAge();
  ageYear.textContent = age.years;
  ageMonth.textContent = age.months;
  ageDay.textContent = age.days;
}
