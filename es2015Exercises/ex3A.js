function Numbers(numbs) {
    fives = [];
    this.nums = numbs;
    this.fives = fives
    this.nums.forEach(function (v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    });
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log("ES5:", numbers.fives);

  function NumbersArrowFunction(numbs) {
    fives = [];
    this.nums = numbs;
    this.fives = fives
    this.nums.map(v => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    })
}
var numberArrowFunction = new NumbersArrowFunction([1, 3, 5, 10, 14, 20, 33, 50]);
console.log("ES2015:", numberArrowFunction.fives);