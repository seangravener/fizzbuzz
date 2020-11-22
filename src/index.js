const fizzBuzz = class {
  get answerList() {
    return this._answers.join("<br />");
  }

  constructor(fizz = 3, buzz = 5) {
    this._answers = [];
    this.fizz = fizz;
    this.buzz = buzz;

    this.compute();
  }

  compute() {
    for (let i = 1; i <= 100; i++) {
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
      this._answers.push(localAnswers.join(""));
    }
  }
};

const fb = new fizzBuzz();
document.getElementById("app").innerHTML = `<p>answer:</p> ${fb.answerList}`;
