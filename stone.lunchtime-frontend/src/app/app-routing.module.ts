import { CartComponent } from './public/pages/cart/cart.component';
import { ListLunchComponent } from './public/pages/list-lunch/list-lunch.component';
import { HomeComponent } from './public/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 

    
  },
  {
    path: 'list-lunch',
    component: ListLunchComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
