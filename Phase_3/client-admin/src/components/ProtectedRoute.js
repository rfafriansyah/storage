import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const ProtectedRouteLogin = ({ children }) => {
  if (localStorage.getItem("access_token")) {
    return <Navigate to="/" />;
  }
  return children;
};
// export default ProtectedRoute;
