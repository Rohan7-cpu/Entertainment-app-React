import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:Test123456@cluster0.xjjhrc3.mongodb.net/entertainment-app?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("Connected!");
  process.exit(0);
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});