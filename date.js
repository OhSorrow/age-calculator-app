const ageYear = document.getElementById("ageYear");
const ageMonth = document.getElementById("ageMonth");
const ageDay = document.getElementById("ageDay");

function calculateAge() {
  if (verifyInput() !== false) {
    const birthDate = verifyInput();
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getFullYear() - 1970;
    const months = ageDate.getMonth();
    const days = ageDate.getDate() - 2;

    return { years: years, months: months, days: days };
  }
  return false;
}

function showBirthDate() {
  if (calculateAge() !== false) {
    const age = calculateAge();
    ageYear.textContent = age.years;
    ageMonth.textContent = age.months;
    ageDay.textContent = age.days;
  } else {
    ageYear.textContent = "--";
    ageMonth.textContent = "--";
    ageDay.textContent = "--";
  }
}
