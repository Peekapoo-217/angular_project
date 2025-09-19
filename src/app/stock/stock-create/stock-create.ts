import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './stock-create.html',
  styleUrl: './stock-create.scss'
})
export class StockCreateComponent {
  @Output() stockAdded = new EventEmitter<Stock>();
  @Output() cancel = new EventEmitter<void>();

  exchanges = ['OKX', 'BINANCE', 'BITCOIN', 'HOSE'];
  newStock: Stock;

  constructor() {
    this.newStock = new Stock('', '', 0, 0, 'HOSE');
    this.newStock.favorite = false;
  }

  onSubmit() {
    this.stockAdded.emit(new Stock(
      this.newStock.name,
      this.newStock.code,
      this.newStock.price,
      this.newStock.previousPrice,
      this.newStock.exchange
    ));
  }

  onCancel() {
    this.cancel.emit();
  }
}
