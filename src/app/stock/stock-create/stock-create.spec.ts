import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockCreateComponent } from './stock-create';

describe('StockCreateComponent', () => {
  let component: StockCreateComponent;
  let fixture: ComponentFixture<StockCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, StockCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
