import { useReducer, useState } from "react"

const counterReducer = (currentState, action) => {
  console.log('In Reducer', currentState, action);
  let newState = currentState;
  
switch (action.type) {
  case 'INCREMENT':
    newState += 1;
    break;
  case 'DECREMENT':
    newState -= 1;
    break;
  case 'RESET':
    newState = 0;
    break;
  case 'DOUBLE':
    newState *= 2;
    break;
  default:
    break;
}
return newState;
} 

function App() {

  // const [counterVal, setCounterVal] = useState(0);

  const [counterVal, counterDispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    // setCounterVal(current => current + 1);
    counterDispatch({
      type:"INCREMENT"
    });
  } 

  const handleDecrement = () => {
    // setCounterVal(current => current - 1);
    counterDispatch({
      type:"DECREMENT"
    });
  }

  return (
      <>
      <h1>Count: {counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => counterDispatch({type: "RESET"})}>Reset</button>
      <button onClick={() => counterDispatch({type: "DOUBLE"})}>Double</button>
      <button>Change By</button>
      
      </>
  )
}
  
export default App
