import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';
  
  cartItems: any =  [{
    id: 0,
    products: "sneakers",
    price: 200,
    quantity: 2

},
{
    id: 1,
    products: "gold chain",
    price: 2000,
    quantity: 1
},
{
    id: 2,
    products: "sunglasses",
    price: 150,
    quantity: 4
}
];

  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
      console.log(this.cartItems);
    });
  }

  addNewItem(newItem) {
    this.cartService.addItem(newItem).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteAnItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  updateAnItem(newitem, id) {
    this.cartService.updateItem(newitem, id).subscribe(response => {
      this.cartItems = response;
    });
  }

}

