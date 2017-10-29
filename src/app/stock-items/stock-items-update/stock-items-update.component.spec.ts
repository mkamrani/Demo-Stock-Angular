import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsUpdateComponent } from './stock-items-update.component';

describe('StockItemsUpdateComponent', () => {
  let component: StockItemsUpdateComponent;
  let fixture: ComponentFixture<StockItemsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
