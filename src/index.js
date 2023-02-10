
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Currency } from './Currency.js';
import { conversionLogic } from './conversionLogic.js'

function populateCurrencies(response, number) {
  let select = document.createElement('select');
  number === 1 ? select.id = `fromCurrency`: select.id = `toCurrency`;

  for (const [key, value] of Object.entries(response.conversion_rates)) {
    let opt = document.createElement('option');
    opt.innerText = key;
    opt.class = value;
    select.append(opt);
  }
  let spot = document.getElementById(`spot${number}`);
  spot.append(select);
}

function printError(response) {

}

function manageFormInput() {
  let value = document.getElementById('userAmt').value;
  let fromCurrency = document.getElementById('fromCurrency option:checked').innerText;
  let fromCurrencyRate = Number(document.getElementById('fromCurrency option:checked').class);
  let toCurrency =  document.getElementById('toCurrency option:checked').innerText;
  let toCurrencyRate = Number(document.getElementById('toCurrency option:checked').class);
  let finalValue = conversionLogic(value, fromCurrencyRate, toCurrencyRate);
  updateUI(value, fromCurrency, toCurrency, finalValue);
}

function updateUI(value, fromCurrency, toCurrency, finalValue) {
  let p = document.createElement('p');
  let phrase = `${value} ${fromCurrency} is equivalent to ${finalValue} ${toCurrency}`;
  p.append(phrase);
  document.getElementById('results').append(p);
}

window.onload = () => {
  let promise = Currency.getCurrencyList();
  promise.then(
    function(response) {
      populateCurrencies(response, 1);
      populateCurrencies(response, 2);
    },function(response) {
      printError(response);
    });

  document.querySelector().addEventListener('onchange', function() {
    manageFormInput();
  });
};
