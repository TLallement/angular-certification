export interface Stock {
  symbol: string;
  description?: string;
  displaySymbol?: string;
  type?: string;
  c?: number;
  d?: number;
  dp?: number;
  h?: number;
  l?: number;
  o?: number;
  pc?: number;
  t?: number;
}

export interface Stock {
  symbol: string;
  description?: string;
  displaySymbol?: string;
  type?: string;
  c?: number;
  d?: number;
  dp?: number;
  h?: number;
  l?: number;
  o?: number;
  pc?: number;
  t?: number;
}

export interface StocksForm {
  symbol: string;
}

export interface StockName {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface StockCallName {
  count: number;
  result: StockName[];
}

export interface StockCallData {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}
