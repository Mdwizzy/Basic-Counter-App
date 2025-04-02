<<<<<<< HEAD
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
=======
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
>>>>>>> 5bc2e1d9ef2d23dfe19b12f5744dc37101ec750d
