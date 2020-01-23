import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigLineItem } from "../businessobjects/configlineitem";
import { CoreService } from "./core.service";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  list: ConfigLineItem[] = new Array();

  list$: BehaviorSubject<ConfigLineItem[]> = new BehaviorSubject(this.list);

  constructor(core: CoreService) {
    let config: ConfigLineItem;
    config = new ConfigLineItem(core);
    config.configId = 1;
    config.name =
      "CS521dn Printer High Volt BENELUX ACE DZ BA BG HR EE FR EG GR DE IT LT LV MA PL RO RU RS SI TR";
    config.partNumber = "42C0070";
    config.quantity = 300;
    config.materialLine = "HW";
    config.cost = 516.29;
    config.flod = 321.54;
    config.pabp = 165;
    config.geo = 165;
    config.country = 160;
    config.competitor = 165;
    config.director = 165;
    this.list.push(config);

     config = new ConfigLineItem(core);
    config.configId = 1;
    config.name =
      "550-Sheet Duo Tray with 100-Sheet Feeder";
    config.partNumber = "42C7650";
    config.quantity = 300;
    config.materialLine = "HW";
    config.cost = 40.45;
    config.flod = 139.38;
    config.pabp = 80;
    config.geo = 80;
    config.country = 80;
    config.competitor = 80;
    config.director = 80;
    this.list.push(config);   

         config = new ConfigLineItem(core);
    config.configId = 1;
    config.name =
      "Black CRTG Ultra CORP";
    config.partNumber = "78C2UKE";
    config.quantity = 1800;
    config.materialLine = "SU";
    config.cost = 12.55;
    config.flod = 110.20;
    config.pabp = 42;
    config.geo = 50;
    config.country = 50;
    config.competitor = 50;
    config.director = 50;
    this.list.push(config);   
  }

  update(index, field, value) {
    this.list = this.list.map((e, i) => {
      if (index === i) {
        return {
          ...e,
          [field]: value
        };
      }
      return e;
    });
    this.list$.next(this.list);
  }

  getControl(index, fieldName) {}
}
