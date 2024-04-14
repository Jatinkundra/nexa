import { useState } from "react";
import Chatbot from "../../assets/images/Chatbot.png"
import "./chatbox.css";

export default function Chatbox() {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? "show-chatbot" : null}>
            <button onClick={() => {
                    setOpen(!open);
                }} className="chatbot-toggler">
                {/* <span class="material-symbols-rounded"> */}
                <img src={Chatbot} alt="chatbot" className="w-full h-full aspect-square" />
                {/* </span> */}
                <span className="material-symbols-outlined font-semibold text-2xl">x</span>
            </button>
            <div className="chatbot border border-white border-opacity-30">
                <header className="relative flex w-full items-center shadow-lg p-3 px-4">
                    <img src={Chatbot} alt="chatbot" className="w-12 h-auto aspect-square" />
                    <span className="ml-4 font-bold">AI Chatbot</span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className="material-symbols-outlined">A</span>
                        <p>Hi there Hilex, How's your learning going on ?</p>
                    </li>
                </ul>
                <div className="chat-input flex border-t border-white border-opacity-50 p-2 px-4 gap-4 items-center">
                    <textarea placeholder="Enter a message..." spellCheck="false" required></textarea>
                    <span id="send-btn" className="material-symbols-rounded">send</span>
                </div>
            </div>
        </div>
    )
}
