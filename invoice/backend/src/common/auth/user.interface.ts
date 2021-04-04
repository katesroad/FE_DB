export interface IUser {
  id: string;
  username?: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export interface IUserRecord extends IUser {
  token?: string;
}
export interface IAutheUser extends IUser {
  token: string;
  access: string;
}
