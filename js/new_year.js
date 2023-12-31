let dayBox = document.getElementById("days");
let hrBox = document.getElementById("hours");
let minBox = document.getElementById("minutes");
let secBox = document.getElementById("seconds");
let endDate = new Date(2024, 0, 1, 0, 0); // Month is zero-based
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (remainingTime <= 0) {
    clearInterval(i);
    document.querySelector(".countdown").innerHTML = "🎉 HAPPY NEW YEAR! 🎉";
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);

    // Log the values to the console after each countdown iteration
    console.log(
      `${daysLeft} days, ${hrsLeft} hours, ${minsLeft} minutes, ${secsLeft} seconds remaining`
    );
  }
}

let i = setInterval(countdown, 1000);
countdown();



