import { Injectable } from "@angular/core";
import { StockService } from "./stock.service";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Stock } from "../model/stock";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StockLoadResolverService implements Resolve<Stock> {
  constructor(private stockService: StockService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Stock | Observable<Stock> | Promise<Stock> {
    const stockCode = route.paramMap.get("code"); // 從URL載入stockCode
    return this.stockService.getStock(stockCode); // 以stockCode發出getStock伺服器呼叫以回傳Observable<Stock>
  }
}
