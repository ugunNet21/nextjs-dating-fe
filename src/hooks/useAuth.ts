// src/hooks/useAuth.ts
import {
  useEffect,
  useState,
} from 'react';

interface User {
  userId: number | null;
  email: string | null;
  token: string | null;
}

export const useAuth = () => {
  const [user, setUser] = useState<User>({
    userId: null,
    email: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    
    if (token && userId && email) {
      setUser({
        userId: parseInt(userId),
        email,
        token,
      });
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('token', userData.token || '');
    localStorage.setItem('userId', userData.userId?.toString() || '');
    localStorage.setItem('email', userData.email || '');
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    setUser({ userId: null, email: null, token: null });
  };

  return { user, login, logout };
};