import { motion } from 'framer-motion';
import { useState } from 'react';


const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };
    return (
        <div>
            <button
                onClick={toggleMenu}
                className='button'>
                Menu
            </button>
            <motion.div
                animate={{ x: isOpen ? 0 : -200 }}
                transition={{ duration: 0.3 }}
                className='main'>
                <ul>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Services</li>
                    <li className='p-4'>Contact Us</li>
                </ul>
            </motion.div>
        </div>
    )
}

export default SideBar
