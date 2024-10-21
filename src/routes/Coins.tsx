import { Link } from "react-router-dom";
import { CoinDataType } from "../types/data/Coin";
import { COIN_ICON_URL } from "../constant/urls";
import {
  Coin,
  CoinImg,
  CoinsList,
  CoinWrapper,
  Container,
  Header,
  Loader,
  Title,
} from "../components/CoinComponent";
import { useQuery } from "react-query";
import { getAllCoins } from "../api/coin";
import { Helmet } from "react-helmet-async";

export default function Coins() {
  const { isLoading, data } = useQuery<CoinDataType[]>(
    "getAllCoins",
    getAllCoins
  );

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>로딩중...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <CoinWrapper>
                  <CoinImg
                    src={`${COIN_ICON_URL}/${coin.id}.png`}
                    alt={coin.name}
                  />
                  {coin.name} &rarr;
                </CoinWrapper>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
