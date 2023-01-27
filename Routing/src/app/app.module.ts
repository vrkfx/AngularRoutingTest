import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './card/card.component';

//Routes Definition
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
const appRoute: Routes = [
  // {path: '', component:HomeComponent},
  {path: 'Home', component:HomeComponent},
  //path match tells url how ot match the router and full is matched to the entire URL
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Products', component:ProductsComponent},
  {path: 'Test', component:TestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    TestComponent,
    CardComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
