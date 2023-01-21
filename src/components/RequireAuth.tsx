import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface IRequireAuthProps {}

const RequireAuth: React.FC<IRequireAuthProps> = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user?.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
