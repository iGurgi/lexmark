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

}
