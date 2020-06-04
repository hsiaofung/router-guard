import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateStockComponent } from "./stock/create-stock/create-stock.component";
import { StockListComponent } from "./stock/stock-list/stock-list.component";
import { LoginComponent } from "./user/login/login.component";
import { RegisterComponent } from "./user/register/register.component";
import { StockDetailsComponent } from "./stock/stock-details/stock-details.component";
import { AuthGuard } from "./guards/auth.guard";
import { CreateStockDeactivateGuard } from "./guards/create-stock-deactivate.guard";
import { StockLoadResolverService } from "./services/stock-load-resolver.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "stocks/list",
    component: StockListComponent,
    canActivate: [AuthGuard], // 將AuthGuard 加入StockListComponent
  },
  {
    path: "stocks/create",
    component: CreateStockComponent,
    canActivate: [AuthGuard], // 將AuthGuard 加入CreateStockComponent
    canDeactivate: [CreateStockDeactivateGuard], // 將CreateStockDeactivateGuard 加入建構股票路徑
  },
  {
    path: "stock/:code",
    component: StockDetailsComponent,
    canActivate: [AuthGuard], // 將AuthGuard 加入StockDetailsComponent
    resolve: { stock: StockLoadResolverService }, // 將resolver加入股票細節路徑 : 使用StockLoadResolverService取得stock，
    // 確保預先取得特定代號的股票。
  },
  { path: "**", redirectTo: "/register" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
