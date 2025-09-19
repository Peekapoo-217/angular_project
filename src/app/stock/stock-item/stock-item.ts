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
  public favorite!: boolean;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock', 'TST', 85, 80);
  }

  toggleFavorite() {
    console.log('We are toggling the state for this stock');
    this.favorite = !this.favorite;
  }





}
