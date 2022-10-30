// fetsh this api url https://api.adviceslip.com/advice then return the advice
const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip;
};
fetchAdvice()
// get quote-btn element
const quoteBtn = document.querySelector("#quote-btn");
// get quote element
const quote = document.querySelector("#quote");
// get advice_id element
const adviceId = document.querySelector("#advice_id");

// add event listener to quote-btn
quoteBtn.addEventListener("click", async () => {
  const advice = await fetchAdvice();
  quote.innerHTML = advice.advice;
  adviceId.innerHTML = advice.id;
});