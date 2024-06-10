import { createContext, useContext, useEffect, useState } from "react";
import { verifyTokenRequest, loginRequest } from "../api/auth.js";

import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      if (res && res.data && !res.data.error) {
        setUserData(res.data);
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUserData(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUserData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setIsAuthenticated(false);
        setUserData(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        isAuthenticated,
        loading,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
