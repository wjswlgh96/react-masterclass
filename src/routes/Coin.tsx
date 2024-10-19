import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Loader, Title } from "../components/CoinComponent";
import { useEffect, useState } from "react";
import { GET_COINS_PRICE_URL, GET_COINS_URL } from "../constant/urls";
import { CoinPriceDataType, CoinInfoDataType } from "../types/data/Coin";
import styled from "styled-components";

interface Params {
  coinId: string;
}

interface Location {
  state: { name: string };
}

const Overview = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #192a56;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Description = styled.p`
  margin: 1.5rem 0;
  font-size: 18px;
  line-height: 20px;
`;

export default function Coin() {
  const { coinId } = useParams<Params>();
  const { state }: Location = useLocation();

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<CoinInfoDataType | undefined>(undefined);
  const [price, setPrice] = useState<CoinPriceDataType | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`${GET_COINS_URL}/${coinId}`)).json();
      const priceData = await (
        await fetch(`${GET_COINS_PRICE_URL}/${coinId}`)
      ).json();

      setInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "로딩중..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>로딩중...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>OPEN Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>TOTAL SUPPLY:</span>
              <span>{price?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>MAX_SUPPLY:</span>
              <span>{price?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
}
