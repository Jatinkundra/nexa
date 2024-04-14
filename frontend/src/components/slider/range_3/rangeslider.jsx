import { useEffect, useState } from "react";
import "./rangeslider.css";

function RangeSlider({ value }) {
    const [perccent, setPercent] = useState(0);
    const [range, setRange] = useState(0);

    useEffect(() => {
        setRange(value)
    }, [value]);

    const handleSlider = (e) => {
        setRange(e.target.value);
        var range = e.target;
        var progress = ((range.value - range.min) / (range.max - range.min)) * 100;
        setPercent(progress.toFixed(0));
        range.style.background = `linear-gradient(90deg, #2563EB 0%, #2563EB ${progress}%, rgba(255,255,255,0.4) ${progress}%, rgba(255,255,255,0.4) 100%)`;
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="font-normal text-xs leading-5 opacity-60">Progress</div>
                <div className="percentage font-semibold text-xs leading-5" id="percent">{perccent + "%"}</div>
            </div>
            <div className="slider-2 mt-4 flex w-full">
                <input type="range" name="myrange2" min="1" max="100" onChange={handleSlider} value={range} className="myrange2 w-full" />
            </div>
            <div className="mt-4 font-bold text-xs leading-5">AI Prediction</div>
            <div className="font-medium text-xs leading-5 opacity-60">To be completed by 12oct 2023</div>
        </div>
    )
}

export default RangeSlider;