import "./sidebar.css";
import Logo from "../../assets/images/logo.png";
import Chatbot from "../../assets/images/Chatbot.png";
import Logout from "../../assets/images/Logout.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/authContext";

function Sidebar({ flow }) {
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { signOutUser } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {show && <div class="modal relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={() => { setShow(!show) }}>
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-[2C2C2C] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
              <div className="relative w-full bg-[#212121] border-4 border-[#212121] border-t-[2rem]">
                <div className="absolute right-0 top-0 flex justify-end items-center mt-1 px-4">
                  <button className="font-semibold text-lg" onClick={() => { setShow(!show) }}>x</button>
                </div>
                <iframe title="chatbot" className="w-full h-[80vh] rounded-lg" src="http://localhost:8000/" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>}

      <div className="maincontainer">
        <div>
          <img className="side_logo" alt="" src={Logo} />
        </div>
        <div className="menu_section">
          {flow.map((item, index) => {
            return (
              <NavLink
                to={item?.path}
                className={select === index ? "active_menu_con" : "menu_con"}
                key={index}
                onClick={() => setSelect(index)}
              >
                <img
                  className={select === index ? "active_menu_logo" : "menu_logo"}
                  alt=""
                  src={item?.icon}
                />

                <span
                  className={select === index ? "active_item_txt" : "item_txt"}
                >
                  {item?.heading}
                </span>
              </NavLink>
            );
          })}
        </div>
        <div className="chatbot_con" style={{ marginTop: "6rem" }}>
          <img className="chatbot_icon" alt="" src={Chatbot} />
          <h2 className="talk">Talk to AI chatbot</h2>
          <span className="ask">
            Ask for any query and it will be answered in a second
          </span>
          <button className="button" onClick={() => { setShow(!show) }}>Chat now</button>
        </div>
        <div
          className={select === 7 ? "active_menu_con" : "menu_con"}
          onClick={() => setSelect(7)}
        >
          <img className="menu_logo" alt="" src={Logout} />
          <span onClick={handleSignOut} className={select === 7 ? "active_item_txt" : "item_txt"}>
            Logout
          </span>
        </div>
      </div>
    </>
  );
}

Sidebar.defaultProps = {
  flow: [],
};

export default Sidebar;