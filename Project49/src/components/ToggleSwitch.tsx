import { useState } from 'react';
import { motion } from 'framer-motion';


const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div onClick={toggleSwitch} className="toggle-wrapper">
            <motion.div
                className={`toggle-track ${isOn ? 'on' : 'off'}`}
            >
                <motion.div
                    className="toggle-ball"
                    layout
                    transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                />
            </motion.div>
        </div>
    );
};

export default ToggleSwitch;
