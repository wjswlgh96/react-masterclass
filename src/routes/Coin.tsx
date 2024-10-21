import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { GET_COINS_PRICE_URL, GET_COINS_URL } from "../constant/urls";
import { CoinPriceDataType, CoinInfoDataType } from "../types/data/Coin";

import Price from "./Price";
import Chart from "./Chart";
import { Container, Header, Loader, Title } from "../components/CoinComponent";
import { LinkItemProps } from "../types/styles/CoinLinkItem";
import { useQuery } from "react-query";
import { getCoinInfo, getCoinPrice } from "../api/coin";

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

const LinkWrapper = styled.div`
  width: 40%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  background-color: #7f8fa6;
  border-radius: 30px;
`;

const LinkItem = styled(Link)<LinkItemProps>`
  padding: 1rem;
  border-radius: 30px;
  background-color: ${(props) => (props.$isActive ? "#192a56" : "transparent")};
`;

export default function Coin() {
  const { coinId } = useParams<Params>();
  const { state }: Location = useLocation();
  const chartMatch = useRouteMatch("/:coinId/chart");
  const priceMatch = useRouteMatch("/:coinId/price");

  const { isLoading: infoLoading, data: info } = useQuery<CoinInfoDataType>(
    ["info", coinId],
    () => getCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: price } = useQuery<CoinPriceDataType>(
    ["price", coinId],
    () => getCoinPrice(coinId)
  );

  const loading = infoLoading || priceLoading;

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

          <LinkWrapper>
            <LinkItem to={`/${coinId}/chart`} $isActive={chartMatch !== null}>
              Chart
            </LinkItem>
            <LinkItem to={`/${coinId}/price`} $isActive={priceMatch !== null}>
              Price
            </LinkItem>
          </LinkWrapper>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
