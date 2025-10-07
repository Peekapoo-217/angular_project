import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock', 'TSC', 50, 30, 'NASDAQ')
    ]
  }

  getStocks(): Observable<Stock[]> {
    return of(this.stocks);
  }

  createStock(stock: Stock): Observable<boolean> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return throwError(() => new Error('Stock code đã tồn tại'));
    }

    this.stocks.push(stock);
    return of(true);
  }

  updateStock(updatedStock: Stock): Observable<boolean> {
    const index = this.stocks.findIndex(stock => stock.code === updatedStock.code);
    if (index === -1)
      return of(false);

    this.stocks[index] = updatedStock;
    return of(true);
  }

  deleteStock(stockCode: string): Observable<boolean> {
    const index = this.stocks.findIndex(stock => stock.code === stockCode);
    if (index === -1) {
      return throwError(() => new Error('Không tìm thấy stock để xóa'));
    }

    this.stocks.splice(index, 1);
    return of(true);
  }


  toggleFavorite(stock: Stock): Observable<Stock | undefined> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock.favorite;
    }
    return of(foundStock);
  }
}
