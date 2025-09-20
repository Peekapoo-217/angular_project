import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.scss'
})

export class StockItem {
  @Input() stock!: Stock;
  @Input() favorite!: boolean;
}