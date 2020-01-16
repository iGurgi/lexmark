import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LineItem } from "../models/lineitem";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  list: LineItem[] = [
    {
      configId: 1,
      name: "CS521dn Printer High Volt BENELUX ACE DZ BA BG HR EE FR EG GR DE IT LT LV MA PL RO RU RS SI TR",
      partNumber: "42C0070",
      quantity: 300,
      materialLine: "HW",
      cost: 516.29,
      flod: 321.54,
      pabp: 165,
      geo: 165,
      country: 160,
      competitor: 165,
      director: 165
    },
    {
      configId: 1,
      name: "550-Sheet Duo Tray with 100-Sheet Feeder",
      partNumber: "42C7650",
      quantity: 300,
      materialLine: "HW",
      cost: 40.45,
      flod: 139.38,
      pabp: 80,
      geo: 80,
      country: 80,
      competitor: 80,
      director: 80
    },
    {
      configId: 1,
      name: "Black CRTG Ultra CORP",
      partNumber: "78C2UKE",
      quantity: 1800,
      materialLine: "SU",
      cost: 12.55,
      flod: 110.20,
      pabp: 42,
      geo: 50,
      country: 50,
      competitor: 50,
      director: 50
    }
  ];

  list$: BehaviorSubject<LineItem[]> = new BehaviorSubject(this.list);

  constructor() {}

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
