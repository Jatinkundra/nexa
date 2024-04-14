// Icons
import { ReactComponent as Notification } from "../../assets/icons/Notification.svg";
import { ReactComponent as UilCalender } from "../../assets/icons/uil_calender.svg";
// Images
import avatar from "../../assets/avatars/avatar.png";
import "./adminHeader.css";

function adminHeader() {
  return (
    <div className="w-full mb-6">
      <div className="linear_back"></div>
      <div className="flex w-full justify-between">
        <div className="flex">
          <div className="flex justify-center items-center">
            <img
              className="m-[auto] h-11 w-11 rounded-full"
              src={avatar}
              alt=""
            ></img>
          </div>
          <div className="ml-2 w-auto">
            <div className="text-white font-semibold leading-6 text-xl">
              James Thompson
            </div>
            <div className="text-white font-medium text-base leading-5 text-opacity-60">
              Founder@ Training Horzon
            </div>
          </div>
        </div>
        <div className="flex text-white">
          <div className="dateselect flex rounded-md justify-center p-3 py-2 bg-[#131313]">
            <UilCalender className="w-5 h-5 m-auto fill-gray-600" />
            <select className="bg-transparent font-medium text-base text-gray-200 leading-5 pl-1 pr-2">
              <option>16 June, 2023</option>
            </select>
          </div>
          <div className="notification ml-2 flex rounded-md justify-center p-3 py-2 bg-[#131313]">
            <Notification className="w-5 h-5 m-auto mr-1 fill-gray-600" />
            <div className="notification-dot flex m-auto items-center justify-center h-5 w-5 text-xs bg-teal-600 rounded-full">
              4
            </div>
          </div>
        </div>
      </div>
      <div className="linear_back1"></div>
    </div>
  );
}

export default adminHeader;
