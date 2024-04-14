import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CSSfDesigners } from "../../../assets/icons/CSS_for_design_icon.svg";
import { ReactComponent as GreenThumbsUp } from "../../../assets/icons/Green_ThumbUp.svg";
import axios from 'axios';

export default function Courses() {
    // State variable for courses, initialized with an array of course objects
    const [courses, setCourses] = useState([])
    useEffect(() => {
        // Replace 'courseId' with the actual ID of the course you want to fetch
        // Replace 'https://api.yourservice.com/courses/' with your actual API endpoint
        // const courseId = '123'; // Example course ID
        const url = `${process.env.REACT_APP_URL}/courses`;

        const fetchCourseData = async () => {
            try {
                const response = await axios.get(url);
                setCourses(response.data.courses[0]);

            } catch (error) {
                console.error('Error fetching courses data:', error);
            }
        };

        fetchCourseData();
    }, []);
    // const [courses, setCourses] = useState([
    //     {
    //         title: 'CSS for Designers',
    //         studentsEnrolled: '5,223',
    //         dailyAttendance: '90%',
    //         likeScore: '96',
    //         course_by:'teacher_name'
    //     },
    //     // ...add more course objects here
    // ]);

    return (
        <div className="Yourcourses-section bg-[#131313] rounded-2xl px-5 py-6 pt-5">
            <div className="flex w-full justify-between font-semibold text-2xl">
                <div className="heading">Your Courses</div>
            </div>

            <div className="grid grid-cols-2 mt-8 gap-14 gap-y-8">
                {courses?.map((course, index) => (
                    <div key={index} className="w-full bg-[#2C2C2C] p-5 rounded-xl">
                        <div className="flex w-full">
                            <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                                <CSSfDesigners className="m-auto w-10 h-10" />
                            </div>
                            <div className="flex flex-col ml-4 w-fit justify-between h-full">
                                <div className="font-normal text-2xl leading-7">
                                    {course.title}
                                </div>
                                <div className='flex gap-4 items-baseline'>
                                    <div className='font-medium text-base opacity-60'>{course.studentsEnrolled} enrolled</div>
                                </div>
                            </div>
                            <div className='mr-0 mx-auto'>
                                <GreenThumbsUp />
                                <div className='font-medium text-base leading-6 text-[#32B95D]'>{course.likeScore}%</div>
                            </div>
                        </div>
                        <div className="font-medium text-base leading-6 opacity-60 mt-4">{course.dailyAttendance} daily attendance</div>
                        <Link to={`${index}`} className='flex justify-center items-center bg-[#2C2C2C] mt-8 py-4 rounded-2xl border border-white border-opacity-60 w-full'>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
