/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TUser {
  post: any;
  pre: any;
  name: string;
  email: string;
  profileImg: string;
  password: string;
  role: 'admin' | 'user';
  bio: string;
  follower: number;
  following: number;
  premium: boolean;
  payment: number;
  premiumLastDate: string;
  isBlocked: boolean;
  isDeleted: boolean;
  _id: string;
}

export interface TLoginUser {
  email: string;
  password: string;
}

export interface TChangePassword {
  email: string;
  prePassword: string;
  newPassword: string;
}
