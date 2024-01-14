import React from 'react'

const The = () => {
  const salary = 100;
  const expenses = 900;

  const some = salary > expenses ? (`your saving is ${(salary - expenses)}`) : salary < expenses ? (`your loss is ${(expenses - salary)}`) :
    console.log(some);

  // const a = 100;
  // const b = 90;
  // const calc = 'minus';


  // switch (calc) {

  //   case 'minus':
  //     // return (a - b)
  //     console.log(a - b);

  //   case 'plus':
  //     // return (a + b)
  //     console.log(a + b);

  //   case 'multi':
  //     // return (a * b)
  //     console.log(a * b);

  //   case 'div':
  //     // return (a / b)
  //     console.log(a / b);
  // }

  return (
    <div>
      <h1>{some}</h1>


    </div>
  )
}

export default The
