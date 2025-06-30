export interface User {
  id: number;
  username: string;
  email?: string;
}

export interface InsertUser {
  username: string;
  email?: string;
}

export const users = {
  // placeholder for any user-related operations
};