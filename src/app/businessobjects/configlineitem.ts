import { LineItem } from "../models/lineitem";
import {CoreService} from "../services/core.service";

export class ConfigLineItem implements LineItem {
  configId: number;
  name: string;
  partNumber: string;
  quantity: number;
  materialLine: string;
  cost: number;
  flod: number;
  masterPrice?: number;
  pabp: number;
  geo: number;
  country: number;
  competitor: number;
  director: number;

  private core: CoreService;

  constructor(core: CoreService){
    this.core = core;
  }

  getDDCost(): number {
    return this.cost / (1 / this.core.$header.exchangeRate);
  }

  getAur(calclevel: string): number {
    let result: number;
    switch (this.materialLine) {
      case "HW": {
        result = (this[calclevel] / (this.core.$header.outlookRateHW)) * (1 - 0.03);
        break;
      }
      case "SU": {
        result = (this[calclevel] / (this.core.$header.outlookRateSU)) * (1 - 0);
        break;
      }
      case "XW": {
        result = (this[calclevel] / (this.core.$header.outlookRateHW)) * (1 - 0);
        break;
      }
      default: {
        result = 0;
        break;
      }
    }
    return isNaN(result) ? 0 : result;
  }

  getGP(calclevel: string): number {
    return (
      this.getAur(calclevel) > 0 ? ((this.getAur(calclevel) - this.getDDCost()) / this.getAur(calclevel)) * 100 : 0
    );
  }
}
