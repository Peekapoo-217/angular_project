import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCreateComponent } from '../stock-create/stock-create';
import { Stock } from '../../model/stock';
import { StockItem } from '../stock-item/stock-item';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, StockCreateComponent, StockItem],
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.scss']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];
  showCreateForm = false;
  showTableView = true; // true for table view, false for card view

  ngOnInit() {
    const sampleStock1 = new Stock('Công ty Cổ phần FPT', 'FPT', 75.5, 72.3, 'HOSE');
    const sampleStock2 = new Stock('Ngân hàng TMCP Ngoại thương Việt Nam', 'VCB', 76.8, 75.2, 'HOSE');
    const sampleStock3 = new Stock('Tập đoàn Hòa Phát', 'HPG', 25.1, 26.3, 'HOSE');

    this.stocks = [sampleStock1, sampleStock2, sampleStock3];
  }

  onStockAdded(stock: Stock) {
    this.stocks = [...this.stocks, stock];
    this.showCreateForm = false;
  }

  toggleFavorite(stock: Stock) {
    stock.favorite = !stock.favorite;
  }

  toggleView() {
    this.showTableView = !this.showTableView;
  }
}
