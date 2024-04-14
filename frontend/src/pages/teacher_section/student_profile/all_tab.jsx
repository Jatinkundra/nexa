import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllTab() {
    // Define your state variable with the provided data

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Replace 'courseId' with the actual ID of the course you want to fetch
        // Replace 'https://api.yourservice.com/courses/' with your actual API endpoint
        // const courseId = '123'; // Example course ID
        const url = `${process.env.REACT_APP_URL}/student/studentDetails/${process.env.REACT_APP_STU}`;

        const fetchCourseData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data.studentDetails)
                // const data = await response.json();
                setUserData(response.data.studentDetails);
            } catch (error) {
                console.error('Error fetching individual course data:', error);
            }
        };

        fetchCourseData();
    }, []);

    // const [userData, setUserData] = useState({
    //     name: 'John Smith',
    //     teacher: 'teacher_name',
    //     courses_inprogress: ['course3'],
    //     courses_completed: ['course1', 'course2'],
    //     skills_acquired: ['skill1', 'skill2'],
    //     retention_rate: 87,
    //     percentile: 93.5,
    //     total_quizzes: 24,
    //     quizzes_attempted: [
    //         {
    //             title: 'title of the quiz',
    //             subject: 'subject here',
    //             passing_percentage: 80,
    //             scored_percentage: 92,
    //             date: '25/09/2021',
    //             time: "12:00 AM - 02:00 AM"
    //         },
    //         {
    //             title: 'title of the quiz2',
    //             subject: 'subject here2',
    //             passing_percentage: 80,
    //             scored_percentage: 92,
    //             date: '25/09/2021',
    //             time: "12:00 AM - 02:00 AM"
    //         }
    //     ],
    //     passed: 2,
    // });

    // Calculate the number of quizzes unattempted
    const unattempted = userData?.total_quizzes - userData?.quizzes_attempted?.length;
    // Calculate the number of failed quizzes
    const failed = userData?.quizzes_attempted.length - userData?.passed;

    return (
        <div className="grid grid-cols-2 max-w-4xl gap-x-10 gap-y-4">
            <div className="">
                <div className="heading font-semibold text-xl leading-6">Quizzes</div>
                <div className="card bg-[#2C2C2C] mt-3 p-3 px-4 rounded-md font-semibold text-base leading-5">
                    <div className="card-title">{"Total Exams : " + userData?.total_quizzes}</div>
                    <div className="grid mt-2 grid-cols-2 gap-x-4 gap-y-2">
                        <div className="text-[#6B6B6B]">{"Attempted : " + userData?.quizzes_attempted.length}</div>
                        <div className="text-[#9E9E9E]">{"Unattempted : " + unattempted}</div>
                        <div className="text-[#0CBC8B]">{"Passed : " + userData?.passed}</div>
                        <div className="text-[#F93333]">{"Failed : " + failed}</div>
                    </div>
                    {/* <div className="flex justify-center items-center mt-4 p-3 bg-[#454545] border border-white rounded-xl">
                        <button>View Details</button>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="heading font-semibold text-xl leading-6">Courses</div>
                <div className="card bg-[#2C2C2C] mt-3 p-3 px-4 rounded-md font-semibold text-base leading-5">
                    <div className="card-title">{"Total Assignments : " + (userData?.courses_inprogress.length + userData?.courses_completed.length)}</div>
                    <div className="grid mt-2 grid-cols-2 gap-x-4 gap-y-2">
                        <div className="text-[#6B6B6B]">{"Ongoing : " + userData?.courses_inprogress.length}</div>
                        {/* Assuming you have the total assignments value */}
                        <div className="text-[#0CBC8B]">{"Completed : " + userData?.courses_completed.length}</div>
                        {/* Assuming 'Skills : XYZ' should show the number of skills acquired */}
                        <div className="text-[#0CBC8B]">{"Skills Acquired : " + userData?.skills_acquired.length}</div>
                    </div>
                    {/* <div className="flex justify-center items-center mt-4 p-3 bg-[#454545] border border-white rounded-xl">
                        <button>View Details</button>
                    </div> */}
                </div>
            </div>
            {/* Other cards would follow a similar pattern... */}
        </div>
    );
}
