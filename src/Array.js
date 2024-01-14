import React from 'react'

const Array = () => {
  const numbers = [11, 22, 33, 44, 55, 66];
  const rating = [5, 4, 3, 2, 1, 7, 8, 9];
  const findGreat10 = numbers.find((n) => {
    return n > 10;
  });

  const findGreat20 = numbers.filter((n) => {
    return n > 20;
  });

  const ni = numbers.reduce((a, b) => {
    return a + b;
  });
  const f = rating.length;
  const total = rating.reduce((c, d) => {
    return c + d;
  });
  const avg = total / f;
  // console.log(findGreat10);
  // console.log(findGreat20);
  // console.log(ni);
  console.log(total);
  console.log(avg);

  return (
    <div>

    </div>
  )
}

export default Array
