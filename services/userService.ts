import { User } from '../types';

const STORAGE_KEY = 'valhalla_user_v1';

// Simulating a DbContext/Repository pattern
export const getUser = (): User | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Failed to load user context", e);
    return null;
  }
};

export const createUser = (name: string): User => {
  const user: User = {
    id: crypto.randomUUID(),
    name: name.trim(),
    createdAt: Date.now(),
  };
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error("Failed to persist user context", e);
  }
  
  return user;
};

export const clearUser = () => {
    localStorage.removeItem(STORAGE_KEY);
}