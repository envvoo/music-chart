const standard = document.querySelector(".chart__standardTime");

function getTime() {
  const standardTime = new Date();
  const standardYear = standardTime.getFullYear();
  const strMonth = String(standardTime.getMonth() + 1);
  const standardMonth = strMonth.length == 1 ? 0 + strMonth : strMonth;
  const strDate = String(standardTime.getDate());
  const standardDate = strDate.length == 1 ? 0 + strDate : strDate;

  standard.innerHTML = `${standardYear}.${standardMonth}.${standardDate} 기준`;
}

getTime();
