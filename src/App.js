import './App.css';
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(1)
  const updateInputValue = (evt) => {
    if (evt.target.value >= 0 && evt.target.value <= 1000) {
      setCounter(evt.target.value)
    }
  }
  const incrementCounter = () => {
    if (counter < 1000) {
      setCounter(parseInt(counter) + 1)
    }
  }
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(parseInt(counter) - 1)
    }
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}>
      <div
      style={{
        display: 'flex',
        border: '1px solid #a54946',
        borderRadius: '5px'
      }}>
        <div style={{
          fontSize: '21px',
          color: '#a54945',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 'bold',
          width: '60px',
          height: '56px',
          cursor:'pointer'
        }}
          onClick={decrementCounter}>-</div>
        
        <div style={{
            fontSize: '21px',
            borderLeft: '1px solid #a54945',
            borderRight: '1px solid #a54945',
            background: '#f8e9e9',
            color: '#a54945',
            fontWeight: 'bold',
            width: '60px',
            height: '56px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <input style={{
              width: '56px',
              height: '54px',
              border: '0px',
              background: '#FBE8E8',
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#a54945',
              fontSize:'21px',
              outline: 'none',
              border: '1px solid'
            }}
            value={counter} onChange={updateInputValue}/>
          </div>
          <div style={{
            fontSize: '21px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#B24242',
            fontWeight: 'bold',
            width: '60px',
            height: '56px',
            cursor:'pointer'
        }}
          onClick={incrementCounter}>+</div>
      </div>
    </div>
  )
}
  
export default App