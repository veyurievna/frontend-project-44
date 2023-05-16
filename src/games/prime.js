import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 0;
const maxRange = 100;

const isPrime = (number) => {
  const limit = Math.sqrt(number);
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number.toString(), correctAnswer];
};

export default () => {
  run(description, generateRound);
};
