"use client";
import { createContext, useState, useEffect, ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => boolean;
  isLoading: boolean;
  logout: () => void;
  register: (
    name: string,
    username: string,
    email: string,
    password: string
  ) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === "fake@email.io" && password === "password") {
      const fakeToken = "trallallerotrallalla";
      setToken(fakeToken);
      localStorage.setItem("token", fakeToken);
      setIsLoading(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        router.replace("/welcome");
      }, 1500);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setToken(null);
    localStorage.removeItem("token");
    router.replace("/login");

    toast("Logout successful", {
      duration: 1500,
      style: {
        backgroundColor: "#22c55e",
        color: "#ffffff",
        border: "1px solid #4ade80",
      },
    });
  };

  const register = (
    name: string,
    surname: string,
    email: string,
    password: string
  ): boolean => {
    const success = true;

    if (success) {
      toast("Registration successful", {
        duration: 1500,
        style: {
          backgroundColor: "#22c55e",
          color: "#ffffff",
          border: "1px solid #4ade80",
        },
      });
      const fakeToken = "trallallerotrallalla";
      setToken(fakeToken);
      localStorage.setItem("token", fakeToken);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsLoading(true);
      timeoutRef.current = setTimeout(() => {
        router.replace("/welcome");
        setIsLoading(false);
      }, 1500);
    } else {
      toast("Registration failed", {
        duration: 1500,
        style: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
          border: "1px solid #f87171",
        },
      });
    }

    return success;
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
