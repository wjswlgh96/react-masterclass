import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Loader = styled.div`
  text-align: center;
`;

export const CoinImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 1rem;
`;
