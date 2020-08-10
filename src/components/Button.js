import React,{useState} from 'react';

export const Button=(props)=>{
  const handleClick=()=>{
    props.onClickFunction(props.increment)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>+{props.increment}</button>
    </div>
  );
}

