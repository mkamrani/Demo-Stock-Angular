import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../../shared/json-api.service';

const GET_URL = '../../assets/stock-items.json';

@Component({
  selector: 'app-stock-items-list',
  templateUrl: './stock-items-list.component.html',
  styleUrls: ['./stock-items-list.component.css']
})
export class StockItemsListComponent implements OnInit {

  items: any[];

  fetch(): any {
    this._jsonApiService.getAll(GET_URL)
      .subscribe(value => {
        this.items = value;
      }, error => console.log('this is the least we can do with this error: ' + error));
  }

  constructor(private _jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.fetch();
  }

}
