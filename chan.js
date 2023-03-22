function getTime() {
  const time = document.querySelector(".time");

  const today = new Date();
  const hours = today.getHours() % 12 || 12;
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  const amOrPm = hours >= 12 ? "PM" : "AM";

  // Format the hours to two digits
  const formattedHours = String(hours).padStart(2, "0");

  // Combine the formatted time components into a string
  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${amOrPm}`;

  time.innerText = formattedTime;
}

getTime();
setInterval(getTime, 1000);
