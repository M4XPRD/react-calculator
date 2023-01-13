import './styles.css';

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand" />
        <div className="current-operand" />
      </div>
      <button className="span-two" type="button">AC</button>
      <button type="button">DEL</button>
      <button type="button">÷</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">*</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">+</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">-</button>
      <button type="button">.</button>
      <button type="button">0</button>
      <button className="span-two" type="button">=</button>
    </div>
  );
}

export default App;
