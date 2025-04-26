import axios from "axios";

//https://v6.exchangerate-api.com/v6/f238e01ca007ee26995df60c/latest/USD

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/f238e01ca007ee26995df60c"
})

// we need to create a get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
}