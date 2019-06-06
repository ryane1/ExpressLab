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
    product: "Sneakers",
    price: 200,
    quantity: 2
  
  },
  {
    id: 1,
    product: "Gold Chain",
    price: 2000,
    quantity: 1
  },
  {
    id: 2,
    product: "Sunglasses",
    price: 150,
    quantity: 4
  }
  ];
  
    constructor(private cartService: CartService) { }
  
    ngOnInit() {
      this.getCart();
    }
    getCart(): void {
      this.cartService.getAllItems().subscribe(response => {
        this.cartItems = response;
      });
    }
  
    addItem(form: any): void {
      
      this.cartService.addItem({...form.value}).subscribe(response => {
        this.cartItems = response;
      });
      form.resetForm();
    }
  
    deleteItem(id: number): void {
      this.cartService.deleteItem(id).subscribe(response => {
        this.cartItems = response;
      });
    }
  
    updateItem(item): void {
      this.cartService.updateItem(item).subscribe(response => {
        this.cartItems = response;
      });
    }
  
  }
  


//   constructor(private cartService: CartService) {
//     this.cartService.getAllItems().subscribe(response => {
//       this.cartItems = response;
//       console.log(this.cartItems);
//     });
//   }

//   addNewItem(newItem) {
//     this.cartService.addItem(newItem).subscribe(response => {
//       this.cartItems = response;
//     });
//   }

//   deleteAnItem(id) {
//     this.cartService.deleteItem(id).subscribe(response => {
//       this.cartItems = response;
//     });
//   }

//   updateAnItem(newitem, id) {
//     this.cartService.updateItem(newitem, id).subscribe(response => {
//       this.cartItems = response;
//     });
//   }

// }

