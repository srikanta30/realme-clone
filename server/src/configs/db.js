const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.a5nat.mongodb.net/RealmeDatabase?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.log(err);
  }
};