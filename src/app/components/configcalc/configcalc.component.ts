import { Component, OnInit, Input } from "@angular/core";
import { ConfigService } from "../../services/config.service";
import { LineItem } from "../models/linteitem";

@Component({
  selector: "app-configcalc",
  templateUrl: "./configcalc.component.html",
  styleUrls: ["./configcalc.component.css"]
})
export class ConfigCalcComponent implements OnInit {
  displayedColumns: string[] = ["vsflod", "aur", "gppct"];
  dataSource = this.core.list$;
  @Input() rate: number;
  @Input() calclevel: string = "country";
  constructor(private core: ConfigService) {}

  ngOnInit() {}

  getDDCost(item: LineItem): number {
    return item.cost / (1 / this.rate);
  }

  getAur(item: LineItem): number {
    let result: number;
    switch (item.materialLine) {
      case "HW": {
        result = (item.country / (1 / 1.17)) * (1 - 0.03);
        break;
      }
      case "SU": {
        result = (item.country / (1 / 1.17)) * (1 - 0);
        break;
      }
      case "XW": {
        result = (item.country / (1 / 1.17)) * (1 - 0);
        break;
      }
      default: {
        result = 0;
        break;
      }
    }
    return result;
  }

  getGP(item: LineItem): number {
    return (
      ((this.getAur(item) - this.getDDCost(item)) / this.getAur(item)) * 100
    );
  }
}
