import { ReactComponent as CSSfDesigners } from "../../../assets/icons/CSS_for_design_icon.svg";
import { ReactComponent as GreenThumbsUp } from "../../../assets/icons/Green_ThumbUp.svg";
import Teaching from "../../../assets/icons/mdi_teaching.png";
import Attendance from "../../../assets/icons/Meter_icon.png";
import Statistics from "../../../assets/icons/statistics_icon.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function ViewCourse() {
    const [individualCourseData, setIndividualCourseData] = useState(null);
    // 
    useEffect(() => {
        const courseId = process.env.REACT_APP_C_ID; // Example course ID
        const url = `${process.env.REACT_APP_URL}/courses/${courseId}`;

        const fetchCourseData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data.courses[0])

                setIndividualCourseData(response.data.courses[0]);
                // console.log(data, '087654')
            } catch (error) {
                console.error('Error fetching individual course data:', error);
            }
        };

        fetchCourseData();
    }, []);
    // const [individualCourseData, setIndividualCourseData] = useState({
    //     "title": 'CSS for Designers',
    //     "studentsEnrolled": '52',
    //     "dailyAttendance": '90%',
    //     "likeScore": 92,
    //     "course_rating": 4.2,
    //     "description": "Students enjoyed the course quite well . They were interactive more in the first half than the second half",
    //     "students_data": [
    //         {
    //             "ID": "PRE2209",
    //             "Name": "John Smith",
    //             "Marks": "1185",
    //             "Attendence": "98%",
    //             "Percentage": "98%",
    //         },
    //         {
    //             "ID": "PRE1245",
    //             "Name": "Jolie Hoskins",
    //             "Marks": "1195",
    //             "Attendence": "98%",
    //             "Percentage": "99.58%",
    //         },
    //         {
    //             "ID": "PRE1625",
    //             "Name": "Pennington Joy",
    //             "Marks": "1196",
    //             "Attendence": "98%",
    //             "Percentage": "99.67%",
    //         },
    //         {
    //             "ID": "PRE2516",
    //             "Name": "Millie Marsden",
    //             "Marks": "1187",
    //             "Attendence": "98%",
    //             "Percentage": "98.2%",
    //         },
    //         {
    //             "ID": "PRE2209",
    //             "Name": "John Smith",
    //             "Marks": "1185",
    //             "Attendence": "98%",
    //             "Percentage": "98%",
    //         }]
    // })

    const AssesmentResult = {
        fields: [
            "ID",
            "Name",
            "Marks",
            "Attendence",
            "Percentage",
        ],
        students_data: individualCourseData?.students_data
    }

    return (
        <div className="viewcourses-section bg-[#131313] rounded-2xl px-7 py-6 pt-5">
            <div className="flex w-full justify-between font-semibold text-2xl">
                <div className="heading">Your Courses</div>
            </div>
            <div className="w-full mt-8 bg-[#2C2C2C] py-6 px-7 rounded-xl">
                <div className="flex w-full">
                    <div className="icon flex h-full aspect-square p-3 bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                        <CSSfDesigners className="m-auto w-20 h-20" />
                    </div>
                    <div className="ml-8 flex flex-col">
                        <div className="heading font-bold text-2xl leading-7">{individualCourseData?.title}</div>
                        <div className="sub-heading font-medium text-base leading-6 opacity-60">{individualCourseData?.description}</div>
                    </div>
                    <div className='mr-0 mx-auto'>
                        <GreenThumbsUp />
                        <div className='font-medium text-base leading-6 text-[#32B95D]'>{individualCourseData?.likeScore}%</div>
                    </div>
                </div>
                <div className="flex mt-10 gap-8 w-full">
                    <div className="flex flex-1 px-6 py-4 rounded-xl bg-[#454545]">
                        <div className="w-full">
                            <img src={Teaching} className="w-12 h-auto aspect-square" alt="" />
                            <div className="font-bold text-[2rem] leading-10">{individualCourseData?.course_rating}</div>
                            <div className="title font-normal text-xl leading-5 opacity-60">Course Rating</div>
                        </div>
                    </div>
                    <div className="flex flex-1 px-6 py-4 rounded-xl bg-[#454545]">
                        <div className="w-full">
                            <img src={Attendance} className="w-12 h-auto aspect-square" alt="" />
                            <div className="font-bold text-[2rem] leading-10">{individualCourseData?.dailyAttendance}</div>
                            <div className="title font-normal text-xl leading-5 opacity-60">Attendance</div>
                        </div>
                    </div>
                    <div className="flex flex-1 px-6 py-4 rounded-xl bg-[#454545]">
                        <div className="w-full">
                            <img src={Statistics} className="w-12 h-auto aspect-square" alt="" />
                            <div className="font-bold text-[2rem] leading-10">{individualCourseData?.studentsEnrolled}</div>
                            <div className="title font-normal text-xl leading-5 opacity-60">Students enrolled</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-2xl leading-7 mt-10">Students Enrolled</div>
                    <div className='datatable mt-5'>
                        <table className="table-fixed w-full bg-[#131313] rounded-xl">
                            <thead className='text-left border-b border-white'>
                                <tr>
                                    {
                                        AssesmentResult?.fields?.map((item, index) => {
                                            return (
                                                <th key={index} className='p-4'>{item}</th>
                                            )
                                        })
                                    }
                                    <th key={AssesmentResult?.fields?.length} className='p-4'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AssesmentResult?.students_data?.map((item, index) => {
                                        return (
                                            <tr key={index} className='border-b border-white border-opacity-20'>
                                                <td className='px-4'>{item.ID}</td>
                                                <td className='px-4'>
                                                    <div className='flex items-center'>
                                                        <img className="my-5 mr-3 w-8 h-8 aspect-square rounded-full" src={'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt=""></img>
                                                        <div className='text-white'>{item.Name}</div>
                                                    </div>
                                                </td>
                                                <td className='px-4'>{item.Marks}</td>
                                                <td className='px-4'>{item.Attendence}</td>
                                                <td className='px-4'>{item.Percentage}</td>
                                                <td className='px-4'>
                                                    <Link to={'enrolled/students/' + item.ID} className='bg-[#2C2C2C] w-fit m-auto flex justify-center items-center p-3 border border-white rounded-xl font-medium text-sm leading-5'>View Results</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
