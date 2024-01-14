import React from 'react'

const ForEach = () => {



  const numbers = [11, 22, 33, 44, 55, 99, 88, 23, 45, 67, 30, 40];
  let odd = 0;
  let even = 0;

  numbers.forEach((nums) => {
    // somes = somes + ni; finding total
    // somes += somes; (shortcut)
    if (nums % 2 == 0) {
      even = even + nums;

    } else {
      odd = odd + nums;
    }
  });

  console.log(`odd total ${odd}`);
  console.log(`even total ${even}`);

  // const n2 = numbers.map((a, b) => {
  //   return a * 2;

  // })
  // console.log(n2);


  const n3 = numbers.map((a, b) => {
    return b.toString;

  })
  console.log(n3);

  return (
    <div>

    </div>
  )
}

export default ForEach
