import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CartComponent } from './components/orders/cart/cart.component';
import { CheckoutPageComponent } from './components/orders/checkout-page/checkout-page.component';
import { OrderHistoryComponent } from './components/orders/order-history/order-history.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { WishlistComponent } from './components/products/wishlist/wishlist.component';
import { ProfileInformationComponent } from './components/profile/profile-information/profile-information.component';
import { ManageUserAccessComponent } from './components/admin/manage-user-access/manage-user-access.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AddOffersComponent } from './components/admin/add-offers/add-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    CartComponent,
    CheckoutPageComponent,
    OrderHistoryComponent,
    ProductDetailComponent,
    ProductListComponent,
    WishlistComponent,
    ProfileInformationComponent,
    ManageUserAccessComponent,
    AddProductComponent,
    AddOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
