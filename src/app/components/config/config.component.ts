import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
  isShow = true;
  constructor() {}

  ngOnInit() {}
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
