import { Link } from "react-router-dom";
import { CoinDataType } from "../types/data/Coin";
import { useEffect, useState } from "react";
import { COIN_ICON_URL, GET_COINS_URL } from "../constant/urls";
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

export default function Coins() {
  const [coins, setCoins] = useState<CoinDataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(GET_COINS_URL);
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>로딩중...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
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
