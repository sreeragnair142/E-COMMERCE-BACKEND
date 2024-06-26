import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
mongoose
.set('strictQuery', true)
  .connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);
app.use("/api/product", productRoute);
app.use("/api/orders", orderRouter);
app.use("/api/config/paypal", (req, res) => {
  res.send(
    "Adrn84IYy6g-l9UPylPfWWP7xSreIdwVRnAFYJaXrh4qbQ5fhY_-HLq_AzqLgJHJTiN774lqQlI9mtaV" || "sb"
  );
});
app.get("/", (req, res) => {
  res.send("Server is started...");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
