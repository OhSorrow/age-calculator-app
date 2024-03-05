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
    const days = ageDate.getDate() - 1;

    return { years: years, months: months, days: days };
  }
  return false;
}

function showBirthDate() {
  if (calculateAge() !== false) {
    const age = calculateAge();
    const ageYear = new countUp.CountUp("ageYear", age.years, 3000);
    const ageMonth = new countUp.CountUp("ageMonth", age.months, 3000);
    const ageDay = new countUp.CountUp("ageDay", age.days, 3000);
    ageDay.start();
    ageMonth.start();
    ageYear.start();
  } else {
    ageYear.textContent = "--";
    ageMonth.textContent = "--";
    ageDay.textContent = "--";
  }
}
