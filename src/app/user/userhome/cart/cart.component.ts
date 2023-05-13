import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from './cart-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : Cart[] = new Array<Cart>();
  public grandTotal !: number;
  constructor(private cartService : CartService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
    this.getAllCartItems();

  }

  removeItem(id: any){
    this.cartService.removeCartItem(id).subscribe(res =>{
      this.snackBar.open(`Item removed from the cart`,'Ok',{duration: 3000});
      this.cartService.getCartTotal();
      this.getAllCartItems();
    });
  }

  getAllCartItems(){
    this.cartService.getProductAddedInCart().subscribe((carts: Cart[]) =>{
      this.products = carts;
    })
  }

  emptycart(){
    this.cartService.removeAllCart();
  }



}
