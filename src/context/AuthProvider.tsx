import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { login } from '../services/auth.service';
interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IUser {
  token: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

interface ICurrentUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const AuthContext = createContext<ICurrentUserContext>({
  user: { token: '', isAuthenticated: false, isAdmin: false },
  setUser: () => {},
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({
    token: '',
    isAuthenticated: false,
    isAdmin: false,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
