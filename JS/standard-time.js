const standard = document.querySelector(".chart__standardTime");

function getTime() {
  const standardTime = new Date();
  const standardYear = standardTime.getFullYear();
  const standardMonth = standardTime.getMonth() + 1;
  const standardDate = standardTime.getDate();
  const standardHour = standardTime.getHours();
  const strMonth = String(standardTime.getMonth() + 1);
  const standardMonth = strMonth.length == 1 ? 0 + strMonth : strMonth;
  const strDate = String(standardTime.getDate());
  const standardDate = strDate.length == 1 ? 0 + strDate : strDate;

  standard.innerHTML = `${standardYear}.${standardMonth}.${standardDate}`;

  const emphasis = document.createElement("span");
  emphasis.style.fontWeight = "600";
  emphasis.innerHTML = ` ${standardHour}:00 `;
  standard.appendChild(emphasis);
  standard.append("기준");
}

getTime();
setInterval(getTime, 3600000);
