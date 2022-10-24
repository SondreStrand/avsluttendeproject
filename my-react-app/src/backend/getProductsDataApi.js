import productsData from './getProductsData'
const express = require("express");
const router = express.Router();



const app = express();
app.use(express.json());
app.use("/", router);
app.listen(6000, () => console.log("GetProductsApi Running"));

