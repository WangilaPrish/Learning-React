import { useRef, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';

const EventHandling = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Typed click event handler
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        alert('Button clicked!');
    };

    // Typed change event handler
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Input value:', e.target.value);
    };

    // Typed keyboard event handler
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            alert('Enter pressed!');
        }
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default EventHandling;
