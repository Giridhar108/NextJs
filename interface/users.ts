export interface Users {
  id: number;
  name: string;
  users: User[];
}

export interface User {
  id: number;
  name: string;
  error?: string;
}
