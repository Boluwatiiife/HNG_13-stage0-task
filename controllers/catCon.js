const fetch_cat_fact = require("../utils/catFacts");
require("dotenv").config();

exports.getProfile = async (req, res) => {
  try {
    const cat_fact = await fetch_cat_fact();

    const timestamp = new Date().toISOString();

    const response = {
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp,
      fact: cat_fact,
    };

    res.status(200).json(response);
    // console.log(cat_fact);
  } catch (error) {
    console.error("error fetching cat fact: ", error.message);

    res.status(500).json({
      status: "error",
      message: "failed to fetch cat fact",
    });
  }
};
