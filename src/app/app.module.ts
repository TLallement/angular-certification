import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StockListComponent } from './features/stock-list/stock-list.component';
import { StockFormComponent } from './features/stock-list/stock-form/stock-form.component';
import { SingleStockComponent } from './features/stock-list/single-stock/single-stock.component';
import { StockSentimentComponent } from './features/stock-sentiment/stock-sentiment.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    StockListComponent,
    StockFormComponent,
    SingleStockComponent,
    StockSentimentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
