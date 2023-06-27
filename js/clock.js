const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

//날짜의 숫자가 한 자리수 일때, 앞에 0을 붙이는 함수
const modifyNumber = (number) => {
  return parseInt(number) < 10 ? "0" + number : number;
};

const getNowDate = () => {
  const nowDate = new Date();
  const week = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  let month = modifyNumber(nowDate.getMonth() + 1);
  let date = modifyNumber(nowDate.getDate());
  let day = nowDate.getDay();
  setNowDate(month, date, week[day]);
};

const setNowDate = (month, date, day) => {
  dateElement.textContent = `${month}월 ${date}일 ${day}`;
};

const getNowTime = () => {
  const nowDate = new Date();
  let hours = modifyNumber(nowDate.getHours());
  let minutes = modifyNumber(nowDate.getMinutes());
  let seconds = modifyNumber(nowDate.getSeconds());
  setNowTime(hours, minutes, seconds);
};

const setNowTime = (hours, minutes, seconds) => {
  timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
};

getNowDate();
getNowTime();
