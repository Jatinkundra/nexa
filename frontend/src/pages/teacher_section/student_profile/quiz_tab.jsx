// Icons
import { ReactComponent as RightArrow } from "../../../assets/icons/Arrow_right.svg";
import { ReactComponent as LeftArrow } from "../../../assets/icons/Arrow_left.svg";
import { ReactComponent as Calender } from "../../../assets/icons/Calender.svg";
import { ReactComponent as Clock } from "../../../assets/icons/Clock.svg";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function QuizTab() {
  // Set the initial state based on the data provided
  const [studentData, setStudentData] = useState([])
  useEffect(() => {
    // Replace 'courseId' with the actual ID of the course you want to fetch
    // Replace 'https://api.yourservice.com/courses/' with your actual API endpoint
    // const courseId = '123'; // Example course ID
    const url = `${process.env.REACT_APP_URL}/student/studentDetails/${process.env.REACT_APP_STU}`;

    const fetchCourseData = async () => {
      try {
        const response = await axios.get(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching individual course data:', error);
      }
    };

    fetchCourseData();
  }, []);


  // const [studentData, setStudentData] = useState({
  //   totalQuizzes: 24,
  //   quizzesAttempted: [
  //     {
  //       title: 'title of the quiz',
  //       subject: 'subject here',
  //       passingPercentage: 80,
  //       scoredPercentage: 92,
  //       date: '25/09/2021',
  //       time: '12:00 AM - 02:00 AM'
  //     },
  //     {
  //       title: 'title of the quiz2',
  //       subject: 'subject here2',
  //       passingPercentage: 80,
  //       scoredPercentage: 92,
  //       date: '25/09/2021',
  //       time: '12:00 AM - 02:00 AM'
  //     }
  //   ],
  //   passed: 2,
  // });

  // UseEffect to handle component updates, if needed
  useEffect(() => {
    // This is where you might fetch or update data if necessary
  }, []);

  // Calculate unattempted quizzes
  const unattemptedQuizzes = studentData.totalQuizzes - studentData.quizzesAttempted.length;
  const failedQuizzes = studentData.quizzesAttempted.length - studentData.passed;

  return (
    <div>
      <div className="flex items-center justify-between mt-3 py-2">
        <div className="flex gap-8 font-semibold text-base leading-5">
          <div className="text-white">{`Total Quizzes : ${studentData.totalQuizzes}`}</div>
          <div className="text-[#6B6B6B]">{`Attempted : ${studentData.quizzesAttempted.length}`}</div>
          <div className="text-[#9E9E9E]">{`Unattempted : ${unattemptedQuizzes}`}</div>
          <div className="text-[#0CBC8B]">{`Passed : ${studentData.passed}`}</div>
          <div className="text-[#F93333]">{`Failed : ${failedQuizzes}`}</div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center justify-center rounded-md border-2 border-white border-opacity-10 w-7 h-7">
            <LeftArrow className="w-3 h-3" />
          </div>
          <div className="flex items-center justify-center rounded-md border-2 border-white border-opacity-10 w-7 h-7">
            <RightArrow className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-5">
        {/* Map through the quizzes attempted and create a card for each */}
        {studentData.quizzesAttempted.map((quiz, index) => (
          <div key={index} className="card bg-[#2C2C2C] p-4 px-5 rounded-xl">
            <div className="flex items-center w-fit rounded-md bg-[#2E5532] px-4 py-2 text-base font-semibold text-[#55DE64]">{`Passed : ${quiz.scoredPercentage >= quiz.passingPercentage ? 'Yes' : 'No'}`}</div>
            <div className="mt-3 font-medium text-xl leading-6">{quiz.title}</div>
            <div className="mt-5 font-normal text-base leading-5 text-[#9A9A9A]">{`Subject : ${quiz.subject}`}</div>
            <div className="flex items-center font-normal text-base leading-5 gap-8 py-5">
              <div className="flex items-center">
                <Calender className="inline-block mr-2 fill-white" />
                {quiz.date}
              </div>
              <div className="flex items-center">
                <Clock className="inline-block mr-2" />
                {quiz.time}
              </div>
            </div>
            <div className="font-normal text-base leading-4">
              Passing Percentage : <span>{quiz.passingPercentage}%</span>
            </div>
            <div className="mt-4 font-normal text-base leading-4">
              Scored Percentage : {quiz.scoredPercentage}%
            </div>
            <div className="flex w-full mt-8">
              <button className="p-3 px-4 w-full rounded-lg bg-[#454545] border border-white">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
