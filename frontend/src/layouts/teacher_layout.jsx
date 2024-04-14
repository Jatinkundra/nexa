// Components
import TdashHeader from "../components/header/tdashHeader.jsx"
import Sidebar from "../components/sidebar/sidebar";
import Chatbot from "../components/chatbox/chatbox.jsx";

// Data
import { Teachersflow } from "../Data/Data.js";

export default function TeacherLayout({ children }) {
  return (
    <>
      <div className="flex flex-row items-stretch">
        <Sidebar flow={Teachersflow} />
        <div className="w-full p-6">
          <TdashHeader />
          {children}
        </div>
        <Chatbot className="z-50" />
      </div>
    </>
  )
}