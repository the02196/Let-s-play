const body = document.querySelector("body");

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const wrap = createElement("div", "wrap");
const title = createElement("h1", "title")
title.textContent = "Snail Race"
body.appendChild(title);
body.appendChild(wrap);

const snails = [];
const intervals = [];
const results = [];

for (let i = 0; i < 5; i++) {
  const race = createElement("div", "race");
  wrap.appendChild(race);

  const snail = createElement("div", "snail");
  race.appendChild(snail);

  const head = createElement("div", "head");
  snail.appendChild(head);

  snail.style.position = "relative";
  snail.style.left = "-100px";
  snail.textContent = `${i + 1}`;

  snails.push(snail);
}

const start = createElement("div", "start");
start.textContent = "start";
body.appendChild(start);

const result = createElement("div", "result");
body.appendChild(result);

function getInt20_30() {
  return Math.floor(Math.random() * 11) + 20;
}

start.addEventListener("click", function () {
  result.innerHTML = "";
  results.length = 0;

  intervals.forEach((interval) => {
    clearInterval(interval);
  });

  intervals.length = 0;

  snails.forEach((snail, i) => {
    const randomTime1 = getInt20_30() * 1;
    const randomTime2 = getInt20_30() * 1;
    const randomTime3 = getInt20_30() * 1;

    snail.style.left = "-10px";
    let currentPosition = 0;

    const interval1 = setInterval(() => {
      currentPosition += 1;
      snail.style.left = currentPosition + "px";
      if (currentPosition >= 500) {
        clearInterval(interval1);

        const interval2 = setInterval(() => {
          currentPosition += 1; 
          snail.style.left = currentPosition + "px";
          if (currentPosition >= 1000) {
            clearInterval(interval2);

            const interval3 = setInterval(() => {
              currentPosition += 1; 
              snail.style.left = currentPosition + "px";
              if (currentPosition >= 1500 + 10) {
                clearInterval(interval3);
                results.push(snail.textContent);
                updateResult(); 
              }
            }, randomTime3);

            intervals.push(interval3);
          }
        }, randomTime2);

        intervals.push(interval2);
      }
    }, randomTime1);

    intervals.push(interval1);
  });
});

function updateResult() {
  result.innerHTML = "";
  results.forEach((snail, index) => {
    result.innerHTML += `<p><b>Rank ${index + 1}</b> : Snail ${snail}</p>`;
  });
}