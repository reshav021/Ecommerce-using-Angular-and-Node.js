import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddOffersComponent } from './add-offers/add-offers.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageUserAccessComponent } from './manage-user-access/manage-user-access.component';


@NgModule({
  declarations: [
    AddOffersComponent,
    AddProductComponent,
    ManageUserAccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
