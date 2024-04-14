import { useUserAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth();

    if (!user) {
        return <Navigate to="/auth/login" />
    } else {
        return children;
    }

}

export default ProtectedRoute