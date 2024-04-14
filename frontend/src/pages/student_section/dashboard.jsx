import React from "react";
import icon from "../../assets/images/icon.png";
import icon1 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon3.png";
import write from "../../assets/images/write.png";
import rightArrow from "../../assets/images/rightArrow.png";
import Suggested from "../../assets/images/Suggested.png";
import tick from "../../assets/images/tick.png";
import star from "../../assets/images/star.png";
import uiux from "../../assets/images/uiux.png";
import bookmark from "../../assets/images/bookmark.png";
import comment from "../../assets/images/comment.png";
import Ellipse from "../../assets/images/Ellipse.png";
import Chat from "../../assets/icons/chat.png";
import AIBadge from "../../assets/Badges/Asset 1.png";
import CodeBadge from "../../assets/Badges/Asset 2.png";
import JSBadge from "../../assets/Badges/Asset 3.png";
import MYSQLBadge from "../../assets/Badges/Asset 4.png";
import UIUXBadge from "../../assets/Badges/Asset 5.png";

// Components
import RangeSlider from "../../components/slider/range_3/rangeslider.jsx";
import ActivityChart from "../../components/charts/activityChart.jsx";
import TaskSparklineChart from "../../components/charts/taskSparklineChart.jsx";
import SwotRadarChart from "../../components/charts/swotRadarChart.jsx";
import ActiveHourChart from "../../components/charts/activeHourChart.jsx";
import { ReactComponent as Flag } from "../../assets/icons/flag.svg";
import { useMatch } from "react-router-dom";

