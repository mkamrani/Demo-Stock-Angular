import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockItemsListComponent } from './stock-items-list/stock-items-list.component';
import { StockItemsCreateComponent } from './stock-items-create/stock-items-create.component';
import { StockItemsUpdateComponent } from './stock-items-update/stock-items-update.component';
import { StockItemsDeleteComponent } from './stock-items-delete/stock-items-delete.component';
import { StockItemsDetailsComponent } from './stock-items-details/stock-items-details.component';
import { JsonApiService } from '../shared/json-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StockItemsListComponent,
    StockItemsCreateComponent,
    StockItemsUpdateComponent,
    StockItemsDeleteComponent,
    StockItemsDetailsComponent],
    providers: [
      JsonApiService
    ],
    exports: [
      StockItemsListComponent
    ]
})
export class StockItemsModule { }
