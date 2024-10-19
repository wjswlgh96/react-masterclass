import { users } from "../database/db";

export const getUser = (id: string | undefined) => {
  return users.find((user) => user.id === id);
};
