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
    hour: "2-digit",
    minute: "numeric",
    // second: "numeric",
    hour12: true,
  });
  time.innerText = timeString;

  const fullDate = newDate.getDate();
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

// 3월27일

let isLoading = false;

async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");

  //값이 없거나, 로딩중이면 return
  if (!searchInput.value) return;
  if (isLoading) return;

  // 여기까지 왔다는 의미 === isLoading false
  isLoading = true;
  const question = searchInput.value;
  searchInput.value = "검색 중 입니다... 잠시만 기다려주세요.";

  // 프론트엔드에서 백엔드
  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );

  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }

  searchInput.value = "";
  isLoading = false;
}

function onClickToggle(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
