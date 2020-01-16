import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-target",
  templateUrl: "./target.component.html",
  styleUrls: ["./target.component.css"]
})
export class TargetComponent implements OnInit {
  isShow = true;
  constructor() {}

  ngOnInit() {}
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
