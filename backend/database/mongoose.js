const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://root:root@imagesearch-c7pgu.mongodb.net/imagesearcher?retryWrites=true&w=majority";
//Local Mongo Connection Commented as we moved to cloud
//const MONGOURI = "mongodb://127.0.0.1:27017/imagesearcher";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;