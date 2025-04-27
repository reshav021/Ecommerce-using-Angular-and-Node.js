import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
import { LayoutModule } from './components/layout/layout.module';
import { OrdersModule } from './components/orders/orders.module';
import { ProductsModule } from './components/products/products.module';
import { ProfileModule } from './components/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    LayoutModule,
    OrdersModule,
    ProductsModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
