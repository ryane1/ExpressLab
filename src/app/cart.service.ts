import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  constructor(private http: HttpClient ) { }

  getAllItems() {
    return this.http.get("/api/cartitems", { responseType: "json"});
  }

  addItem(newItem) {
    return this.http.post("/api/cartitems", newItem, { responseType: "json"});
  }

  updateItem(newItem) {
    return this.http.put(`/api/cartitems/${newItem.id}`, newItem, { responseType: "json"});
  }

  deleteItem(id) {
    return this.http.delete(`/api/cartitems/${id}`, { responseType: "json"});
  }
}


