import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/providers/local-storage.service';
import { Stock } from '../../shared/models/stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  symbols$: Observable<Stock[]>;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    
  }
}
