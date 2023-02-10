# Currency Converter

#### By **Carl Sustrich**

## Technologies Used

* CSS
* HTML
* Javascript
* Webpack
* NPM

## Description

A Javascript interface that utilizes the [Exchange Rate API](https://www.exchangerate-api.com/) to provide up to date exchange rates for many different currencies. 


## Setup/Installation Requirements
* NPM is used to manage dependencies. Ensure you have NPM installed. If not, visit their [website](https://docs.npmjs.com/about-npm) for instructions on how to do so. 
* Visit the Exchange Rate API [website](https://app.exchangerate-api.com/sign-up) to acquire your own free API Key.

Run each of the following lines of code in your terminal:

Navigate to the directory you wish to populate then:
```sh
git clone https://github.com/CarlSustrich/currencyExchanger
```

Navigate into the created directory:
```sh
cd currencyExchanger
```

Installing all dependencies:
```sh
npm install
```

Open the project (the following assumes you run a properly configured VSCode):
```sh
code .
```

Create a .env file in the root directory of the project, and add the following text to the file, adding your own API Key:
```sh
API_KEY = yourAPIKeyHere
```


Start a live server using:

```sh
npm run start
```

## Known Bugs

None currently

## License

MIT

Copyright (c) 2023 Carl Sustrich
