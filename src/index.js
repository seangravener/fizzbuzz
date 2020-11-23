const FizzBuzz = class {
  get answerList() {
    return this._answers.join("<br />");
  }

  constructor(fizz = 3, buzz = 5, cycles = 100) {
    this._answers = [];
    this.fizz = fizz;
    this.buzz = buzz;

    this.compute(cycles);
  }

  compute(cycles) {
    for (let i = 1; i <= cycles; i++) {
      this._answers.push(this.toggleFizzBuzz(i));
    }
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
