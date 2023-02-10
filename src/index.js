
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Currency } from './Currency.js';
import { conversionLogic } from './conversionLogic.js';

function populateCurrencies(response, number) {
  let select = document.createElement('select');
  number === 1 ? select.id = `fromCurrency`: select.id = `toCurrency`;

  for (const [key, value] of Object.entries(response.conversion_rates)) {
    let opt = document.createElement('option');
    opt.innerText = key;
    opt.value = value;
    select.append(opt);
  }
  let spot = document.getElementById(`spot${number}`);
  spot.append(select);
}

function printError(response) {

}

function manageFormInput() {
  let value = Number(document.getElementById('userAmt').value);
  let fromCurrency = document.getElementById('fromCurrency').options[document.getElementById('fromCurrency').selectedIndex].text;
  let fromCurrencyRate = Number(document.getElementById('fromCurrency').value);
  let toCurrency =  document.getElementById('toCurrency').options[document.getElementById('toCurrency').selectedIndex].text;
  let toCurrencyRate = Number(document.getElementById('toCurrency').value);
  let finalValue = conversionLogic(value, fromCurrencyRate, toCurrencyRate);
  updateUI(value, fromCurrency, toCurrency, finalValue);
}

function updateUI(value, fromCurrency, toCurrency, finalValue) {
  let results = document.getElementById('results');
  results.innerText = null;
  let p = document.createElement('p');
  let phrase = `${value} ${fromCurrency} is equivalent to ${finalValue} ${toCurrency}`;
  p.append(phrase);
  results.append(p);
}

window.onload = () => {
  const promise = Currency.getCurrencyList();
  promise.then(
    function(response) {
      populateCurrencies(response, 1);
      populateCurrencies(response, 2);
    },function(response) {
      printError(response);
    });

    const targetNode = document.getElementById('currencyExchange');
    const config = { attributes: true, childList: true, subtree: true};
    const callBack = (mutationList) => {
      for (const mutation of mutationList) {
        console.log(mutationList)
        if (mutation.target.children[0].id === 'fromCurrency' || mutation.target.children[0].id === 'toCurrency') {
          mutation.target.children[0].addEventListener('change', manageFormInput);
        }
      }
    }
    const observer = new MutationObserver(callBack);
    observer.observe(targetNode, config); 

  // document.getElementById('fromCurrency').addEventListener('onchange', function(event) {
  //   console.log(event);
  //   manageFormInput();
  // });

  // document.getElementById('toCurrency').addEventListener('onchange', function(event) {
  //   console.log(event);
  //   manageFormInput();
  // });
  
};
