let count = 0;

let countEl = document.getElementById("count");
console.log(countEl);

let saveEl = document.getElementById("save-el");

// count = count + 1;

function increment() {
  // count = count + 1;
  count += 1;
  countEl.textContent = count;
}

function resetCounter() {
  count = 0;
  countEl.textContent = count;
}

function save() {
  let prevCount = count + " - ";
  if (count > 0) {
    // innerText alternative
    saveEl.textContent += prevCount;
  }

  resetCounter();
}
