import { useState } from 'react';

import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h1 className="counter__title">{count}</h1>
            <section className="counter__buttons">
                <button onClick={() => setCount(count + 1)} className="counter__button counter__increaseButton">Increment</button>
                <button onClick={() => setCount(count - 1)} className="counter__button counter__decreaseButton">Decrement</button>
            </section>
        </div>
    );
}

export default Counter;
