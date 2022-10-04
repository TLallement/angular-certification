import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../../../shared/models/stock.model';

@Component({
  selector: 'app-single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.css'],
})
export class SingleStockComponent {
  @Input() stock: Stock;

  constructor() {}
}
