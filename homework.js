const firstName = "Laetitia";
const favouriteNumber = 16;
const likesCoding = true;

console.log(
  `Hi, my name is ${firstName}, my favourite number is ${favouriteNumber}, and it is ${likesCoding} that I like coding.`,
);

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//Today's date
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentMonthName = monthNames[currentDate.getMonth()];
const currentYear = currentDate.getFullYear();
console.log(
  `Today's date is: ${currentDay} ${currentMonthName} ${currentYear}`,
);

//My birthday: 1995, 6, 8
const birthday = new Date(1995, 6, 8);
const birthDay = birthday.getDate();
const birthMonth = birthday.getMonth();
const birthMonthName = monthNames[birthday.getMonth()];
const birthYear = birthday.getFullYear();

//Function to calculate months until birthday
function getMonthsUntilBirthday(birthMonth) {
  return (birthMonth - currentMonth + 12) % 12;
}

let age = currentYear - birthYear;
let days;
let month;

//IF same month
if (birthMonth === currentMonth) {
  //IF same month && same day
  if (birthDay === currentDay) {
    console.log(`You are turning ${age} today! Happy Birthday!`);

    //IF same month but birthday passed
  } else if (birthDay < currentDay) {
    days = currentDay - birthDay;
    console.log(
      `You are ${age}. Your birthday was ${days} ${days === 1 ? "day" : "days"} ago!`,
    );

    //If same month but birthday not passed
  } else {
    days = birthDay - currentDay;
    console.log(
      `You are currently ${age - 1}. Your birthday is in ${days} ${days === 1 ? "day" : "days"}!`,
    );
  }

  //IF birthday has passed this year
} else if (birthMonth < currentMonth) {
  month = currentMonth - birthMonth;
  console.log(
    `You are ${age}. Your birthday was ${month === 1 ? "last month" : `around ${month} months ago`}!`,
  );

  //IF birthday hasn't passed this year
} else {
  month = getMonthsUntilBirthday(birthMonth);
  console.log(
    `You are ${age - 1} years old. Your birthday is ${month === 1 ? "next month" : `in around ${month} months`}!`,
  );
}
