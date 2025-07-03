import { motion, useMotionValue } from 'framer-motion';
import useState from 'react';

const SpringAnimatedPosition = () => {
    const [x, setX] = useState(0);
    const x = useMotionValue(0);

    const clickBox = () => {
        setX(x + 100);
        x.set(x.get() + 100);
    }
    return (
        <div>
            <motion.div>
                className="w-32 h-32 bg-blue-500"
                style={{ x }}
                onClick={clickBox}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            </motion.div>
        </div>
    )
}

export default SpringAnimatedPosition
