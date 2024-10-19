import { Link } from "react-router-dom";
import { users } from "../database/db";
import styled from "styled-components";

const UserList = styled.li`
  padding: 10px;
`;

export default function Home() {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserList key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </UserList>
        ))}
      </ul>
    </div>
  );
}
