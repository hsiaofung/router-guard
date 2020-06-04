import { Component, OnInit } from "@angular/core";
import { StockService } from "../../services/stock.service";
import { ActivatedRoute } from "@angular/router";
import { Stock } from "../../model/stock";

@Component({
  selector: "app-stock-details",
  templateUrl: "./stock-details.component.html",
  styleUrls: ["./stock-details.component.css"],
})
export class StockDetailsComponent implements OnInit {
  public stock: Stock;
  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // const stockCode = this.route.snapshot.paramMap.get('code');
    // this.stockService.getStock(stockCode).subscribe(stock => this.stock = stock);
    this.route.data.subscribe((data: { stock: Stock }) => { // 訂閱ActivatedRoute上的data異動
      this.stock = data.stock;
    });
  }
}
