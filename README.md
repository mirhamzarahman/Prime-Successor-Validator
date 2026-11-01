# 🔢 Prime Successor Validator

A lightweight JavaScript project that verifies whether a given prime number is the immediate successor of another prime. It demonstrates efficient prime checking, sequential search, and mathematical validation through a clean and reusable implementation.

---

## 📖 Project Overview

Prime Successor Validator is a small utility designed to verify sequential relationships between prime numbers.

Instead of generating an entire list of primes, the application intelligently searches forward until it finds the next valid prime and checks whether it matches the expected value.

This approach demonstrates efficient searching while keeping the implementation clean and reusable.

---

## 🌍 Real-World Conceptual Scenario

Imagine a security system where authorization levels are assigned only to prime-number IDs.

Each new security level must be the **immediate next prime** after the previous one.

This project validates whether a requested upgrade follows the correct numerical sequence.

---

## 💡 Core Concept

The application follows these principles:

- Validate whether a number is prime.
- Search forward from the current prime.
- Stop immediately after finding the next prime.
- Compare it with the expected value.
- Return a validation result.

---

## ⚙️ How the System Works

1. Receive the current prime number.
2. Receive the expected successor.
3. Increment one number at a time.
4. Check whether each number is prime.
5. Stop when the next prime is found.
6. Compare it with the expected successor.
7. Return the verification result.

---

## 🧠 Algorithm Used

### Prime Checking

Each candidate number is tested by checking divisibility only up to its square root.

### Sequential Search

Instead of generating all primes beforehand, the algorithm performs a forward search until the first valid prime appears.

This minimizes unnecessary work while keeping the implementation simple.

---

## 🔄 Step-by-Step Logic

```text
Start

↓

Receive current prime

↓

Move to next integer

↓

Prime?

├── No → Continue searching
└── Yes

↓

Compare with expected number

↓

Match?

├── YES
└── NO
```

---

## ✨ Key Features

- ✅ Efficient prime verification
- ✅ Forward sequential search
- ✅ Square-root optimization
- ✅ Simple reusable functions
- ✅ Beginner-friendly implementation
- ✅ Constant memory usage
- ✅ Well documented code

---

## 📌 Example Use Case

Current Security Level:

```
3
```

Requested Upgrade:

```
5
```

Since **5** is the immediate next prime after **3**, the validation succeeds.

---

## 💻 Example

Input

```text
Current Prime : 7
Expected Next : 11
```

Output

```text
Valid Successor
```

---

Input

```text
Current Prime : 7
Expected Next : 9
```

Output

```text
Invalid Successor
```

---

## 📊 Complexity Analysis

| Operation | Complexity |
|------------|-----------|
| Prime Check | O(√n) |
| Forward Search | O(√n) (small search space) |
| Space | O(1) |

---

## 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

## 📁 Project Structure

```
Prime-Successor-Validator/
│
├── README.md
├── LICENSE
└── src
    └── primeSuccessorValidator.js
```

---

# 🚀 How to Run the Project

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/Prime-Successor-Validator.git
```

Go to the project folder

```bash
cd Prime-Successor-Validator
```

Run

```bash
node src/primeSuccessorValidator.js
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Prime number validation
- Mathematical optimization
- Sequential searching
- Reusable function design
- Algorithmic thinking
- JavaScript fundamentals
- Clean project organization

---

## 🚀 Possible Future Improvements

- Generate complete prime sequences
- REST API version
- Web interface
- CLI argument support
- Batch validation
- Prime history visualization
- Performance benchmarking

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and improve it for educational or professional purposes.
