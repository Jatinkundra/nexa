// Icons
import { ReactComponent as RightArrow } from "../../assets/icons/Arrow_right.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/Arrow_left.svg";
import { ReactComponent as CSSfDesigners } from "../../assets/icons/CSS_for_design_icon.svg";
import { ReactComponent as DesignFoundations } from "../../assets/icons/3D_design_found_icon.svg";
import { ReactComponent as DesignComposition } from "../../assets/icons/Design_compo_icon.svg";
import { ReactComponent as RightArrowLong } from "../../assets/icons/Right_arrow.svg";
import Figma from "../../assets/icons/FigmaIcon.png";
import Typography from "../../assets/icons/TypographyIcon.png";

// Components
import ScheduleChart from "../../components/charts/scheduleChart.jsx";

export default function Schedule() {
    return (
        <div className='flex gap-6 pt-6'>
            <div id="schedule-section" className="courses-section w-3/4">
                <div className='header'>
                    <div className="heading font-bold text-2xl leading-[1.875rem]">Your Schedule</div>
                    <div className='tools mt-6 flex justify-between'>
                        <div className="flex gap-3 items-center justify-center">
                            <span className="opacity-60 font-normal text-sm">02 - 08 March</span>
                            <div className="flex gap-1">
                                <div className="flex items-center justify-center rounded-md bg-[#2C2C2C] w-6 h-6">
                                    <LeftArrow className="w-3 h-3" />
                                </div>
                                <div className="flex items-center justify-center rounded-md bg-[#2C2C2C] w-6 h-6">
                                    <RightArrow className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                        <div className="dateselect flex rounded-md justify-center">
                            <select className="bg-transparent font-normal text-[0.94rem] text-white opacity-60 leading-[1.125rem] pr-0.5">
                                <option>(GMT +06:00) Public Time</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="daily-attendence bg-[#131313] rounded-2xl mt-5 px-5 py-6 pt-5">
                    <div className="h-[34.3rem]">
                        <ScheduleChart />
                    </div>
                </div>
            </div>
            <div className='w-1/4 mt-[6.25rem]'>
                <div className="heading font-semibold text-lg leading-5">Upcoming Events</div>
                <div className="flex bg-[#131313] rounded-md mt-4 p-3 gap-5">
                    <img src={Typography} alt="Typography" className="w-16 h-auto aspect-square" />
                    <div className="flex flex-col flex-auto justify-between">
                        <div className="font-semibold text-sm leading-4">Typography in UX/UI</div>
                        <div className="flex gap-8 text-white opacity-60">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 aspect-square bg-white opacity-60 rounded-full"></div>
                                <span>Design</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 aspect-square bg-white opacity-60 rounded-full"></div>
                                <span>10:00 am</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[0.325rem] h-[0.325rem] aspect-square bg-white opacity-60 rounded-full"></div>
                        <div className="w-[0.325rem] h-[0.325rem] aspect-square bg-white opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div className="flex bg-[#131313] rounded-md mt-4 p-3 gap-5">
                    <img src={Figma} alt="Typography" className="w-16 h-auto aspect-square" />
                    <div className="flex flex-col flex-auto justify-between">
                        <div className="font-semibold text-sm leading-4">Figma UI UX Design</div>
                        <div className="flex gap-8 text-white opacity-60">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 aspect-square bg-white opacity-60 rounded-full"></div>
                                <span>Design</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 aspect-square bg-white opacity-60 rounded-full"></div>
                                <span>10:00 am</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[0.325rem] h-[0.325rem] aspect-square bg-white opacity-60 rounded-full"></div>
                        <div className="w-[0.325rem] h-[0.325rem] aspect-square bg-white opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div className="bg-[#131313] rounded-xl mt-8 px-4 py-6 gap-5">
                    <div className="heading font-semibold text-lg leading-5">Your top performing courses</div>

                    <div className="flex flex-col mt-6 gap-4">
                        <div className="flex gap-3 h-full w-full">
                            <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                                <CSSfDesigners className="m-auto w-9 h-9" />
                            </div>
                            <div className="flex flex-col w-full justify-between h-full">
                                <div className="text-sm leading-[1.1rem]">
                                    CSS for Designers
                                </div>
                                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem] opacity-60">
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
                        <div className="flex gap-3 h-full w-full">
                            <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                                <DesignFoundations className="m-auto w-9 h-9" />
                            </div>
                            <div className="flex flex-col w-full justify-between h-full">
                                <div className="text-sm leading-[1.1rem]">
                                    3D Design Foundations
                                </div>
                                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem] opacity-60">
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
                        <div className="flex gap-3 h-full w-full">
                            <div className="icon flex h-full aspect-square p-[0.4rem] bg-amber-100 bg-opacity-90 rounded-lg justify-center items-center">
                                <DesignComposition className="m-auto w-9 h-9" />
                            </div>
                            <div className="flex flex-col w-full justify-between h-full">
                                <div className="text-sm leading-[1.1rem]">
                                    Design Composition
                                </div>
                                <div className="flex w-full justify-between font-medium text-xs leading-[1.2rem] opacity-60">
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

                    <div className="flex mt-10 font-semibold text-base leading-7 text-[#4318FF] items-center justify-between">
                        Check Performance <RightArrowLong className="w-6 h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}
