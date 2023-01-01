class DataSource {
  static async searchDrinks(keyword) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`);
      const responseJson = await response.json();
      if (responseJson.drinks) {
        return responseJson.drinks;
      }
      throw new Error(`${keyword} not found, Change a keyword and try search again!`);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getCategories() {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const responseJson = await response.json();
      if (responseJson.drinks) {
        return responseJson.drinks;
      }
      throw new Error('Categories not found');
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default DataSource;
