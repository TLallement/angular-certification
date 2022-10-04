import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockCallData, StockCallName } from '../../shared/models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  PATH: string = 'https://finnhub.io/api/v1/';
  TOKEN: string = '&token=bu4f8kn48v6uehqi3cqg';

  constructor(private readonly httpClient: HttpClient) {}

  getCompanyName(symbol: string): Observable<StockCallName> {
    return this.httpClient.get(this.PATH + 'search?q=' + symbol + this.TOKEN) as Observable<StockCallName>
  }

  getData(symbol: string): Observable<StockCallData> {
    return this.httpClient.get(this.PATH + 'quote?symbol=' + symbol + this.TOKEN) as Observable<StockCallData>
  }
}
