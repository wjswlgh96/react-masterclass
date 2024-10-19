import { useOutletContext } from "react-router-dom";
import { UserType } from "../../types/data/user";

interface FollowersOutletContextType {
  user: UserType;
}

export default function Followers() {
  const context: FollowersOutletContextType = useOutletContext();

  return <h1>Followers {context.user.name}</h1>;
}
