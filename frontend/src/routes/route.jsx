import { Navigate, Outlet } from "react-router-dom";

// Protected Route
import ProtectedRoute from "../components/protected/protectedRoute.jsx";

// Layouts
import RootLayout from "../layouts/root_layout.jsx";
import AuthLayout from "../layouts/auth_layout.jsx";
import StudentLayout from "../layouts/student_layout.jsx";
import TeacherLayout from "../layouts/teacher_layout.jsx";

// Pages
// root -
import HomePage from "../pages/homepage";
// auth -
import Login from "../pages/auth/login.jsx";
import Createaccount from "../pages/auth/createaccount.jsx";
// student -
import StudentDashboard from "../pages/student_section/dashboard.jsx";
import Schedule from "../pages/teacher_section/schedule.jsx";
import StudentProfile from "../pages/teacher_section/student_profile/profile.jsx";
import AllTab from "../pages/teacher_section/student_profile/all_tab.jsx";
import QuizTab from "../pages/teacher_section/student_profile/quiz_tab.jsx";
import YourCourses from "../pages/teacher_section/courses_section/courses.jsx";
import ViewCourse from "../pages/teacher_section/courses_section/view_course.jsx";
// teacher -
import TeacherDashboard from "../pages/teacher_section/dashboard.jsx";
import TempTab from "../pages/teacher_section/student_profile/temp_tab.jsx";
import Champaign from "../pages/teacher_section/champaign.jsx";
import Eduinitiative from "../pages/teacher_section/eduinitiative.jsx";
import CampaignList from "../pages/teacher_section/campaigns_list.jsx";

const routes = [
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "auth",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createaccount",
        element: <Createaccount />,
      }
    ],
  },
  {
    path: "student",
    element: (
      <ProtectedRoute>
        <StudentLayout>
          <Outlet />
        </StudentLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/student/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      }
    ],
  },
  {
    path: "teacher",
    element: (
      <ProtectedRoute>
        <TeacherLayout>
          <Outlet />
        </TeacherLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/teacher/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "courses",
        element: <YourCourses />,
      },
      {
        path: "courses/:courseId",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ViewCourse />,
          },
          {
            path: "enrolled/students",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Navigate to={'..'} ></Navigate>,
              },
              {
                path: ":id",
                element: <StudentProfile><Outlet /></StudentProfile>,
                children: [
                  {
                    index: true,
                    element: <Navigate to="all" replace />,
                  },
                  {
                    path: "all",
                    element: <AllTab />,
                  },
                  {
                    path: "quiz",
                    element: <QuizTab />,
                  },
                  {
                    path: "exams",
                    element: <TempTab />
                  },
                  {
                    path: "courses_completed",
                    element: <TempTab />
                  },
                  {
                    path: "classes",
                    element: <TempTab />
                  },
                ]
              },
              {
                path: ":id/detailed",
                element: <StudentDashboard />
              }
            ],
          }
        ],
      },
      {
        path: "campaign",
        element: <Champaign />
      },
      {
        path: "eduinitiative",
        element: <Eduinitiative />
      },
      {
        path: "campaigns",
        element: <CampaignList />
      }

    ],
  },
];

export default routes;
