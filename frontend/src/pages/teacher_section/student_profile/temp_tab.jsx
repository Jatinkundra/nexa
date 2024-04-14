
// Components
import RangeSlider from "../../../components/slider/range_2/rangeslider"
import { useState } from 'react';

export default function TempTab() {
    const [courses, setCourses] = useState(['course3'])
    return (
        <div className="grid grid-cols-4 gap-5">
 
            {courses.map((course)=> {
                return(
                <div className="card bg-[#2C2C2C] p-3 px-4 rounded-lg">
                <div className="font-bold text-base leading-6">{course}</div>
                <div className="py-3">
                    <RangeSlider value={50} />
                </div>
            </div>
           ) })}
            
         

        </div>
    )
}
