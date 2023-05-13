import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { product } from 'src/app/models/types';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:product[]=[];
  sproducts:product[]=[];
  vproducts:product[]=[];
  fproducts:product[]=[];
  selected="All";
  types=[
    "All",
    "Fiction",
    "Non-fiction",
    "Fantasy",

  ]
  constructor(private ps:ProductService,
    private cartService: CartService,
    public userService: UserService ,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    // get all product List
    this.getProducts();

    this.ps.getProducts2("Non-fiction").subscribe(
      {
        next: (data:product[])=>this.fproducts = data,
        error: ()=> this.fproducts = []
       }
   )
   this.ps.getProducts2("Fiction").subscribe(
    {
      next: (data:product[])=>this.vproducts = data,
      error: ()=> this.vproducts = []
     }
   )
   this.ps.getProducts2("Fantasy").subscribe(
    {
      next: (data:product[])=>this.sproducts = data,
      error: ()=> this.sproducts = []
     }
   )

   this.cartService.getCartTotal();
  }


  updateBookList(event){
    this.getProducts();
  }

  getProducts(){
    this.ps.getProducts().subscribe( {
      next: (data:product[])=>this.products = data,
      error: ()=> this.products = []
     }
     )
  }

}
