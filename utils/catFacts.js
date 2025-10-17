const axios = require("axios");

const fetch_cat_fact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    // console.log(response);
    return response.data.fact;
  } catch (error) {
    console.error("Api Error: ", error.message);
    return "could not fetch a cat fact now, try again";
  }
};

module.exports = fetch_cat_fact;
