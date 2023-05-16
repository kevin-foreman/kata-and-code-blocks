function isValidExpression(string) {
    const regex = /^\[(.)(\s\+\s)(.)(\((.)\s\+\s(.)\))\]$/;
    return regex.test(string);
  }
  
  console.log(isValidExpression('[a + b(c + a)]')); // Output: true
  console.log(isValidExpression('[x + y(z + x)]')); // Output: true
  console.log(isValidExpression('a + b(c + a)')); // Output: false
  console.log(isValidExpression('[a + b](c + a]]')) // Output: false
  console.log(isValidExpression('[a + b(c + a + d)]')); // Output: false