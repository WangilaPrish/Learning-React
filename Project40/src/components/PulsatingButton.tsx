import { motion } from 'framer-motion';

const PulsatingButton = () => {
    return (
        <div>
            <div
                className='text-2xl text-center font-bold m-8'
            >
                Hello guys, welcome and welcome back to my youtube channel.
                <br />
                If you new here, make sure to hit that subscribe button and turn on the bells for notifactions.
                <br />
                In my community, you'd never be bored as i give you juicy tea.
            </div>
            <motion.button
                className='bg-blue-500 text-white px-6 py-3 rounded-full m-20 items-center flex'
            >
                Subscribe
            </motion.button>
        </div>
    )
}

export default PulsatingButton
