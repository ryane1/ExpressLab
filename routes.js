"use strict";

const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then(result => {
        res.json(result.rows);
    })
}

router.get("/cartitems", (req, res) => {
    selectAll(res);
});

router.post("/cartitems", (req, res) => {
    pool.query("INSERT INTO shoppingcart (product, price, quantity) VALUES ($1::text, $2::real, $3::int)", [
        req.body.product,
        req.body.price,
        req.body.quantity
    ]).then(() => {
        selectAll(res);
    });
});

router.put("/cartitems/:id", (req, res) => {
    pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::real, quantity=$3::int WHERE id=$4::int", [
        req.body.product,
        req.body.price,
        req.body.quantity,
        Number(req.params.id)
    ]).then(() => {
        selectAll(res);
    });
});

router.delete("/cartitems/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [Number(req.params.id)]).then(() => {
        selectAll(res);
    });
});


module.exports = router;


// const cartitems = require("./cart-items"); //used b/c created array in separate file(cart-items)
// const router = express.Router();

// router.get("/cartitems", (req, res) => {
//     res.json(cartItems);
// });
// //displays array of items

// router.post("/cartitems", (req, res) => {
//     console.log(req.body);
//     cartitems.push(req.body);
//     res.json(cartItems);
// });
// //logs body to the console

// router.delete("/cartitems/:index", (req, res) => {
//     console.log(req.params.index);
//     cartitems.splice(cartitems.findIndex(req.params.index, 1, req.body));
//     res.json(cartItems);
// });
// //"/cartitems/:id", console.log(req.params.id)

// router.put("/cartitems/:index", (req, res) => {
//     console.log(req.body, req.params.index);
//     cartitems.splice(req.params.index, 1, req.body);
//     res.json(cartItems);
// });
// //"/cartitems/:id", console.log(req.body, req.params.id)

// module.exports = router;