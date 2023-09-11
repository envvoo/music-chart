const standard = document.querySelector(".chart__standardTime");
const textArr = standard.innerHTML.split(":");
let [standardYear, standardMonth, standardDate, standardHour] = [
  textArr[0],
  textArr[1],
  textArr[2],
  textArr[3],
];

function getTime() {
  const standardTime = new Date();
  standardYear = standardTime.getFullYear();
  const strMonth = String(standardTime.getMonth() + 1);
  standardMonth = strMonth.length == 1 ? 0 + strMonth : strMonth;
  const strDate = String(standardTime.getDate());
  standardDate = strDate.length == 1 ? 0 + strDate : strDate;

  standard.innerHTML = `${standardYear}.${standardMonth}.${standardDate}`;

  if (standardHour !== undefined) {
    standardHour = standardTime.getHours();
    const emphasis = document.createElement("span");
    emphasis.style.fontWeight = "600";
    emphasis.innerHTML = ` ${standardHour}:00 `;
    standard.appendChild(emphasis);
    standard.append("기준");
  } else standard.append(" 기준");
}

getTime();
