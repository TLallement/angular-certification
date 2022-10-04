import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../../../core/providers/local-storage.service';
import { StockService } from '../../../core/providers/stock.service';
import { Stock } from '../../../shared/models/stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {

  constructor(
    public stockService: StockService
  ) {}

  ngOnInit() {
    this.stockService.stocks$.subscribe();
  }
}
