export function conversionLogic(value, fromCurrencyRate, toCurrencyRate) {
  let finalValue;
  fromCurrencyRate === 1 ? finalValue = Number((value*toCurrencyRate).toFixed(2)) : finalValue = Number(((value/fromCurrencyRate)*toCurrencyRate).toFixed(2))
  return finalValue;
}
