/**
 * The FizzBuzz problem. Print integers 1 to N, but print “Fizz” if an
 * integer is divisible by 3, “Buzz” if an integer is divisible by 5,
 * and “FizzBuzz” if an integer is divisible by both 3 and 5.
 */

function generateData(cycles) {
  const data = [];
  for (let i = 1; i <= cycles; i++) {
    data.push(i);
  }

  return data;
}

let _fizz = 3;
let _buzz = 5;
let _cycles = 64;
let _answers = [];

class FizzBuzz {
  get data() {
    return generateData(_cycles);
  }

  get answers() {
    return _answers.join("\n");
  }

  constructor(fizz = 3, buzz = 5) {
    _fizz = fizz;
    _buzz = buzz;

    // this.compute()
    // console.log(this.answers)

    console.log(this.computeWithReduce());
  }

  compute() {
    for (let digit of this.data) {
      _answers.push(this.toggleFizzBuzz(digit));
    }
  }

  computeWithReduce() {
    const localAnswer = this.data.reduce((currentAnswer, currentDigit) => {
      if (currentDigit % 15 === 0) return `${currentAnswer}FizzBuzz\n`;
      if (currentDigit % 5 === 0) return `${currentAnswer}Buzz\n`;
      if (currentDigit % 3 === 0) return `${currentAnswer}Fizz\n`;

      return `${currentAnswer}${currentDigit}\n`;
    }, "");

    return localAnswer;
  }

  toggleFizzBuzz(digit) {
    const localAnswer = [];

    if (digit % _fizz === 0) {
      localAnswer.push("Fizz");
    }

    if (digit % _buzz === 0) {
      localAnswer.push("Buzz");
    }

    if (!localAnswer.length) {
      localAnswer.push(digit);
    }

    return localAnswer.join("");
  }
}

const fb = new FizzBuzz(10);
