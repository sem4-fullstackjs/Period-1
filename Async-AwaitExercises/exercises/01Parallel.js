const fetch = require("node-fetch")
const now = require("performance-now")
const URL = "https://swapi.co/api/people/";

async function printNames(count) {
  var start = now()
  const swapPeople = [];
  for (let i = 1; i <= count; i++) {
    swapPeople.push(
      fetch(URL + i)
        .then(res => { return res.json() }));
  }
  const allElements = await Promise.all(swapPeople);
  console.log(allElements.map(e => e.name).join("\n"));
  var end = now()
  console.log((start - end).toFixed(3))
}

printNames(2)
