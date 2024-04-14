import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CSSfDesigners } from "../../assets/icons/CSS_for_design_icon.svg";
import axios from 'axios';
export default function CampaignList() {

    // const [campaigns, setCampaigns] = useState([]);
    const [errorS, setErrorS] = useState('');
    const [errorC, setErrorC] = useState('');
    // Example data for Scholarship Pools
    const [scholarshipPools, setScholarshipPools] = useState([])


    // Example data for Crowdfunded Projects
    const [crowdfundedProjects, setCrowdfundedProjects] = useState([])


    useEffect(() => {
        console.log(process.env.REACT_APP_URL)
        axios.get(`${process.env.REACT_APP_URL}/campaigns?type=scholarship_pool`) // Adjust the type as needed
            .then(response => {
                console.log(response.data)
                setScholarshipPools(response.data)
                response = response.json();
            })

            .catch(error => setErrorS(error.message));

        axios.get(`${process.env.REACT_APP_URL}/campaigns?type=crowdfunded_projects`) // Adjust the type as needed
            .then(response => setCrowdfundedProjects(response.data))
            .catch(error => setErrorC(error.message));

    }, []);


    const CourseCard = ({ course }) => (
        <div className='bg-[#2C2C2C] p-5 m-3'>
            <div className="flex w-full w-full   rounded-xl">
                <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                    <CSSfDesigners className="m-auto w-10 h-10" />
                </div>
                <div className="flex flex-col ml-4 w-fit justify-between h-full">
                    <div className="font-normal text-2xl leading-7">
                        {course.title}
                    </div>

                    <div className="text-gray-300">
                        <div>Started by: <span className="text-white">{course?.started_by}</span></div>
                        <div>Started for: <span className="text-white">{course?.started_for}</span></div>
                        <div>Amount: <span className="text-green-500">${course?.amount}</span></div>
                        <div>Description: <span className="text-white">${course?.description}</span></div>
                    </div>
                </div>

            </div>
            <button className="mt-4 py-2 text-center rounded-2xl bg-blue-600 text-white w-full hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                Donate
            </button>
        </div>

    );

    return (

        <div className="flex h-screen bg-[#131313]">
            <div className="w-1/2 overflow-auto p-5">
                <div className="text-white text-2xl mb-5">Scholarship Pools</div>
                {scholarshipPools.map((pool, index) => (
                    <CourseCard key={index} course={pool} />
                ))}
            </div>
            <div className="w-1/2 overflow-auto p-5">
                <div className="text-white text-2xl mb-5">Crowdfunded Projects</div>
                {crowdfundedProjects.map((project, index) => (
                    <CourseCard key={index} course={project} />
                ))}
            </div>
        </div>
    );
}
