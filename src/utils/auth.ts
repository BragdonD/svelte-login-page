import { persist, createLocalStorage, type PersistentStore } from '@macfja/svelte-persistent-store';
import { writable, type Writable } from 'svelte/store';

interface User {
  email: string
}

export const isAuthenticated: PersistentStore<boolean> = persist<boolean>(
  writable<boolean>(false),
  createLocalStorage(),
  "isAuthenticated"
);

export const user: PersistentStore<User> = persist<User>(
  writable<User>(undefined),
  createLocalStorage(),
  "user"
);

/**
 * Function to handle the login logic of the user
 * @param email 
 * @param password 
 */
export function login(email: string, password: string): null {
  // Call the login service on the backend and in function of
  // the result, set the user to the authenticated user

  isAuthenticated.set(true);
  user.set({ email });
  return null;
}

const emptyUser: User = {
  email: "",
}

export function logout() {
  // Perform logout logic
  // Once logged out, reset the isAuthenticated and user store values
  isAuthenticated.set(false);
  user.set(emptyUser);
}