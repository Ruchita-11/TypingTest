const quotes = [
    "Practice makes perfect.",
    "Stay positive and happy.",
    "Never stop learning.",
    "Believe in yourself.",
    "The future depends on what you do today.",
    "Success is not final, failure is not fatal.",
  ];
  
  let currentQuote = "";
  let startTime;
  
  const quoteEl = document.getElementById("quote");
  const inputEl = document.getElementById("input");
  const resultEl = document.getElementById("result");
  const startBtn = document.getElementById("start");
  
  startBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quoteEl.textContent = currentQuote;
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
    resultEl.textContent = "";
    startTime = new Date().getTime();
  });
  
  inputEl.addEventListener("input", () => {
    if (inputEl.value === currentQuote) {
      const endTime = new Date().getTime();
      const timeTaken = (endTime - startTime) / 1000;
      const words = currentQuote.split(" ").length;
      const wpm = Math.round((words / timeTaken) * 60);
      resultEl.textContent = `✅ You typed ${words} words in ${timeTaken.toFixed(2)} seconds. Speed: ${wpm} WPM.`;
      inputEl.disabled = true;
    }
  });
  