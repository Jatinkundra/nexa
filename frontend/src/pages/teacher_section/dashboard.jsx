// Icons
import { ReactComponent as RightArrow } from "../../assets/icons/Arrow_right.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/Arrow_left.svg";
import { ReactComponent as CSSfDesigners } from "../../assets/icons/CSS_for_design_icon.svg";
import { ReactComponent as DesignFoundations } from "../../assets/icons/3D_design_found_icon.svg";
import { ReactComponent as DesignComposition } from "../../assets/icons/Design_compo_icon.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import Chatbot from "../../assets/images/Chatbot.png";
import Sad from "../../assets/emojis/Sad_emoji.png";
import Happy from "../../assets/emojis/Happy_emoji.png";
import VenueDesign from "../../assets/images/Venus Design System.png";
import avatar from "../../assets/avatars/avatar.png";

// Components
import Rangeslider from "../../components/slider/range_1/rangeslider";
import StudentEnrollingchart from "../../components/charts/studentEnrollingchart";
import DailyAttendenceChart from "../../components/charts/dailyAttendencechart";
import FeelingChart from "../../components/charts/feelingChart";

// Data
import { AssesmentResult } from '../../Data/Data';
import StudentActchart from '../../components/charts/studentActchart';

export default function Dashbaord() {
  return (
    <>
      <div className="courses-section bg-[#131313] rounded-2xl px-5 py-6 pt-5">
        <div className="flex w-full justify-between font-semibold text-2xl">
          <div className="heading">Your Courses</div>
          <div className="flex gap-2 items-center justify-center">
            <div className="flex items-center justify-center rounded-md border-2 border-white border-opacity-10 w-7 h-7">
              <LeftArrow className="w-3 h-3" />
            </div>
            <div className="flex items-center justify-center rounded-md border-2 border-white border-opacity-10 w-7 h-7">
              <RightArrow className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="flex w-full mt-5 justify-between">
          <div className="bg-[#2C2C2C] w-[26.3%] px-4 py-4 rounded-2xl flex items-center justify-center">
            <div className="flex gap-3 h-full w-full">
              <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                <CSSfDesigners className="m-auto w-9 h-9" />
              </div>
              <div className="flex flex-col w-full justify-between h-full">
                <div className="text-sm leading-[1.1rem]">
                  CSS for Designers
                </div>
                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem]">
                  <div>96% students like it</div>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2C2C2C] w-[26.3%] px-4 py-4 rounded-2xl flex items-center justify-center">
            <div className="flex gap-3 h-full w-full">
              <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                <DesignFoundations className="m-auto w-9 h-9" />
              </div>
              <div className="flex flex-col w-full justify-between h-full">
                <div className="text-sm leading-[1.1rem]">
                  3D Design Foundations
                </div>
                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem]">
                  <div>96% students like it</div>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2C2C2C] w-[26.3%] px-4 py-4 rounded-2xl flex items-center justify-center">
            <div className="flex gap-3 h-full w-full">
              <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                <DesignComposition className="m-auto w-9 h-9" />
              </div>
              <div className="flex flex-col w-full justify-between h-full">
                <div className="text-sm leading-[1.1rem]">
                  Design Composition
                </div>
                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem]">
                  <div>96% students like it</div>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2C2C2C] w-[17%] rounded-2xl font-semibold text-sm leading-4 flex items-center justify-center">
            View All
          </div>
        </div>

        <div className='flex w-full mt-12'>
          <div style={{ writingMode: 'vertical-lr' }} className='bg-[#2C2C2C] p-1 font-normal text-sm leading-4 rounded-lg border border-white border-opacity-10 uppercase flex items-center justify-center rotate-180'>PHASES</div>
          <div className='flex w-full gap-3 ml-4'>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 1</div>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 2</div>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 3</div>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 4</div>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 5</div>
            <div className='bg-[#2C2C2C] flex-auto w-auto font-bold text-sm leading-[1.15rem] rounded-lg uppercase flex items-center justify-center'>PHASE 6</div>
          </div>
        </div>
        <div className='flex w-full mt-6'>
          <div style={{ writingMode: 'vertical-rl' }} className='bg-[#2C2C2C] p-1 font-normal text-sm leading-4 rounded-lg border border-white border-opacity-10 uppercase rotate-180'>
            <div className='flex items-center justify-center py-4'>
              <img src={Sad} alt='Sad Emoji' className='rotate-180 mb-14 w-4 h-auto scale-110' />
              FEELINGS AND THOUGHTS
              <img src={Happy} alt='Happy Emoj' className='rotate-180 mt-14 w-4 h-auto scale-110' />
            </div>
          </div>
          <div className='flex w-full gap-3 ml-4'>
            <div className='bg-[#2C2C2C] flex-auto w-auto p-4 font-bold text-sm leading-[1.15rem] rounded-lg border border-white border-opacity-10 uppercase flex items-center justify-center'>
              <FeelingChart />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full gap-6 mt-6'>
        <div className="student-enrolling bg-[#131313] w-7/12 rounded-2xl px-5 py-6 pt-5">
          <div className="flex w-full justify-between font-medium text-[1.375rem] leading-8">
            <div className="heading font-dmsans leading-7">Student Enrolling</div>
            <div className="dateselect flex rounded-md justify-center bg-[#131313] px-2 border-2 border-white border-opacity-10">
              <select className="bg-transparent font-semibold text-xs text-white opacity-60 leading-5 pr-0.5">
                <option>This Month</option>
              </select>
            </div>
          </div>
          <div className='h-80'>
            <StudentEnrollingchart />
          </div>
        </div>
        <div className="daily-attendence bg-[#131313] w-5/12 rounded-2xl px-5 py-6 pt-5">
          <div className="flex w-full justify-between font-semibold text-2xl leading-[1.875rem]">
            <div className="heading">Daily Attendence</div>
            <div className='flex justify-center items-center'>
              <Settings />
            </div>
          </div>
          <div className='h-80'>
            <DailyAttendenceChart />
          </div>
        </div>
      </div>
      <div className='flex w-full gap-6 mt-6'>
        <div className="airesults bg-[#131313] w-8/12 rounded-2xl px-5 py-6 pt-5">
          <div className='h-fit w-full'>
            <div className='flex gap-3'>
              <img src={Chatbot} alt='Chatbot mascot' className='w-[3.125rem] h-[3.125rem] aspect-square' />
              <div className="flex h-fit w-full justify-between">
                <div className="">
                  <div className='heading h-auto font-semibold text-lg leading-5'>AI calculated assessment results</div>
                  <div className="description flex h-auto text-green-300 items-center gap-1 font-medium text-sm">
                    <span className='w-[0.4rem] h-auto aspect-square bg-green-300 rounded-full'></span>
                    Designing quiz
                  </div>
                </div>
                <div className='bg-[#2C2C2C] flex justify-center items-center px-12 border border-white rounded-xl font-bold text-sm leading-5'>Publish Results</div>
              </div>
            </div>
            <div className='datatable mt-5 border border-white border-opacity-20'>
              <table className="table-fixed w-full">
                <thead className='bg-[#2C2C2C] text-left'>
                  <tr>
                    {
                      AssesmentResult.fields.map((item, index) => {
                        return (
                          <th key={index} className='p-4'>{item}</th>
                        )
                      })
                    }
                    < th key={AssesmentResult.fields.length} className='p-4'></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    AssesmentResult.data.map((item, index) => {
                      return (
                        <tr key={index} className='border-b border-white border-opacity-20'>
                          <td className='px-4'>{item.ID}</td>
                          <td className='px-4'>
                            <div className='flex items-center'>
                              <img className="my-5 mr-3 w-8 h-8 aspect-square rounded-full" src={avatar} alt=""></img>
                              <div className='text-white'>{item.Name}</div>
                            </div>
                          </td>
                          <td className='px-4'>{item.Marks}</td>
                          <td className='px-4'>{item.Percentage}</td>
                          <td className='px-4'>
                            <div className='bg-[#2C2C2C] w-fit m-auto flex justify-center items-center p-3 border border-white rounded-xl font-medium text-sm leading-5'>View Results</div>
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
        <div className="teachingex bg-[#3354FA] w-4/12 rounded-2xl px-5 py-6 pt-5">
          <div className='h-fit w-full'>
            <div className='heading h-auto font-bold text-base leading-5 tracking-wide'>Teaching Experience</div>
            <div className="score font-poppins font-bold text-5xl leading-10 mt-4">4.2</div>
            <div className="sliders mt-8">
              <div className="slider mb-6">
                <div className="heading font-roboto font-normal text-xs leading-5">Excellent</div>
                <div className='mt-2'>
                  <Rangeslider />
                </div>
              </div>
              <div className="slider mb-6">
                <div className="heading font-roboto font-normal text-xs leading-5">Good</div>
                <div className='mt-2'>
                  <Rangeslider />
                </div>
              </div>
              <div className="slider mb-6">
                <div className="heading font-roboto font-normal text-xs leading-5">Boring</div>
                <div className='mt-2'>
                  <Rangeslider />
                </div>
              </div>
              <div className="slider mb-6">
                <div className="heading font-roboto font-normal text-xs leading-5">Student Confused</div>
                <div className='mt-2'>
                  <Rangeslider />
                </div>
              </div>
              <div className="slider">
                <div className="heading font-roboto font-normal text-xs leading-5">Poor Teaching</div>
                <div className='mt-2'>
                  <Rangeslider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className='flex w-full gap-6 mt-6'>
        <div className="student-ovr-activity bg-[#131313] w-4/12 rounded-2xl px-5 py-6 pt-5">
          <div className="flex w-full justify-between">
            <div className="heading font-bold text-xl leading-[1.875rem]">Student overall activity</div>
            <div className="flex rounded-md justify-center bg-[#2C2C2C] px-3">
              <select className="bg-transparent font-medium text-xs text-blue-600 leading-5 pr-0.5">
                <option>Daily</option>
              </select>
            </div>
          </div>
          <div className='h-80'>
            <StudentActchart />
          </div>
        </div>
        <div className="bg-[#131313] w-8/12 rounded-2xl px-5 py-6 pt-5">
          <div className="flex h-full w-full p-2 gap-2">
            <div className='w-1/2 p-6'>
              <div className="heading font-dmsans font-bold text-[2.125rem] leading-[2.625rem]">Try making quiz<br />using AI!</div>
              <div className="description font-dmsans font-medium text-base leading-7 mt-3 opacity-60">AI find out the weakness of the student and challenges the user on its weak topics.</div>
              <div className='bg-[#2C2C2C] flex justify-center items-center w-full mt-12 py-4 border border-white rounded-xl font-medium text-sm leading-6'>Try AI Quiz</div>
            </div>
            <div className='flex w-1/2 p-4 justify-center items-center'>
              <img src={VenueDesign} alt="" className='w-full max-w-xs rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
