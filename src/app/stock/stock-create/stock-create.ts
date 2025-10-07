import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock';

@Component({
  selector: 'app-stock-create',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './stock-create.html',
  styleUrl: './stock-create.scss'
})
export class StockCreateComponent {
  @Output() stockAdded = new EventEmitter<Stock>();
  @Output() cancel = new EventEmitter<void>();

  exchanges = ['OKX', 'BINANCE', 'BITCOIN', 'HOSE'];
  stockForm: FormGroup;

  loading: boolean = false;
  message: string = '';


  constructor(
    private fb: FormBuilder,
    private stockService: StockService) {
    this.stockForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      code: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      previousPrice: [0, [Validators.required, Validators.min(0)]],
      exchange: ['HOSE', [Validators.required]]
    });
  }

  createStock() {
    if (this.stockForm.valid) {
      const formValue = this.stockForm.value;
      const stock = new Stock(
        formValue.name,
        formValue.code,
        formValue.price,
        formValue.previousPrice,
        formValue.exchange
      );
      stock.favorite = false;

      this.stockService.createStock(stock).subscribe({
        next: () => {
          this.stockAdded.emit(stock);
          this.message = `Successfully ${stock.code}!`;
          this.loading = false;
        },
        error: (err) => {
          alert(err.message);
        }
      });
    }
  }

  onSubmit() {
    if (this.stockForm.valid) {
      const formValue = this.stockForm.value;
      const stock = new Stock(
        formValue.name,
        formValue.code,
        formValue.price,
        formValue.previousPrice,
        formValue.exchange
      );
      stock.favorite = false;
      this.stockAdded.emit(stock);
      this.stockForm.reset({ exchange: 'HOSE' });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
