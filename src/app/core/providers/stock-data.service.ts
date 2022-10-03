import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock, StocksForm } from '../../shared/models/stock.model';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  PATH: string = 'https://finnhub.io/api/v1/';
  TOKEN: string = '?token=bu4f8kn48v6uehqi3cqg';

  constructor(private readonly httpClient: HttpClient) {}

  getCompanyName(symbol: string) {
    this.httpClient.get(this.PATH + 'symbol-search/' + symbol + this.TOKEN);
  }
}
