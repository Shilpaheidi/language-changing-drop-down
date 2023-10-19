import { Component } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
cart:Product[] = [{id:1,name:'product1',price:20,quantity:1}];

increaseQuantity(product:Product){
product.quantity++;
}


decreaseQuantity(product: Product) {
  if (product.quantity > 1) {
    product.quantity--;
  }
}

removeProduct(product: Product) {
  const index = this.cart.indexOf(product);
  if (index !== -1) {
    this.cart.splice(index, 1);
  }
}
}