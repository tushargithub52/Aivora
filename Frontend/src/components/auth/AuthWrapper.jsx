import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    toast.error('Please login to access this page');
    // Save the attempted url to redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthWrapper;
