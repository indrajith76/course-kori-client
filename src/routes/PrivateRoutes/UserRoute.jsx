import { Navigate, useLocation } from "react-router-dom"; 
import Loader from "../../components/Loader";
import useAuth from "../../hooks/useAuth";

const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default UserRoute;
