import { useActions, useTypedSelector } from "../hooks";

const Counter: React.FC = () => {
  const { value } = useTypedSelector(state => state.counter);
  const { decrement, increment, reset } = useActions();

  return <div>
    <p>{value}</p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <br />
    <button onClick={reset}>reset</button>
  </div>;
}

export default Counter;