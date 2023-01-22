function fizzBuzzArray(input) {

  let fizzArr = [];

  for(let i = 1; i <= input; i++) {

    if(i % 3 === 0 && i % 5 === 0) {

      fizzArr.push('fizzBuzz');

    } else if(i % 3 === 0) {

      fizzArr.push('fizz');

    } else if(i % 5 === 0) {

      fizzArr.push('buzz');

    } else {
      fizzArr.push(i);
    }

  }

  return fizzArr;

};

console.log(fizzBuzzArray(15));
