import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsCreateComponent } from './stock-items-create.component';

describe('StockItemsCreateComponent', () => {
  let component: StockItemsCreateComponent;
  let fixture: ComponentFixture<StockItemsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
