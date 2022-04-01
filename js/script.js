window.addEventListener("DOMContentLoaded", () => {
  // fetchAdvice();
});

/* API Link */
let apiBaseLink = `https://api.adviceslip.com/advice`;
let adviveWrapper = document.querySelector(".advice-wrapper");
let adviveId = document.querySelector(".advice-id");
let adviveText = document.querySelector(".advice-text");
let getAdviceBtn = document.querySelector(".get-advice");

getAdviceBtn.addEventListener("click", fetchAdvice);

async function fetchAdvice() {
  loading();
  try {
    let response = await fetch(apiBaseLink);
    let data = await response.json();
    let advice = data.slip;
    adviveId.innerHTML = `Advice #${advice.id}`;
    adviveText.innerHTML = `“${advice.advice}”`;
    adviveWrapper.classList.remove("loading");
  } catch (error) {
    console.log(error);
  }
}

function loading() {
  adviveWrapper.classList.add("loading");
  adviveId.innerHTML = `<span class="skelton skelton-text width-35"></span>`;
  adviveText.innerHTML = `
    <span class="skelton skelton-text"></span>
    <span class="skelton skelton-text"></span>
    <span class="skelton skelton-text width-85"></span>
  `;
}
