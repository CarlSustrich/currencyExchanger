
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Currency } from './Currency.js';

function populateCurrencies(response) {
  let select = document.createElement('select');
  select.id = 'toCurrency';

  for (const [key, value] of Object.entries(response.conversion_rates)) {
    let opt = document.createElement('option');
    opt.innerText = key;
    opt.id = value;
    select.append(opt);
  }

  let spot = document.getElementById('spot');
  spot.append(select);
  // let currencyNameList = new Map(
  //   [
  //     [USD, ],
  //     [AED, ],
  //     [AFN, ],
  //   ]
  // )

}

function printError(response) {

}


window.onload = () => {
  let promise = Currency.getCurrencyList();
  promise.then(
    function(response) {
      populateCurrencies(response);
    },function(response) {
      printError(response);
    });
}
