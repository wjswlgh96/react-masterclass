import { Outlet, useParams } from "react-router-dom";
import { getUser } from "../../function/getUser";

import ErrorComponent from "../../components/ErrorComponent";
import { Link } from "react-router-dom";

export default function UserDetail() {
  const { userId } = useParams();
  const user = getUser(userId);

  if (!user) return <ErrorComponent />;

  return (
    <div>
      <h1>{user.name}씨 안녕하세요!!</h1>
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          user,
        }}
      />
    </div>
  );
}
