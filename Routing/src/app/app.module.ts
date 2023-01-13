import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
//Routes Definition

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
