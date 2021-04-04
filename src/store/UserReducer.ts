export const USER_TYPE = "USER_TYPE";

export interface User {
  id: string;
  username: string;
  email: string;
  city: string;
}

export interface UserAction {
  type: string;
  payload: User | null;
}

export const UserReducer = (
  state: User | null = null,
  action: UserAction
): User | null => {
  switch (action.type) {
    case "USER_TYPE":
      console.log("User reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};
