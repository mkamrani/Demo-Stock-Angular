import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StockItemsModule } from './stock-items/stock-items.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StockItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
