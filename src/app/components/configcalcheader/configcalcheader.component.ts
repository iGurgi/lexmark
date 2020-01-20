import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-configcalcheader",
  templateUrl: "./configcalcheader.component.html",
  styleUrls: ["./configcalcheader.component.css"]
})
export class ConfigcalcheaderComponent implements OnInit {
  @Input() calclevel: string;
  constructor() {}

  ngOnInit() {}

  getLevelLabel(): string {
    switch (this.calclevel) {
      case "master": {
        return "Master Price";
      }
      case "bsd": {
        return "BSD";
      }
      case "previously": {
        return "Previously";
      }
      case "country": {
        return "Country";
      }
      case "geo": {
        return "GEO";
      }
      case "competitor": {
        return "Competitor";
      }
      case "director": {
        return "Director";
      }
      default: {
        return "Country";
      }
    }
  }
}
