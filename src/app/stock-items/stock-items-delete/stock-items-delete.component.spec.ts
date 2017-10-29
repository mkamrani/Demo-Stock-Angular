import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsDeleteComponent } from './stock-items-delete.component';

describe('StockItemsDeleteComponent', () => {
  let component: StockItemsDeleteComponent;
  let fixture: ComponentFixture<StockItemsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
