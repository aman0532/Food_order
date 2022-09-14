import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { CartService } from '../cart.service';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService,private router: Router) { 
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  goback()
  {
    this.router.navigateByUrl('/food-page');
  }
  close()
  {
    this.router.navigateByUrl('/addcard');
  }
 add()
  {
    this.router.navigateByUrl('/addcard');
  }

}
