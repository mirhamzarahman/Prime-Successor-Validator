/**
 * Prime Successor Validator
 * -----------------------------------------
 * Verifies whether the expected number is
 * the immediate next prime after the current
 * prime number.
 */

/**
 * Determines whether a number is prime.
 *
 * @param {number} number
 * @returns {boolean}
 */
function isPrime(number) {
    if (number < 2) return false;

    for (let divisor = 2; divisor * divisor <= number; divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Finds the immediate next prime number.
 *
 * @param {number} currentPrime
 * @returns {number}
 */
function findNextPrime(currentPrime) {
    let candidate = currentPrime + 1;

    while (!isPrime(candidate)) {
        candidate++;
    }

    return candidate;
}

/**
 * Validates whether the expected prime
 * is the immediate successor.
 *
 * @param {number} currentPrime
 * @param {number} expectedPrime
 * @returns {boolean}
 */
function isImmediatePrimeSuccessor(currentPrime, expectedPrime) {
    return findNextPrime(currentPrime) === expectedPrime;
}

// Example usage
const currentPrime = 7;
const expectedPrime = 11;

const validationResult = isImmediatePrimeSuccessor(
    currentPrime,
    expectedPrime
);

console.log(
    validationResult
        ? "Valid Successor"
        : "Invalid Successor"
);
