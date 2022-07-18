import { useQuery } from "react-query";
import styled from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const coinListApi = () => {
  return fetch(`https://api.coinpaprika.com/v1/coins`).then((response) =>
    response.json()
  );
};

const ReactQueryApp = () => {
  const { isLoading, data: coins } = useQuery<ICoin[]>(
    "react-query",
    coinListApi
  );

  if (isLoading) return <Loader>Loading...</Loader>;
  return (
    <>
      <div>
        {
          <CoinsList>
            {coins?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <a>{coin.name} &rarr;</a>
              </Coin>
            ))}
          </CoinsList>
        }
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
};

export default ReactQueryApp;
