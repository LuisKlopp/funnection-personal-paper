export interface UserType {
  id: number;
  nickname: string;
  gender: string;
  generateString: string;
}

export interface UserMessageType {
  id: number;
  message: string;
  user: UserType;
}
