function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  // const hours = String(newDate.getHours()).padStart(2, "0");
  // const minutes = String(newDate.getMinutes()).padStart(2, "0");
  // const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // time.innerText = hours + ":" + minutes + ":" + seconds;
  // time.innerText = `${hours}:${minutes}:${seconds}`;

  const timeString = newDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  time.innerText = timeString;
}

getTime();
setInterval(getTime, 1000);
