import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductComponent } from './userhome/product/product.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material/material.module';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { CartComponent } from './userhome/cart/cart.component';
import { AddBookComponent } from './userhome/add-book/add-book.component';
import { ProductGridComponent } from './userhome/product-grid/product-grid.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path:"add-book",
      component: AddBookComponent
    }

  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductComponent,
    DetailsComponent,
    TypefilterPipe,
    CartComponent,
    AddBookComponent,
    ProductGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule

  ]
})
export class UserModule { }
