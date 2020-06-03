import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserStoreService } from "../services/user-store.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}

  // 如果檢查是已登入，則回true
  canActivate(): boolean {
    console.log("AuthGuard#canActivate called");
    if (this.userStore.isLoggedIn()) {
      return true;
    }

    // 如果檢查是未登入，則回false
    console.log("AuthGuard#canActivate not authorized to access page");
    // 儲存目前路徑並重新導回
    // 儲存在服務，加入查詢參數
    this.router.navigate(["login"]);
    return false;
  }
}
