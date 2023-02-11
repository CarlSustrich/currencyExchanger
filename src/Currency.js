export class Currency {
  static async getCurrencyList(){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const json = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${json['error-type']}`;
        throw new Error(errorMessage);
      }
      return json;
    } catch(error) {
      return error;
    }
  }
}
