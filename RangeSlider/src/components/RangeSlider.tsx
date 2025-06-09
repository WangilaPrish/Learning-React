import React, { ChangeEvent, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const RangeSlider = () => {
    const motionValue = useMotionValue(50); // Starting value
    const [displayValue, setDisplayValue] = useState<number>(motionValue.get());

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        motionValue.set(newValue);
        setDisplayValue(newValue);
    };

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (latest) => {
            console.log("Slider value:", latest);
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [motionValue]);

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <label htmlFor="range" className="text-lg font-semibold">
                Value: {Math.round(displayValue)}
            </label>
            <div className="relative w-64">
                <motion.input
                    type="range"
                    id="range"
                    min="0"
                    max="100"
                    value={displayValue}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
                <motion.div
                    className="absolute top-1/2 left-0 h-2 bg-blue-500 rounded-lg"
                    style={{ width: `${displayValue}%`, transform: "translateY(-50%)" }}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </div>
        </div>
    );
};

export default RangeSlider;
