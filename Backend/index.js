const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require('cors');


dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection successful")).catch((err)=>{console.log(err);});

app.use(cors());
app.use(express.json());
app.use("/Backend/auth", authRoute);
app.use("/Backend/users", userRoute);
app.use("/Backend/products", productRoute);
app.use("/Backend/carts", cartRoute);
app.use("/Backend/orders", orderRoute);
app.use("/Backend/checkout", stripeRoute);


app.listen(process.env.PORT || 3000,()=>{
    console.log('Backend server is running!');
})