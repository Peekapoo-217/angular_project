import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.scss'
})
export class StockItem implements OnInit {
  public stock!: Stock;
  // public name!: string;
  // public code!: string;

  // public price!: number;
  // public previousPrice!: number;
  // public positiveChange!: boolean;
  public favorite!: boolean;

  constructor() { }

  ngOnInit() {
    // this.name = 'Test Stock';
    // this.code = 'TST';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;
    this.stock = new Stock('Test Stock', 'TST', 85, 80);
  }

  toggleFavorite() {
    console.log('We are toggling the state for this stock');
    this.favorite = !this.favorite;
  }





}
