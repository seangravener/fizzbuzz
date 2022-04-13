/**
 * The FizzBuzz problem. Print integers 1 to N, but print “Fizz” if an
 * integer is divisible by 3, “Buzz” if an integer is divisible by 5,
 * and “FizzBuzz” if an integer is divisible by both 3 and 5.
 */

const FizzBuzz = class {
  get answerList() {
    return this._answers.join("<br />");
  }

  constructor(fizz = 3, buzz = 5, cycles = 100) {
    this._data = this.getData(cycles);
    this._answers = [];
    this.fizz = fizz;
    this.buzz = buzz;

    this.compute(cycles);
    this.computeWithReduce();
  }

  getData(cycles) {
    const data = [];
    for (let i = 1; i <= cycles; i++) {
      data.push(i);
    }

    return data;
  }

  compute(cycles) {
    for (let i = 1; i <= cycles; i++) {
      this._answers.push(this.toggleFizzBuzz(i));
    }
  }

  computeWithReduce() {
    const localAnswer = this._data.reduce((currentAnswer, currentNumber) => {
      if (currentNumber % 15 === 0) return `${currentAnswer}FizzBuzz\n`;
      if (currentNumber % 5 === 0) return `${currentAnswer}Fizz\n`;
      if (currentNumber % 3 === 0) return `${currentAnswer}Buzz\n`;

      return `${currentAnswer}${currentNumber}\n`;
    }, "");

    console.log(localAnswer);
  }

  toggleFizzBuzz(i) {
    const localAnswers = [];

    if (i % this.fizz === 0) {
      localAnswers.push("Fizz");
    }

    if (i % this.buzz === 0) {
      localAnswers.push("Buzz");
    }

    if (!localAnswers.length) {
      localAnswers.push(i);
    }

    return localAnswers.join("");
  }
};

const fb = new FizzBuzz();
document.getElementById("app").innerHTML = `<p>answer:</p> ${fb.answerList}`;
