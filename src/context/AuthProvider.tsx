import { createContext, useState } from 'react';

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IUser {
  isAdmin: boolean;
  token: string | undefined | null;
  isAuthenticated: boolean;
}

interface IAuthContext {
  user: IUser;
  login: (token: string) => void;
  logout: () => void;
}

const initialUserState: IUser = {
  isAdmin: false,
  token: null,
  isAuthenticated: false,
};

const initialState: IAuthContext = {
  user: initialUserState,
  login: (token: string) => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>(initialUserState);

  const login = (token: string) => {
    setUser({ ...user, isAuthenticated: true, token });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false, token: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
