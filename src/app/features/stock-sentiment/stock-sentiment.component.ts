import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { Stock, StockName } from '../../shared/models/stock.model';
import { StockDataService } from '../../core/providers/stock-data.service';

const NB_MONTHS: number = 3;

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})
export class StockSentimentComponent implements OnInit {
  symbol: string = '';
  currentDate: Date = new Date();
  startDate: Date = new Date();

  stock$: BehaviorSubject<Stock> = new BehaviorSubject(null);
  hasLoaded: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private stockDataService: StockDataService
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.startDate.setMonth(this.startDate.getMonth() - NB_MONTHS);
    this.getCurrentStockDetails(
      formatDate(this.startDate, 'yyyy-MM-dd', 'en'),
      formatDate(this.currentDate, 'yyyy-MM-dd', 'en')
    );
  }

  getCurrentStockDetails(fromDate: string, toDate: string) {
    this.hasLoaded = false;
    forkJoin({
      resultOne: this.stockDataService.getCompanyName(this.symbol),
      resultTwo: this.stockDataService.getInsiderSentiment(
        this.symbol,
        fromDate,
        toDate
      ),
    }).subscribe((value) => {
      let tmpStockName: StockName = value.resultOne.result.find(
        (item) => item.symbol === this.symbol
      );
      let stock: Stock = {
        symbol: this.symbol,
        description: tmpStockName?.description,
        displaySymbol: tmpStockName?.displaySymbol,
        type: tmpStockName?.type,
        data: value.resultTwo.data,
      };
      this.stock$.next(stock);
      this.hasLoaded = true;
    });
  }

  monthsSequence(): Array<number> {
    return Array(NB_MONTHS);
  }
}
