import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ThemeSelector from "./ThemeSelector";

const HeaderWrapper = styled.header`
  display: flex;
`;

const Linkli = styled.li`
  padding: 10px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <ul>
        <Linkli>
          <Link to="/">Home</Link>
        </Linkli>
        <Linkli>
          <Link to="/about">About</Link>
        </Linkli>
      </ul>
      <ThemeSelector />
    </HeaderWrapper>
  );
}
