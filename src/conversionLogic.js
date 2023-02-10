export function conversionLogic(value, fromCurrencyRate, toCurrencyRate) {
  return Number(((value*fromCurrencyRate)*toCurrencyRate).toFixed(2));
}
