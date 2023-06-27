let totalCounter = 0;
let maxInRowCounter = 0;

function incrementCounter() {
  const counter = document.getElementById("chest-down-btn");

  if (counter.innerText === "Chest Down") {
    counter.innerText = "0";
  } else {
    const currentValue = parseInt(counter.innerText);
    counter.innerText = (currentValue + 1).toString();
  }
}

function registerPushups() {
  const counter = document.getElementById("chest-down-btn");
  const totalCounterSpan = document.getElementById("total-counter");
  const maxInRowCounterSpan = document.getElementById("max-in-row-counter");

  const currentValue = parseInt(counter.innerText);
  totalCounter += currentValue;

  if (currentValue > maxInRowCounter) {
    maxInRowCounter = currentValue;
  }

  totalCounterSpan.innerText = totalCounter.toString();
  maxInRowCounterSpan.innerText = maxInRowCounter.toString();
  counter.innerText = "Chest Down";
}

document
  .getElementById("chest-down-btn")
  .addEventListener("click", incrementCounter);
document.getElementById("done-btn").addEventListener("click", registerPushups);
