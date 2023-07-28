import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ProductComponent } from './component/product/product.component';
import { ItemComponent } from './component/product/item/item.component';
import { SidebarComponent } from './component/product/sidebar/sidebar.component';
import { SortComponent } from './component/product/sort/sort.component';
import { CartComponent } from './component/cart/cart.component';
import { SubitemComponent } from './component/product/item/subitem/subitem.component';
import { UserComponent } from './component/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ProductComponent,
    ItemComponent,
    SidebarComponent,
    SortComponent,
    CartComponent,
    SubitemComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
