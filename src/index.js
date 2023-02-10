
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Currency } from './Currency.js';
import { conversionLogic } from './conversionLogic.js';

function populateCurrencies(response, number) {
  const select = document.createElement('select');

  if (number === 1) {
    select.id = 'fromCurrency';
    for (const [key, value] of Object.entries(response.conversion_rates)) {
      const opt = document.createElement('option');
      opt.innerText = key;
      opt.value = value;
      select.append(opt);
    }
  } else {
    select.id = 'toCurrency';
    const opt = document.createElement('option');
    opt.innerText = '--Select a Currency--';
    select.append(opt);
    for (const [key, value] of Object.entries(response.conversion_rates)) {
      const opt = document.createElement('option');
      opt.innerText = key;
      opt.value = value;
      select.append(opt);
    }
  }

  const spot = document.getElementById(`spot${number}`);
  spot.append(select);
}

function printError(response) {
  const results = document.getElementById('results');
  results.innerText = null;
  const p = document.createElement('p');
  const phrase = `Error code: ${response[0].status}. ${response[1]['error-type']} `;
  p.append(phrase);
  results.append(p);
}

function manageFormInput() {
  const value = Number(document.getElementById('userAmt').value);
  const fromCurrency = document.getElementById('fromCurrency').options[document.getElementById('fromCurrency').selectedIndex].text;
  const fromCurrencyRate = Number(document.getElementById('fromCurrency').value);
  const toCurrency =  document.getElementById('toCurrency').options[document.getElementById('toCurrency').selectedIndex].text;
  const toCurrencyRate = Number(document.getElementById('toCurrency').value);
  const finalValue = conversionLogic(value, fromCurrencyRate, toCurrencyRate);
  updateUI(value, fromCurrency, toCurrency, finalValue);
}

function updateUI(value, fromCurrency, toCurrency, finalValue) {
  const results = document.getElementById('results');
  results.innerText = null;
  if (finalValue) {
    const p = document.createElement('p');
    const phrase = `${value} ${fromCurrency} is equivalent to ${finalValue} ${toCurrency}`;
    p.append(phrase);
    results.append(p);
  }
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


  const observer = new MutationObserver(mutationList => {
    for (const mutation of mutationList) {
      mutation.target.children[0].addEventListener('change', manageFormInput);
    }
  });

  const targetNode = document.getElementById('currencyExchange');
  const config = { attributes: true, childList: true, subtree: true};
  observer.observe(targetNode, config); 
};