const Dashboard = () => {

  const [student, setStudent] = React.useState(false);
  const match = useMatch("/student/dashboard");
  console.log(match);

  const [showCer, setShowCer] = React.useState(false);

  React.useEffect(() => {
    if (match) {
      setStudent(true);
    } else {
      setStudent(false);
    }
  }, [match]);

  const recentwork = [
    { title: "UI Design", progress: "40" },
    { title: "Wireframing", progress: "60" },
    { title: "Case Study", progress: "80" },
  ];

  const ArrayList = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const taskSummary = [
    {
      id: 1,
      task: "Assigned",
      count: "40",
      img: icon,
      color: "#2563EB",
      txtcolor: "#FFFFFF",
    },
    {
      id: 2,
      task: "Completed",
      count: "79",
      img: icon1,
      color: "#38BDF8",
      txtcolor: "#FFFFFF",
    },
    {
      id: 3,
      task: "Pending",
      count: "89",
      img: icon3,
      color: "#F0F5FA",
      txtcolor: "#000",
    },
  ];
  const buttonArray = [
    {
      id: 1,
      task: "Ui Designer",
    },
    {
      id: 2,
      task: "Figma ",
    },
    {
      id: 3,
      task: "Landing Page",
    },
  ];

  const numberArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const silderArray = [
    {
      id: 1,
      name: "Designing",
      count: "648 of 751",
      color: "#FF715B",
      width: "60%",
    },
    {
      id: 2,
      name: "Backend",
      count: "215 of 651",
      color: "#34D1BF",
      width: "20%",
    },
    {
      id: 3,
      name: "Data analytics",
      count: "84 of 120",
      color: "#0496FF",
      width: "80%",
    },
    {
      id: 4,
      name: "Drawing",
      count: "804 of 846",
      color: "#6665DD",
      width: "90%",
    },
    {
      id: 5,
      name: "Social science",
      count: "458 of 901",
      color: "#DE0D92",
      width: "50%",
    },
    {
      id: 6,
      name: "Green",
      count: "215 of 651",
      color: "#04E762",
      width: "20%",
    },
  ];
  return (
    <>

      {showCer && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" ></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto " onClick={() => { setShowCer(!showCer) }}>
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative overflow-hidden transform rounded-lg">
              <div className="flex">
                <img src="https://bafybeicmxswbzuhxxhtwsaom47r5otgxlbiugg3nygo24hcpay4nymsoam.ipfs.w3s.link/Certificate.png" className="w-[45vw] h-auto" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>}

      <div className="flex gap-6">
        <div className="w-[70%] ">
          <div className="bg-[#131313] w-full rounded-xl p-5 px-6">
            <div className="heading flex w-full border-b border-white border-opacity-10 pb-5 pt-2 justify-between items-end">
              <div className="font-bold">Recent Work</div>
              <div className="text-sm text-[#64748B]">•••</div>
            </div>
            <div className="flex mt-5 gap-4 w-full">
              {recentwork.map((item) => {
                return (
                  <div className="card flex flex-col flex-1 bg-[#2C2C2C] p-3 px-4 rounded-lg">
                    <div className="font-bold text-base leading-6">{item.title}</div>
                    <div className="py-3">
                      <RangeSlider value={0} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex w-full gap-6 mt-6">
            <div className="bg-[#131313] w-1/2 rounded-xl p-5 px-6">
              <div className="flex w-full justify-between items-baseline">
                <div className="font-bold text-base">Activity</div>
                <select className="bg-transparent font-medium text-xs text-[#2563EB] leading-5 pr-0.5">
                  <option>This Week</option>
                </select>
              </div>
              <ActivityChart />
            </div>
            <div className="bg-[#131313] flex flex-col w-1/2 rounded-xl p-5 px-6">
              <div className="heading flex w-full justify-between items-end">
                <div className="font-bold">Task Summary</div>
                <div className="text-sm text-[#64748B]">•••</div>
              </div>
              <div className="flex mt-4 gap-6 flex-auto">
                {taskSummary.map((item) => {
                  return (
                    <div style={{ background: item.color, color: item.txtcolor }} className={"flex flex-col space-y-1 p-6 w-1/3 rounded-2xl justify-center items-center"}>
                      <img src={item.img} className="w-10 h-10" alt="icon" />
                      <div className="opacity-60">Course</div>
                      <div className="opacity-60">{item.task}</div>
                      <div className="font-bold text-2xl leading-6">{item.count}</div>
                    </div>
                  )
                })}
              </div>
              <div className="flex w-full h-fit mt-6">
                <div className="flex flex-col h-fit w-1/2">
                  <div className="font-normal text-sm leading-5 opacity-60">On-time Completion Rate</div>
                  <div className="flex w-full mt-2 items-baseline justify-start">
                    <div className="font-bold text-2xl leading-[1.875rem]">95%</div>
                    <div className="font-medium text-xs leading-5 text-[#24D164]">+2.5%</div>
                  </div>
                </div>
                <div className="flex w-1/2">
                  <TaskSparklineChart />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2664EB] flex flex-1 rounded-xl p-6 px-8 gap-6 mt-6">
            <img src={write} className="w-40 h-auto aspect-square" alt="" />
            <div className="flex flex-col justify-between w-full">
              <div className="font-bold text-2xl leading-[1.875rem]">Create new goal with AI</div>
              <div className="font-normal text-sm leading-5">Every large design company whether it’s a multi-national branding corporation or a regular down at heel tatty magazine publisher.</div>
              <button className="relative bg-white w-fit font-bold text-sm leading-5 text-[#2664EB] px-5 py-4 rounded-xl">Generate Goal <img src={rightArrow} className="w-auto h-5 inline-block ml-2" alt="" /></button>
            </div>
          </div>
        </div>
        <div className="bg-[#131313] w-[30%] rounded-xl p-5 px-6">
          <div className="space-y-8 flex flex-col w-full items-center text-center">
            <div className="avatar w-44 h-44 bg-[#2C2C2C] rounded-full overflow-clip">
              <img className="m-auto" alt="" src={'https://i.pravatar.cc?img=44'} />
            </div>
            <div>
              <div className="name font-bold text-3xl leading-8">Saira</div>
              <div className="font-medium text-base leading-4 opacity-60 mt-1">{"Student ID : TIPSG5682"}</div>
              {/* <div className="font-medium text-base leading-4 opacity-60 mt-1">New York, USA</div> */}
            </div>
            {/* <button className="bg-[#2C2C2C] rounded-lg p-8 py-6 w-full max-w-xs font-normal text-sm leading-4">View Details</button> */}
          </div>
          <div className="flex mt-4 justify-evenly w-full">
            <div className="flex items-center gap-3 font-semibold text-base text-white text-opacity-60"><img src="https://img.icons8.com/ios-filled/100/flash-light.png" className="rounded-full w-10 h-10 bg-slate-400 p-2" alt="" />Advisor</div>
            <div className="flex items-center gap-3 font-semibold text-base text-white text-opacity-60"><img src="https://img.icons8.com/glyph-neue/64/rocket.png" className="rounded-full w-10 h-10 bg-slate-400 p-2" alt="" />Pioneer</div>
          </div>
          <div className="flex flex-col w-full mt-4 px-6 font-light text-sm text-white gap-2 text-opacity-70">
            <p>They possess a remarkable ability to communicate not only the destination but also the practical steps to reach it.</p>
            <p>As a practical explorer, their rich storehouse of knowledge and expertise is complemented by an innate ability to visualize unique solutions and clearly see what's possible, bringing a common-sense approach to big ideas.</p>
            <p>Always thinking about moving forward, they often make recommendations that may initially seem irrational to others. However, people soon learn to trust the magic of their method, as they consistently witness impressive accomplishments. </p>
          </div>
          <hr className="my-5 border-white bg-white opacity-10 border-opacity-10" />
          <div className="flex flex-col gap-4">
            <div className="font-medium text-base leading-5">Skill Badges</div>
            <div className="flex flex-wrap gap-3">
              <img src={UIUXBadge} onClick={() => { setShowCer(!showCer) }} className="w-10 h-auto aspect-auto" alt="" />
              <img src={AIBadge} onClick={() => { setShowCer(!showCer) }} className="w-10 h-auto aspect-auto" alt="" />
              <img src={CodeBadge} onClick={() => { setShowCer(!showCer) }} className="w-10 h-auto aspect-auto" alt="" />
              <img src={JSBadge} onClick={() => { setShowCer(!showCer) }} className="w-10 h-auto aspect-auto" alt="" />
              <img src={MYSQLBadge} onClick={() => { setShowCer(!showCer) }} className="w-10 h-auto aspect-auto" alt="" />
            </div>
          </div>
          {/* <div className="graph mt-8 text-center">
            <div className="heading font-bold text-2xl leading-[1.875rem]">AI swot Analysis</div>
            <div className="w-full"> */}
          {/* <SwotRadarChart /> */}
          {/* <div className="my-6">
                <div className="flex m-auto w-4/5 uppercase translate-y-6 justify-between">
                  <h1>Strength</h1>
                  <h1>Weakness</h1>
                </div>
                <img className="h-80 w-80 m-auto" alt="" src={spiderweb} />
                <div className="flex m-auto w-4/5 uppercase -translate-y-6 justify-between">
                  <h1>Fit</h1>
                  <h1>Opportunity</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 border-t border-white border-opacity-20">
            <button className="w-full text-center font-bold text-sm leading-5 text-[#2664EB] rounded-xl m-auto">View full SWOT analysis <img src={rightArrow} className="w-auto h-5 inline-block ml-2" alt="" /></button>
          </div> */}
        </div>
      </div >

      <div className="flex gap-6 mt-6">
        <div className={student ? "w-[70%]" : "w-full"}>
          <div className="bg-[#131313] w-full  rounded-xl p-5 px-6">
            <div className="flex w-full justify-between items-baseline">
              <div className="font-bold text-2xl leading-[1.875rem]">Activity</div>
              <select className="bg-transparent font-bold text-xs text-[#05CD99] leading-5 pr-0.5">
                <option>Designing</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 mt-5">
              <div className="col-span-2">
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Overall Score</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#4339F2]"></div>
                </div>
              </div>
              <div>
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Designing</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#FFB200]"></div>
                </div>
              </div>
              <div>
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Backend</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#25FC02]"></div>
                </div>
              </div>
              <div>
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Illustration Making</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#4339F2]"></div>
                </div>
              </div>
              <div>
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Data analytics</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#4339F2]"></div>
                </div>
              </div>
              <div>
                <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                  <div>Business Associate</div>
                  <div className="text-[#4339F2]">56</div>
                </div>
                <div className="progress-bar flex h-3 w-full rounded-2xl bg-black overflow-hidden mt-1">
                  <div className="progres w-[67%] rounded-2xl bg-[#4339F2]"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 font-dmsans font-normal text-sm leading-5 mt-4">
              <div className="flex items-center gap-2"><div className="w-4 h-4 aspect-square rounded-full bg-[#FFB200]"></div>Weakness</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 aspect-square rounded-full bg-[#4339F2]"></div>Strengths</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 aspect-square rounded-full bg-[#25FC02]"></div>Average</div>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="bg-[#131313] flex flex-col flex-auto w-2/5 rounded-xl p-5 px-6">
              <div className="flex w-full justify-between">
                <div className="font-dmsans font-medium text-sm leading-6 text-white opacity-60">Your active learning time</div>
                <div className="font-dmsans font-bold text-xs leading-5 text-[#05CD99]">+2.45%</div>
              </div>
              <div className="font-dmsans font-bold text-[2.125rem] leading-[2.625rem] text-white">2.5 hrs</div>
              <div className="flex h-full w-full mt-6 justify-between">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Mon</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Tue</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Wed</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Thu</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Fri</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Sat</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col bg-[#2C2C2C] w-4 h-full justify-end overflow-hidden rounded-lg">
                    <div className="flex flex-col-reverse w-full h-[60%] rounded-lg bg-[#2664EB]"></div>
                  </div>
                  <div className="font-medium text-sm leading-6 opacity-60">Sun</div>
                </div>
              </div>
            </div>
            <div className="bg-[#131313] w-3/5 rounded-xl p-5 px-6">
              <div className="flex w-full justify-between">
                <div className="heading font-bold text-[1rem] leading-6">Active hour schedule</div>
                <div className="dateselect flex rounded-md justify-center bg-[#2C2C2C] px-4">
                  <select className="bg-transparent font-medium text-xs text-[#2563EB] leading-5 pr-0.5">
                    <option>Daily</option>
                  </select>
                </div>
              </div>
              <div>
                <ActiveHourChart />
              </div>
            </div>
          </div>
        </div>

        {student && <div className="flex flex-col bg-[#131313] w-[30%] rounded-xl p-5 px-6">
          <div className="flex w-full justify-between items-center font-medium text-[1.375rem] leading-8">
            <div className="heading font-dmsans leading-7">Suggested Jobs</div>
            <div className="dateselect flex rounded-md justify-center bg-[#131313] px-3 py-2 border-2 border-white border-opacity-10">
              <select className="bg-transparent font-semibold text-xs text-white opacity-60 leading-5 pr-0.5">
                <option>This Week</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full divide-y divide-white divide-opacity-10">
            <div className="jobcard py-6">
              <div className="flex w-full gap-2">
                <img src={Suggested} className="w-1/4 h-1/4 aspect-auto" alt="" />
                <div className="flex flex-col flex-auto gap-2 w-3/4">
                  <div class="flex w-fit items-center rounded-xl bg-[#1DB75A] px-2 py-1 text-xs font-medium text-[#131313] ring-1 ring-inset ring-green-600/20">95% Match</div>
                  <div className="heading font-semibold text-base leading-5">Figma Designer</div>
                  <div className="description font-medium text-[0.75rem] leading-[0.875rem] text-[#6C6C6C]">We are looking for figma designers who can help designing...</div>
                  <div className="flex gap-4 mt-2">
                    {buttonArray.map((item) => {
                      return (
                        <div className="font-medium text-[0.5rem] leading-[0.55rem] tracking-wide p-2 px-3 bg-[#2C2C2C] rounded">{item.task}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 w-full justify-between items-center">
                <div class="starrating flex items-center space-x-1">
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <div className="flex gap-1 w-fit font-medium items-center my-auto align-middle text-[0.7rem] leading-[0.75rem]">
                  <img src={tick} className="w-5 h-5 aspect-square" alt="" />
                  Project Verified
                </div>

                <div className="font-medium text-xs leading-3 text-white">Proposals: <span className="text-[#838383]">10 to 15</span></div>
              </div>
            </div>
            <div className="jobcard py-6">
              <div className="flex w-full gap-2">
                <img src={Suggested} className="w-1/4 h-1/4 aspect-auto" alt="" />
                <div className="flex flex-col flex-auto gap-2 w-3/4">
                  <div class="flex w-fit items-center rounded-xl bg-[#1DB75A] px-2 py-1 text-xs font-medium text-[#131313] ring-1 ring-inset ring-green-600/20">95% Match</div>
                  <div className="heading font-semibold text-base leading-5">Figma Designer</div>
                  <div className="description font-medium text-[0.75rem] leading-[0.875rem] text-[#6C6C6C]">We are looking for figma designers who can help designing...</div>
                  <div className="flex gap-4 mt-2">
                    {buttonArray.map((item) => {
                      return (
                        <div className="font-medium text-[0.5rem] leading-[0.55rem] tracking-wide p-2 px-3 bg-[#2C2C2C] rounded">{item.task}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 w-full justify-between items-center">
                <div class="starrating flex items-center space-x-1">
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <div className="flex gap-1 w-fit font-medium items-center my-auto align-middle text-[0.7rem] leading-[0.75rem]">
                  <img src={tick} className="w-5 h-5 aspect-square" alt="" />
                  Project Verified
                </div>

                <div className="font-medium text-xs leading-3 text-white">Proposals: <span className="text-[#838383]">10 to 15</span></div>
              </div>
            </div>
            <div className="jobcard py-6">
              <div className="flex w-full gap-2">
                <img src={Suggested} className="w-1/4 h-1/4 aspect-auto" alt="" />
                <div className="flex flex-col flex-auto gap-2 w-3/4">
                  <div class="flex w-fit items-center rounded-xl bg-[#1DB75A] px-2 py-1 text-xs font-medium text-[#131313] ring-1 ring-inset ring-green-600/20">95% Match</div>
                  <div className="heading font-semibold text-base leading-5">Figma Designer</div>
                  <div className="description font-medium text-[0.75rem] leading-[0.875rem] text-[#6C6C6C]">We are looking for figma designers who can help designing...</div>
                  <div className="flex gap-4 mt-2">
                    {buttonArray.map((item) => {
                      return (
                        <div className="font-medium text-[0.5rem] leading-[0.55rem] tracking-wide p-2 px-3 bg-[#2C2C2C] rounded">{item.task}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 w-full justify-between items-center">
                <div class="starrating flex items-center space-x-1">
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <div className="flex gap-1 w-fit font-medium items-center my-auto align-middle text-[0.7rem] leading-[0.75rem]">
                  <img src={tick} className="w-5 h-5 aspect-square" alt="" />
                  Project Verified
                </div>

                <div className="font-medium text-xs leading-3 text-white">Proposals: <span className="text-[#838383]">10 to 15</span></div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 w-full items-end justify-end">
            <button className="font-bold text-[#4318FF] text-base leading-7 mr-2">View All <img src={rightArrow} className="inline-block ml-1 w-5" alt="" /></button>
          </div>

        </div>}
      </div>

      {student && <div className="flex bg-[#131313] w-full rounded-xl divide-x divide-white divide-opacity-10 p-5 px-6 mt-6">
        <div className="flex flex-col pr-6 w-2/3">
          <div className="font-bold text-2xl leading-8">Suggested courses for improving your weaknesses</div>
          <div className="flex flex-col w-full divide-y divide-white divide-opacity-10">
            <div className="card py-6 flex gap-4">
              <img src={uiux} className="flex flex-col h-40" alt="" />
              <div className="flex flex-col flex-auto h-full w-full gap-2">
                <div className="flex justify-between">
                  <div className="font-bold text-base leading-5">Ui/Ux Design course</div>
                  <div class="flex w-fit items-center rounded-xl bg-[#1DB75A] px-2 py-1 text-xs font-medium text-[#131313] ring-1 ring-inset ring-green-600/20">95% Match</div>
                </div>
                <div className="font-normal text-sm leading-4 text-[#6C6C6C]">We are looking for figma designers who can help desiging...</div>
                <div className="flex gap-2 font-medium items-center text-sm leading-[1.105rem] opacity-60"><img src={Chat} className="w-6 h-6 aspect-square" alt="" />5hrs/day to complete it in 15 days</div>
                <div className="flex w-full items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex h-full pl-1 items-center mt-2 -space-x-1">
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="h-full font-medium text-sm leading-4 opacity-60">5,667 Users</div>
                  </div>
                  <div className="flex gap-2 items-center h-full ">
                    <img src={Chat} className="w-6 h-6 aspect-square" alt="" />
                    <div className="font-medium text-sm leading-4 opacity-60">12 Comments</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  {buttonArray.map((item) => {
                    return (
                      <div className="font-medium text-xs leading-3 tracking-wide p-2 px-3 bg-[#2C2C2C] rounded">{item.task}</div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col pl-10 flex-auto gap-2">
                <Flag className="w-6 h-6" />
              </div>
            </div>
            <div className="card py-6 flex gap-4">
              <img src={uiux} className="flex flex-col h-40" alt="" />
              <div className="flex flex-col flex-auto h-full w-full gap-2">
                <div className="flex justify-between">
                  <div className="font-bold text-base leading-5">Ui/Ux Design course</div>
                  <div class="flex w-fit items-center rounded-xl bg-[#1DB75A] px-2 py-1 text-xs font-medium text-[#131313] ring-1 ring-inset ring-green-600/20">95% Match</div>
                </div>
                <div className="font-normal text-sm leading-4 text-[#6C6C6C]">We are looking for figma designers who can help desiging...</div>
                <div className="flex gap-2 font-medium items-center text-sm leading-[1.105rem] opacity-60"><img src={Chat} className="w-6 h-6 aspect-square" alt="" />5hrs/day to complete it in 15 days</div>
                <div className="flex w-full items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex h-full pl-1 items-center mt-2 -space-x-1">
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="-translate-y-1 my-auto h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="h-full font-medium text-sm leading-4 opacity-60">5,667 Users</div>
                  </div>
                  <div className="flex gap-2 items-center h-full ">
                    <img src={Chat} className="w-6 h-6 aspect-square" alt="" />
                    <div className="font-medium text-sm leading-4 opacity-60">12 Comments</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  {buttonArray.map((item) => {
                    return (
                      <div className="font-medium text-xs leading-3 tracking-wide p-2 px-3 bg-[#2C2C2C] rounded">{item.task}</div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col pl-10 flex-auto gap-2">
                <Flag className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 w-full items-end justify-between">
            <div className="font-bold">Refresh</div>
            <button className="font-bold text-[#4318FF] text-base leading-7 mr-2">View All <img src={rightArrow} className="inline-block ml-1 w-5" alt="" /></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 pr-4 pl-8 mb-2 w-1/3">
          <div className="font-bold text-2xl leading-8">Course catagory</div>
          <div className="flex flex-col flex-auto justify-between w-full">
            {silderArray.map((item) => {
              return (
                <div className="flex flex-col w-full gap-2">
                  <div className="heading flex w-full justify-between font-dmsans font-normal text-sm leading-5">
                    <div className="font-roboto opacity-60">{item.count}</div>
                    <div className="font-medium text-xs leading-5">{item.name}</div>
                  </div>
                  <div className="progress-bar flex h-2 w-full rounded-2xl bg-[#2C2C2C] overflow-hidden mt-1">
                    <div style={{ backgroundColor: item.color }} className="progres w-[67%] rounded-2xl"></div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex w-full items-end justify-end">
            <button className="font-bold text-[#4318FF] text-base leading-7 mr-2">View All <img src={rightArrow} className="inline-block ml-1 w-5" alt="" /></button>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Dashboard;
