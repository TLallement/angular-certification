import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './features/stock-list/stock-list.component';
import { StockSentimentComponent } from './features/stock-sentiment/stock-sentiment.component';


const APP_ROUTES: Routes = [
  { path: '', component: StockListComponent },
  { path: 'sentiment/:symbol', component: StockSentimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
