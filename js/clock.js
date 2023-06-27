const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const getNowDate = () => {
  const nowDate = new Date();
  const week = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  let month = nowDate.getMonth() + 1;
  let date = nowDate.getDate();
  let day = nowDate.getDay();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  console.log(month, date, day, hours, minutes);
};

getNowDate();
