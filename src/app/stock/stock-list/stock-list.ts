import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCreateComponent } from '../stock-create/stock-create';
import { Stock } from '../../model/stock';
import { StockItem } from '../stock-item/stock-item';
import { StockService } from '../../services/stock';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, StockCreateComponent, StockItem, FormsModule],
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.scss'],
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  filteredStocks: Stock[] = [];
  searchTerm: string = '';

  showCreateForm = false;
  showTableView = true;

  error: string | null = null;


  showViewDialog = false;
  showEditDialog = false;
  selectedStock: Stock | null = null;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.loadStocks();
  }

  private loadStocks() {
    this.stockService.getStocks().subscribe({
      next: (stocks) => {
        this.stocks = stocks
        this.filteredStocks = [...stocks];
        this.error = null;
      },
      error: (err) => {
        console.error('Error loading stocks:', err);
        this.error = 'Không thể tải danh sách cổ phiếu.';
      }
    });
  }

  onStockAdded(newStock: Stock) {
    this.stockService.createStock(newStock).subscribe({
      next: () => {
        this.loadStocks();
        this.showCreateForm = false;
      },
      error: (err) => {
        console.error('Error adding stock:', err);
        this.error = err.message;
      }
    });
  }

  onView(stock: Stock) {
    this.selectedStock = stock;
    this.showViewDialog = true;
  }

  onEdit(stock: Stock) {
    this.selectedStock = stock;
    this.showEditDialog = true;
  }



  onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    if (term) {
      this.filteredStocks = this.stocks.filter(
        stock => stock.name.toLowerCase().includes(term) || stock.code.toLowerCase().includes(term)
      );
    } else {
      this.filteredStocks = [...this.stocks];
    }
  }


  saveEdit() {
    if (this.selectedStock) {
      this.stockService.updateStock(this.selectedStock).subscribe({
        next: () => {
          this.loadStocks();
          this.showEditDialog = false;
          this.selectedStock = null;
        },
        error: (err) => {
          console.error('Error updating stock:', err);
          this.error = 'Cập nhật thất bại. Vui lòng thử lại.';
        }
      });
    }
  }

  closeViewDialog() {
    this.showViewDialog = false;
    this.selectedStock = null;
  }
  onDelete(stock: Stock) {
    if (confirm(`Bạn có chắc muốn xóa stock ${stock.name}?`)) {
      this.stockService.deleteStock(stock.code).subscribe({
        next: () => {
          this.loadStocks();
        },
        error: (err) => {
          console.error('Error deleting stock:', err);
          this.error = 'Xóa stock thất bại. Vui lòng thử lại.';
        }
      });
    }
  }

  toggleView() {
    this.showTableView = !this.showTableView;
  }
}
