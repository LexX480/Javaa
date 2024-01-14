import React from 'react'

const Assign = () => {

  const temperature = 20;
  const value = 2;
  const pizza = 'pizza';
  const pasta = 'pasta';

  return (
    <div>
      <h1>{`temp is ${temperature} , two plus two is ${value * 2}, I like ${pizza.toUpperCase()} AND ${pasta.toUpperCase()}`}</h1>
    </div>
  )
}

export default Assign
