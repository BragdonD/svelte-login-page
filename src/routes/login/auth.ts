import { writable, type Writable } from 'svelte/store';

interface User {
    email: string
}

export const isAuthenticated : Writable<boolean> = writable(false);
export const user : Writable<User> = writable<User>(undefined);
export const emptyUser : User = { email: '' };
/**
 * Function to handle the login logic of the user
 * @param email 
 * @param password 
 */
export function login(email : string, password : string) : null {
  // Call the login service on the backend and in function of
  // the result, set the user to the authenticated user


  isAuthenticated.set(true);
  user.set({ email });
  return null;
}

export function logout() {
  // Perform logout logic
  // Once logged out, reset the isAuthenticated and user store values
  isAuthenticated.set(false);
  user.set(emptyUser);
}