import { Component, OnInit } from '@angular/core';
import { Book } from './book-model';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  model: Book = new Book();


  constructor(private productService: ProductService,
    private snackbar: MatSnackBar,
    private route: Router) { }

  ngOnInit() {
  }


  onSubmit(data){
    this.productService.addProduct({model: data.value}).subscribe(res => {
      this.snackbar.open("Book Added Successfully","Ok",{duration: 2000});
      this.route.navigate(['/user/home'])
    })
  }
}
