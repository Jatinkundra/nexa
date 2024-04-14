import Sidebar from "../components/sidebar/sidebar";
import TdashHeader from "../components/header/tdashHeader.jsx"
import Chatbot from "../components/chatbox/chatbox.jsx";

// Data
import { Studentflow } from "../Data/Data.js";

export default function StudentLayout({ children }) {
  return (
    <>
      <div className="flex flex-row items-stretch">
        <Sidebar flow={Studentflow} />
        <div className="w-full p-6">
          <TdashHeader />
          {children}
        </div>
        <Chatbot className="z-50" />
      </div>
    </>
  );
}
