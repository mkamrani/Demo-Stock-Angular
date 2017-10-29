import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsDetailsComponent } from './stock-items-details.component';

describe('StockItemsDetailsComponent', () => {
  let component: StockItemsDetailsComponent;
  let fixture: ComponentFixture<StockItemsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
