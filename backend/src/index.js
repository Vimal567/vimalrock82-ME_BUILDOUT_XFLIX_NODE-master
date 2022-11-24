const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;
console.log(config.mongoose.url)
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    console.log("Connected to MongoDB");
    server = app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
    return;
})
.catch((error) => {
  console.log("error connecting to MongoDb:", error.message);
})

const exitHandler = () => {
  if(server){
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  }else{
    process.exit(1);
  }
}

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
}

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
