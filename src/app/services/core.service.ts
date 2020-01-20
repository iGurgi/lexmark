import { Injectable } from "@angular/core";
import { Header } from "../models/header";

@Injectable()
export class CoreService {
  $header: Header = {
    name: "Justiz NRW 2018",
    quoteNumber: "",
    outlookRateHW: 0.854700855,
    outlookRateSU: 0.854700855,
    ddRate: 1.17
  };

  constructor() {}
}
