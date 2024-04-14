import { useEffect, useState } from "react";
import { ReactComponent as Chat } from "../../../assets/icons/fluent_chat-16-filled.svg";
import lightning from "../../../assets/icons/lightning_icon.png";
import Meter from "../../../assets/icons/Meter_icon.png";
import Statistics from "../../../assets/icons/statistics_icon.png";
import CalenderHeatmap from "../../../components/heatmaps/calenderHeatmap.jsx";
import Calender from "../../../components/calender/calender.jsx";

import { Link, NavLink, useMatch } from "react-router-dom";

export default function Profile({ children }) {
    const [visible, setVisible] = useState(true);
    const match = useMatch('/teacher/courses/:courseId/enrolled/students/:id/classes');
    console.log(match);

    useEffect(() => {
        if (match) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }, [match]);

    return (
        <>
            <div className="courses-section bg-[#131313] rounded-2xl px-5 py-6 pt-5">
                <div className="flex w-full justify-between font-semibold text-2xl">
                    <div className="heading">Student Profile</div>
                    <Link to={'/student/dashboard'} className="font-normal text-base bg-blue-700 hover:bg-blue-500 py-2 px-6 rounded-lg">View Detailed Analysis</Link>
                </div>
                <div className={(!visible ? "flex gap-16" : null)}>
                    <div className={"flex gap-6 mt-8 " + (!visible ? "flex-col w-2/3" : null)}>
                        <div className="flex gap-6 w-auto">
                            <div className="profilepic">
                                <img src="https://i.pravatar.cc?img=44" alt="student_picture" className="block rounded-full w-36 border-2 border-white p-1" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-semibold text-2xl leading-[1.875rem]">Saira</div>
                                    <div className="mt-4">
                                        <div className="font-medium text-base leading-5">{"Student ID : TIPSG5682"}</div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex h-fit self-end justify-between gap-8 " + (!visible ? "w-full mb-0 mt-auto" : "flex-auto ml-6")}>
                            <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                                <img src={lightning} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                                <div className="font-semibold">
                                    <div className="text-xl">56</div>
                                    <div className="text-sm opacity-60">Quizzes</div>
                                </div>
                            </div>
                            <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                                <img src={Meter} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                                <div className="font-semibold">
                                    <div className="text-xl">86%</div>
                                    <div className="text-sm opacity-60">Attendence</div>
                                </div>
                            </div>
                            <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                                <img src={Statistics} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                                <div className="font-semibold">
                                    <div className="text-xl">99.65</div>
                                    <div className="text-sm opacity-60">Percentile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!visible && <div className="flex w-1/3 mt-5">
                        <Calender />
                    </div>}
                </div>
                {visible && <div className="studygraph bg-[#2C2C2C] mt-8 h-auto rounded-2xl p-4">
                    <div className="font-poppins font-bold text-base leading-5">Study Graph</div>
                    <div className="flex heatmap w-full items-center justify-center h-full mt-4">
                        <CalenderHeatmap />
                    </div>
                </div>}
                <div className="tabs mt-4">
                    <div className="flex text-[#A1A1A1]">
                        <NavLink className={({ isActive }) => {
                            return isActive ? "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400 text-blue-500 border-b-2 border-blue-400" : "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400"
                        }} to={'all'}>All</NavLink>
                        <NavLink className={({ isActive }) => {
                            return isActive ? "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400 text-blue-500 border-b-2 border-blue-400" : "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400"
                        }} to={'quiz'}>Quiz</NavLink>
                        {/* <NavLink className={({ isActive }) => {
                            return isActive ? "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400 text-blue-500 border-b-2 border-blue-400" : "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400"
                        }} to={'exams'}>Exams</NavLink> */}
                        <NavLink className={({ isActive }) => {
                            return isActive ? "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400 text-blue-500 border-b-2 border-blue-400" : "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400"
                        }} to={'courses_completed'}>Courses Completed</NavLink>
                        {/* <NavLink className={({ isActive }) => {
                            return isActive ? "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400 text-blue-500 border-b-2 border-blue-400" : "font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400"
                        }} to={'classes'}>Classes</NavLink> */}
                    </div>
                </div>
                <hr className="opacity-10 -translate-y-0 scale-x-[]" />
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </>
    )
}

