"use strict";

const express = require("express");
const cartitems = require("./cart-items"); //used b/c created array in separate file(cart-items)
const router = express.Router();

router.get("/cartitems", (req, res) => {
    res.json(cartItems);
});
//displays array of items

router.post("/cartitems", (req, res) => {
    console.log(req.body);
    cartitems.push(req.body);
    res.json(cartItems);
});
//logs body to the console

router.delete("/cartitems/:index", (req, res) => {
    console.log(req.params.index);
    cartitems.splice(cartitems.findIndex(req.params.index, 1, req.body));
    res.json(cartItems);
});
//"/cartitems/:id", console.log(req.params.id)

router.put("/cartitems/:index", (req, res) => {
    console.log(req.body, req.params.index);
    cartitems.splice(req.params.index, 1, req.body);
    res.json(cartItems);
});
//"/cartitems/:id", console.log(req.body, req.params.id)

module.exports = router;