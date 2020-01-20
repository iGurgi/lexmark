import { Component, OnInit, Input } from "@angular/core";
import { ConfigService } from "../../services/config.service";
import { CoreService } from "../../services/core.service";
import { LineItem } from "../models/linteitem";

@Component({
  selector: "app-configcalc",
  templateUrl: "./configcalc.component.html",
  styleUrls: ["./configcalc.component.css"]
})
export class ConfigCalcComponent implements OnInit {
  displayedColumns: string[] = ["vsflod", "aur", "gppct"];
  dataSource = this.config.list$;
  @Input() rate: number;
  @Input() calclevel: string = "country";
  constructor(private config: ConfigService, private core: CoreService) {}

  ngOnInit() {}

  getDDCost(item: LineItem): number {
    return item.cost / (1 / this.rate);
  }

  getAur(item: LineItem): number {
    let result: number;
    switch (item.materialLine) {
      case "HW": {
        result = (item[this.calclevel] / (this.core.$header.outlookRateHW)) * (1 - 0.03);
        break;
      }
      case "SU": {
        result = (item[this.calclevel] / (this.core.$header.outlookRateSU)) * (1 - 0);
        break;
      }
      case "XW": {
        result = (item[this.calclevel] / (this.core.$header.outlookRateHW)) * (1 - 0);
        break;
      }
      default: {
        result = 0;
        break;
      }
    }
    return isNaN(result) ? 0 : result;
  }

  getGP(item: LineItem): number {
    return (
      this.getAur(item) > 0 ? ((this.getAur(item) - this.getDDCost(item)) / this.getAur(item)) * 100 : 0
    );
  }
}
