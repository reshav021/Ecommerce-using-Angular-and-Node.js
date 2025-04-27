import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutPageComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
