import { createContext, useContext, useEffect, useState } from "react"
import { getLocalToken, removeLocalToken, setLocalToken } from "../utils/token";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [token, setTokenState] = useState(getLocalToken());

  const logout = () => {
    setTokenState(null);
  };

  const login = (token) => {
    setTokenState(token);
  };

  useEffect(() => {
    const token = getLocalToken();
    if (token) {
      setTokenState(token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setLocalToken(token, 'token');
    } else {
      removeLocalToken('token');
    }
  }, [token]);

  return <>
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  </>
}


export const useAuth = () => {
  return useContext(AuthContext);
}


export default AuthProvider