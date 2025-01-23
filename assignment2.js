// q1
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// q2
function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 !== 0) return num1 / num2;
      else return "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

// Example usage:
console.log(calculate(10, 5, "add"));        // 15
console.log(calculate(10, 5, "subtract"));   // 5
console.log(calculate(10, 5, "multiply"));   // 50
console.log(calculate(10, 5, "divide"));     // 2


// q3
function findTax(salary) {
  let tax = 0;
  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = salary * 0;
      break;
    case salary > 500000 && salary <= 1000000:
      tax = salary * 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      tax = salary * 0.2;
      break;
    case salary > 1500000:
      tax = salary * 0.3;
      break;
    default:
      return "Invalid salary input";
  }
  return `The tax on a salary of ₹${salary} is ₹${tax}`;
}

// Example usage:
console.log(findTax(450000));   // ₹0
console.log(findTax(750000));   // ₹75000
console.log(findTax(1200000));  // ₹240000
console.log(findTax(2000000));  // ₹600000

// q4

function sumOfProducts(n1, n2) {
  const num1 = n1.toString().split("").reverse();
  const num2 = n2.toString().split("").reverse();
  let sum = 0;

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const digit1 = parseInt(num1[i] || 0); // Default to 0 if no digit exists
    const digit2 = parseInt(num2[i] || 0); // Default to 0 if no digit exists
    sum += digit1 * digit2;
  }

  return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34));      // 24
console.log(sumOfProducts(123, 456));   // 32
console.log(sumOfProducts(102, 305));   // 15
