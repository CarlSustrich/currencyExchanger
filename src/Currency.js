export class Currency {

  static async getCurrencyList(){
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('loadend', function () {
        let json = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(json);
        } else {
          reject([this, json])
        }
      });

      xhr.open('GET', `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`, true);
      xhr.send();
    });
    
    return promise;

    // return fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    //   .then(function(response) {
    //     let json = JSON.parse(response);
    //     debugger;
    //     return json;
    //   }, function(response) {
    //     return response;
    //   });
  }
}
