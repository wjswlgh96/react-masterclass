import { useQuery } from "react-query";
import { CoinChartProps } from "../types/props/CoinChart";
import { getCoinHistory } from "../api/coin";
import { CoinHistoryDataType } from "../types/data/Coin";

import ApexChart from "react-apexcharts";

export default function Chart({ coinId }: CoinChartProps) {
  const { isLoading, data } = useQuery<CoinHistoryDataType[]>(
    ["ohlcv", coinId],
    () => getCoinHistory(coinId),
    { refetchInterval: 5000 }
  );

  if (!data) return <h1>데이터가 없습니다.</h1>;

  return (
    <div>
      {isLoading ? (
        "차트를 로딩중입니다..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data.map((price) => price.close),
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              width: 500,
              height: 300,
              toolbar: { show: false },
              background: "transparent",
            },
            stroke: { curve: "smooth", width: 3 },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: "datetime",
              categories: data.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#2ecc71", "#2980b9"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => {
                  return value.toFixed(2);
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
