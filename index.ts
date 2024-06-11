#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: { rate: 1, name: "United States Dollar" },
  EUR: { rate: 0.91, name: "Euro" },
  GBP: { rate: 0.76, name: "British Pound Sterling" },
  INR: { rate: 74.57, name: "Indian Rupee" },
  PKR: { rate: 200, name: "Pakistani Rupee" },
  AUD: { rate: 1.36, name: "Australian Dollar" },
  CAD: { rate: 1.27, name: "Canadian Dollar" },
  CHF: { rate: 0.93, name: "Swiss Franc" },
  CNY: { rate: 6.47, name: "Chinese Yuan" },
  JPY: { rate: 110.17, name: "Japanese Yen" },
  RUB: { rate: 74.14, name: "Russian Ruble" },
  ZAR: { rate: 14.56, name: "South African Rand" },
  NZD: { rate: 1.45, name: "New Zealand Dollar" },
  BRL: { rate: 5.24, name: "Brazilian Real" },
  MXN: { rate: 20.12, name: "Mexican Peso" },
  SGD: { rate: 1.34, name: "Singapore Dollar" },
  HKD: { rate: 7.77, name: "Hong Kong Dollar" },
  NOK: { rate: 8.77, name: "Norwegian Krone" },
  SEK: { rate: 8.54, name: "Swedish Krona" },
  KRW: { rate: 1128.50, name: "South Korean Won" },
  MYR: { rate: 4.15, name: "Malaysian Ringgit" },
  THB: { rate: 32.29, name: "Thai Baht" },
  IDR: { rate: 14325, name: "Indonesian Rupiah" },
  PHP: { rate: 50.22, name: "Philippine Peso" },
  VND: { rate: 22980, name: "Vietnamese Dong" },
  AED: { rate: 3.67, name: "United Arab Emirates Dirham" },
  SAR: { rate: 3.75, name: "Saudi Riyal" },
  TRY: { rate: 8.59, name: "Turkish Lira" },
  ILS: { rate: 3.25, name: "Israeli New Shekel" },
  PLN: { rate: 3.91, name: "Polish Zloty" },
  DKK: { rate: 6.15, name: "Danish Krone" },
  HUF: { rate: 308.45, name: "Hungarian Forint" },
  CZK: { rate: 22.05, name: "Czech Koruna" },
  RON: { rate: 4.13, name: "Romanian Leu" },
  BGN: { rate: 1.79, name: "Bulgarian Lev" },
  HRK: { rate: 6.30, name: "Croatian Kuna" },
  ISK: { rate: 122.88, name: "Icelandic Króna" },
  ARS: { rate: 95.69, name: "Argentine Peso" },
  CLP: { rate: 756.23, name: "Chilean Peso" },
  COP: { rate: 3737.50, name: "Colombian Peso" },
  PEN: { rate: 3.94, name: "Peruvian Sol" },
  UYU: { rate: 43.76, name: "Uruguayan Peso" },
  EGP: { rate: 15.66, name: "Egyptian Pound" },
  KES: { rate: 108.15, name: "Kenyan Shilling" },
  NGN: { rate: 411.50, name: "Nigerian Naira" },
  GHS: { rate: 6.05, name: "Ghanaian Cedi" },
  TZS: { rate: 2310.50, name: "Tanzanian Shilling" },
  UGX: { rate: 3552.50, name: "Ugandan Shilling" },
  MAD: { rate: 8.99, name: "Moroccan Dirham" },
  DZD: { rate: 135.22, name: "Algerian Dinar" },
  LYD: { rate: 4.51, name: "Libyan Dinar" },
  TND: { rate: 2.80, name: "Tunisian Dinar" },
  BHD: { rate: 0.38, name: "Bahraini Dinar" },
  KWD: { rate: 0.30, name: "Kuwaiti Dinar" },
  OMR: { rate: 0.39, name: "Omani Rial" },
  QAR: { rate: 3.64, name: "Qatari Riyal" },
  JOD: { rate: 0.71, name: "Jordanian Dinar" },
  LBP: { rate: 1507.50, name: "Lebanese Pound" },
};

let userAns = await inquirer.prompt([
  {
    name: "amount",
    message: "Enter the amount",
    type: "number",
  },
  {
    name: "from",
    message: "Enter from amount",
    type: "list",
    choices: Object.keys(currency),
  },
  {
    name: "to",
    message: "Enter to amount",
    type: "list",
    choices: Object.keys(currency),
  },
]);

let fromAmount = currency[userAns.from].rate;
let toAmount = currency[userAns.to].rate;
let amountAns = userAns.amount;
let baseAmount = amountAns / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(`Your currency conversion of ${amountAns} ${currency[userAns.from].name} to ${currency[userAns.to].name} is ${convertedAmount}.`);
