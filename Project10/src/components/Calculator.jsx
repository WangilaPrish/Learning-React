import { useState } from 'react';

const Calculator = () => {
    const [answer, setAnswer] = useState(0);
    const [value, setValue] = useState('');

    // Handle button click
    const handleClick = (btnValue) => {
        if (btnValue === '=') {
            try {
                // Evaluate the expression safely
                const result = eval(value);
                setAnswer(result);
            } catch (error) {
                setAnswer('Error');
            }
        } else if (btnValue === 'C') {
            setValue('');
            setAnswer(0);
        } else {
            setValue((prev) => prev + btnValue);
        }
    };

    return (
        <section style={{ margin: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <p>Input: {value}</p>
                <p>Answer: {answer}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '5px' }}>
                {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'C', '=', '/'].map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleClick(btn)}
                        style={{ padding: '10px', fontSize: '16px' }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Calculator;
