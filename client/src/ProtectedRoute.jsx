import { Navigate } from 'react-router-dom';
import Auth from './utils/auth'; 

const ProtectedRoute = ({ children }) => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />; 
  }
  return children; 
};

export default ProtectedRoute;