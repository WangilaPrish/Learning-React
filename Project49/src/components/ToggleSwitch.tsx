import { motion } from 'framer-motion'

const ToggleSwitch = () => {
    return (
        <div>
            <motion.div>
                <input type="checkbox" id="toggle" className="toggle-switch" />
                <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-ball"></span>
                </label>
            </motion.div>
        </div>
    )
}

export default ToggleSwitch
