import { GET_COINS_PRICE_URL, GET_COINS_URL } from "../constant/urls";

export const getAllCoins = async () => {
  return await fetch(GET_COINS_URL).then((res) => res.json());
};

export const getCoinInfo = async (id: string) => {
  return await fetch(`${GET_COINS_URL}/${id}`).then((res) => res.json());
};

export const getCoinPrice = async (id: string) => {
  return await fetch(`${GET_COINS_PRICE_URL}/${id}`).then((res) => res.json());
};
