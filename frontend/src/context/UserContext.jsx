/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  async function getCurrentUser() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const user = await res.json();
      setCurrentUser(user.data.doc);
    } catch (err) {
      setCurrentUser(null);
      throw new Error(`Error fetching current user ${err.message}`);
    }
  }

  useEffect(() => {
    if (isLoggedIn) getCurrentUser();
  }, [isLoggedIn]);

  async function logoutUser() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      setIsLoggedIn(false);
      setCurrentUser(null);
    } catch (err) {
      throw new Error(`Error Logging out current user ${err.message}`);
    }
  }

  const value = {
    getCurrentUser,
    currentUser,
    logoutUser,
    setIsLoggedIn,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("The Context is access outside the Provider");
  }
  return context;
}

export { UserProvider, useUser };
