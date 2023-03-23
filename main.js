const QUOTES = "quotes";

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

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "화이팅!!!!!!",
        "Let's go!!!!!!",
        "코딩 안 어렵다;;",
        "코딩 좋다;;;",
        "Run",
      ])
    );

    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    alert("입력 please :)");
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerText = newQuotesInput.value;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
}
