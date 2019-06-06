// import { Component, OnInit } from '@angular/core';
// import { CartItems } from '../item';
// import { CartService } from '../cart.service';
// @Component({
//   selector: 'cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

// cartItems: any =  [{
//   id: 0,
//   product: "Sneakers",
//   price: 200,
//   quantity: 2

// },
// {
//   id: 1,
//   product: "Gold Chain",
//   price: 2000,
//   quantity: 1
// },
// {
//   id: 2,
//   product: "Sunglasses",
//   price: 150,
//   quantity: 4
// }
// ];

//   constructor(private cart: CartService) { }

//   ngOnInit() {
//     this.getCart();
//   }
//   getCart(): void {
//     this.cart.getAllItems().subscribe(response => {
//       this.cartItems = response;
//     });
//   }

//   addItem(form: any): void {
//     let newItem: CartItems = {
//       ...form.value
//     };
//     this.cart.addItem(newItem).subscribe(response => {
//       this.cartItems = response;
//     });
//     form.resetForm();
//   }

//   deleteItem(id: number): void {
//     this.cart.deleteItem(id).subscribe(response => {
//       this.cartItems = response;
//     });
//   }

//   updateItem(item: CartItems): void {
//     this.cart.updateItem(item).subscribe(response => {
//       this.cartItems = response;
//     });
//   }

// }

