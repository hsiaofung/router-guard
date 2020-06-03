import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { CreateStockComponent } from "../stock/create-stock/create-stock.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CreateStockDeactivateGuard
  implements CanDeactivate<CreateStockComponent> {
  // 為CreateStockComponent實作CanDeactivate介面
  constructor() {}
  canDeactivate(
    component: CreateStockComponent, // 傳給canDeactivate方法的CreateStockComponent實例
    currentRoute: ActivatedRouteSnapshot, // 傳給canDeactivate方法的ActivatedRoute snapshot
    currentState: RouterStateSnapshot, // 傳給canDeactivate方法的導向狀態 snapshot
    nextState?: RouterStateSnapshot // 從目前狀態瀏覽下一個狀態
  ): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm("Do you want to navigate away from this page?");
  }
}
