import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import {
  Stock,
  StockCallData,
  StockCallName,
  StockName,
} from '../../shared/models/stock.model';
import { LocalStorageService } from './local-storage.service';
import { StockDataService } from './stock-data.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stocks$: BehaviorSubject<Stock[]> = new BehaviorSubject([]);

  constructor(
    private localStorageService: LocalStorageService,
    private stockDataService: StockDataService
  ) {
    this.localStorageService.getItem('symbol').forEach((symbol) => {
      this.getCurrentStocks(symbol);
    });
  }

  addSymbol(symbol: string) {
    this.localStorageService.addItem('symbol', symbol);
  }

  getCurrentStocks(symbol: string) {
    forkJoin({
      resultOne: this.stockDataService.getCompanyName(symbol),
      resultTwo: this.stockDataService.getData(symbol),
    }).subscribe((val) => {
      console.log(val);
      let tmpStockName: StockName = val.resultOne.result.find((item) => item.symbol === symbol);
      console.log(tmpStockName);
      let stock: Stock = {
        symbol: symbol,
        description: tmpStockName.description,
        displaySymbol: tmpStockName.displaySymbol,
        type: tmpStockName.type,
        c: val.resultTwo.c,
        d: val.resultTwo.d,
        dp: val.resultTwo.dp,
        h: val.resultTwo.h,
        l: val.resultTwo.l,
        o: val.resultTwo.o,
        pc: val.resultTwo.pc,
        t: val.resultTwo.t,
      };
      this.stocks$.next({ ...this.stocks$.value, ...stock });
    });
  }

  /*getCompanyName(symbol: string) {
    this.stockDataService
      .getCompanyName(symbol)
      .subscribe((result: StockCallName) => {
        console.log(result);
      });
  }

  getData(symbol: string) {
    this.stockDataService.getData(symbol).subscribe((result: StockCallData) => {
      console.log(result);
    });
  }*/
}
