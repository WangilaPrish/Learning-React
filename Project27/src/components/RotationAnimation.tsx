import { motion, useMotionValue, useTransform } from 'framer-motion';

const RotationAnimation = () => {

    const rotate = useMotionValue(0);
    const rotateX = useTransform(rotate, [0, 360], [0, 360]);
    return (
        <div>
            <motion.div>
                <motion.div className='title'>
                    <h1>Rotation Animation</h1>
                </motion.div>
                <motion.div
                    style={{ rotate: rotateX }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className='container'>
                    <motion.button className='button'>
                        <i className="fa fa-ambulance black"></i>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default RotationAnimation
