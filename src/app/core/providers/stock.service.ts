import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private localStorageService: LocalStorageService) {}

  addSymbol(symbol: string) {
    this.localStorageService.addItem('symbol', symbol);
  }
}
