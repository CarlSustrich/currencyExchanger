import { conversionLogic } from './../src/conversionLogic.js'

describe('conversionLogic', () => {

  test('it should take in a value in USD and convert it to the desired currency', () => {
    let fromCurrencyRate = 1;
    let toCurrencyRate = 3.6725;
    let value = 15;
    let finalValue = conversionLogic(value, fromCurrencyRate, toCurrencyRate);
    expect(finalValue).toEqual(55.09);
  });

  test('it should take a value not in USD and convert it to the desired currency, ALL to BOB', () => {
    let fromCurrencyRate = 108.19408970;
    let toCurrencyRate = 6.92230329;
    let value = 15;
    let finalValue = conversionLogic(value, fromCurrencyRate, toCurrencyRate);
    expect(finalValue).toEqual(.96);
  });
});
